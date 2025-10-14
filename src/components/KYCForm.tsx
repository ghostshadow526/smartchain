'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertCircle, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { updateUserDoc } from '@/lib/firebase';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import ImageKit from 'imagekit-javascript';

interface UploadStatus {
  status: 'idle' | 'uploading' | 'success' | 'error';
  url?: string;
  file?: File;
}

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "public_FQMUi9HrOlfgLwAUQAJPcj+MmR0=";
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/lwr4hqcxw";
const authenticationEndpoint = '/api/auth/imagekit';

export default function KYCForm({ onVerificationSubmit }: { onVerificationSubmit: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selfie, setSelfie] = useState<UploadStatus>({ status: 'idle' });
  const [idFront, setIdFront] = useState<UploadStatus>({ status: 'idle' });
  const [idBack, setIdBack] = useState<UploadStatus>({ status: 'idle' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const imageKit = new ImageKit({
    publicKey: publicKey,
    urlEndpoint: urlEndpoint,
  });

  const uploadFile = async (file: File, setter: React.Dispatch<React.SetStateAction<UploadStatus>>) => {
    if (!user) return;
    
    setter({ status: 'uploading', file });

    try {
      const authRes = await fetch(authenticationEndpoint);
      const authData = await authRes.json();

      const response = await imageKit.upload({
        file: file,
        fileName: `kyc-${user.uid}-${file.name}`,
        token: authData.token,
        expire: authData.expire,
        signature: authData.signature,
      });

      setter({ status: 'success', url: response.url, file });
    } catch (error) {
      console.error("Upload Error:", error);
      setter({ status: 'error', file });
      toast({
        title: 'Upload Failed',
        description: 'There was an error uploading your file. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async () => {
    if (selfie.status !== 'success' || idFront.status !== 'success' || idBack.status !== 'success') {
      toast({
        title: 'Incomplete Submission',
        description: 'Please upload all three required documents.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      if (user) {
        await updateUserDoc(user.uid, {
          kycStatus: 'pending',
          kycDocuments: {
            selfie: selfie.url,
            idFront: idFront.url,
            idBack: idBack.url,
            submittedAt: new Date().toISOString(),
          }
        });

        toast({
          title: 'KYC Submitted',
          description: 'Your documents have been submitted for verification.',
        });
        onVerificationSubmit();
      }
    } catch (error) {
      console.error("Error submitting KYC:", error);
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your information.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const Uploader = ({ title, onFileSelect, status }: { title: string, onFileSelect: (file: File) => void, status: UploadStatus }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
      multiple: false
    });

    const getUploaderState = () => {
      switch (status.status) {
        case 'idle':
          return (
            <div className="text-center">
              <UploadCloud className="h-8 w-8 text-muted-foreground mx-auto" />
              <p className="text-xs text-muted-foreground">{isDragActive ? "Drop the file here..." : "Click or drag to upload"}</p>
            </div>
          );
        case 'uploading':
          return <Loader2 className="h-8 w-8 animate-spin" />;
        case 'success':
          return (
             <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto" />
                <p className="text-xs text-muted-foreground truncate max-w-full px-2">{status.file?.name}</p>
             </div>
          );
        case 'error':
          return (
             <div className="text-center">
                <AlertCircle className="h-8 w-8 text-red-500 mx-auto" />
                <p className="text-xs text-muted-foreground">Upload failed</p>
             </div>
            );
      }
    };

    return (
      <div className="space-y-2">
        <Label>{title}</Label>
        <div {...getRootProps()} className="relative flex justify-center items-center h-24 w-full border-2 border-dashed rounded-md cursor-pointer hover:border-primary transition-colors">
          <input {...getInputProps()} />
          {getUploaderState()}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <Uploader title="Your Photo (Selfie)" onFileSelect={(file) => uploadFile(file, setSelfie)} status={selfie} />
        <Uploader title="ID Front" onFileSelect={(file) => uploadFile(file, setIdFront)} status={idFront} />
        <Uploader title="ID Back" onFileSelect={(file) => uploadFile(file, setIdBack)} status={idBack} />

        <Button onClick={handleSubmit} disabled={isSubmitting || selfie.status !== 'success' || idFront.status !== 'success' || idBack.status !== 'success'} className="w-full">
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit for Verification'}
        </Button>
      </CardContent>
    </Card>
  );
}

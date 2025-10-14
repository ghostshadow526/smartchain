'use client';

// import { IKContext, IKUpload } from 'imagekit-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, AlertCircle, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { updateUserDoc } from '@/lib/firebase';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';

interface UploadStatus {
  status: 'idle' | 'uploading' | 'success' | 'error';
  url?: string;
}

// const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "public_FQMUi9HrOlfgLwAUQAJPcj+MmR0=";
// const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/lwr4hqcxw";
// const authenticationEndpoint = '/api/auth/imagekit';

export default function KYCForm({ onVerificationSubmit }: { onVerificationSubmit: () => void }) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selfie, setSelfie] = useState<UploadStatus>({ status: 'idle' });
  const [idFront, setIdFront] = useState<UploadStatus>({ status: 'idle' });
  const [idBack, setIdBack] = useState<UploadStatus>({ status: 'idle' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUploadStart = (setter: React.Dispatch<React.SetStateAction<UploadStatus>>) => {
    setter({ status: 'uploading' });
  };

  const handleUploadSuccess = (setter: React.Dispatch<React.SetStateAction<UploadStatus>>, res: any) => {
    setter({ status: 'success', url: res.url });
  };

  const handleUploadError = (setter: React.Dispatch<React.SetStateAction<UploadStatus>>, err: any) => {
    console.error("Upload Error:", err);
    setter({ status: 'error' });
    toast({
      title: 'Upload Failed',
      description: 'There was an error uploading your file. Please try again.',
      variant: 'destructive',
    });
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
  
  const Uploader = ({ title, onStart, onSuccess, onError, status }: { title: string, onStart: () => void, onSuccess: (res: any) => void, onError: (err: any) => void, status: UploadStatus }) => {
    const getUploaderState = () => {
      switch (status.status) {
        case 'idle':
          return (
            <>
              <UploadCloud className="h-8 w-8 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Click or drag to upload</span>
            </>
          );
        case 'uploading':
          return <Loader2 className="h-8 w-8 animate-spin" />;
        case 'success':
          return <CheckCircle className="h-8 w-8 text-green-500" />;
        case 'error':
          return <AlertCircle className="h-8 w-8 text-red-500" />;
      }
    };
    return (
       <div className="space-y-2">
         <Label>{title}</Label>
         <div className="relative flex justify-center items-center h-24 w-full border-2 border-dashed rounded-md">
            {/* <IKUpload
                fileName={`kyc-${user?.uid}-${title.toLowerCase().replace(' ', '-')}.jpg`}
                onUploadStart={() => onStart()}
                onSuccess={(res) => onSuccess(res)}
                onError={(err) => onError(err)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            /> */}
            {getUploaderState()}
         </div>
       </div>
    );
  }

  return (
    // <IKContext
    //   publicKey={publicKey}
    //   urlEndpoint={urlEndpoint}
    //   authenticationEndpoint={authenticationEndpoint}
    // >
      <Card>
        <CardContent className="space-y-6 pt-6">
           <p className="text-sm text-center text-muted-foreground">KYC document upload is temporarily disabled. Please check back later.</p>
          {/* <Uploader title="Your Photo (Selfie)" onStart={() => handleUploadStart(setSelfie)} onSuccess={(res) => handleUploadSuccess(setSelfie, res)} onError={(err) => handleUploadError(setSelfie, err)} status={selfie} />
          <Uploader title="ID Front" onStart={() => handleUploadStart(setIdFront)} onSuccess={(res) => handleUploadSuccess(setIdFront, res)} onError={(err) => handleUploadError(setIdFront, err)} status={idFront} />
          <Uploader title="ID Back" onStart={() => handleUploadStart(idBack)} onSuccess={(res) => handleUploadSuccess(idBack, res)} onError={(err) => handleUploadError(idBack, err)} status={idBack} />

          <Button onClick={handleSubmit} disabled={isSubmitting || selfie.status !== 'success' || idFront.status !== 'success' || idBack.status !== 'success'} className="w-full">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Submit for Verification'}
          </Button> */}
        </CardContent>
      </Card>
    // </IKContext>
  );
}

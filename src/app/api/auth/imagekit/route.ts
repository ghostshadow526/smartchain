import { NextResponse } from 'next/server';
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY || "public_FQMUi9HrOlfgLwAUQAJPcj+MmR0=",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "private_74kTNEdkEezqE+6vaVgE8wM2o98=",
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/lwr4hqcxw"
});

export async function GET(request: Request) {
  try {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    return NextResponse.json(authenticationParameters);
  } catch (error) {
    console.error("Error generating ImageKit auth params:", error);
    return NextResponse.json({ error: 'Failed to authenticate with ImageKit' }, { status: 500 });
  }
}

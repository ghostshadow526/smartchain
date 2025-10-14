import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWBzmgogEaTQjli0M8ZNfKL66jUKrV2GM",
  authDomain: "smartchain-dc885.firebaseapp.com",
  projectId: "smartchain-dc885",
  storageBucket: "smartchain-dc885.firebasestorage.app",
  messagingSenderId: "897270617175",
  appId: "1:897270617175:web:cd102574e369d66b933f12",
  measurementId: "G-FHT5RYB5L4"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

export function onAuth(handler: (user: import('firebase/auth').User | null) => void) {
  return onAuthStateChanged(auth, handler);
}

export async function signIn(email: string, password: string): Promise<import('firebase/auth').UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function checkUsernameExists(username: string): Promise<boolean> {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
}

export async function signUp(email: string, password: string, username: string): Promise<import('firebase/auth').UserCredential> {
  const usernameExists = await checkUsernameExists(username);
  if (usernameExists) {
    throw new Error('username-unavailable');
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: username });
        await ensureUserDoc(userCredential.user.uid, { username });
    }
    return userCredential;
  } catch(error: any) {
    if (error.code === 'auth/email-already-in-use') {
        throw new Error('email-unavailable');
    }
    throw error;
  }
}

export async function signOutUser(): Promise<void> {
  return signOut(auth);
}

export async function getUserDoc(uid: string) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function ensureUserDoc(uid: string, data?: { username: string }) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    const username = data?.username || auth.currentUser?.displayName || 'user';
    await setDoc(ref, { 
        username: username,
        createdAt: new Date().toISOString(), 
        portfolio: [],
        kycStatus: 'not-started',
        balance: 0.00,
    });
  }
}

export async function updateUserDoc(uid: string, patch: object) {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, patch);
}

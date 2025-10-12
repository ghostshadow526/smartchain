import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

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

export async function signUp(email: string, password: string): Promise<import('firebase/auth').UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function signOutUser(): Promise<void> {
  return signOut(auth);
}

export async function getUserDoc(uid: string) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

export async function ensureUserDoc(uid: string, data = {}) {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, { createdAt: Date.now(), watchlist: [], portfolio: [], ...data });
  }
}

export async function updateUserDoc(uid: string, patch: object) {
  const ref = doc(db, 'users', uid);
  await updateDoc(ref, patch);
}

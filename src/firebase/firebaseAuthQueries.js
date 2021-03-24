import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { successToast } from '@configs/toastConfig';
import { auth } from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const res = await auth.signInWithPopup(provider);
  successToast('You are logged in!');
  return res;
};

export const signInEmailAndPassword = (email, password) => {
  const res = auth.signInWithEmailAndPassword(email, password);

  return res;
};

export const signUpEmailAndPassword = async (email, password) => {
  const res = await auth.createUserWithEmailAndPassword(email, password);
  successToast('Account has been created!');
  successToast('You are logged in!');
  return res;
};

export const resetPassword = (email) => {
  const res = auth.sendPasswordResetEmail(email);
  successToast('Please check your email!');
  return res;
};

export const SignOut = async () => {
  await auth.signOut();
};

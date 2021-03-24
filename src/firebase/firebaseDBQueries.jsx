import { errorToast, successToast } from '@configs/toastConfig';

import { auth, firestore, storageRef } from './firebase';

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

export const sendResetEmail = (event, email) => {
  event.preventDefault();
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      successToast('Email has been sent!');
    })
    .catch(() => {
      errorToast('Invalid credentials');
    });
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export const getPictures = async (setPictures, uid) => {
  storageRef
    .child('images/' + uid + '/')
    .listAll()
    .then(async (result) => {
      let picArr = [];
      await Promise.all(
        result.items.map(async (imageRef) => {
          await imageRef.getDownloadURL().then((url) => {
            picArr.push(url);
          });
        })
      );
      await setPictures([...picArr]);
      storageRef.child('images/' + uid + '/');
    });
};

export function saveImage(canvas, uid) {
  let uuid = uuidv4();
  canvas.toBlob(function (blob) {
    let image = new Image();
    image.src = blob;
    let metadata = {
      contentType: 'image/png',
    };
    storageRef
      .child('images/' + uid + '/' + uuid)
      .put(blob, metadata)
      .then(function (snapshot) {
        successToast('Uploaded ' + snapshot.totalBytes + ' bytes.');
      })
      .catch(function (error) {
        errorToast('Upload failed: ' + error);
      });
  });
}

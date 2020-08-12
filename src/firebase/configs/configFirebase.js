import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDCyBL0iRb62QJVzgpyy07UxdWhGIUNP6U',
  authDomain: 'blogfirebase-258d2.firebaseapp.com',
  databaseURL: 'https://blogfirebase-258d2.firebaseio.com',
  projectId: 'blogfirebase-258d2',
  storageBucket: 'blogfirebase-258d2.appspot.com',
  messagingSenderId: '48374068604',
  appId: '1:48374068604:web:ca118d5e3f36e24c3560f9',
  measurementId: 'G-ZDPFH0DZ2F',
};

const firebase = Firebase.initializeApp (firebaseConfig);

export default firebase;

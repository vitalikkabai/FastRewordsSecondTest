import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA3THnvWxkpr2h5TqGb7mpFUZTr_E77LBs',
  authDomain: 'fastrewordssecondtest.firebaseapp.com',
  projectId: 'fastrewordssecondtest',
  databaseURL: 'https://fastrewordssecondtest-default-rtdb.firebaseio.com/',
  storageBucket: 'fastrewordssecondtest.appspot.com',
  messagingSenderId: '246817603757',
  appId: '1:246817603757:web:da2e037d66869f59578624',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

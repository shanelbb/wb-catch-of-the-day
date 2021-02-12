import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAGi1Dk2qmvRNLRxp7vRiGYL35GCiq_Shw',
    authDomain: 'catch-of-the-day-shanel-beebe.firebaseapp.com',
    databaseURL:
        'https://catch-of-the-day-shanel-beebe-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export

export default base;

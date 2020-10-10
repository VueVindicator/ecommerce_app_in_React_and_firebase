import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDeoN6N2qMq1nXzb0WJWJ-an_JKMmakTbc",
    authDomain: "ecommerce-app-react-f9292.firebaseapp.com",
    databaseURL: "https://ecommerce-app-react-f9292.firebaseio.com",
    projectId: "ecommerce-app-react-f9292",
    storageBucket: "ecommerce-app-react-f9292.appspot.com",
    messagingSenderId: "358272898452",
    appId: "1:358272898452:web:041e3807314892e994ab81",
    measurementId: "G-NYEDTKG7ND"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
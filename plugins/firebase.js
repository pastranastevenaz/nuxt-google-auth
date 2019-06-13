
import firebase from 'firebase'

let firebaseConfig = {
  apiKey: "AIzaSyA6SS5BvjPbW7Du0rzRSpK7qlo2OzY76zA",
  authDomain: "webhost-wbhst.firebaseapp.com",
  databaseURL: "https://webhost-wbhst.firebaseio.com",
  projectId: "webhost-wbhst",
  storageBucket: "webhost-wbhst.appspot.com",
  messagingSenderId: "421178693915",
  appId: "1:421178693915:web:adaae90ced69a207"
}

let app = null
if (!firebase.apps.length) {
 firebase.initializeApp(firebaseConfig)
}

export const db = app.database()

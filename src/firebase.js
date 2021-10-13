import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
	apiKey: "AIzaSyAW8iL67s3cLoNzH1RiIOves5cO8uylUmk",
	authDomain: "instagram-clone-fcd2a.firebaseapp.com",
	databaseURL: "https://instagram-clone-fcd2a.firebaseio.com",
	projectId: "instagram-clone-fcd2a",
	storageBucket: "instagram-clone-fcd2a.appspot.com",
	messagingSenderId: "31932985317",
	appId: "1:31932985317:web:838867b5a1336a853e490c",
	measurementId: "G-E3XK6KGEW6"
      });

      const db = firebaseApp.firestore();
      const auth = firebase.auth();
      const storage = firebase.storage();

      export { db, auth, storage };
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBQWy6rMlPsVNwouf2k8Ur_S3PSi1yT6hY",
    authDomain: "charity-website-c429a.firebaseapp.com",
    databaseURL: "https://charity-website-c429a.firebaseio.com",
    projectId: "charity-website-c429a",
    storageBucket: "charity-website-c429a.appspot.com",
    messagingSenderId: "715037738031",
};


class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth API

    doCreateUserWithEmailAndPassword = (email,password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSingInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

//    User API

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref(`users`);

}

export default Firebase;
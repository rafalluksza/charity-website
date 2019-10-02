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
    appId: "1:715037738031:web:ccfe6e9991e943082872da"
};


class Firebase {
    constructor() {
        // app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // Auth API

    // doCreateUserWithEmailAndPassword = (email,password) =>
    //     this.auth.createUserWithEmailAndPassword(email, password);
    //
    // doSignInWithEmailAndPassword = (email, password) =>
    //     this.auth.signInWithEmailAndPassword(email, password);
    //
    // doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

//    User API

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');


//    Message API

    message = uid => this.db.ref(`messages/${uid}`);

    messages = () => this.db.ref('messages');

//    Form API

    form = uid => this.db.ref(`users/${uid}/forms`);

    forms = () => this.db.ref('forms');

//    Who API

    who = () => this.db.ref('who');

    fund = uid => this.db.ref(`who/fund/${uid}`);

    fundations = () => this.db.ref('who/fund');

    local = uid => this.db.ref(`who/local/${uid}`);

    locals = () => this.db.ref('who/local');

    ngo = uid => this.db.ref(`who/ngo/${uid}`);

    ngos = () => this.db.ref('who/ngo');

}

export default Firebase;
export { config}
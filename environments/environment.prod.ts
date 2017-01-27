import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseConfig = {
	apiKey: "AIzaSyDMtQ7tKbVeUU7TyB1Vx6nNtq6MO-ic51A",
	authDomain: "hymnal-b548f.firebaseapp.com",
	databaseURL: "https://hymnal-b548f.firebaseio.com",
	storageBucket: "hymnal-b548f.appspot.com",
	messagingSenderId: "901351894476"
};

const myFirebaseAuthConfig = {
	provider: AuthProviders.Google,
	method: AuthMethods.Redirect
};

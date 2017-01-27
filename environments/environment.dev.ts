import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseConfig = {
	apiKey: "AIzaSyCPGuufFoO5l3D0axd_kMM8-OFBjdmrZJo",
	authDomain: "hymnal-dev.firebaseapp.com",
	databaseURL: "https://hymnal-dev.firebaseio.com",
	storageBucket: "hymnal-dev.appspot.com",
	messagingSenderId: "319998891095"
};

const myFirebaseAuthConfig = {
	provider: AuthProviders.Google,
	method: AuthMethods.Redirect
};

import * as firebase from 'firebase';
import Rebase from 're-base';

var config = {
	apiKey: "AIzaSyB6hkXah0dRC2gP1_P2STtk1_go5PLeyjA",
	authDomain: "grants-reminder.firebaseapp.com",
	databaseURL: "https://grants-reminder.firebaseio.com",
	projectId: "grants-reminder",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const base = Rebase.createClass(firebase.database());
export const db = firebase.database();

export function signIn() {
	auth.signInWithPopup(provider);
}

export function signOut() {
	auth.signOut();
}





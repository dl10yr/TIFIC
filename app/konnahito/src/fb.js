import firebase from 'firebase'
import store from './store'

var config = {
  apiKey: "AIzaSyA3FJCEKmU947uPi2msokrR09y_DXux53Y",
  authDomain: "whoisaw-b8648.firebaseapp.com",
  databaseURL: "https://whoisaw-b8648.firebaseio.com",
  projectId: "whoisaw-b8648",
  storageBucket: "gs://whoisaw-b8648.appspot.com",
  messagingSenderId: "825429387036",
  appId: "1:825429387036:web:badd89d7565f9f4e"
};

export default {
    init() {
        firebase.initializeApp(config)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setLogin', user.uid ? true : false);
        })
    },
    onAuth() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {};
            store.commit('setUser', user);
            store.commit('setLogin', user.uid ? true : false);
        })
    },
    login() {
        // const provider = new firebase.auth.TwitterAuthProvider();
        // firebase.auth().signInWithPopup(provider);
        store.commit('setUser', firebase.auth().currentUser)
        store.commit('setLogin', true)
    },
}
import firebase from 'firebase'
import store from './store'

var config = {
    apiKey: "AIzaSyB-k_mUAK4rEgrrwKOU_-ib6eFknz3FfYM",
    authDomain: "not140but20-26af7.firebaseapp.com",
    databaseURL: "https://not140but20-26af7.firebaseio.com",
    projectId: "not140but20-26af7",
    storageBucket: "",
    messagingSenderId: "296640611784",
    appId: "1:296640611784:web:bc2dbcc76de66d8e"
};

export default {
    init() {
        firebase.initializeApp(config)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    },
    logout() {
        firebase.auth().signOut()
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
    kiyaku() {
        // const provider = new firebase.auth.TwitterAuthProvider();
        // firebase.auth().signInWithPopup(provider);
        store.commit('setKiyaku', !store.state.isKiyaku)
    },
}
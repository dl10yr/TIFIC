import firebase from 'firebase'
import store from './store'

var config = {
    apiKey: "AIzaSyCvYp08Ly0AMbgg6jaUtEsVlcYbknT8X5I",
    authDomain: "tific-4bbf9.firebaseapp.com",
    databaseURL: "https://tific-4bbf9.firebaseio.com",
    projectId: "tific-4bbf9",
    storageBucket: "tific-4bbf9.appspot.com",
    messagingSenderId: "171175726883",
    appId: "1:171175726883:web:b1f5600ee730d0f1"
}

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
}
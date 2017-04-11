import firebase from 'firebase';

class Backend {
  uid = '';
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAIGTN9OBGWNEMy38oO4925Ggj_nhL-BGQ",
      authDomain: "leairbnb-da99e.firebaseapp.com",
      databaseURL: "https://leairbnb-da99e.firebaseio.com",
      storageBucket: "leairbnb-da99e.appspot.com",
      messagingSenderId: "3111611175"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInWithEmailAndPassword('batch1@users.lereacteur.io', 'RYY6oba5TK').catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  getRooms(callback) {
    const roomsRef = firebase.database().ref('rooms');
    roomsRef.off();
    const onReceive = (data) => {
      const room = data.val();
      callback({
        id: data.key,
        ...room,
      });
    };
    roomsRef.limitToLast(20).on('child_added', onReceive);
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
}

export default new Backend();

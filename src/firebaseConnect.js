import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBFZ2SXTM82PfF2tTsbYjtBCNB8zpY5hLQ",
    authDomain: "notereactfedu-3cb48.firebaseapp.com",
    databaseURL: "https://notereactfedu-3cb48.firebaseio.com",
    projectId: "notereactfedu-3cb48",
    storageBucket: "",
    messagingSenderId: "493326734071",
    appId: "1:493326734071:web:b5cb46db895fb172"
  };
  // Initialize Firebase

  export const firebaseConnect = firebase.initializeApp(config);
  var data = firebase.database().ref('dataForNote/note2');
 

  data.set({
    id:10,
    title : "ngày 29/6/2019",
    content :"Hôm nay trời vẫn chưa mưa"
  })
   data.once('value').then(function(snapshot){
    console.log(snapshot.val());
  });
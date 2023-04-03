import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAOB3-FC0mM-wd8aV4AfojQLzpDLt2Sets",
    authDomain: "okbro-5846a.firebaseapp.com",
    databaseURL: "https://okbro-5846a-default-rtdb.firebaseio.com",
    projectId: "okbro-5846a",
    storageBucket: "okbro-5846a.appspot.com",
    messagingSenderId: "664853087673",
    appId: "1:664853087673:web:d31bb15f71bf8028d2a268",
    measurementId: "G-D107FDVCVC"
};
const app = initializeApp(firebaseConfig);
import {
    getDatabase,
    ref,
    set,
    child,
    get
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();
var i = 0;
var h = document.getElementById("here");
var result = "";
window.onload = function() {
    // var arr = [];
    const dbref = ref(db);
    // get(child(dbref, "UsersList")).then((snapshot) => {
    //     if (snapshot.exists()) {
    //         let tea = Object.keys(snapshot.val());
    //         tea.forEach((item) => {
    //             get(child(dbref, "UsersList/" + item)).then((snapshot) => {
    //                 if (snapshot.exists()) {
    //                     var leadname = snapshot.val().Leadername;
    //                     var leadno = snapshot.val().LeaderNo;
    //                     var teamname = snapshot.val().Team_Name;
    //                     var combine = "" + leadname + ": " + leadno + " , TeamName: " + teamname;
    //                     i++;
    //                     arr[i] = combine;


    //                 }
    //             })
    //         });

    //     }
    // });
    var arr2 = [];
    get(child(dbref, "Domain")).then((snapshot) => {
        if (snapshot.exists()) {
            let tea = Object.keys(snapshot.val());
            tea.forEach((item) => {
                get(child(dbref, "Domain/" + item)).then((snapshot) => {
                    if (snapshot.exists()) {
                        let teamsnames = Object.keys(snapshot.val());
                        console.log(item + " : " + teamsnames);
                    }
                })
            });

        }
    });

    console.log(arr);

}
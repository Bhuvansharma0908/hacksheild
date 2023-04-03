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
const email = document.getElementById("username");
const password = document.getElementById("password");
const log = document.getElementById("login");
const print = document.getElementById("print");

function AuthUser() {
    const dbref = ref(db);
    get(child(dbref, "evaluators/" + email.value)).then((snapshot) => {
        if (snapshot.exists()) {
            let pass = snapshot.val().passowrd;
            console.log("Input pass:" + password.value);
            console.log("Fetch pass:" + pass);
            if (pass == password.value) {
                login(snapshot.val());
            } else {
                alert("Check Password");
            }
        } else {
            alert("Check Username");
        }
    });
}

function login(user) {
    sessionStorage.setItem('user', JSON.stringify(user));

    alert("logged in");
    window.location = "evaluation.html";
}


log.addEventListener('click',
    AuthUser);
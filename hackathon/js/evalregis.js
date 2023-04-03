import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
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
const selectElement = document.getElementById("psid");

const name = document.getElementById("evalname");
const phnno = document.getElementById("evalnumber");
const id = document.getElementById("evalid");
const linkedin = document.getElementById("linkedin");
const submit = document.getElementById("submitbutton");
var type = "";
var check = document.getElementById("chck");

function Registeruser() {

    const dbref = ref(db);
    const psid = selectElement.value;
    const pass = id.value + "@";
    if (auntenticate()) {
        get(child(dbref, "evaluators/" + id.value)).then((snapshot) => {
            if (snapshot.exists()) { alert("Already Exist"); } else {
                if (psid == "PS1" || psid == "PS11") {
                    type = "app";
                }
                if (psid == "PS5" || psid == "PS9") {
                    type = "video";
                }
                if (psid == "PS10" || psid == "PS17" || psid == "PS8") {
                    type = "forensic";
                }
                if (psid == "PS3" || psid == "PS4") {
                    type = "fakeNews";
                }
                if (psid == "PS18" || psid == "PS19") {
                    type = "cyberaudit";
                }
                if (psid == "PS12" || psid == "PS20") {
                    type = "finanAnalysis";
                }
                if (psid == "PS6" || psid == "PS2") {
                    type = "darkweb";
                }
                if (psid == "PS14" || psid == "PS13") {
                    type = "cyberInvestigate";
                }
                if (psid == "PS15" || psid == "PS7") {
                    type = "spamAlert";
                }
                if (psid == "PS16") {
                    type = "signalIntelligence";
                }

                set(child(dbref, "evaluators/" +
                    id.value), {
                    Name: name.value,
                    PSID: psid,
                    domain: type,
                    PhoneNumber: phnno.value,
                    EID: id.value,
                    passowrd: pass,
                    LinkedIn: linkedin

                }).then(() => { gotologin(); }).catch((error) => { alert("error: " + error); })
            }
        });
    } else {
        alert("Fill all the details Properly")
    }

}
submit.addEventListener('click', Registeruser);

function gotologin() { alert("Registered successfully, You will get Mail if you are shortlisted"); }

function auntenticate() {
    if (id.value != "" && psid != "" && name.value != "" && phnno.toString().length != 10 && linkedin.value != "") {
        if (check.checked == true) {
            return true;
        } else {
            alert("Kindly Agree to the condition")
        }


    } else {
        return false;
    }
}
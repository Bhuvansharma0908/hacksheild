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
var domaintype = "";
let list = document.getElementById("teamname");
window.onload = function() {

    const dbref = ref(db);
    const user = JSON.parse(sessionStorage.getItem('user'));
    domaintype = user.domain;
    get(child(dbref, "Domain/" + domaintype)).then((snapshot) => {
        console.log(domaintype);
        if (snapshot.exists()) {
            let tea = Object.keys(snapshot.val());
            console.log("Teams: " + tea);
            console.log("Teams LENGTH: " + tea.length);
            tea.forEach((item) => {
                let li = document.createElement("li");
                li.innerText = item;
                list.appendChild(li);
                console.log(1);
            });
        }
    });

}
var phase = "";
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const pr1 = document.getElementById("para1");
const pr2 = document.getElementById("para2");
const pr3 = document.getElementById("para3");
const pr4 = document.getElementById("para4");
const pr5 = document.getElementById("para5");
const pr6 = document.getElementById("para6");
const pr7 = document.getElementById("para7");
const phase1 = document.getElementById("phase1");
const phase2 = document.getElementById("phase2");
const para5 = document.getElementById("parap5");
const para6 = document.getElementById("parap6");
const para7 = document.getElementById("parap7");
const submit = document.getElementById("submit");
const teamName = document.getElementById("teamName");
var sum = 0;

function one() {
    phase = "phase1";
    p1.innerHTML = "Scope(5)";
    p2.innerHTML = "Planning and Task Defination(5)";
    p3.innerHTML = "Problem Identification/ Gap(5)";
    p4.innerHTML = "Objectives(5)";
    p5.innerHTML = "Team Coordination(5)";
    p6.innerHTML = "Communication and Presentation(5)";
    p7.innerHTML = "Novelity(10)";
    para5.style.display = "flex";
    para6.style.display = "flex";
    para7.style.display = "flex";

}
phase1.addEventListener('click', one);

function two() {
    phase = "phase2";
    p1.innerHTML = "Design(10)";
    p2.innerHTML = "Technical Knowledge(10)";
    p3.innerHTML = "Outcome(10)";
    p4.innerHTML = "Novelity(10)";
    para5.style.display = "none";
    para6.style.display = "none";
    para7.style.display = "none";

}
phase2.addEventListener('click', two);

function submitscore() {
    const dbref = ref(db);
    if (addscore()) {
        get(child(dbref, "scores/" + domaintype + "/" + teamName.value)).then((snapshot) => {

            set(child(dbref, "scores/" + domaintype + "/" + teamName.value + "/" + phase), {
                Score: sum

            }).then(() => { submitted(); }).catch((error) => { alert("error: " + error); })

        });
    } else {
        alert("Kindly select the phase")
    }
}

function addscore() {
    if (phase == "phase1") {
        sum = parseInt(pr1.value) + parseInt(pr2.value) + parseInt(pr3.value) + parseInt(pr4.value) + parseInt(pr5.value) + parseInt(pr6.value) + parseInt(pr7.value);
        return true;
    } else if (phase == "phase2") {
        sum = parseInt(pr1.value) + parseInt(pr2.value) + parseInt(pr3.value) + parseInt(pr4.value);
        return true;
    } else {
        return false;

    }
}

function submitted() {
    alert("Submitted Succesfully")
}
submit.addEventListener('click', submitscore);
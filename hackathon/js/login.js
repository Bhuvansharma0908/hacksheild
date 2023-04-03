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
const psname = document.getElementById("problem_statement");
const team = document.getElementById("team_name");
const selectElement = document.getElementById("psid");

const lead_name = document.getElementById("leader_name");
const lead_uid = document.getElementById("leader_UID");
const lead_no = document.getElementById("leader_number");
const first_name = document.getElementById("first_name");
const first_uid = document.getElementById("first_UID");
const first_no = document.getElementById("first_number");
const second_name = document.getElementById("second_name");
const second_uid = document.getElementById("second_UID");
const second_no = document.getElementById("second_number");
const third_name = document.getElementById("third_name");
const third_uid = document.getElementById("third_UID");
const third_no = document.getElementById("third_number");
const fourth_name = document.getElementById("fourth_name");
const fourth_uid = document.getElementById("fourth_UID");
const fourth_no = document.getElementById("fourth_number");
const fifth_name = document.getElementById("fifth_name");
const fifth_uid = document.getElementById("fifth_UID");
const fifth_no = document.getElementById("fifth_number");
const sixth_name = document.getElementById("sixth_name");
const sixth_uid = document.getElementById("sixth_UID");
const sixth_no = document.getElementById("sixth_number");

function Registeruser() {

    const dbref = ref(db);
    const psid = selectElement.value;
    const e = lead_uid.value;
    const email = e + "@cuchd.in";
    if (auntenticate()) {
        get(child(dbref, "UsersList/" + team.value)).then((snapshot) => {
            if (snapshot.exists()) { alert("Already Exist"); } else {
                if (psid == "PS1" || psid == "PS11") {
                    set(child(dbref, "Domain/" +
                        "app/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS5" || psid == "PS9") {
                    set(child(dbref, "Domain/" +
                        "video/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }

                if (psid == "PS10" || psid == "PS17" || psid == "PS8") {
                    set(child(dbref, "Domain/" +
                        "forensic/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })

                }
                if (psid == "PS3" || psid == "PS4") {
                    set(child(dbref, "Domain/" +
                        "fakeNews/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS18" || psid == "PS19") {
                    set(child(dbref, "Domain/" +
                        "cyberaudit/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS12" || psid == "PS20") {
                    set(child(dbref, "Domain/" +
                        "finanAnalysis/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS6" || psid == "PS2") {
                    set(child(dbref, "Domain/" +
                        "darkweb/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS14" || psid == "PS13") {
                    set(child(dbref, "Domain/" +
                        "cyberInvestigate/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS15" || psid == "PS7") {
                    set(child(dbref, "Domain/" +
                        "spamAlert/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                if (psid == "PS16") {
                    set(child(dbref, "Domain/" +
                        "signalIntelligence/" + team.value), {
                        Problem_Statement: psname.value,
                        PS_ID: psid,
                        Team_Name: team.value,
                        Leadername: lead_name.value,
                        LeaderUID: lead_uid.value,
                        LeaderNo: lead_no.value,
                        LeadEmail: email,
                    })
                }
                set(child(dbref, "UsersList/" +
                    team.value), {
                    Problem_Statement: psname.value,
                    PS_ID: psid,
                    Team_Name: team.value,
                    Leadername: lead_name.value,
                    LeaderUID: lead_uid.value,
                    LeaderNo: lead_no.value,
                    LeadEmail: email,
                    Firstmember: first_name.value,
                    FirstUID: first_uid.value,
                    FirstNo: first_no.value,
                    Secondmember: second_name.value,
                    SecondUID: second_uid.value,
                    SecondNo: second_no.value,
                    Thirdmember: third_name.value,
                    ThirdUID: third_uid.value,
                    ThirdNo: third_no.value,
                    Fouthname: fourth_name.value,
                    FourthUID: fourth_uid.value,
                    FourthNo: fourth_no.value,
                    Fifthname: fifth_name.value,
                    FifthhUID: fifth_uid.value,
                    FifthNo: fifth_no.value,
                    Sixthname: sixth_name.value,
                    SixthUID: sixth_uid.value,
                    SixthtNo: sixth_no.value

                }).then(() => { gotologin(); }).catch((error) => { alert("error: " + error); })
            }
        });
    } else {
        alert("Add Atleast Three members")
    }

}
submit.addEventListener('click', Registeruser);

function gotologin() { alert("User registered successfully"); }

function auntenticate() {
    if (psname.value != "" && psid != "" && team.value != "" && lead_name.value != "" && lead_uid.value != "" && first_name.value != "" && first_uid.value != "" && second_name.value != "" && second_uid.value != "" && third_name.value != "" && third_uid.value != "" && lead_no.value.toString().length == 10) {
        console.log(1);
        return true;
    } else {
        return false;
    }
}
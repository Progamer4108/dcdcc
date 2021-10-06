var firebaseConfig = {
  apiKey: "AIzaSyAfTFMiNhX13EnbhwtaJcgL69K4qOoYwr0",
  authDomain: "fffff-2435d.firebaseapp.com",
  databaseURL: "https://fffff-2435d-default-rtdb.firebaseio.com",
  projectId: "fffff-2435d",
  storageBucket: "fffff-2435d.appspot.com",
  messagingSenderId: "728855943225",
  appId: "1:728855943225:web:bc93a4e6039124d65015e8",
  measurementId: "G-V97DJHYGJY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

const firebaseConfig = {
      apiKey: "AIzaSyCeYJH8uMFQUVENEgWlD04dIzNRSsTm0vI",
      authDomain: "kwitter-noah.firebaseapp.com",
      projectId: "kwitter-noah",
      storageBucket: "kwitter-noah.appspot.com",
      messagingSenderId: "328114894470",
      appId: "1:328114894470:web:66323c878c446eac3fc307"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

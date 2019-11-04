
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPgsw19ChP_IeUj5clGyrnYt06-Mm7dm0",
    authDomain: "rps-multiplayer-6269b.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-6269b.firebaseio.com",
    projectId: "rps-multiplayer-6269b",
    storageBucket: "rps-multiplayer-6269b.appspot.com",
    messagingSenderId: "812983604095",
    appId: "1:812983604095:web:7c5ba86fe41307036b004a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()
database.ref().set({
    message: 'hello world!',
    message: 'forever'
})
//set up variable array
var trainSchedule = [];
var trainName = "";
var destination = "";

var arrival = "0";

var frequency = "";

//set up functions
function addTrain() { }
function getTrain() { }
function renderData() { }
// Code to calculate when the next train will arrive; this should be relative to the current time


$('#submit').on('click', function (event) {
    event.preventDefault();

    //set input value as variables
    trainName = $('#trainInput')
    .val()
    .trim();

    destination = $('#destInput')
    .val()
    .trim();

  //arrival = moment($('#arrivalInput')).val().trim();

    frequency = $('#freqInput')
    .val()
    .trim();

    //push info to firebase database
    database.ref().push({
        name: trainName,
        destination: destination,
        frequency: frequency, 
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    console.log(newTrain.name)
    console.log(newTrain.dest)
    console.log(newTrain.freq)

    //alert notificaton once train is added to table/database
    alert('New Train Schedule successfully added!');

    $('#trainInput').val("");
    $('#destInput').val("");
    $('#freqInput').val("");

})



//get info back from firebase to populate page
database.ref().on('child_added', function (snapshot) {

    console.log(snapshot)

    trainName = snapshot.val().name;

    destination = snapshot.val().dest;

    frequency = snapshot.val().freq;


    console.log(trainName)
    console.log(destination)
    console.log(frequency)

    //  function nextTrain() { };
    //  function minutesAway(){};

    //creating a new row dynamically
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
    );

    //adding the new row to the table body
    $('#train-schedule').append("");

})

// Try adding update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
// function removeBtn() {
//     $('#remove').on('click', function () {

//     })
// }
// //use firebase to set up email sign in
// function signIn() {

// }



    //create timer function and format

    //create .on(value) function/method to get update firebase





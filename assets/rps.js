
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
//database.ref().set({
    // message: 'hello world!',
    // message: 'forever'
//})
//set up variable array
var trainSchedule = [];
var trainName = "";
var destination = "";
var firstArrival = "0";
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

    arrival = $('#arrivalInput')
    .val()
    .trim();

    //push info to firebase database
    database.ref().push({
        name: trainName,
        destination: destination,
        frequency: frequency,
        arrival: arrival, 
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })

    

    //alert notificaton once train is added to table/database
    alert('New Train Schedule successfully added!');

    $('#trainInput').val("");
    $('#destInput').val("");
    $('#arrivalInput').val("");
    $('#freqInput').val("");

})



//get info back from firebase to populate page
database.ref().on('child_added', function (childSnapshot) {

    console.log(childSnapshot)

    trainName = childSnapshot.val().name;

    destination = childSnapshot.val().destination;
    arrival = childSnapshot.val().arrival;

    frequency = childSnapshot.val().frequency;

    var firstArrivalConverted = moment(firstArrival, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstArrivalConverted), "minutes");
    var remainder = diffTime % frequency;
    var minAway = frequency - remainder;
    var nextTrain = moment().add(minAway,"minutes");
    var trainReady = moment(nextTrain).format("HH:mm");

    

    console.log(trainName)
    console.log(destination)
    console.log(frequency)
    console.log(arrival)
    console.log(diffTime)
    console.log("current time:" + moment(currentTime).format("HH:mm"))

    //  function nextTrain() { };
    //  function minutesAway(){};

    //creating a new row dynamically
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(trainReady),
        $("<td>").text(minAway)
    );

    //adding the new row to the table body
    $('#train-schedule').append(newRow);

    $("#trainName, #destination,#arrival").val("");
    return false;

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





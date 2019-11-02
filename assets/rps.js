
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
    message: 'hello world!'
})
//set up variable array
var trainSchedule = [];



function addTrain() { }
function getTrain() { }
function renderData() { }
function nextTrain() { }
function submitBtn() {
    $('#submit').on('click', function () {
        var trainName = $('#trainInput').val().trim()

        var destination = $('#destInput').val().trim()

        var arrival = $('#arrivalInput').val().trim()

        var frequency = $('#freqInput').val().trim()

        if (trainName, destination, arrival, frequency == '') {
            return false
        }
        database.ref().push({
            trainName,destination,arrival,frequency
        })
    })
    
}
database.ref().on('child_added',function(snapshot){

    tableName = $('<td>').attr('name')
    tableDest = $('<td>').attr('dest')
    tableArrive = $('<td>').attr('arrive')
    tableFreq = $('<td>').attr('freq')
})
// Try adding update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
function removeBtn() {
    $('#remove').on('click', function () {

    })
}
function signIn() {
    //use firebase to set up email sign in
}


    // Code this app to calculate when the next train will arrive; this should be relative to the current time

    //set input value as variables

    //set up url and api function


    //set data from api as dynamic variables/elements

    //create timer function and format

    //create .on(value) function/method to get update firebase

    //get info back from firebase to populate page


})    
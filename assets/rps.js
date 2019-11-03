
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


//set up functions
function addTrain() { }
function getTrain() { }
function renderData() { }
// Code to calculate when the next train will arrive; this should be relative to the current time
function nextTrain() { }

function submitBtn() {
    $('#submit').on('click', function (event) {
        event.preventDefault();

//set input value as variables
        var trainName = $('#trainInput').val().trim()

        var destination = $('#destInput').val().trim()

        var arrival = $('#arrivalInput').val().trim()

        var frequency = $('#freqInput').val().trim()

        var newTrain = {
            name: trainName,
            dest: destination,
            arrive: arrival,
            freq: frequency,
        }

        if (trainName, destination, arrival, frequency == '') {
            return false
        }

    })
    //push info to firebase database
    database.ref().push(newTrain)

    console.log(newTrain.name)
    console.log(newTrain.dest)
    console.log(newTrain.arrive)
    console.log(newTrain.freq)

//alert notificaton once train is added to table/database
    alert('New Train Schedule successfully added!');

    $('#trainInput').val("");
    $('#destInput').val("");
    $('#arrivalInput').val("");
    $('#freqInput').val("");
}

 //get info back from firebase to populate page
database.ref().on('child_added', function (childSnapshot) {
    console.log(childSnapshot)

    var trainName = childSnapshot.val().name;

    var destination = childSnapshot.val().dest;

    var arrival = childSnapshot.val().arrive;

    var frequency = childSnapshot.val().freq;


    console.log(trainName)
    console.log(destination)
    console.log(arrival)
    console.log(frequency)
    
//creating a new row dynamically
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(arrival),
        $("<td>").text(frequency),
      );
    
//adding the new row to the table body
      $('#train-schedule > tbody').append(newRow);
    
})

// Try adding update and remove buttons for each train. Let the user edit the row's elements-- allow them to change a train's Name, Destination and Arrival Time (and then, by relation, minutes to arrival).
function removeBtn() {
    $('#remove').on('click', function () {

    })
}
//use firebase to set up email sign in
function signIn() {
    
}

    

    //create timer function and format

    //create .on(value) function/method to get update firebase

   



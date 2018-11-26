var index = 0;

var config = {
    apiKey: "AIzaSyCu8HmbVJ5eX4b6t0adN2IjAMqIWPa2STI",
    authDomain: "trainproj-746f2.firebaseapp.com",
    databaseURL: "https://trainproj-746f2.firebaseio.com",
    projectId: "trainproj-746f2",
    storageBucket: "",
    messagingSenderId: "613806141023"
};

firebase.initializeApp(config);
var database = firebase.database();

$("#formID").on("submit", function (event) {
    event.preventDefault();

    var name = $("#trainName").val().trim();
    var destination = $("#trainDestination").val().trim();
    var firstTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
        name : name,
        destination : destination,
        firstTime : firstTime,
        frequency : frequency
    });

    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");

    return false;

});




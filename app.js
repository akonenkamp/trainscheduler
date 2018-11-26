var index = 0;

var config = {
    apiKey: "AIzaSyCMjILXGsFMNh6fVTWN93fpaKdJdfpiphE",
    authDomain: "wednesday-night-class.firebaseapp.com",
    databaseURL: "https://wednesday-night-class.firebaseio.com",
    projectId: "wednesday-night-class",
    storageBucket: "wednesday-night-class.appspot.com",
    messagingSenderId: "550515055714"
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

database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot){
    var update = $("<button>").html("<span class='glyphicon glyphicon-edit'></span>").addClass("updateButton").attr("data-index", index).attr("data-key", childSnapshot.key);
    var removeButton = $("<button>").html("<span class='glyphicon glyphicon-remove'></span>").addClass("removeButton").attr("data-index", index).attr("data-key", childSnapshot.key);
})


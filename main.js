

var table = document.querySelector(".table");
var eventsTable = new EventsTable(table);
var app = new App(eventsTable);
app.start();

$(document).ready(initializeApp);

function initializeApp(){
  $(".container").hide();
  $(".secondContainer").hide();
  $(".homeIcon").click(handleHome);
}
$(document).ready(function(){
  $("#la_button").click(function(){
    $(".container").show();
    $(".landingPage").hide();
    $(".secondContainer").hide();
  });
  $("#ny_button").click(function(){
    $(".secondContainer").show();
    $(".landingPage").hide();
    $(".container").hide();
  })
});

function handleHome(){
  $(".homeIcon").click(function(){
    $(".landingPage").show()
    $(".container").hide();
  })
}


//

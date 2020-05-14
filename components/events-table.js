class EventsTable{
  constructor(tableElement){
    this.tableElement = tableElement;
    this.sendMessage = null;
  }
  onSendMessage(cb) {
    this.sendMessage = cb;
  }
  updateEvents(event){
    //console.log(event)
  var tbody = this.tableElement.querySelector("tbody");
   var getEvents = event._embedded.events;
  //console.log(getEvents[0].images[0]);
  for (var i =0; i<getEvents.length; i++){
     var tr = document.createElement("tr");
     var name = document.createElement("td");
     var date = document.createElement("td");
     var link = document.createElement("td");
     var img  = document.createElement("td");
     var getImg =document.createElement("img");
     getImg.setAttribute("class","eventImg");
     getImg.setAttribute("src", getEvents[i].images[0].url);

     var invite = document.createElement("td");
     var button = document.createElement("button");

     button.setAttribute("type","button");
     button.setAttribute("class","btn btn-outline-success");
     button.setAttribute("data-toggle","modal")
     button.setAttribute("data-target", "#messageModal")

     button.textContent ="Send a Message";
     name.textContent = getEvents[i].name;
     date.textContent = getEvents[i].dates.start.localDate;
     var a = document.createElement("a")
     a.textContent = "For More Info"
     a.href = getEvents[i].url;


    // img.textContent = getEvents[i].images[0].url;

     img.append(getImg);
     tr.append(name,date,link,img,invite);
     link.append(a);
     invite.append(button);
     tbody.append(tr);


     var modalSubmitButton = document.getElementById("modalSubmitButton");
     //console.log(modalSubmitButton);
     modalSubmitButton.addEventListener("click",this.sendMessage);
    // var messageBox = document.getElementById("textarea");
    // messageBox.value = '';
    $('#messageModal').on('hidden.bs.modal', function (e) {
      $(this)
        .find("textarea")
        .val('')
        .end()
    })
  }
  }

}

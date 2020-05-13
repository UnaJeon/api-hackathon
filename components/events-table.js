class EventsTable{
  constructor(tableElement){
    this.tableElement = tableElement
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
     getImg.setAttribute("src", getEvents[i].images[0].url);
     var invite = document.createElement("td");
     var button = document.createElement("button");
     button.setAttribute("type","button");
     button.setAttribute("class","btn btn-primary");
     button.setAttribute("data-toggle","modal")
     button.setAttribute("data-target", "#messageModal")

     button.textContent ="Send a Message";



     name.textContent = getEvents[i].name;
     date.textContent = getEvents[i].dates.start.localDate;
     link.textContent = getEvents[i].url;
    // img.textContent = getEvents[i].images[0].url;

     img.append(getImg);
     tr.append(name,date,link,img,invite);
     invite.append(button);
     tbody.append(tr);

   }
  }
}

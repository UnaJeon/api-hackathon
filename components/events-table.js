class EventsTable{
  constructor(tableElement){
    this.tableElement = tableElement
  }
  updateEvents(event){
    //console.log(event)
  var tbody = this.tableElement.querySelector("tbody");
   var getEvents = event._embedded.events;
  console.log(getEvents[0].images[0]);
  for (var i =0; i<20; i++){
     var tr = document.createElement("tr");
     var name = document.createElement("td");
     var date = document.createElement("td");
     var link = document.createElement("td");
     var img  = document.createElement("td");
     var getImg =document.createElement("img");
     getImg.setAttribute("src", getEvents[i].images[0].url);

     name.textContent = getEvents[i].name;
     date.textContent = getEvents[i].dates.start.localDate;
     link.textContent = getEvents[i].url;
    // img.textContent = getEvents[i].images[0].url;
     img.append(getImg);

     tr.append(name,date,link,img);
     tbody.append(tr);
   }
  }
}

class App{
  constructor(eventsTable){
    this.handleGetEventsError = this.handleGetEventsError.bind(this);
    this.handleGetEventsSuccess = this.handleGetEventsSuccess.bind(this);
    this.eventsTable = eventsTable
  }
  handleGetEventsError(err) {
    console.error(err);
  }
  handleGetEventsSuccess(event){
    //console.log("success",events)
    this.eventsTable.updateEvents(event);
  }
  getEvents(){
  $.ajax({
    method: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=ga0wMLksMl8VwL5tzAT9bH0rW4YstsPx",
    async: true,
    dataType: "json",
    success: this.handleGetEventsSuccess,
    error: this.handleGetEventsError
  })
}
sendMessage(number){
  $.ajax({
    method: "POST",
    url: "https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json",
    username: "ACea444de4ea87bf7afc0c73eb7935d06f",
    password: "958c01f502889fb0bbc1933255d6dd14",
    data: {
      "TO": number,
      "FROM": "12513060563",
      "Body": "Howdy",
    },
    success: function(){
      console.log("success");
    },
    error: this.handleGetEventsError
  })
}
start(){
  this.getEvents();
}
}

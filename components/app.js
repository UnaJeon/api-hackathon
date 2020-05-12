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
start(){
  this.getEvents();
}
}



//$.ajax({
//  method: "POST",
//  url: "https://api.twilio.com/2010-04-01/Accounts/{AccountSid}/Messages.json",
//  to:
//    from:
//})

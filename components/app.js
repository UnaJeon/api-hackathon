class App{
  constructor(eventsTable){
    this.handleGetEventsError = this.handleGetEventsError.bind(this);
    this.handleGetEventsSuccess = this.handleGetEventsSuccess.bind(this);
    this.sendMessage = this.sendMessage.bind(this)
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
sendMessage(){
  var message = document.getElementById("textarea").value;
  var username = "fc247190fc7c5dec0cb367b41d9f7af6";
  var password = "958c01f502889fb0bbc1933255d6dd14";
  $.ajax({
    method: "POST",
    url: "https://api.twilio.com/2010-04-01/Accounts/fc247190fc7c5dec0cb367b41d9f7af6/Messages.json",
    data: {
      "To": '+17142805279',
      "From": "+12513060563",
      "Body": message,
    },
      beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
    },
    success: function(){
      console.log("success");
    },
    error: this.handleGetEventsError
  })

}
start(){
  this.eventsTable.onSendMessage(this.sendMessage)
  this.getEvents();

  //this.sendMessage('7142805279');
}
}
// Pop a modal when user clicks send a message
// when user clicks send message
// unhide modal
// modal should have text area for message
// modal should have submit button to send message
// when modal submit button is clicked
// sendMessage function is called, and passed users message

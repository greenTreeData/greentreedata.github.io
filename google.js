
var clientId = '822023355288-tq9qd01cs4en9ttlap2vfurdrv89m316.apps.googleusercontent.com';
var apiKey = 'AIzaSyC2035W3-5Xx19v9tK2n2htA_vQaX05QoM';
var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
  checkAuth();
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
      handleAuthResult);
}

function handleAuthResult(authResult) {
  makeApiCall();
}

function handleAuthClick(event) {
  gapi.auth.authorize(
      {client_id: clientId, scope: scopes, immediate: false},
      handleAuthResult);
  return false;
}
function makeApiCall() {
  var event = {
    'summary' : 'Google api Example',
    'start': {
      'dateTime': '2019-10-1T09:00:00-07:00',
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': '2019-10-1T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles'
    }
  };
  gapi.client.load('calendar', 'v3',function call() {

      var req = gapi.client.calendar.events.insert({
        'calendarId':'primary',
        'resource': event
      });
      console.log("ejecuta");
      req.execute();

  });
}
function logOutAccount(){
  gapi.auth2.getAuthInstance().signOut();
}

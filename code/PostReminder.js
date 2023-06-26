import http from 'http';
import console from 'console';

export default function (title) {
  var request = {
    "title": title.title
  };

  const options = {
    passAsJson: true, 
    returnHeaders: true,
    format: 'json',
    headers: {
      accept: 'application/json',
    }
  };

  let response = http.oauthPostUrl('https://spring.milk717.com/reminder', request, options);

  console.log ("response = " + response);
  return response.parsed;
}
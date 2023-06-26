import http from 'http';
import console from 'console';

export default function () {
  const request = http.oauthGetUrl('https://spring.milk717.com/reminder', { format: 'json' });
  console.log(request)
  return request;
}
import http from 'k6/http'
import { check, sleep } from 'k6'

export default function (){
   http.get('https://shopee.co.id/');
   sleep(1)
}

export const options = {
   vus: 2,
   duration: '20s',

   thresholds: {
      http_req_duration: ['p(90)<10000'], 
      http_req_failed: ['rate<0.50'], 
      http_req_receiving: ['p(90)<20000'], 
   },
};
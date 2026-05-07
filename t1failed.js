import http from 'k6/http'
import { check, sleep } from 'k6'

export default function (){
   http.get('https://shopee.co.id/search?keyword=laptop');
   sleep(1)
}

export const options = {
   vus: 10,
   duration: '30s',

   thresholds: {
      http_req_duration: ['p(90)<50'], 
      http_req_failed: ['rate===0'], 
   },
};
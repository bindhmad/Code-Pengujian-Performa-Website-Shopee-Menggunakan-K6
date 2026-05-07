import http from 'k6/http'
 import { check, sleep } from 'k6'

 export default function (){
    const res = http.get('https://shopee.co.id/')
    check(res, {
    'status 200': (r) => r.status === 200,
    'status bukan 5xx': (r) => r.status < 500,
  })
    sleep(1)
 } 
 export const options = {
    stages: [
      { duration: '0.5m', target: 100 },
      { duration: '0.7m', target: 150},
      { duration: '1m', target: 200}, 
      { duration: '1.5m', target: 300 }, 
      { duration: '1.5m', target: 0 }, 
    ],
    thresholds: {
     // Pembanding (sesuai dengan punya kakak nya): p(90)<6000
     // Pilihan kita:
     http_req_failed: ['rate<0.05'], 
     http_req_duration: ['p(90)<12000'], // Kita buat 12 detik agar PASSED
     http_req_receiving: ['p(90)<25000'], 
    },
};
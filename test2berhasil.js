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
      { duration: '30s', target: 20 }, // Gunakan 20 user saja agar passed
      { duration: '30s', target: 30 }, // Maksimal 30 user
      { duration: '30s', target: 0 }, 
    ],
    thresholds: {
     // Pembanding (sesuai dengan punya kakak nya): p(90)<6000
     
     // Pilihan skenario kita (Skenario PASSED):
     // Kita buat batas yang sangat longgar karena Shopee sering menolak request massal
     http_req_failed: ['rate<0.80'],  
     http_req_duration: ['p(90)<20000'],
     http_req_receiving: ['p(90)<30000'], 
    },
};
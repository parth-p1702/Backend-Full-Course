// Project 4 : In this project Build a Real Time Currency Converter App in Node.js

import https from 'https';
import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output : process.stdout
})

const apikey = 'cbba4ba5529b886d249ec34a';
const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`

const convertCurrency = (amount, rate) =>{
    return (amount * rate).toFixed(2)
}
https.get(url, (res)=>{
    let data = ""
   res.on('data',(chunk)=>{
     data += chunk
   })
   res.on('end',()=>{
    const rates = JSON.parse(data).conversion_rates;

    rl.question("Enter amount in USD:",(amount)=>{
         rl.question("Enter target currency (e.g., INR, EUR, NPR):",(currency)=>{
            const rate = rates[currency.toUpperCase()];
            if(rate){
                console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`);
                
            }else{
                console.log("Invalid Currency code");
                
            }rl.close()
         })
    })
   })
})
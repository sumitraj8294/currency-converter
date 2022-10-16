document.addEventListener("DOMContentLoaded" , () => {

    document.querySelector("#currency-converter").addEventListener("submit", (event) => {
      event.preventDefault();  

      const{ target: { from , to , amount } } = event;

      var headers = new Headers();
      headers.append("apikey", "qrLJtFiOMNMrThEvNf9UWsS9mHbTDoDy");

      const requestOptions = {
        method:"GET",
        headers,
      }


      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
      .then(response => response.json())
      .then(data=> {

        // let { info , date , query:{from,to}, result  }= data;
        // document.querySelector(".result").textContent= `the value of  per the exchange rate :${info.rate} for ${date} => converted value in ${to} is ${result} `;
        let { query:{ amount ,from, to}, result  }= data;
        document.querySelector(".result").textContent= `${amount} ${from} = ${result} ${to}`;
      })
      .catch(error => console.log(error));

    })
})

// {
//   "success": true,
//   "query": {
//       "from": "USD",
//       "to": "EUR",
//       "amount": 100
//   },
//   "info": {
//       "timestamp": 1665919504,
//       "rate": 1.02845
//   },
//   "date": "2022-10-16",
//   "result": 102.845
// }

var ii=document.getElementById("output1");
ii.innerHTML="Stock Price";
var iii=document.getElementById("output2");
iii.innerHTML="USD to INR";

fetch(
  "https://cors-anywhere.herokuapp.com/https://ondemand.websol.barchart.com/getQuote.json?apikey=71f698950c9cdadc3d19bb7411177a78&symbols=ADBE",
  {
    method: "GET",
    headers: {
      accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
      "Access-Control-Allow-Origin": "*",
    },
  }
)
  .then((res) => res.json())
  .then((data2) => {
     // console.log(data2)
    let z=data2.results[0].lastPrice;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    ii.style.color="#"+randomColor;
    ii.innerHTML="Current = " +z+ " $";
  })
  .catch((err) => console.log(err.message));

  fetch("https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD",
  {
      method: "GET",
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
  .then((res) => res.json())
.then((data3) => {
    //console.log(data3)
  let z2=(data3.rates.INR).toFixed(2);
  var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
  iii.style.color="#"+randomColor2;
  iii.innerHTML="1 USD= " +z2+ " INR";
})
.catch((err) => console.log(err.message));

var j = setInterval(async () => {
    fetch(
        "https://cors-anywhere.herokuapp.com/https://ondemand.websol.barchart.com/getQuote.json?apikey=71f698950c9cdadc3d19bb7411177a78&symbols=ADBE",
        {
          method: "GET",
          headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => res.json())
        .then((data2) => {
           // console.log(data2)
          let z=data2.results[0].lastPrice;
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          ii.style.color="#"+randomColor;
          ii.innerHTML="Current = " +z+ " $";
        })
        .catch((err) => console.log(err.message));

        fetch("https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?base=USD",
        {
            method: "GET",
            headers: {
              accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-encoding": "gzip, deflate, br",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((res) => res.json())
      .then((data3) => {
          //console.log(data3)
        let z2=(data3.rates.INR).toFixed(2);
        var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
        iii.style.color="#"+randomColor2;
        iii.innerHTML="1 USD= " +z2+ " INR";
      })
      .catch((err) => console.log(err.message));
  }, 5000);

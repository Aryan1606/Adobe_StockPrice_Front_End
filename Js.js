var ii=document.getElementById("output1");
ii.innerHTML=500;
var j = setInterval(async () => {
    //  let url=
    //   "https://www.google.com/async/finance_wholepage_price_updates?ei=SMFHX-K3Id6V4-EPy-qOuA4&yv=3&dfsl=1&async=mids:%2Fm%2F07zm31w,currencies:,_fmt:jspb",
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.google.com/async/finance_wholepage_price_updates?ei=XQpKX5TeCIuG4-EP55-guA8&rlz=1C1CHBD_enIN877IN877&yv=3&async=mids:%2Fm%2F07zm31w,currencies:,_fmt:jspb",
      {
        method: "GET",
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((res) => res.text())
      .then((data2) => {
        console.log("Hello");
        console.log(data2);
        //   console.log(typeof data2);
        //   let bb = JSON.stringify(data2);

        //   console.log(typeof bb);
        //   console.log(bb);
        let a = data2;
        let y = a.indexOf("ADBE");
        console.log();

        let z = a.substring(y + 7, y + 13);
        z = parseFloat(z);
        console.log(z);

        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        //document.body.style.backgroundColor = "#" + randomColor;
        //i.innerHTML = "#" + randomColor;
        ii.style.color="#"+randomColor;

        ii.innerHTML=z;
        i++;
        if (i == 6) clearInterval(j);
        setCount((prevCount) => z);
      })
      .catch((err) => console.log(err.message));
  }, 4000);

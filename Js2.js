const http = require("https");
var ii=document.getElementById("output1");
ii.innerHTML="Stock Price";

const options = {
	"method": "GET",
	"hostname": "alpha-vantage.p.rapidapi.com",
	"port": null,
	"path": "/query?function=GLOBAL_QUOTE&symbol=ADBE",
	"headers": {
		"x-rapidapi-key": "2d93be481amsh67ff5c8e5b9b246p191534jsn3d95e9871b06",
		"x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		let body = Buffer.concat(chunks);
       // console.log(body.toString());
        body=body.toString();
        let y = body.indexOf("price");
       // console.log(y);
        let z = body.substring(y + 9, y + 17);
        console.log(z);
        ii.innerHTML=z;
	});
});

req.end();

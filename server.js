var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require("request");

var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';

app.get('/api/Hotel' , function(req,res) {
	request(url, function(error, response, body) {
		var data = JSON.parse(body);

		for(var i = 0; i < data.offers.Hotel.length;i++) {
			if(data.offers.Hotel[i].hotelInfo.hotelImageUrl===''){
				data.offers.Hotel[i].hotelInfo.hotelImageUrl = 'https://goo.gl/images/ZRkRxG';
			}
		}
		res.json(data.offers.Hotel);
	});
})


app.get('/', function(req, res){
	res.send('welcome')
})

app.listen(port, function () {
	console.log(' app listening on port '+ port);
});
var express = require('express');
var https = require('https')
var app = express();

var request = require("request")

app.get('/api/Expedia' , function(req,res) {
	request('https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel', function(error, response, body) {

		var data = JSON.parse(body);

		res.json(data.offers.Hotel);
	});
})


app.get('/', function(req, res){
	res.send('welcome')
})
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
   console.log('its work')
});
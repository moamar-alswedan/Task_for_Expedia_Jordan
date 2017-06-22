var request = require("request");

module.exports = function (app, express) {
	app.get('/api/expedia',function(req,res){
		var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
		request(url, function (error, response, body){
			var data = JSON.parse(body);
			for(var i = 0; i < data.offers.Hotel.length;i++) {
				if(data.offers.Hotel[i].hotelInfo.hotelImageUrl===''){
					data.offers.Hotel[i].hotelInfo.hotelImageUrl = 'https://goo.gl/9UxSHG';
				}
			}
			res.json(data);
		});
	});
}
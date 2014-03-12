var http = require('http')
var config = require('./config.js')


//Set options for get
var optionsGet = {
	host: 'globalcurrencies.xignite.com',
	path: '/xGlobalCurrencies.json/ListCurrencies?_token=' + config.api_token
};

callback = function(response) {
	var responseString = '';

	response.on('data', function (chunk){
		responseString += chunk
	});

	response.on('end', function (){
		console.log(responseString);
		var data = JSON.parse(responseString);
		var countries = data['CurrencyList'];

		for(var country in countries){
			console.log('\nNext');
			console.log(countries[country]['Name']);
			console.log(countries[country]['Symbol']);
		}
	});
}

http.request(optionsGet, callback).end();
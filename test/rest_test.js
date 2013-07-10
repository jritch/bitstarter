var rest = require('restler');

var loadHtmlUrl = function(weburl) {
    var resultstr = rest.get(weburl).on('complete', function(result) {
        console.log(typeof(result));
        console.log(result);
    });

};

loadHtmlUrl("http://142.150.169.179/agecap/www/websitehome.html");
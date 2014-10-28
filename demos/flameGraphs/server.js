var http = require('http'),
    port = 8080,
    server = http.createServer(),
    primes = require('./primes'),
    aBigNumber = 9007199254740881;

server.on('request', function(request, response){
    if(request.url == '/1'){
        return response.end('' + primes.isPrime1(aBigNumber));
    }

    if(request.url == '/2'){
        return response.end('' + primes.isPrime2(aBigNumber));
    }

    if(request.url == '/3'){
        return response.end('' + primes.isPrime3(aBigNumber));
    }

    response.end();

});

server.listen(port, function(error){
    if(error){
        console.error(error);
        return process.exit(-1);
    }

    console.log('Listening on port: ' + port);
});
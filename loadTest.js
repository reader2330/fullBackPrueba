const loadtest = require('loadtest');
const options = {
    url: 'http://localhost:3000/chain',
    concurrency: 5,
    method: 'POST',
    maxRequests: 100,
    contentType: 'application/json',
    body: {
            "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
    }

};
loadtest.loadTest(options, function(error, result)
{
    if (error)
    {
        return console.error('Got an error: %s', error);
    }
    console.log(result);
    console.log('Tests run successfully');
});

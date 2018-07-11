const express = require('express')

const Twitter = require('twitter')

const rx = require('rxjs')

require('dotenv').config()

const _ = require('lodash')

const app = express()

app.listen(port = 3000, () => console.log('listening on port 3000'))

const new_new = rx.Observable.create((observer) => {
    client = new Twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    })
    params = {track:'javascript', filter_level: 'none'}
    
    stream = client.stream('statuses/filter', params)

    stream.on('data', (data) => {
        observer.next(data);
    });
    
    stream.on('error', (error) => {
        observer.error(error);
    });

    return () => {
        client.close()
    }
});
// new_new.subscribe((data) => {
//     console.log(data);
//     }, (error) => {
//     console.log(error);
//     });
app.get('/api/tweets', (req, res) => {
    new_new.subscribe((data) => {
        res.send(data);
    }, (error) => {
        res.send(error);
    })
})




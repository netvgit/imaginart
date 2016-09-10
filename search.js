"use strict";

const googleImages = require('google-images');

let client = googleImages('006952629256965021975:r5dauwjjjoo', 'AIzaSyBYD2k4FzEvxB_q4aOstWFAyP_KKLGpr-o');

console.log('am i there?');

client.search('php')
    .then(function (images) {
        console.log(images.length);
        console.log(images);
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         */
    });

/*
// paginate results
client.search('Steve Angello', {
    page: 2
});

// search for certain size
client.search('Steve Angello', {
    size: 'large'
});
*/
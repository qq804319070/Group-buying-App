let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
app.listen(3000);

let ad = require('./home/ad');
//广告的接口
app.get('/api/ad', function (req, res) {
    res.send(ad)
});

//fetch(url,{
//  Accept:"application/json"
//  }).then(res=> res.json()).then(data=>{ data  })
//
//
// })

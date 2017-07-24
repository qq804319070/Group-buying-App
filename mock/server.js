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
let list = require('./home/list');
//获取列表 需要传递城市
app.get('/api/list/:city/:page/', function (req, res) {

    setTimeout(function () {
        res.send(list)
    },2000);


});

//fetch(url,{
//  Accept:"application/json"
//  }).then(res=> res.json()).then(data=>{ data  })
//
//
// })
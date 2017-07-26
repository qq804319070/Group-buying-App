let express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express();
app.listen(3000);
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

let ad = require('./home/ad');
//广告的接口
app.get('/api/ad', function (req, res) {
    res.send(ad)
});
let list = require('./home/list');
//获取列表 需要传递城市
app.get('/api/list/:city/:page/', function (req, res) {
    res.send(list)
});

let info = require('./detail/info');
//通过id来获取商户信息
app.get('/api/detail/info/:id', function (req, res) {
    res.send(info)
});

//评价

let commit = require('./detail/comment');

app.get('/api/detail/comment/:id/:page', function (req, res) {
    res.send(commit)
});

//订单列表  参数 订单id

let orderList = require('./orderlist/index');
app.get('/api/orderlist/:id', function (req, res) {

    res.send(orderList);
});

//提交评论
app.post('/api/comment', function (req, res) {
    res.send({msg: 'ok'})
});

let searchInfo = require('./search/index');
app.get('/api/search/:kind/:keyWord', function (req, res) {
    res.send(searchInfo)
});




//fetch(url,{
//  Accept:"application/json"
//  }).then(res=> res.json()).then(data=>{ data  })
//
// })
var express = require('express');
var router = express.Router();
var mysql= require('mysql');
/*主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
  var newslist= req.query.newslist;
  var connection= mysql.createConnection({
  	host:'localhost',
  	port:3306,
  	user:'root',
  	password:'',
  	datebase:'news_php'
  });
  connection.connect();
  connection.query('select * from news_php.news where news_name=?',[newslist],function(err,rows,fields) {
  	if (err) throw err;
  	res.json(rows);
  })
});

module.exports = router;

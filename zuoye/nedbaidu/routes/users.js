var express = require('express');
var router = express.Router();
var mysql= require('mysql');
var connection=mysql.createPool({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	datebase:'news_php'
})
/* 访问后台查询 */
router.get('/selectnews', function(req, res, next) {
   connection.query('select * from news_php.news',function(err,rows) {
   	  res.json(rows);
   })
});
/* 后台修改*/
router.post('/update',function(req,res,next) {
	var news_text=req.body.newstext,
		news_name=req.body.newsname,
		news_source=req.body.newssuccess,
		news_img=req.body.newsimg,
		news_date=req.body.newsdate,
		id=req.body.id;
	connection.query('UPDATE news_php.news SET news_text=?,news_img=?,news_date=?,news_source=?,news_name=? WHERE id=?',[news_text,news_img,news_date,news_source,news_name,id],function(err,rows) {
		res.json(rows);
	})
});
/*后台删除*/
router.post('/delet',function(req,res,next) {
	var id= req.body.id;
	connection.query('DELETE FROM news_php.news WHERE id=?',[id],function(err,rows) {
		res.json(rows);
	})
})
router.post('/inset',function(req,res,next) {
	var news_text=req.body.newstext,
		news_name=req.body.newsname,
		news_source=req.body.newssuccess,
		news_img=req.body.newsimg,
		news_date=req.body.newsdate;
		console.log(news_date);
		connection.query("INSERT INTO news_php.news(news_text,news_img,news_date, news_source,news_name) VALUES (?,?,?,?,?)",[news_text,news_img,news_date,news_source,news_name],function(err,rows) {
			if (!err) {
				res.json(rows);
			}
		})
})
module.exports = router;

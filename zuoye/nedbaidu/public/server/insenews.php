<?php
	header("Content-typ: application/json; charset=utf-8");
	require_once("news.php");
	if (!$con) {	
		die('Could not connect: ' . mysql_error());
	}else{
		$news_name=addslashes(htmlspecialchars($_POST["newsname"]));
		$news_text=addslashes(htmlspecialchars($_POST["newstext"]));
		$news_img=addslashes(htmlspecialchars($_POST["newsimg"]));
		$news_date=addslashes(htmlspecialchars($_POST["newsdate"]));
		$news_source=addslashes(htmlspecialchars($_POST["newssuccess"]));
		insenews($con,$news_text,$news_img,$news_date,$news_source,$news_name);
	}
	function insenews($con,$news_text,$news_img,$news_date,$news_source,$news_name){
			  mysqli_query($con,"SET NAMES utf8");
              $sql="INSERT INTO news(news_text, news_img, news_date, news_source, news_name) VALUES ('{$news_text}','{$news_img}','{$news_date}','{$news_source}','{$news_name}')"; 
              if (!mysqli_query($con,$sql))
              {
             	 die('Error: ' . mysql_error());
              }
            echo json_encode(array('success'=>'OK'));
       } 
	mysqli_close($con);
?>
<?php
	header("Content-typ: application/json; charset=utf-8");
	require_once("news.php");
	if ($con) {
		$newsid=addslashes(htmlspecialchars($_POST["id"]));
		$newstext=addslashes(htmlspecialchars($_POST["newstext"]));
		$newsimg=addslashes(htmlspecialchars($_POST["newsimg"]));
		$newsdate=addslashes(htmlspecialchars($_POST["newsdate"]));
		$newssource=addslashes(htmlspecialchars($_POST["newssuccess"]));
		$newsname=addslashes(htmlspecialchars($_POST["newsname"]));
		updates($con,$newsid,$newstext,$newsimg,$newsdate,$newssource,$newsname);
	}else{
		die('Could not connect: ' . mysql_error());
	}
	function updates($con,$newsid,$newstext,$newsimg,$newsdate,$newssource,$newsname)
	{
		 mysqli_query($con,"SET NAMES utf8");
		 $sql="UPDATE `news` SET `news_text`='{$newstext}',`news_img`='{$newsimg}',`news_date`='{$newsdate}',`news_source`='{$newssource}',`news_name`='{$newsname}' WHERE id={$newsid}";
		 if (!mysqli_query($con,$sql))
              {
             	 die('Error: ' . mysql_error());
              }
		 echo json_encode(array("success"=>"修改成功"));
	}
mysqli_close($con);
?>
<?php
	header("Content-typ: application/json; charset=utf-8");
	require_once("news.php");
	if ($con) {
		$newsid=$_POST["newsid"];
		delecttr($con,$newsid);
	}else{
		die('Could not connect: ' . mysql_error());
	}
	function delecttr($con,$newsid)
	{
		 mysqli_query($con,"SET NAMES utf8");
		 $sql="DELETE FROM news WHERE id={$newsid}";
		 mysqli_query($con,$sql);
		 echo json_encode(array("success"=>"删除成功"));
	}
mysqli_close($con);
?>
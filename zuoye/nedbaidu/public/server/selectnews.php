<?php
	header("Content-typ: application/json; charset=utf-8");
	require_once("news.php");
	if ($con) {
    $newsname=$_POST["newslist"];
    if ($newsname=="list"||$newsname=="") {
        selectsens($con);
    }else{
      selectsen($con,$newsname);
    }
	}else{
		die('Could not connect: ' . mysql_error());
	}
	function selectsen($con,$newsname){
              $sql="SELECT * FROM news WHERE news_name = '{$newsname}'";
               mysqli_query($con,"SET NAMES utf8");
               $result=mysqli_query($con,$sql);
               $senddata=array();
               while($row = mysqli_fetch_assoc($result))
              {
                        array_push($senddata, array(
                          'id'=>$row['id'],
                          'newstext'=>$row['news_text'],
                          'newsimg'=>$row['news_img'],
                          'newsdate'=>$row['news_date'],
                          'newssource'=>$row['news_source'],
                          'newsname'=>$row['news_name'],
                            ));
            }
            echo json_encode($senddata);
        }
  function selectsens($con){
              $sql='SELECT * FROM news';
               mysqli_query($con,"SET NAMES utf8");
               $result=mysqli_query($con,$sql);
               $senddata=array();
               while($row = mysqli_fetch_assoc($result))
              {
                        array_push($senddata, array(
                          'id'=>$row['id'],
                          'newstext'=>$row['news_text'],
                          'newsimg'=>$row['news_img'],
                          'newsdate'=>$row['news_date'],
                          'newssource'=>$row['news_source'],
                          'newsname'=>$row['news_name'],
                            ));
            }
            echo json_encode($senddata);
        }  
   mysqli_close($con);
?>
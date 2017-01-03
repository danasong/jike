-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-12-06 09:25:22
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_php`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `news_text` varchar(255) NOT NULL,
  `news_img` varchar(255) NOT NULL,
  `news_date` date NOT NULL,
  `news_source` varchar(20) NOT NULL,
  `news_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `news_text`, `news_img`, `news_date`, `news_source`, `news_name`) VALUES
(1, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-11-03', '极客学院', '互联网'),
(2, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-10-29', '极客学院e', '推荐'),
(3, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-11-03', '极客学院', '推荐'),
(4, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-11-01', '极客学院', '推荐'),
(5, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-11-03', '极客学院', '本地'),
(6, '习近平在秘鲁国会的演讲（全文）', 'images/2news.jpg', '2016-10-19', '几科学院2', '百家'),
(23, '讲述1111', 'images/2news.jpg', '2016-11-03', '1111222', '百家'),
(24, '测试222333', 'images/2news.jpg', '2016-10-13', '1111222', '百家'),
(25, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/1.jpg', '2016-11-10', '极客', '本地'),
(26, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/2.jpg', '2016-11-02', '极客', '本地'),
(27, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-03', '极客', '推荐'),
(28, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '图片'),
(29, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '娱乐'),
(30, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-01', '极客2', '社会'),
(31, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '推荐'),
(32, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '社会'),
(33, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '军事'),
(34, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/3.jpg', '2016-11-02', '极客', '互联网'),
(35, '习近平同智利总统会谈：建立全面战略伙伴关系', 'images/2.jpg', '2016-11-02', '极客', '互联网'),
(36, '&#60;script&#62;alert(1)&#60;/script&#62;', 'images/2news.jpg', '2016-12-08', '&#60;script&#62;aler', '百家'),
(37, 'ces', 'dsa', '2016-12-01', 'cd', '推荐'),
(38, '', '', '0000-00-00', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

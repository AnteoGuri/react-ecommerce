CREATE DATABASE  IF NOT EXISTS `users` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `users`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: users
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `purchase_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `user_id` int NOT NULL,
  `seller_id` int NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `time_ordered` date DEFAULT NULL,
  `time_sent` date DEFAULT NULL,
  `time_recieved` date DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`purchase_id`),
  KEY `product_seller_idx` (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
INSERT INTO `purchase` VALUES (1,28,7,8,'recieved','2022-10-03','2022-10-06','2022-10-06','Tirana,Albania',2),(2,33,7,8,'recieved','2022-10-03','2022-10-04','2022-10-06','Elbasan,Albania',3),(3,24,7,1,'recieved','2022-10-03','2022-10-12','2022-10-14','sdasdad',5),(4,33,7,8,'recieved','2022-10-03','2022-10-12','2022-10-14','mollas,elbasan',4),(5,30,7,8,'recieved','2022-10-04','2022-10-06','2022-10-06','Albania',4),(6,27,7,8,'recieved','2022-10-04','2022-10-06','2022-10-06','sdadsad',5),(7,22,7,1,'recieved','2022-10-04','2022-10-12','2022-10-14','sdadsdasasddsa',4),(8,23,2,1,'recieved','2022-10-07','2022-10-14','2022-10-14','Tirana',2),(9,26,2,8,'recieved','2022-10-07','2022-10-12','2022-10-14','Tirana',3),(10,22,2,1,'recieved','2022-10-07','2022-10-14','2022-10-14','Tirana',3),(11,25,2,3,'ordered','2022-10-07',NULL,NULL,'Tirana',NULL),(12,28,7,8,'recieved','2022-10-12','2022-10-15','2022-10-15','Tirana',4),(13,22,7,1,'recieved','2022-10-14','2022-10-15','2022-10-15','Tiran',5),(14,29,7,8,'recieved','2022-10-15','2022-10-15','2022-10-15','Grmsh',5),(15,34,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','sada',4),(16,31,7,8,'recieved','2022-10-15','2022-10-15','2022-10-15','sdddd',4),(17,17,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','sadasdas',3),(18,25,7,3,'recieved','2022-10-15','2022-10-15','2022-10-17','sadasdas',4),(19,23,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','adasda',5),(20,32,7,8,'recieved','2022-10-15','2022-10-15','2022-10-15','asdada',3),(21,19,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','AA',4),(22,18,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','dd',2),(23,30,7,8,'recieved','2022-10-15','2022-10-15','2022-10-15','aaa',5),(24,24,7,1,'recieved','2022-10-15','2022-10-15','2022-10-15','aaa',4),(25,25,7,3,'recieved','2022-10-15','2022-10-15','2022-10-17','sadasdas',3),(26,20,7,1,'sent','2022-10-15','2022-10-17',NULL,'aaaads',NULL),(27,23,7,1,'ordered','2022-10-17',NULL,NULL,'ELnb',NULL),(28,17,9,1,'recieved','2022-10-17','2022-10-17','2022-12-02','sdadasd',4),(29,24,9,1,'ordered','2022-10-17',NULL,NULL,'sdsdadad',NULL),(30,24,11,1,'sent','2022-10-17','2022-10-17',NULL,'sadasd',NULL),(31,27,12,8,'ordered','2022-10-17',NULL,NULL,'saadaaddaa',NULL),(32,35,12,1,'recieved','2022-10-17','2022-10-17','2022-10-17','asdsada',5),(33,27,7,8,'ordered','2022-10-18',NULL,NULL,'Mollas',NULL),(36,19,7,1,'ordered','2022-10-18',NULL,NULL,'sadasdas, sadasd, 0022, sadada, sada',NULL);
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-02 15:47:24

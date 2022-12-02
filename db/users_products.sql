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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_seller` int DEFAULT NULL,
  `product_name` varchar(60) DEFAULT NULL,
  `product_description` varchar(300) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `price` double DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id_UNIQUE` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (17,1,'USB-A to USB-D Converter','This USB C to USB adapter is compatible with MacBook Pro after 2016 and MacBook Air after 2018 and most of the laptops, tablets and smartphones with a USB Type C port\nUser Friendly and USB3 Speed: Plug and work','2022-09-18',10,'12340462_800.jpg',11),(19,1,'AirPods Max Green','AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.','2022-09-18',549,'apple_mgyn3am_a_airpods_max_green_1610235.jpg',9),(20,1,'Razer Deathadder Pro ','Razer Deathadder Pro v2\r wireless gaming mouse. Razer Deathadder Pro v2 Razer Deathadder Pro v2  Razer Deathadder Pro v2  Razer Deathadder Pro v2','2022-09-18',70,'razer-deathadder-pro-v2-wireless-gaming-mouse.jpg',44),(22,1,'Logitech Wireless Mouse','Iconic G502 design meets pro-grade LIGHTSPEED wireless for ultra-fast, reliable connectivity. HERO 25K sensor features sub-micron tracking. POWERPLAY compatible for continuous charging both at rest and play.','2022-09-18',150,'g502-lightspeed-gallery-1.png',6),(23,1,'35W Dual USB-C Compact Power Adapter','The 35W Dual USB-C Port Compact Power Adapter allows you to charge two devices at the same time, whether you’re at home, in the office, or on the go. The compact size and folding prongs make it easy to pack and store. Apple recommends using it with MacBook Air. You can also use it with iPhone, iPad,','2022-09-18',59,'21UY+jlgp9L._AC_.jpg',10),(24,1,'Razer Huntsman Mini ','Mechanical gaming keyboard, Razer Huntsman Mini with orange switches and white chassis and keycaps. Also offers adjustable RGB with many default presets.  ','2022-09-19',120,'teclado_mecanico_gaming_razer_huntsman_mini_blanco_clicky_optical_switch_negro_01_l.jpg',20),(25,3,'Red Dragon Keyboardd','All of your keyboard action keys are in one convenient place. No need to worry about misclicked keys. The iconic mechanical keyboard audible clicky with clear tactile feedback of Redragon Blue Switches allows you to master the rhythm of the battlefield and make you the MVP.','2022-09-26',35,'redragon_diti_elite_k585rgb-ks_-_wired_mechanical_gaming_keyboard_myshop-pk-2.jpg',18),(26,8,'Acer SB220Q bi 21.5 Inches Full HD','21.5 inches Full HD (1920 x 1080) widescreen IPS display\nAnd Radeon free sync technology. No compatibility for VESA Mount\nRefresh rate: 75 hertz - Using HDMI port\nZero-frame design; Ultra-thin; 4ms response time; IPS panel\nPorts: 1 x HDMI & 1 x VGA\nAspect ratio - 16:9. Color supported - 16.7 million','2022-09-28',100,'81QpkIctqPL._AC_SY450_ (1).jpg',10),(27,8,'HyperX QuadCast - USB Gaming Microphone','Radiant red lighting with dynamic effects: Stunning red lighting and dynamic effects for an eye-catching shot of customizable style.\nBuilt-in anti-vibration shock mount: Isolate the mic and suppress the sound of unintentional rumbles and bumps with the elastic rope suspension.\n','2022-09-28',110,'61jLNwAULdL.jpg',8),(28,8,'Razer Headphones with Mic','Enjoy superior sound clarity and deep, punchy bass for a wide soundscape. From subtle footsteps sneaking up behind you to climatic explosions that blow you away, every sound detail is heard when you’re gaming with the Razer Kraken','2022-09-28',70,'51sooVbawtL._SL1000_.jpg',10),(29,8,'RAZER KRAKEN KITTY EDITION','Create the purrfect gaming look with your own killer kitty style. Express your own unique personality and passion in the most colorful way imaginable with the Razer Kraken Kitty Edition—a USB gaming headset with highly customizable lighting that’s every shade of awesome.','2022-09-28',111,'razer-kraken-bt-kitty-edition.png',20),(30,8,'GOLDEN FIELD Z20 Computer Case','GOLDEN FIELD Z20 Computer Case with 3 RGB Fans Mid Tower Gaming PC Case EATX/ATX/MATX/ITX Tempered Glass Side Panel Swing Open Door Design','2022-09-28',108,'download.jfif',17),(31,8,'BATTLESTATION GAMING DESK','Electric height-adjustable L-shaped gaming desk comes with full surfaced mouse pads for the main and side desks. The lighting effects of the RGB mouse pad on the main desk is controllable via software. Exterior design and functionalities conceptualized for both multi-monitor gaming setups and office','2022-09-28',450,'toughdesk500lrgb_01_1.jpg',18),(32,8,'Havit RGB Headphones Stand','Havit RGB Headphones Stand with 3.5mm AUX and 2 USB Ports, Headphone Holder for Gamers Gaming PC Accessories Desk','2022-09-28',24,'Havit-RGB-Headphones-Stand-with-3-5mm-AUX-and-2-USB-Ports-Headphone-Holder-for-Gamers.jpg',18),(33,8,'Level 20 RGB Gaming Mouse Pad','The Level 20 RGB gaming mouse pad is designed with a specially optimized surface design that delivers superior tracking and accuracy for balanced gameplay.','2022-09-28',10,'l20mousepad01.jpg',14),(34,1,'CityLite laptop bag','Lightweight and stylish laptop shoulder bag perfect for protecting your tech on-the-go\nMulti-fit laptop cradle securely holds laptops and devices from 12” to 15.6”\nAdditional file section and mesh pockets for clever compact storage','2022-10-01',20,'0044250_citylite-laptop-bag-best-for-work-commute-or-university-fits-up-to-156-laptop-grey.jpeg',19),(35,1,'Gaming Chair','Gaming chair ergonomic, racing style. Comfort, durability, reliability. switches and white chassis and keycaps. Also offers adjustable RGB with many default presets.','2022-10-17',250,'maxresdefault (4).jpg',9),(36,1,'Playtstation 5 ','The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback','2022-10-17',400,'P5HEHWSNY39500_ps5_console_04-600x665-1-1.jpg',10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2022 at 08:32 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company`
--

-- --------------------------------------------------------

--
-- Table structure for table `developmentgroups`
--

CREATE TABLE `developmentgroups` (
  `groupId` int(11) NOT NULL,
  `groupName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `developmentgroups`
--

INSERT INTO `developmentgroups` (`groupId`, `groupName`) VALUES
(1, 'ReactTeam'),
(2, 'UITeam'),
(3, 'MobileTeam');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingsId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `startTime` datetime NOT NULL,
  `endTime` datetime NOT NULL,
  `meetingDescription` varchar(100) NOT NULL,
  `meetingRoom` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingsId`, `groupId`, `startTime`, `endTime`, `meetingDescription`, `meetingRoom`) VALUES
(1, 1, '2022-03-30 18:00:00', '2022-03-30 19:00:00', 'View projects', 'roomOne'),
(2, 2, '2022-03-29 17:00:00', '2022-03-29 19:00:00', 'Designing designs', 'roomTwo'),
(3, 3, '2022-03-28 16:30:00', '2022-03-24 17:21:39', 'Salaries', 'roomTree'),
(4, 1, '2022-03-08 21:20:00', '2022-03-06 21:20:00', 'sd', 'one');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  ADD PRIMARY KEY (`groupId`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingsId`),
  ADD KEY `groupId` (`groupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  MODIFY `groupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`groupId`) REFERENCES `developmentgroups` (`groupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

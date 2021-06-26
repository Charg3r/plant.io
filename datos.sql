-- MySQL Script generated by MySQL Workbench
-- Wed Nov 25 18:57:35 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
drop database plantio;
CREATE SCHEMA IF NOT EXISTS `plantio` DEFAULT CHARACTER SET utf8 ;
USE `plantio` ;

-- -----------------------------------------------------
-- Table `mydb`.`planta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `plantio`.`planta` (
  `idPlanta` INT NOT NULL,
  `umbralTemperatura` INT NULL,
  `umbralLuz` INT NULL,
  `umbralHumedad` TINYINT NULL,
  PRIMARY KEY (`idPlanta`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`sensorHumedad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `plantio`.`sensorHumedad` (
  `idHumedad` INT NOT NULL,
  `indiceHumedad` TINYINT NULL,
  `date` DATE NULL,
  `time` TIME NULL,
  `planta_idPlanta` INT NOT NULL,
  PRIMARY KEY (`idHumedad`),
  INDEX `fk_sensorHumedad_planta_idx` (`planta_idPlanta` ASC),
  CONSTRAINT `fk_sensorHumedad_planta`
    FOREIGN KEY (`planta_idPlanta`)
    REFERENCES `plantio`.`planta` (`idPlanta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`sensorLuz`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `plantio`.`sensorLuz` (
  `idLuz` INT NOT NULL,
  `indiceLuz` TINYINT NULL,
  `date` DATE NULL,
  `time` TIME NULL,
  `planta_idPlanta` INT NOT NULL,
  PRIMARY KEY (`idLuz`),
  INDEX `fk_sensorLuz_planta1_idx` (`planta_idPlanta` ASC),
  CONSTRAINT `fk_sensorLuz_planta1`
    FOREIGN KEY (`planta_idPlanta`)
    REFERENCES `plantio`.`planta` (`idPlanta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`sensorTemperatura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `plantio`.`sensorTemperatura` (
  `idTemp` INT NOT NULL,
  `indiceTemp` INT NULL,
  `humedadAmbiental` TINYINT NULL,
  `date` DATE NULL,
  `time` TIME NULL,
  `planta_idPlanta` INT NOT NULL,
  PRIMARY KEY (`idTemp`),
  INDEX `fk_sensorTemperatura_planta1_idx` (`planta_idPlanta` ASC),
  CONSTRAINT `fk_sensorTemperatura_planta1`
    FOREIGN KEY (`planta_idPlanta`)
    REFERENCES `plantio`.`planta` (`idPlanta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
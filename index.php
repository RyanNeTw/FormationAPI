<?php
require __DIR__ . "/inc/bootstrap.php";
 
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );
 
 
require PROJECT_ROOT_PATH . "/Controller/Api/FormationController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/PartipantController.php";
 
$objFeedControllerFormation = new FormationController();
$objFeedControllerParticipant = new PartipantController();
$strMethodName = $uri[3] . 'Action';
$objFeedControllerFormation->{$strMethodName}();
$objFeedControllerParticipant->{$strMethodName}();²
?>
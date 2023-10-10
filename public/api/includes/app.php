<?php 
require __DIR__ . "/../../api/vendor/autoload.php";

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

require_once 'config/db.php';

$db = conectarDB();

<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type");

    require_once __DIR__ . "/../../includes/app.php";
    require_once __DIR__ . "/../../vendor/autoload.php";
    
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->safeLoad();

    use Firebase\JWT\JWT;

    if($_SERVER['REQUEST_METHOD'] === "POST") {

        if(!isset($_POST['email']) || empty($_POST['email']) || !isset($_POST['pass']) || empty($_POST['pass'])) {
            http_response_code(400);
            exit;
        } else {

            $emailLogin = $_POST['email'];
            $passLogin = $_POST['pass'];

            $query = "SELECT * FROM users WHERE email = '$emailLogin' LIMIT 1";
            $response = $db->query($query);
            $user = $response->fetch(PDO::FETCH_ASSOC);

            $userEmail = $user['email'];
            $userPass = $user['pass'];

            if(!$user['id']) {
                http_response_code(400);
                exit;
            }

            $verifiedPass = password_verify($passLogin, $userPass);
            
            if($verifiedPass) {
                $payload = array(
                    "user_id" => $user['id'],
                    "email" => $userEmail
                );

                $secret_key = $_ENV['JWT_KEY'];
                $token = JWT::encode($payload, $secret_key, 'HS256');

                echo $token;
            } else {
                http_response_code(401);
                exit;
            }
            
        }
    } else {
        http_response_code(405);
    }

?>
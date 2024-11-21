<?php
session_start();

$servername ="localhost";
$username = "root";
$password ="";
$database ="signup_page";

$conn = mysqli_connect($servername,$username,$password,$database);

if (!$conn){
    die("sorry failed to connect: ".mysqli_connect_error());
}

$showalert = false;
$errors = array();
$user_name="";
if(isset($_POST['signup']))
{
    $user_name = mysqli_real_escape_string($conn, $_POST['username']);
    $pass = mysqli_real_escape_string($conn, $_POST['password']);
    $cpassword = mysqli_real_escape_string($conn, $_POST['cpassword']);

    if (empty($user_name)) { array_push($errors, "Username is required"); }
    if (empty($pass)) { array_push($errors, "Password is required"); }
    if ($pass != $cpassword) {
	array_push($errors, "The two passwords do not match");
  }
  $user_check_query = "SELECT * FROM users WHERE username='$user_name' LIMIT 1";
  $result = mysqli_query($conn, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // if user exists
    if ($user['username'] === $user_name) {
      array_push($errors, "Username already exists");
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$passwor = md5($pass);//encrypt the password before saving in the database

  	$query = "INSERT INTO users (username, password) 
  			  VALUES('$user_name', '$password')";
  	mysqli_query($conn, $query);
  	$_SESSION['username'] = $user_name;
  	$_SESSION['success'] = "You are now logged in";
  	header('location: index.php');
  }
}



?>



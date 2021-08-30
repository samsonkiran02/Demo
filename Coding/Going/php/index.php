<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>

<body>
    <form action="email.php" method="post" name="contactform">
        <p>First Name *</p>
        <p><input maxlength="50" name="first_name" size="30" type="text" /></p>
        <p>Last Name *</p>
        <p><input maxlength="50" name="last_name" size="30" type="text" /></p>
        <p>Telephone</p>
        <p><input maxlength="30" name="telephone" size="30" type="text" /></p>
        <p>Email Adress *</p>
        <p><input maxlength="80" name="email" size="30" type="email" /></p>
        <p>Message *</p>
        <p><textarea cols="25" maxlength="1000" name="comments" rows="6"></textarea></p>
        <p><input type="submit" value="Submit" /></p>
    </form>
</body>

</html>

<?php
    $name=$_POST['Nome'];
    $email=$_POST['E-mail'];
    $assunto=$_POST['Assunto'];
    $menssagem=$_POST['Menssagem'];
  
    echo "NAME-SUBMITTED : $name <br>";
    echo "E-MAIL-SUBMITTED : $email <br>";
    echo "ASSUNTO-SUBMITTED: $assunto";
    echo "MENSSAGEM-SUBMITTED: $menssagem";
?>
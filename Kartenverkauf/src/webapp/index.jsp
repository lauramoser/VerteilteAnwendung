<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Connection"%>
<%@page import="javax.sql.DataSource"%>
<%@page import="de.demo.Seat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="Kartenverkauf.js"></script>
<title>Kartenverkauf</title>
</head>

<body>
<h1>Kartenverkauf</h1>

<table id= "tabelle" border="1">
	<tbody id="tabelleBody"></tbody>
</table>
<br>
<div id="reservationacceptance"></div>
<br>
<button type="button" style="background-color: #F4F3B3; color: black" >free</button>
<button type="button" style="background-color: #F0812A; color: black">reserved</button>
<button type="button" style="background-color: #A73B3B; color: black">sold</button>

<form action="javascript:kaufe()" method="post">
<label for="nr">Seat number:</label>
<input type="text" id="nr" name="nr">
<label for="name">Name</label>
<input type="text" id="name" name="name">
<input type="hidden" name="formular" value="kaufe">
<input type="submit" value="kaufen">
<br><br>
</form>

<form action="javascript:reservieren()" method="post">
<label for="nr">Seat number:</label>
<input type="text" id="nr" name="nr">
<label for="name">Name</label>
<input type="text" id="name" name="name">
<input type="hidden" name="formular" value="reservieren">
<input type="submit" value="reservieren">
<br><br>
</form>

<form action="javascript:kaufeReserviert()" method="post">
<label for="nr">Seat number:</label>
<input type="text" id="nr" name="nr">
<input type="text" id="name" name="name">
<input type="hidden" name="formular" value="kaufeReserviert">
<input type="submit" value="kaufe Reservierung">
<br><br>
</form>

<form action="javascript:stornieren()" method="post">
<label for="nr">Seat number:</label>
<input type="text" id="nr" name="nr">
<input type="hidden" name="formular" value="stornieren">
<input type="submit" value="stornieren">
<br><br>
</form>

<form action="javascript:hebeReservierungenAuf()" method="post">
<input type="hidden" name="formular" value="hebeReservierungAuf">
<input type="submit" value="hebe alle Reservierungen auf">
<br><br>
</form>

<form action="javascript:initialisieren()"  method="post">
<input type="hidden" name="formular" value="initialisieren">
<input type="submit" value="initialisiere">
<br><br>
</form>

<div id= "message-element"></div>
<p id="error"></p>

</body>
</html>

window.addEventListener("load",refresh());

function kaufe(){
	let nr = document.getElementById("nr");
	let name = document.getElementById("name");
	fetch("/rest/kartenverkauf/kaufe?nr=" + nr.value +"&name=" + name.value).then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "Kaufen war erfolgreich";
	} else {
		kAlert("ERROR: Operation kaufe war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function reservieren(){
	let nr = document.getElementById("nr");
	let name = document.getElementById("name");
	fetch("/rest/kartenverkauf/reservieren?nr=" + nr.value +"&name=" + name.value).then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "Reservieren war erfolgreich";
	} else {
		kAlert("ERROR: Operation reservieren war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function kaufeReserviert(){
	let nr = document.getElementById("nr");
	let name = document.getElementById("name");
	fetch("/rest/kartenverkauf/kaufeReserviert?nr=" + nr.value +"&name=" + name.value).then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "Reservierung kaufen war erfolgreich";
	} else {
		kAlert("ERROR: Operation Reservierung kaufen war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function stornieren(){
	let nr = document.getElementById("nr");
	fetch("/rest/kartenverkauf/stornieren?nr=" + nr.value).then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "stornieren war erfolgreich";
	} else {
		kAlert("ERROR: Operation stornieren war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function hebeReservierungenAuf(){
	fetch("/rest/kartenverkauf/hebeReservierungenAuf").then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "Reservierung war erfolgreich";
	} else {
		kAlert("ERROR: Operation hebe Reservierungen auf war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function initialisieren(){
	fetch("/rest/kartenverkauf/initialisieren").then(response => {response.text().then(text => {
	if (response.ok) {
		document.getElementById("message-element").innerHTML = "Operation initialisieren war erfolgreich";
	} else {
		kAlert("ERROR: Operation initialisieren war nicht erfolgreich", 500);
	}
	});
	});
	refresh()
}

function kAlert(msg, duration) {
    var ec = document.getElementById("error");
    ec.setAttribute("style",  "position:absolute;top:40%;left:20%;background-color:white;");
    ec.innerHTML = msg;
    setTimeout(function() {
        ec.parentNode.removeChild(ec);
    }, duration);
    document.body.appendChild(ec);
}

function refresh(){
	  fetch("/rest/kartenverkauf/getSeats").then(response => {response.text().then(text => {
        let seats = JSON.parse(text)
		tbl = document.getElementById("tabelle");
		tblbody = document.getElementById("tabelleBody");
		tblbody.innerHtml= "";
		number = 1;
		counter = 0;
		
		for (row = 0; row < 10; row++) {
		
		    tblbody.innerHTML += "<tr>"
	
		    for (col = 0; col < 10; col++) {
			
		        color = "";
		
		        if (seats[counter].status == "free") {
		            color = "#F4F3B3";
		        } else if (seats[counter].status == "reserved") {
		            color = "#F0812A";
		        } else {
		            color = "#A73B3B";
		        }
		        tblbody.innerHTML += "<td style= background-color:" + color + ">" + number++ +"</td>";
				counter++
		    }
			tblbody.innerHTML += "</tr>"
		}
	});
	});
	fetch("/rest/kartenverkauf/reserveboolean").then(response => {response.text().then(text => {
		let reservierung = document.getElementById("reservationacceptance");
		if (text == "true") {
       		reservierung.innerHTML="Reservierungen können noch angenommen werden";
		}else {
			reservierung.innerHTML="Reservierungen können nicht mehr angenommen werden";
		}
	});
	});
}





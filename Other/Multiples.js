var color_td;
document.getElementById("table").innerHTML("<table border='1px'>");

for(var i = 1; i <= 10; i++) {

	document.getElementById("table").innerHTML("<tr style='height:30px;'>");

	for(var j = 1; j <= 10; j++) {

		if(j == 1 || i == 1) {
			color_td = "#ccc";
		}
		else {
			color_td = "#fff";
		}

		document.getElementById("table").innerHTML("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
	}
	document.getElementById("table").innerHTML("</tr>");
}

document.getElementById("table").innerHTML("</table>");
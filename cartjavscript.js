function displaycart(){
 	var output =" ";
 	for(var i in cart){
 		output += "<p>"+window.cart[i].name+" "+window.cart[i].description+"</p>"
 	}
 	document.getElementById("cartcontent").innerHTML = output;
 }
 displaycart();
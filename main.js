function Item(name,description,price){
	this.name=name;
	this.description=description;
	this.price=price;
}

 window.cart=[];


function addItemToCart(name,description,price){ 
	var item= new Item(name, description, price);
	window.cart.push(item);
}

$(".addtocart").click(function(event){
	event.preventDefault();
	var name = $(this).attr('data-name');
	var description = $(this).attr('data-description');
	var price= $(this).attr('data-price');
	addItemToCart(name, description, price); 
});
 
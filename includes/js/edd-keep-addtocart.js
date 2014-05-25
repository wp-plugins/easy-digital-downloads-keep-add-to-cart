jQuery(document).ready(function($) {
   
   //Make the add to cart button display even if EDD is trying to hide it
	$( 'a.edd-add-to-cart').css( 'display', '' );
	
	//When the ajax add to cart in EDD is clicked
	 $('body').on('click.eddAddToCart', '.edd-add-to-cart', function (e) {
		 
		 //Hide the add to cart button temporarily
		 $( this ).css('display', 'none' );
	 });
	 
	//When a new item has been added to the cart using ajax in EDD
	$(document).on('edd_quantity_updated', function(event){
		 setTimeout(function () {
			 //Show the add to cart button again
			$( 'a.edd-add-to-cart').css('display', 'inline-block' );
		}, 3500);
	});
	
});
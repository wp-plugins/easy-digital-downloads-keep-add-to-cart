jQuery(document).ready(function($) {
   
    //Make the add to cart button display even if EDD is trying to hide it
	$( 'a.edd-add-to-cart').css( 'display', '' );
	
	var original_addtocart_text = $('.edd-add-to-cart').find('.edd-add-to-cart-label').html();
	
	//We'll need to store which button was clicked because the "updated" trigger from EDD dosn't give us a button context
	var edd_keep_addtocart_button;
	
	//When the ajax add to cart in EDD is clicked
	 $('body').on('click.eddAddToCart', '.edd-add-to-cart', function (e) {
		 
		 //Store which button was clicked so we can update it upon the "updated" trigger from edd
		 edd_keep_addtocart_button = $(this);
		 
		 //Show "Adding to Cart" on the button
		 $( this ).find('.edd-add-to-cart-label').html( edd_keep_addtocart_vars.adding_to_cart_message );
	 });
	 
	//When a new item has been added to the cart using ajax in EDD
	$(document).on('edd_quantity_updated', function(event){
		
		//Show "Successfully added" message on the button
		edd_keep_addtocart_button.find('.edd-add-to-cart-label').html( edd_keep_addtocart_vars.sucessfully_added_message );
			
		setTimeout(function () {			
			//Show the "add to cart" button text again
			edd_keep_addtocart_button.find('.edd-add-to-cart-label').html( original_addtocart_text );
	
		}, 1000);
	});
	
});
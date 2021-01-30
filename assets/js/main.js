/*---------------------------------------
Home/index
---------------------------------------------*/
$(`#word`).on(`animationend`, function() {
	$(`a img`).trigger(`click`);
});

    	
/*---------------------------------------
Welcome
---------------------------------------------*/
$('header').hide().slideDown(2000);

/*---------------------------------------
Event
---------------------------------------------*/
$('#cvibe').width(0).height(0).css('opacity',0);
$('.head').hide();
$('#cvibe').animate(
	{
		width: '400px',
		height: '300px',
		opacity: 1
	},
	1000,
	function() {
		$('.head').fadeIn(1000);
	}
	);
	

/*---------------------------------------
Venue
---------------------------------------------*/
$(document).ready(function() {

$('#gallery a').click(function(evt) {
	evt.preventDefault();
	var imgPath = $(this).attr('href');
	var oldImage = $('#photo img');
	var newImage = $('<img src="' + imgPath +'">');
		newImage.hide();
		$('#photo').prepend(newImage);
		newImage.fadeIn(1000);
		oldImage.fadeOut(1000,function(){
	$(this).remove();
				});
});
	$('#gallery a:first').click();
});


/*---------------------------------------
Register
---------------------------------------------*/

$('#purchase').click(function(e) {
	
	var  $name = $('#name').val();

	if($name.length === 0){
		e.preventDefault();
		
	}
	$('#customer').text('Thank you ' + $name + ' for your purchase! ');
});


//submit email

$('#yes').click(function(e) {
	
	var yes = $('input#yes:checked').val();

	$('#email').prop('disabled', false).css({
		"backgroundColor": "red"
	});
 
	
	$ ("input:radio").each(function(){
		
		$('#done').text('Also You will be receiving a Colors Event Email @');
		
	});
});

$('#no').click(function(){
	$('#email').prop('disabled', true).css({'backgroundColor': '#ccc'});
});


//Event Select
	
	$('#purchase').on('click', function() {
		
		let item = $('#eventPick').val();
		
		console.log(item);
		// dates.push(item);
		// console.log(dates);
		
		$('#checkout').append('<p>' + item + '</p>');
		
 });


//submit purchase

$('#purchase').click(function() {

var cost = 25;
var totalPasses = Number.parseInt($('#quantity').val());
var addTotal = cost * totalPasses;
var email = $('#email').val();
	
console.log(cost,totalPasses,addTotal);

$('#total').text('You purchased ' + totalPasses + ' tickets.  Your total is $ ' + addTotal);
$('#youremail').text(email);

});


	// focus first field
  $(':text:first').focus();

  //enable credit card info
$('#visa, #debit, #mastercard').click(function() {
	$('#cardnumber').prop('disabled', false).css('backgroundColor','turquoise');
	$('#cardnumber').css('color','purple');
	$('#cardnumber').focus();
}); // end click()

$('#name').click(function() {
	$('#name').prop('disabled', false).css('backgroundColor','turquoise');
	$('#name').css('color','purple');
	$('#name').focus();
}); // end click()name

$('#address').click(function() {
	$('#address').prop('disabled', false).css('backgroundColor','turquoise');
	$('#address').css('color','purple');
	$('#address').focus();
}); // end click()address

$('#city').click(function() {
	$('#city').prop('disabled', false).css('backgroundColor','turquoise');
	$('#city').css('color','purple');
	$('#city').focus();
}); // end click()city


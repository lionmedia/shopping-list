$( document ).ready(function() {
    
// use enter to add list items
	$('#item-name' , '#item-numb').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#add').click();
		};
	});	

//add list items
	$('#add').click(function(){
		var txtbox = document.getElementById('item-name');
		var txtval = txtbox.value;
		//var txtnumb = document.getElementById('item-numb');
		//var txtval2 = txtnumb.value;
		event.preventDefault();

		if(!$.trim($('#item-name').val())) {
			alert('Please enter a grocery list item');
		} else {

			$('<li id="item"></li>').appendTo('#item-list').html('<div id="item-check"><i class="fa fa-check"></i></div><div id="item-delete"><i class="fa fa-times"></i></div><span>' + txtval + '</span></li>');


		document.getElementById('item-name').value = '';
		//document.getElementById('item-numb').value = '1';
		};

//sortable list items
	$('#item-list').sortable();
	$( "#sortable" ).disableSelection();
	});

//delete list items
	$('#item-list').on('click', '#box-delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
	$('#item-list').on('click', '#item', 'span', function(){$(this).toggleClass('strike'); $(this).children('#item').toggleClass('checked'); });

});


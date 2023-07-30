// js




// jq
$(document).ready(function(){

  $('hw').on("click",function(){
  	alert("hlw world")
  });


  $('#mrindia').on("click",function(){
  	$('h2').hide();
  });

  $('#khuljasimsim').on("click",function(){
    $('h2').show ();
  });

$('#toggle').on("click",function(){
  	$('h2').toggle();
  });3


  $('#mrindiaf').on("click",function(){
    $('h3').fadeOut();
  });



  $('#khuljasimsimf').on("click",function(){
  	$('h3').fadeIn();
  });

$('#togglef').on("click",function(){
  	$('h3').fadeToggle();
  });

// ..

 $('.qus').on("click",function(){
  $('.ans').slideToggle(3000);
 });
 $( "#draggable" ).draggable();

   $( "#accordion" ).accordion({
    collapsible: true});
   // 
  

     $( "#sortable" ).sortable()
      $( "#sortable" ).disableSelection();

     $( "#datepicker" ).datepicker();
       $( document ).tooltip();
       $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

     $( "#menu" ).menu();

        

 });
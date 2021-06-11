$( document ).ready(function() {

    console.log( "ready!" );

    $( ".changebtn1" ).click(function() {
        console.log("change btn 1 clicked");
        $(".box1").addClass("newbox1");
    });

    $( ".changebtn2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".box2").css({"background":"red","border":"2px solid blue"});
    });

    $( ".changebtn3" ).click(function() {
        console.log("change btn 3 clicked");
    });

    $( ".changebtn4" ).click(function() {
        console.log("change all btn clicked");
    });

});
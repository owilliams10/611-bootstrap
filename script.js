$( document ).ready(function() {

    console.log( "ready!" );

    $( ".changebtn1" ).click(function() {
        console.log("change btn 1 clicked");
        $(".box1").addClass("newbox1");
    });

    $( ".changebtn2" ).click(function() {
        console.log("change btn 2 clicked");
        $(".box2").addClass("newbox2");
    });

    $( ".changebtn3" ).click(function() {
        console.log("change btn 3 clicked");
        $(".box3").addClass("newbox3");
    });

    $( ".changebtn4" ).click(function() {
        console.log("change all btn clicked");
        $(".changeAllGrpMmbr").addClass("allBoxesChange");
    });

    $( ".hidebtn1" ).click(function() {
        $(".box1").addClass("hiddenBox");
    });

    $( ".hidebtn2" ).click(function() {
        $(".box2").addClass("hiddenBox");
    });

    $( ".hidebtn3" ).click(function() {
        $(".box3").addClass("hiddenBox");
    });

    $( ".hidebtn4" ).click(function() {
        $(".changeAllGrpMmbr").addClass("allBoxesHide");
    });

    $( ".showall" ).click(function() {
            $(".showAllGrpMmber").removeClass("allBoxesHide");
            $(".showAllGrpMmber").removeClass("hiddenBox");
    });

    $( ".resetcolors" ).click(function() {
        console.log("change all btn clicked");
        $(".changeAllGrpMmbr").removeClass("allBoxesChange");

        $(".box1").removeClass("newbox1");
        $(".box2").removeClass("newbox2");
        $(".box3").removeClass("newbox3");
    });
       

});

    

    




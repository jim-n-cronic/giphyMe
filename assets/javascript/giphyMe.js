$(document).ready(function() {

//initial array of gif buttons
var gifs = ["trump", "dave chappelle", "elmer fudd", "bugs bunny"];

    function displayGifs() {
    
    var gif = $(this).attr("data-gif");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&apikey=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        
        $("#gif-view").text(JSON.stringify(response));
        console.log(gifs);
        
       var results = response.data;

       for (var i = 0; i < results.length; i++) {
           
           if(results[i].rating !== "r" && results[i].rating !== "pg-13") {
               var gifDiv = $("<div>");
               var rating = results[i].rating;
               var p = $("<p>").text("Rating: " + rating);
               var gifImage = $("<img>");
               gifImage.addClass("giphyJiffy");


               gifImage.attr("src", results[i].images.fixed_height.url);
               gifImage.attr("data-state", "animate");
               
               
               gifDiv.append(p);
               gifDiv.append(gifImage);
               
               $("#gifs-view").prepend(gifDiv);
                /*   gifImage.on('click', function() {
                       $(this).attr("src", results[i].images.fixed_hight_still.url);
                   })
                */   
               console.log(response);
            }
        }
    });
}


function renderButtomns() {
    $("#buttons-view").empty();
    $("#gif-input").val("");
    
    for (var i = 0; i < gifs.length; i++) {
        
        //generate buttons for each in the array.
        //create button 
        var a = $("<button>");
        //add class to the newlyMadeButton
        a.addClass("gif");
        //add the data attribute
        a.attr("data-gif", gifs[i]);
        //provides initial buttons' text
        a.text(gifs[i]);
        //add buttons to buttons-view div
        $("#buttons-view").append(a);
    }
}

//handles events when buttons is clicked
$("#add-gif").on('click', function(event) {
    event.preventDefault();
    
    //grab input from text input
    var gif = $("#gif-input").val().trim();
    
    //add  from textbox to array
    gifs.push(gif);
    console.log(gifs);
    
    //call render buttons fn
    renderButtomns();
})


//function to pause/play gifs::


$(document).on('click', ".giphyJiffy", function() {
    var state = $(this).data("state");
    //var aniGif = $("<img>");
    console.log(state);
    
    
    






   /*
    gifImage.attr("src", results[i].images.fixed_height_still.url);
    gifImage.attr("data-state", "still");
    */
});

//function that handles displaying gifs
    $(document).on('click', ".gif", displayGifs);
    
    //call on renderbuttons fucntion
    renderButtomns();
    
    
    
})





/*
        if (state === "still") {
            console.log("kjshdkjhskdj")
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "hello");
            console.log($(this).data("state"))
        } else {
            console.log("yo wtf");
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
            console.log("data-state", "still");
        }
*/        
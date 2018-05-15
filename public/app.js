// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#articles").append("<li data-id='" + data[i]._id + "'>" + '<div style="display: block; " class="collapsible-header green lighten-2"><h5 class="green-text text-darken-3">' + data[i].headline + '</h5><a class="right waves-effect waves-light btn saveBtn">Save article</a>' + `<br></div>
      <div class="collapsible-body"><span>` + data[i].summary+ `</span></div>`+ "</li>");
    }
});
  
$(document).ready(function(){
    $('.collapsible').collapsible();

    $(".button-collapse").sideNav();
});

$(document).on("click","saveBtn", function(){
    
});

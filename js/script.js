var $carousel = $('#myCarousel');

$(document).ready(function() {
    $(".test").click(function() {
       //load content from some page
       e.preventDefault(); // prevents going to new page when clicking on link
       $(".content").load("html/caseStudy.html");
    });
  });


function start(){
    $("#menu a:first").click(); // when the document loads it starts with the first page in the list or "clicks" it automatically
}

$(window).on("load", start); // pay attention browser >_>

function loadpage(e){
    e.preventDefault(); // prevents going to new page when clicking on link
    $(".menu a.active").removeClass("active"); // When on the about page, remove active class (remove highlight)
    $(this).addClass("active"); // Whatever page you are on, make the button active (add highlight)

    let href = $(this).attr("href"); //Let whatever page you are on be stored in href variable
    $(".content").load(href); //Load the content of the page be replaced with the contents of the href variable
}

$(document).on("click", "#menu a", loadpage); // Activate loadpage function when any link/button on nav has been clicked


function slideHeader(e) {
    var index = $(e.target).find(".active").index();
    if(index === 0){
        $('.carouselHeading').text('Make a Meal'); 
        $('.carouselSubheading').text('Learn to cook with Mama Maker'); 
    }
    if(index === 1){
        $('.carouselHeading').text('Coffee Date'); 
        $('.carouselSubheading').text('A cafe to share moments with'); 
    }
    if(index === 2){
        $('.carouselHeading').text('Arisen'); 
        $('.carouselSubheading').text('A mask company that rises up together');
    } 
}

$(document).on('slid.bs.carousel', $carousel, slideHeader);



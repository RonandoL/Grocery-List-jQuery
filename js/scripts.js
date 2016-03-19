$(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var list = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
    var orderedList = [];
    $('.grocery-input').toggle();
    $('#results').toggle();

    list.forEach(function(item) {
      var userInput = $('input.' + item).val().toUpperCase();
      orderedList.push(userInput);
    });
    orderedList.sort();

    orderedList.forEach(function(item) {
      $('.results').append('<li>' + item + '</li>');
    });

  });


  // Jumbotron background image - goes inside UI Logic
  var jumboHeight = $('.jumbotron').outerHeight();
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }

    $(window).scroll(function(e){
        parallax();
    });

});

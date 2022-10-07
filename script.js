var card = $('.logo');
var p = $('.description');

var oldText = 'Descrubre nuevas ideas'

var newText = 'Estas invitado'

card.on('mouseenter', function() {
  
  TweenMax.to(p, 1, {
    text: newText
  });
  
});

card.on('mouseleave', function() {
  
  TweenMax.to(p, 1, {
    text: oldText
  });
  
});


lightGallery(document.getElementById('lightgallery'))
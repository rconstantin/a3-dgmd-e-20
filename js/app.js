var counter = 0;
var images = ['zero','one','two','three','four','five','six','seven','eight'];
var images1 = ['one_0','one_1','one_2','one_3','one_4','one_5','one_6','one_7','one_8','one_9'];
var images2 = ['two_0','two_1','two_2','two_3','two_4','two_5','two_6','two_7','two_8','two_9'];
var images3 = ['three_0','three_1','three_2','three_3','three_4','three_5','three_6','three_7','three_8'];
var images4 = ['four_0','four_1','four_2','four_3','four_4','four_5','four_6','four_7','four_8','four_9', 'four_91','four_911','four_92','four_93','four_94','four_95'];
var images5 = ['five_0','five_1','five_2','five_3','five_4','five_5','five_6','five_7','five_8','five_9'];


$(document).ready(function() {
      $('#logo-btn').click(function(){
            $('#family-img').attr({
                  'src': 'images/family1.jpg',
                  //'class': 'ui-block-b'
            }); //end of family img attr
            //$('#logo-btn').addClass('hidden');
            $('#logo').addClass('ui-bar ui-bar-a');
            $('#logo-img').replaceWith('<p> Background: this photo was taken in the spring of 2012 by a very talented photographer at our local community beach.</p>');
            $('#logo-btn').replaceWith('<p> You clicked Me!!! </p>');
      }); // end of logo-btn click

      function swipeMe(id,img) {
            // swipe left
            $(id).bind('swipeleft', function(event) {
          
                  if (counter == img.length - 1)  {
                        counter = 0;  
                  }
                  else {
                        counter++;
                  }
                  $(id).removeClass().addClass(img[counter]);
                  
            });
            // swipe right
            $(id).bind('swiperight', function(event) {
            
                  if (counter == 0) {
                      counter = img.length - 1;
                  }
                  else {
                      counter--;
                  }
                  
                  $(id).removeClass().addClass(img[counter]);    
             
            });
      }
 
      swipeMe('#collection1',images);

      swipeMe('#collection2',images1);
      
      swipeMe('#collection3',images2);
      
      swipeMe('#collection4',images3);

      swipeMe('#collection5',images4);

      swipeMe('#collection6',images5);
      
}); // end doc ready


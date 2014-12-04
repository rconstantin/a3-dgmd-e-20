 $(document).ready(function() {
      var maxChar = 128; // limit of char for text area
      $('#first').focus(function() {
    
            $('.first-group .help-block').text('Min Length: 1 char, max 12!');

      }); // end click first name function
      $('#first').focusout(function(){
            if ($('#first').val().length == 0) 
            {
                  $('.first-group .help-block').addClass('label-danger');
                  $('.first-group .help-block').text('PLEASE ENTER A VALID FIRST NAME!');
            } // end if (first_name length)
            else {
                  $('.first-group .help-block').removeClass('label-danger');
                  $('.first-group .help-block').text('');
            }
      }); // end of first_name focusout
      $('#last').focus(function() {
            var msg = 'Last Name: Min Length 3, max 12!';
            $('.last-group .help-block').removeClass('label-danger');
            $('.last-group .help-block').text(msg);
      });
      $('#last').focusout(function(){
            if ($('#last').val().length < 3) 
            {
                  $('.last-group .help-block').addClass('label-danger');
                  $('.last-group .help-block').text('PLEASE ENTER A VALID LAST NAME!');
            } // end if (last_name length)
            else {
                  $('.last-group .help-block').text('');
            }
      }); // end of last name focusout
      $('#email').focus(function() {
            var msg = "Email: will be used for future correspondance.";
            $('.email-group .help-block').removeClass('label-danger');
            $('.email-group .help-block').text(msg);
      });

      
      $('#email').focusout(function(){

            var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  
            if (!filter.test($('#email').val())) {
                  $('.email-group .help-block').addClass('label-danger');
                  $('.email-group .help-block').text('PLEASE ENTER A VALID EMAIL!');
            } // end if (emailus length)
            else {
                  $('.email-group .help-block').text('');
            }
      }); // end of email focusout

      $('#note').focus(function() {
            $('#outputNote').html('<span class="label label-warning">Max length ' + maxChar + '!</span>');
      });
      // use keyup to count remaining allowed characters to add in text area.
      $('#note').keyup(function(){
            if($('#note').val().length > maxChar) {
                  // do not exceed the maxChar: using the javascript substr() 
                  // will truncate displayed text not to exceed max set
                  $('#note').val($('#note').val().substr(0, maxChar));
            }
            var remaining = maxChar -  $('#note').val().length;
            if (remaining > 20) {
                  $('#outputNote').html('<span class="label label-success"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
            else if (remaining > 10) {
                  $('#outputNote').html('<span class="label label-warning"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
            else {
                  $('#outputNote').html('<span class="label label-danger"> You have <strong>'+  remaining +'</strong> characters remaining</span>');
            }
      }); // end of note keyup

      $('#note').focusout(function() {
            $('#outputNote').html('');
      });
      // submit validation
      $('button').tap(function(submit) {
            var error = 0;
            if ($('#first').val().length == 0) 
            {
                  $('.first-group .help-block').addClass('label-danger');
                  $('.first-group .help-block').text('PLEASE ENTER A VALID FIRST NAME!');
                  error += 1;
            } // end if (first_name length)
            if ($('#last').val().length < 3) 
            {
                  $('.last-group .help-block').addClass('label-danger');
                  $('.last-group .help-block').text('PLEASE ENTER A VALID LAST NAME!');
                  error += 1;
            } // end if (last length)

            var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  
            if (!filter.test($('#email').val())) {
                  $('.email-group .help-block').addClass('label-danger');
                  $('.email-group .help-block').text('PLEASE ENTER A VALID EMAIL!');
                  error += 1;
            } // end if (email length)
          
            if (error == 0) {
                  //$('#myModal').modal();
                  alert('Submit input validated but nothing going to server for now!');
                  $('.form-horizontal')[0].reset();
                  
            }
            submit.preventDefault(); // to prevent submit from going to the server
            
      }); //end click button
      $('.resetInput').tap(function(){ // used to reset input on successful submit.
            $('.form-horizontal')[0].reset();
      });

}); // end of document ready

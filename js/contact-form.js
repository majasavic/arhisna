/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#submit_btn").click(function(){
        
        //get input field values
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        
        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('input[name=name]').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', '#e41919');
            proceed = false;
        }
        
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', '#e41919');
            proceed = false;
        }
        
        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };
            
            // Submit data to Madrill API!:
            $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'JQ1yLBQ59EIJSQBtdUCzmg',
                    'message': {
                    'from_email': post_data.userEmail,
                    'to': [
                      {
                        'email': "knknpnkn@gmail.com",
                        'name': "ArhiSna website",
                        'type': "to"
                      }
                    ],
                    'autotext': 'true',
                    'subject': 'Contact from the site - ' + post_data.userName,
                    'html': post_data.userMessage
                    }
                }
                }).done(function(response) {
                    $('#contact_form').html("<h2 class='section-title font-alt mb-70 mb-sm-40'>Thank you!</h2>");
            });
            
        }
        
        return false;
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });
    
});

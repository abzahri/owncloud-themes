
function hidePasswordForms()
{
  $('#showPassword').css('position', 'fixed').css('left', '-100000px');
  $("label[for='showPassword']").css('position', 'fixed').css('left', '-100000px');
  
  $('#linkText').css('position', 'fixed').css('left', '-100000px');
  $('#emailPrivateLink').css('position', 'fixed').css('left', '-100000px');  
}

function showPasswordForms()
{
  $('#linkText').css('position', 'static');
  $('#emailPrivateLink').css('position', 'static');
}

$(document).ready(function() {
  $('.fileactions .action[data-action="Share"]').each(function(i,v){ 
    $(v).on('click', function(e) {
      $('#link #linkCheckbox').each(function( index, val ) {
        $(val).change( function(e) {
          if ($(this).prop('checked')) {  
            $('#showPassword').prop('checked',true);
            $('#linkPass').show();

            // Force Password
            hidePasswordForms()
            $('#linkPassText').focus();
            $('#linkPassText').keypress(function(e){
              if (e.keyCode == 13) {
                if ($(this).val() == "") {
                  hidePasswordForms();
                } else {
                  showPasswordForms();
                  $('#linkText').focus().select();
                }
              }
            });
          } 
          else { 
            $('#showPassword').prop('checked',false);
            $('#linkPass').hide();
          };
        });
      });
    });
  });
});


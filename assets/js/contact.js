$(document).ready(function() {

  $("#contact-form").validate({
    // if valid, post data via AJAX
    submitHandler: function(form) {
      $.post(
        "https://europe-west1-asabina-infra-test.cloudfunctions.net/function-1",
        {
          email: $("#form_email").val(),
          message: $("#form_message").val(),
          name: $("#form_name").val()
        }
      ).done(
        function(data, status, xhr) {
          const msg = data.msg ? data.msg : `Thank you for getting in touch. We are working down the waiting list to get to your case ASAP and discuss your needs.`

          $('#contact-form').html(`<div class="alert alert-primary response">${msg}</div>`);
        }
      ).fail(
        function(xhr, status, err) {
          //console.log("fail");
          console.log({xhr: xhr, status: status, err: err});
        }
      ).always(
        function(data, ) {
          //console.log("always");
        }
      );
    },
    // all fields are required
    rules: {
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      },
      name: {
        required: true
      }
    }
  });
});

$().ready(function () {
  $("#signupForm").validate({
    // in 'rules' user have to specify all the constraints for respective fields
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      username: {
        required: true,
        minlength: 2, //for length of lastname
      },
      password: {
        required: true,
        minlength: 5,
      },
      confirm_password: {
        required: true,
        minlength: 5,
        equalTo: "#password", //for checking both passwords are same or not
      },
      email: {
        required: true,
        email: true,
      },
      agree: "required",
    },
    // in 'messages' user have to specify message as per rules
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      username: {
        required: "Please enter a username",
        minlength: "Your username must consist of at least 2 characters",
      },
      password: {
        required: "Please enter a password",
        minlength: "Your password must be consist of at least 5 characters",
      },
      confirm_password: {
        required: "Please enter a password",
        minlength: "Your password must be consist of at least 5 characters",
        equalTo: "Please enter the same password as above",
      },
      agree: "Please accept our policy",
    },
  });
});

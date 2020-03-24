$(document).ready(function() {
  $("#submit").on("click", (event)=> {
    event.preventDefault();
    //check info
    function formSubmit() {
      const completed = true;
      const message = ""
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          console.log('info bad')
          completed = false;
          message = 'Please enter your information at the top.'
        }
      });

      $(".options").each(function() {
        if ($(this).val() === "") {
          console.log('questions bad')
          completed = false;
          message = 'Please answer each question.'
        }
      });

      if (completed === true) {
        return true
      } else {
        return false
      }
    }

    if (formSubmit() === true) {
      const userInfo = {
        name: $("#name")
          .val()
          .trim(),
        profilePic: $("#photo")
          .val()
          .trim(),
        scores: [
          $("#q1").val(),
          $("#q2").val(),
          $("#q3").val(),
          $("#q4").val(),
          $("#q5").val(),
          $("#q6").val(),
          $("#q7").val(),
          $("#q8").val(),
          $("#q9").val(),
          $("#q10").val()
        ]
      };


      $.post("/api/friends", userInfo, data => {
        $("#matchName").text(data.name);
        $("#matchImg").attr("src", data.photo);
      });
      // Show the modal with the best match
      $(".modal").modal();

      //clear form after submission
      $("#name").val("");
      $("#photo").val("");
      $("#q1").val("");
      $("#q2").val("");
      $("#q3").val("");
      $("#q4").val("");
      $("#q5").val("");
      $("#q6").val("");
      $("#q7").val("");
      $("#q8").val("");
      $("#q9").val("");
      $("#q10").val("");
    } else {
      alert('somthing is missing');
    }
  });
});

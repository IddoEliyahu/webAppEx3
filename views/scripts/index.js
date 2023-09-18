$(document).ready(() => {
  $("#uploadForm").submit((event) => {
    event.preventDefault();

    const requestType = $("#request-type").val();

    const formData = {
      data: $("#request-body").val(),
      id: $("#request-id").val(),
    };

    $("#request-id").removeClass("is-invalid")

    $.ajax({
      type: requestType,
      url: "/data",
      data: formData,
      success: (res) => {
        console.log(res)
        // $("#request-id").html(res)
        $("#request-id")
        window.location.reload()
        
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.error("Error:", errorThrown);
        console.log(textStatus)
        if (jqXHR.status === 400) {
          // alert("The ID does not exist in the database.");
          $("#request-id").addClass("is-invalid")
        } else if (jqXHR.status === 500) {
          alert("Server Error: Please try again later.");
        } else {
          alert("An unknown error occurred.");
        }
      },
    })
  });
});

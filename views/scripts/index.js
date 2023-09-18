if ($) console.log("Hello from index.js!");

$(document).ready(() => {
  $("#uploadForm").submit((event) => {
    event.preventDefault();

    const requestType = $("#request-type").val();

    const formData = {
      data: $("#request-body").val(),
      id: $("#request-id").val(),
    };
    console.log(resultsList)
    $.ajax({
      type: requestType,
      url: "/data",
      data: formData,
      success: (res) => {
        // $('#result').html('Response: ' + res);
        const resultsList = $("results");
        resultsList.empty();
        // res.results.forEach((item) => {
        //   resultsList.append($("<li>").text(item));
        // });
      },
      error: (error) => {
        console.error("Error:", error);
      },
    });
  });
});

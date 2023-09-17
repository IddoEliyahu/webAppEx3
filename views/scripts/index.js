if ($) console.log()

$(document).ready(() => {
  $('#uploadForm').submit(event => {
    event.preventDefault();

    const formData = {
      data: $('#inputData').val()
    };

    $.ajax({
      type: `POST`,
      url: '/data',
      data: formData,
      success: res => {
        // $('#result').html('Response: ' + res);
        const resultsList = $('results')
        resultsList.empty()
        res.results.forEach(item => {
          resultsList.append($('<li>').text(item))
        })
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  });
});


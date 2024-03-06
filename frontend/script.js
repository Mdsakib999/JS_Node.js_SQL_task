// Reload the page
document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload(); 
});


$(document).ready(function() {
    $.ajax({
        url: 'http://numbersapi.com/1/30/date?json',
        method: 'GET',
        success: function(response) {
            $('#apiContent').text(response.text);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching API:', error);
        }
    });
});

$('#dropzone').on('dragover', function() {
    $(this).addClass('hover');
});

$('#dropzone').on('dragleave', function() {
    $(this).removeClass('hover');
});

$('#dropzone').on('drop', function(e) {
    e.preventDefault();
    $(this).removeClass('hover');
    var file = e.originalEvent.dataTransfer.files[0];
    console.log('File dropped:', file);
    uploadFile(file);
});

$('#fileInput').on('change', function(e) {
    var file = e.target.files[0];
    console.log('File selected:', file);
    uploadFile(file);
});

function uploadFile(file) {
    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            console.log('Upload successful:', response);
        },
        error: function(xhr, status, error) {
            console.error('Error uploading file:', error);
        }
    });
}

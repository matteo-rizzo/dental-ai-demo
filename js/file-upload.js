function readURL(input) {
    if (input.files && input.files[0]) {                      // if input is file, files has content
        let inputFileData = input.files[0];                     // shortcut
        let reader = new FileReader();                          // FileReader() : init
        reader.onload = function (e) {                           /* FileReader : set up ************** */
            console.log('e', e)
            $('.file-upload-placeholder').hide();                 // call for action element : hide
            $('.file-upload-image').attr('src', e.target.result); // image element : set src data.
            $('.file-upload-preview').show();                     // image element's container : show
            $('.image-title').html(inputFileData.name);           // set image's title
        };
        console.log('input.files[0]', input.files[0])
        reader.readAsDataURL(inputFileData);     // reads target inputFileData, launch `.onload` actions
    } else {
        removeUpload();
    }
}


function confirmUpload() {
    document.getElementById("file-upload").classList.add("w3-hide");
    document.getElementById("layers-container").classList.remove("w3-hide");
}

function removeUpload() {
    let $clone = $('.file-upload-input').val('').clone(true); // create empty clone
    $('.file-upload-input').replaceWith($clone);              // reset input: replaced by empty clone
    $('.file-upload-placeholder').show();                     // show placeholder
    $('.file-upload-preview').hide();                         // hide preview
}

$('.file-upload-placeholder').bind('dragover', function () {
    $('.file-upload-placeholder').addClass('image-dropping');
});

$('.file-upload-placeholder').bind('dragleave', function () {
    $('.file-upload-placeholder').removeClass('image-dropping');
});
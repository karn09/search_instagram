$(function() {
    var token = window.location.hash.replace("#access_token", "");
    var access_token = {
        access_token: token
    };

    function getImages(tag, access_token) {
        var url,
            count = 12; // return at most 12 images at any given time
        url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
        $.ajax({
            type: 'GET'
        });
    }

    function loadData(isntagram_data) {

    }
});
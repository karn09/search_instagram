$(function() {
    var token = window.location.hash.replace("#access_token", "");
    var access_token = {
        access_token: token
    };
    // make API call
    tag = "sneakers";

    function getImages(tag, access_token) {
        var url,
            count = 12; // return at most 12 images at any given time
        url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?callback=?&count=' + count;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            data: access_token,
            success: loadData
        });
    }

    function loadData(instagram_data) {
        var photos, photo, key, new_image;
        console.log(instagram_data);
        if (instagram_data.meta === 200) {
            photos = instagram_data.data;
            console.log(photos);
            for (i in photos) {
                photo = photos[i];
                new_image = $('<img src="' + photo.images.standard_resolution.url + '">');
                $('#target').append(new_image);
            }
        }
    }

    // add search 
    $('#search-button').on('click', function() {
        tag = $('input.search-tag').val();
        getImages(tag, access_token);
    });
});
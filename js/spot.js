function ApiInstagram() {
    $.ajax({
        url: "https://v1.nocodeapi.com/apitest1414/instagram/hfDFJjlXpdYWnwJk?limit=9",
        success: function (res) {
            for (var i = 0; i < res.data.length; i++) {
                var ig = res.data[i];
                var div = $('<div class="col-sm-4 col-4" style="padding: 0px;"></div>');
                var tag = "";
                tag += "<abbr title='" + ig.caption + "'><a href='" + ig.permalink + "' target='_blank'><img src='" + ig.media_url + "' width='100%' height='100%'></a></abbr>";
                let su = $('#media-ig').append(div.html(tag));
            }
        }
    })
}
$(document).ready(function() {
    
    var API_KEY = "AIzaSyAN4rzAXqNTiAVLSjMJUt5ky4q2mcbiYtw"
    
    $("form").submit(function (event){
        event.preventDefault()

        var search = $("search").val()
        videoSearch(API_KEY, search, 10)

    })

    function videoSearch (key, search, maxResults){
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
        + "&type=video&part=snippet&maxResult=" + maxResults + "&q" + search,function(data){
            console.log(data)
        })
    }
})
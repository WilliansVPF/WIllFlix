import $ from "jquery"

export function request() {
    const body = $("#content")
    $.get("https://express-server2.herokuapp.com/movie/").then((response) => {
        let html = "" 
        for(let i in response) {
            const movie = response[i]
            const movieHtml = "<div><h5>"+movie.title+"</h5></div>"
            html += movieHtml
        }
        body.html(html)
    })
}

export function save(){
    const form = $("#movies")
    form.bind("submit", function test(event) {
        event.preventDefault()
        const content = event.target
        const title = content.title.value
        const director = content.director.value
        $.ajax({
            url: 'https://express-server2.herokuapp.com/movie',
            type: 'post',
            data: { json: JSON.stringify( { title , director } ) },
            headers: {
                "Content-Type": "application/json"
            },
            dataType: 'json',
            success: function (data){
                request();
            },
            error: function (data){
                alert("Outlet Creation Failed, please try again.");        
            }
        
            });
        
    })
}
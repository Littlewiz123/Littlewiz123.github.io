const url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
var encodedUrl = "";
function encodedAndDecodedFormValues(url) {
    for (let i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        var value = urlparam[1];
        console.log(value);
        for (let j = 0; j < value.length; j++) {
            if (value[j] == "+") {
                urlparam[1] = value.replace(value[j], "%20");
                console.log(urlparam[1]);
            }
        }
        // urlparam[1] = encodeURIComponent(urlparam[1]);
        url[i] = urlparam.join('=');
    }
    // var encodedUrl = encodeURIComponent(url);
    console.log(url);
    let ids = ["#lastname","#firstname","#birthday","#gender","#address","#phonenumbers","#email"];
    for (let i = 0; i < url.length; i++) {
        var urlparam = url[i].split('=');
        urlparam[1] = decodeURIComponent(urlparam[1])
        // console.log(urlparam[1]);
        $(ids[i]).html(urlparam[1]);
    }

    // console.log(url);
}

encodedAndDecodedFormValues(url);



// var url = $("#";

// var encodedUrl = encodeURIComponent(url);
// console.log(encodedUrl);

// function GetParameterValues(param) {
//     var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
//     for (var i = 0; i < url.length; i++) {
//         var urlparam = url[i].split('=');
//         if (urlparam[0] == param) {
//             return decodeURIComponent(urlparam[1]);
//         }
//     }
// }

// console.log(GetParameterValues("address"))

// function loadValue() {
//     $.get( "register.html", function(data) {
//         console.log($( "#lastname" ).html(data));    
//     });
// }
// loadValue()
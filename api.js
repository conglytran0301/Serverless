/*const apiUrl = window.location.href
const apiReplacedURL = apiUrl.replace('#', '&')
const apiFinalURL = new URLSearchParams(apiReplacedURL)

var api_access_token = apiFinalURL.get('access_token')

var sendData = (userName,email, subject, description)=>{

    fetch(
        // Change - Your API here
        'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless', 
        {
            method: "POST", 
            body: JSON.stringify({
                "name": userName,
                "email": email,
                "subject":subject,
                "description":description
            }),
            headers: {
                'Content-Type': 'application/json',
                'authentication': api_access_token
              },
        }
    )
        .then(response => response.json())
        .then(result => {
            if(result['statusCode'] == 200){
                alert("Successfully Sent the Message")
            }else{
                alert("Error in sending message")
                alert(result)
            }
        })
        .catch(error => console.log('error', error));
}*/

/*const apiUrl = window.location.href;
const apiReplacedURL = apiUrl.replace('#', '&');
const apiFinalURL = new URLSearchParams(apiReplacedURL);

var api_access_token = apiFinalURL.get('access_token');
var sendData = (userName, email, subject, description) => {
    fetch(
        'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless',
        {
            method: "POST",
            body: JSON.stringify({
                "name": userName,
                "email": email,
                "subject": subject,
                "description": description
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': api_access_token  // Sử dụng đúng header Authorization cho access token
            },
        }
    )
    .then(response => response.json())
    .then(result => {
        if (result['statusCode'] == 200) {
            alert("Successfully Sent the Message");
        } else {
            alert("Error in sending message");
            console.error(result);
        }
    })
    .catch(error => console.error('Error:', error));
}*/

/*var proxyUrl = 'https://your-proxy-server.com/';
var apiUrl = 'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless';

fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': api_access_token
    },
    body: JSON.stringify({
        "name": userName,
        "email": email,
        "subject": subject,
        "description": description
    })
})
.then(response => response.json())
.then(result => {
    alert("Successfully Sent the Message");
})
.catch(error => {
    alert("Error in sending message");
    console.error('Error:', error);
});*/

// Định nghĩa hàm sendData
function sendData(userName, email, subject, description) {
    var proxyUrl = 'https://your-proxy-server.com/';
    var apiUrl = 'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless';

    fetch(proxyUrl + apiUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOTVhNjUyYy04MGExLTcwZWMtZDI0NS0yOGNlMjc2NmQ0NDAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTU1MjM4LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTU4ODM4LCJpYXQiOjE3MjM5NTUyMzgsInZlcnNpb24iOjIsImp0aSI6ImU3ZWEwYzI2LTUwM2QtNDRkMS1hOWYwLWM0MzE0ZWNkYWNhNSIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wNjAzIn0.PAVNBye6-bJsQ7363JNcYlKt61vRwAby_aw-jI-UuOeUAjntEtne_r-mZMORPYoSgm_Q-XdgX00Rv6qyExwwItG1BKlxUK0lb0GeW6MciV0ER-q8EQT2MrIJPSiR82T5wcsyKrzc9NkKfKVbObtZT9glfDNOOJxc2aCTmZBaf8JzN779A8u32tqTY83A4ZMfvCy1U6kFP87gL9T4b5SrzdME3bS3a1PqwfAhGCJRWLlpDlj4m5Mdt1KIklJPSF6vr9E6JvocZy-TJvPUW1sAPzazkBRq54OInB2vzlzpJKa-3Z4hMDFPn1VNuivjzm4Bor5tUGOZ0CRokl34uahtSw
        },
        body: JSON.stringify({
            "name": userName,
            "email": email,
            "subject": subject,
            "description": description
        })
    })
    .then(response => response.json())
    .then(result => {
        alert("Successfully Sent the Message");
    })
    .catch(error => {
        alert("Error in sending message");
        console.error('Error:', error);
    });
}


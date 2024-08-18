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

var proxyUrl = 'https://your-proxy-server.com/';
var apiUrl = 'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless';

fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_access_token}`
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

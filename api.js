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

const apiUrl = window.location.href;
const apiReplacedURL = apiUrl.replace('#', '&');
const apiFinalURL = new URLSearchParams(apiReplacedURL);

var api_access_token = apiFinalURL.get('eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOTVhNjUyYy04MGExLTcwZWMtZDI0NS0yOGNlMjc2NmQ0NDAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTUzNDA2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTU3MDA2LCJpYXQiOjE3MjM5NTM0MDYsInZlcnNpb24iOjIsImp0aSI6ImE2YjhiMDVlLTQ0NjAtNGEzNy04MjZmLTVlOTljNTUwZjM0ZSIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wNjAzIn0.f9pqOoIq7KLsUnoFl7GS1Rt-MWCH_EbX6XK81CqGwhcMLWew61aBH_Aec1pcJUaDY5ToTvzyqRUyXsM4CbzkZlEAy0TD9kg3_GRp-n2E2SGlsFo0Jw2K5kQpJJtGkKdHavc78AjCPtv5qXbuOR0N5y7Fwt3RO978dN-fTwLrmIEhQFVicR3m0KgOHZZGD8WRj9sxgUIVgIpko_TfPe5R7UkXLVoyU9CvpIcGVReofGQvGHZIqBL2YgMXxvF0YRNiMIs_AomOFtkJoZ7sTZNbxNFQET-8aHps9SIoMi2NDLYR4uYkFZoJap-gawW1HV-wSzOP30gFz5KNCnukLq5TCg');

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
                'Authorization': 'Bearer ${api_access_token}'  // Sử dụng đúng header Authorization cho access token
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
}
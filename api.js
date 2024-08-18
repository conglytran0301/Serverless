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

var api_access_token = apiFinalURL.get('Bearer ${eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhOWNhMzU0Yy05MDIxLTcwOTItMTcxNi05OTlkMjEzMWNiOTkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTQ0NDc2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTQ4MDc2LCJpYXQiOjE3MjM5NDQ0NzYsInZlcnNpb24iOjIsImp0aSI6ImRlZTgzYjY5LThhYjItNDlhYi05OTQxLTlkYzljMmZlYjA3NiIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wMzAxIn0.dFso0NIBrPGVUUKvsyBlh1X2yJreqHOthjd0yBBeSJCU_CtgoXVqmkjnzv3TWI68D83gFRYhZJGw2VyfCYVyUnaEOMU68s_C8oWuTvWQvloOft4ck8FsTRSvRDXu_ovjua8got4kjok0LuZtsy1q2yUYcfxEwRMezDgZH8A9owrSHNKaMaULezSaeUsF2JUnn03RDh6uMfLqZbpRrKGFxnfqb8iAoTcsC5mgMrbhk8rpUEe-DTJeiZSXevzMKeOvD-qnCSlSFpxO-vkJW5DyTVwB7TWUSL4E2ryTgR-e80IkiCT9IPCFDmbo8omcd5ZfKCl1FcT14yCyQQWxOwsnfQ}');

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

const apiUrl = window.location.href;
const apiReplacedURL = apiUrl.replace('#', '&');
const apiFinalURL = new URLSearchParams(apiReplacedURL);

var api_access_token = apiFinalURL.get('access_token'); // Chỉ lấy giá trị access_token từ URL

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
                'Authorization': `Bearer ${eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOTVhNjUyYy04MGExLTcwZWMtZDI0NS0yOGNlMjc2NmQ0NDAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTUxODIxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTU1NDIxLCJpYXQiOjE3MjM5NTE4MjEsInZlcnNpb24iOjIsImp0aSI6IjhkNDEzNjA5LTRhZWUtNGM5YS1iZGNhLTcwZDNmMjE5N2MzNyIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wNjAzIn0.pYo-_aW686pkswOdgh7vVBcxqc0b7xxhpmwrO9pFmuVkNA_y8gNlAmlKDl858uOtMzFEiR7Bme6oqcDcQX0g9TxVh6YjfTuaDzHLveH8Yt-bGhxuJ7ALHsZ6nh94uUrisno84PF71btqHFA5LIuk1dlD4Y6v7i-goVfwtq2gm6Nr5xBUuV_LfDa0xydohgqLS8IM7KRLASbQiGvyPi7tEj7PwMRvjbuOqdPIV0yRnVlWhgw4uFNaNLh0OIwncEhFHp36J5zGbxuNe9iKEHZakZyHIHCpi4FmkM2OI8Ta9ch6KJIxe6vtpIaHQgiB7l0-McJ63G9kzMvBJEcMZKE7fA}`  // Đảm bảo định dạng "Bearer <token>"
            },
        }
    )
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(result => {
        alert("Successfully Sent the Message");
    })
    .catch(error => {
        alert("Error in sending message");
        console.error('Error:', error);
    });
};


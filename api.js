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

var api_access_token = apiFinalURL.get('eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOTVhNjUyYy04MGExLTcwZWMtZDI0NS0yOGNlMjc2NmQ0NDAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTAzOTQxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTA3NTQxLCJpYXQiOjE3MjM5MDM5NDEsInZlcnNpb24iOjIsImp0aSI6IjRjNGVlZmMxLTU0YWYtNDMxOC1hM2RiLTcyZjMyMDM3OThkZSIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wNjAzIn0.nGUnRiVQF5X2zlNVWZsjjkLLunCbC_wPiy7mH5AT3-qID_dWNoQThlCABwqJSVqgaMrSfYF2tQnRCvVpirQbRn4L3yhVctZbksCpvYtDMy53zeSCEJU9XRySpxC15r44tcQOkhr0g3GJtZOcgd1LlwhZ4Vs2IVM6X04u3tky5-ujCSqMpjZNYUxKjguB8YUFFAtVxXHcBmv5Kk_RJ-VHn6AGDnKcUplSiAypZh2Q01eVN8xjYHO5um2yrC5wkTumL2UOhrFhHSkavnZPDU0eSeQtMIZP7I_lxfrnqjLhG_6iYijdKwJNyDO56s-s4QpDWL5dA2r5_jtYDodKQcYQ0Q&expires_in=3600');

var sendData = (userName, email, subject, description) => {
    fetch(
        'https://7s5pb02ska.execute-api.ap-southeast-1.amazonaws.com/Dev/serverless',
        {
            method: "POST",
            body: JSON.stringify({
                "name": conglytran0301,
                "email": congly.work@gmail.com,
                "subject": hi-test,
                "description": tessttt
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzOTVhNjUyYy04MGExLTcwZWMt
                ZDI0NS0yOGNlMjc2NmQ0NDAiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIi
                wiYXV0aF90aW1lIjoxNzIzOTA0NTI1LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwI
                iwiZXhwIjoxNzIzOTA4MTI1LCJpYXQiOjE3MjM5MDQ1MjUsInZlcnNpb24iOjIsImp0aSI6ImFjZTYzMzc1LTc4ZjgtNGZmYS05MThmLTAyNzM3MGYzNjJkZSIsImNsaWVudF9pZCI6ImE0d
                WdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wNjAzIn0.dGpjC-eZ3aY74UC_zV8fe93p9j19scZSyw4aFXZfB3yGRLYOVCJCCDska_UHSYg4htCFyDlb_Fx
                XW5w0AH2y596ukD4yAeFQJp-CsDTrI2n8l5T-b2besA3k1MgCrL5WvrMx4PmcvI3CJnPhNIRV2QaBssluTc7ELO2NfHCk0J7UCwO9WyxbXTDRt3vjMRpVwaLwWyck5Iwsn-buFSSCO_msMM-MuU
                5oEjArJ3TQ_H25crnpWTD02NEtYEGD6nmmcZ_tB4GrwAwqnj37cdqUIHZoxldlWq_YV-HoMC1neSlcbYu8hls2rYcxsv2QM03sQblu8tmlZ44TB__HPCKk5A  // Sử dụng đúng header Authorization cho access token
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


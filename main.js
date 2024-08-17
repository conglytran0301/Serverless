const url = window.location.href
const replacedURL = url.replace('#', '&')
const finalURL = new URLSearchParams(replacedURL)
var accessToken = finalURL.get('access_token')
var idToken = finalURL.get("id_token")
var UserName, UserEmail;

// Change - Your region
aws_region = 'ap-southeast-1';
AWS.config.region = aws_region; 

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
}; 

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(); 

var params = {
    AccessToken:  accessToken
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) 
    {
        // Change - Link to the Home Page
        window.location.href = 'https://conglytran0301.github.io/Serverless/'
    }
    else 
    {
        console.log(data);

        for(var i = 0; i < data.UserAttributes.length; i++)
        {
            if(data.UserAttributes[i].Name == 'name')
            {
                UserName = data.UserAttributes[i].Value;
            }
        }

        for(var j = 0; j < data.UserAttributes.length; j++)
        {
            if(data.UserAttributes[i].Name == 'email')
            {
                UserEmail = data.UserAttributes[i].Value;
            }
        }

        document.getElementById('userName').innerHTML = UserName;
        document.getElementById('userEmail').innerHTML = UserEmail;  

        document.getElementById('userNameInput').value =UserName;
        document.getElementById('userEmailInput').value = UserEmail;    
    }
});
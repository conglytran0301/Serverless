const url = window.location.href;
const replacedURL = url.replace('#', '&');
const finalURL = new URLSearchParams(replacedURL);
var accessToken = finalURL.get('access_token');
var idToken = finalURL.get("id_token");
var UserName, UserEmail;

AWS.config.region = 'ap-southeast-1';
AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

var params = {
    AccessToken: accessToken
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        window.location.href = 'https://workshop.conglyblog.id.vn/';
    } else {
        console.log(data);

        for (var i = 0; i < data.UserAttributes.length; i++) {
            if (data.UserAttributes[i].Name === 'name') {
                UserName = data.UserAttributes[i].Value;
            }
            if (data.UserAttributes[i].Name === 'email') {
                UserEmail = data.UserAttributes[i].Value;
            }
        }

        if (document.getElementById('userNameDisplay')) {
            document.getElementById('userNameDisplay').innerHTML = UserName;
        }
        if (document.getElementById('userEmailDisplay')) {
            document.getElementById('userEmailDisplay').innerHTML = UserEmail;
        }

        if (document.getElementById('userNameInput')) {
            document.getElementById('userNameInput').value = UserName;
        }
        if (document.getElementById('userEmailInput')) {
            document.getElementById('userEmailInput').value = UserEmail;
        }
    }
});



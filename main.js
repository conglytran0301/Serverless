/*const url = window.location.href
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
});*/

/*const url = window.location.href;
const replacedURL = url.replace('#', '&');
const finalURL = new URLSearchParams(replacedURL);
var accessToken = finalURL.get('access_token');
var idToken = finalURL.get("id_token");
var UserName, UserEmail;

aws_region = 'ap-southeast-1';
AWS.config.region = aws_region;

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

var params = {
    AccessToken: accessToken
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        // Nếu có lỗi, điều hướng về trang đăng nhập hoặc trang chủ
        window.location.href = 'https://conglytran0301.github.io/Serverless/';
    } else {
        console.log(data);

        // Lấy thông tin người dùng từ phản hồi của Cognito
        for (var i = 0; i < data.UserAttributes.length; i++) {
            if (data.UserAttributes[i].Name === 'name') {
                UserName = data.UserAttributes[i].Value;
            }
            if (data.UserAttributes[i].Name === 'email') {
                UserEmail = data.UserAttributes[i].Value;
            }
        }

        // Nạp thông tin vào các phần tử HTML
        document.getElementById('userName').innerHTML = UserName;
        document.getElementById('userEmail').innerHTML = UserEmail;

        // Nạp thông tin vào các trường đầu vào của form
        document.getElementById('userNameInput').value = UserName;
        document.getElementById('userEmailInput').value = UserEmail;
    }
});*/

/*const url = window.location.href;
const replacedURL = url.replace('#', '&');
const finalURL = new URLSearchParams(replacedURL);
var accessToken = finalURL.get('access_token');
var idToken = finalURL.get("id_token");
var UserName, UserEmail;

aws_region = 'ap-southeast-1';
AWS.config.region = aws_region;

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

var params = {
    AccessToken: accessToken
};

cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        // Nếu có lỗi, điều hướng về trang đăng nhập hoặc trang chủ
        window.location.href = 'https://conglytran0301.github.io/Serverless/';
    } else {
        console.log(data);

        // Lấy thông tin người dùng từ phản hồi của Cognito
        for (var i = 0; i < data.UserAttributes.length; i++) {
            if (data.UserAttributes[i].Name === 'name') {
                UserName = data.UserAttributes[i].Value;
            }
            if (data.UserAttributes[i].Name === 'email') {
                UserEmail = data.UserAttributes[i].Value;
            }
        }

        // Kiểm tra và gán giá trị cho các phần tử HTML
        if (document.getElementById('userNameDisplay')) {
            document.getElementById('userNameDisplay').innerHTML = UserName;
        }
        if (document.getElementById('userEmailDisplay')) {
            document.getElementById('userEmailDisplay').innerHTML = UserEmail;
        }

        // Kiểm tra và gán giá trị cho các trường đầu vào của form
        if (document.getElementById('userNameInput')) {
            document.getElementById('userNameInput').value = UserName;
        }
        if (document.getElementById('userEmailInput')) {
            document.getElementById('userEmailInput').value = UserEmail;
        }
    }
});*/


// Lấy URL hiện tại và thay thế dấu # bằng &
const url = window.location.href;
const replacedURL = url.replace('#', '&');
const finalURL = new URLSearchParams(replacedURL);

// Lấy các token từ URL
var accessToken = finalURL.get('access_token');
var idToken = finalURL.get("id_token");
var UserName, UserEmail;

// Cấu hình AWS với vùng cụ thể
const aws_region = 'ap-southeast-1';
AWS.config.region = aws_region;

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
};

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

// Thiết lập các tham số cho Cognito
var params = {
    AccessToken: accessToken
};

// Gọi hàm getUser để lấy thông tin người dùng
cognitoidentityserviceprovider.getUser(params, function(err, data) {
    if (err) {
        // Nếu có lỗi, điều hướng về trang chủ hoặc trang đăng nhập
        window.location.href = 'https://conglytran0301.github.io/Serverless/';
    } else {
        console.log(data);

        // Duyệt qua các thuộc tính của người dùng và lấy thông tin cần thiết
        data.UserAttributes.forEach(attribute => {
            if (attribute.Name === 'name') {
                UserName = attribute.Value;
            } else if (attribute.Name === 'email') {
                UserEmail = attribute.Value;
            }
        });

        // Kiểm tra và gán giá trị cho các phần tử HTML, nếu tồn tại
        const userNameDisplay = document.getElementById('userNameDisplay');
        const userEmailDisplay = document.getElementById('userEmailDisplay');
        const userNameInput = document.getElementById('userNameInput');
        const userEmailInput = document.getElementById('userEmailInput');

        if (userNameDisplay) {
            userNameDisplay.innerHTML = UserName;
        }
        if (userEmailDisplay) {
            userEmailDisplay.innerHTML = UserEmail;
        }
        if (userNameInput) {
            userNameInput.value = UserName;
        }
        if (userEmailInput) {
            userEmailInput.value = UserEmail;
        }
    }
});
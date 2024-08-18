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
});
*/

// Lấy URL hiện tại và thay thế dấu # bằng &
const url = window.location.href;
const replacedURL = url.replace('#', '&');
const finalURL = new URLSearchParams(replacedURL);

// Lấy các token từ URL
var accessToken = finalURL.get('eyJraWQiOiJLQXA1dEdPRUw1clltKzRmVnJrRzRCaUVyM0todFdwVnFTa1VZZjZKblV3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhOWNhMzU0Yy05MDIxLTcwOTItMTcxNi05OTlkMjEzMWNiOTkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNzIzOTQ0NDc2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiZXhwIjoxNzIzOTQ4MDc2LCJpYXQiOjE3MjM5NDQ0NzYsInZlcnNpb24iOjIsImp0aSI6ImRlZTgzYjY5LThhYjItNDlhYi05OTQxLTlkYzljMmZlYjA3NiIsImNsaWVudF9pZCI6ImE0dWdkdnRmbDFiMDQzMXAxb3B0a2s4aDEiLCJ1c2VybmFtZSI6ImNvbmdseXRyYW4wMzAxIn0.dFso0NIBrPGVUUKvsyBlh1X2yJreqHOthjd0yBBeSJCU_CtgoXVqmkjnzv3TWI68D83gFRYhZJGw2VyfCYVyUnaEOMU68s_C8oWuTvWQvloOft4ck8FsTRSvRDXu_ovjua8got4kjok0LuZtsy1q2yUYcfxEwRMezDgZH8A9owrSHNKaMaULezSaeUsF2JUnn03RDh6uMfLqZbpRrKGFxnfqb8iAoTcsC5mgMrbhk8rpUEe-DTJeiZSXevzMKeOvD-qnCSlSFpxO-vkJW5DyTVwB7TWUSL4E2ryTgR-e80IkiCT9IPCFDmbo8omcd5ZfKCl1FcT14yCyQQWxOwsnfQ');
var idToken = finalURL.get("eyJraWQiOiJSenh1QXlqK0VkK3hQd1ZnMlR3ZFlBZkxWVVRMTllrVUF0THd0OUhcL1l6VT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiOW5DVDFfTm9VSFlHd0daMnQ5c0wwQSIsInN1YiI6ImE5Y2EzNTRjLTkwMjEtNzA5Mi0xNzE2LTk5OWQyMTMxY2I5OSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTFfc0RLMGUzRlEwIiwiY29nbml0bzp1c2VybmFtZSI6ImNvbmdseXRyYW4wMzAxIiwiYXVkIjoiYTR1Z2R2dGZsMWIwNDMxcDFvcHRrazhoMSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzIzOTQ0NDc2LCJleHAiOjE3MjM5NDgwNzYsImlhdCI6MTcyMzk0NDQ3NiwianRpIjoiZjgxNTcyOWYtZjU5Ny00NWVhLWEwMjAtYTZkMDA2NzdkYjdhIiwiZW1haWwiOiJjb25nbHkud29ya0BnbWFpbC5jb20ifQ.azEDzKhg-P6WLWfnceqkk3E4Z9xldtD4tAI2s-GH7tiPfLRCuMV07CyKofJaQm2JHTomSsBhb1KIMiq2p12wV1lSMz-rDOvVsmgCLni9dILG1DCfFVttBNJAoALM7qMlp1qsRSLT3hBegKXgdA1HhA4kZm3woXuKZjMDvkRfPxVOCPfG9zL_3D0wdW7hpI3LM_tc25ST0FH6RSh1nNRYKaV9iGnMdbPMmnoDF5qGAQFUaYvJMRjBCNXoDMxVuxZji5iOWeet-078JH-AxGamgHGVdWrylEE83LYZgkv3KQds_bXCrEiUbIqm7bx4wiqhTMMae6u876S9w_irFgsVUg");
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


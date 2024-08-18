import json  # Đảm bảo đã import json
import boto3
import uuid

# Tạo tài nguyên DynamoDB
dynamodb = boto3.resource('dynamodb')

# Đặt tên bảng DynamoDB
table = dynamodb.Table('FCJ-DynamoDB')

# Tạo một SNS Client
client_sns = boto3.client('sns')

# Hàm này sẽ được kích hoạt bởi API Gateway
def lambda_handler(event, context):
    try:
        # Kiểm tra sự tồn tại của các key bắt buộc
        required_keys = ['name', 'email', 'subject', 'description']
        for key in required_keys:
            if key not in event:
                raise KeyError(f"Missing required key: {key}")

        # Tạo một ID người dùng
        id = str(uuid.uuid4())

        # Gửi tin nhắn đến SNS
        handle_sns(id, event)
        
        # Lưu trữ dữ liệu vào DynamoDB
        statusCode = handle_dynamo_db(id, event)

        return {
            'statusCode': statusCode,
        }
    
    except KeyError as ke:
        return {
            'statusCode': 400,
            'body': json.dumps(f"Missing required key: {str(ke)}")
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps('Error occurred: ' + str(e))
        }

# Gửi một tin nhắn đến SNS
def handle_sns(id, event):
    try:
        sns_message = f"""
            You got a new Message from https://workshop.conglyblog.id.vn/
            The message is as follows
            
            id      : {id}
            Name    : {event['name']}
            email   : {event['email']}
            Message : {event['description']}
            Subject : {event['subject']}
        """
        
        client_sns.publish(
            # Thay đổi ARN với ARN của SNS của bạn
            TopicArn='arn:aws:sns:ap-southeast-1:336760284039:FCJ-SNSTopic',
            Message=sns_message,
            Subject=event['subject']
        )
    
    except KeyError as ke:
        print(f"Key error: {ke}")
        raise
    
    except Exception as e:
        print(f"An error occurred when sending SNS: {e}")
        raise

# Thêm một mục vào bảng DynamoDB
def handle_dynamo_db(id, event):
    try:
        response = table.put_item(
            Item={
                'id': id,
                'name': event['name'],
                'email': event['email'],
                'subject': event['subject'],
                'description': event['description'],
            }
        )
        return response['ResponseMetadata']['HTTPStatusCode']
    
    except Exception as e:
        print(f"An error occurred when writing to DynamoDB: {e}")
        raise

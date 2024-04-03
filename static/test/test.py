import requests
import json

good_response = requests.post('http://localhost/api/v1/validate', data=json.dumps({
    'username': '123',
    'password': 123
})
)

print(good_response.text)


bad_response = requests.post('http://localhost/api/v1/validate', data=json.dumps({
    'username': 123,
    'password': '123'
})
)


import httpx
import json

def test_chat():
    url = "http://127.0.0.1:8000/api/chat"
    payload = {
        "message": "Hello, who are you?",
        "session_id": "test_session_123"
    }
    headers = {"Content-Type": "application/json"}
    
    print(f"Testing connection to {url}...")
    try:
        response = httpx.post(url, json=payload, headers=headers, timeout=20.0)
        print(f"Status Code: {response.status_code}")
        print("Response Content:")
        print(json.dumps(response.json(), indent=2))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_chat()

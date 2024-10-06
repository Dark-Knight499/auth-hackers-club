from flask import Flask

app = Flask(__name__)

# In-memory storage for GitHub IDs and their corresponding OTPs
otp_storage = {}

def readme_exists(github_id: str):
    return github_id != "no_readme"

@app.route("/generate_otp/<string:github_id>")
def generate_otp(github_id: str):
    if github_id == "invalid":
        return "Invalid ID", 400

    if github_id in otp_storage:
        return "Already in process", 429

    otp = "123456" 
    otp_storage[github_id] = otp

    return f"OTP: {otp}", 200

@app.route("/verify/<string:github_id>/<string:otp>")
def verify(github_id: str, otp: str):
    if github_id == "invalid":
        return "Invalid ID", 400
    if github_id == "timeout":
        return "timeout", 400
    #mainiting list of github_id and otp if not found
    if github_id not in otp_storage:
        return "User not found", 404

    if not readme_exists(github_id):
        return "README missing", 404

    if otp_storage[github_id] != otp:
        return "Invalid OTP", 400

    del otp_storage[github_id]
    return "Verified", 200

if __name__ == "__main__":
    app.run(debug=True, threaded=True)

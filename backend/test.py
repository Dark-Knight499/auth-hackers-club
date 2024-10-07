from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage for GitHub IDs and their corresponding OTPs
otp_storage = {}

def readme_exists(github_id: str):
    # Replace this with your actual logic to check if a README exists in the GitHub repo
    return github_id != "no_readme"

@app.route("/api/generate_otp", methods=["POST"])
def generate_otp():
    data = request.get_json()
    github_id = data.get('githubId')

    if not github_id:
        return jsonify({"message": "GitHub ID is required"}), 400

    if github_id == "invalid":
        return jsonify({"message": "Invalid ID"}), 400

    if github_id in otp_storage:
        return jsonify({"message": "Already in process"}), 429

    # Generate OTP (you can implement an actual OTP generator)
    otp = "123456" 
    otp_storage[github_id] = otp

    return jsonify({"otp": otp}), 200

@app.route("/api/verify", methods=["POST"])
def verify():
    data = request.get_json()
    github_id = data.get('githubId')
    otp = data.get('otp')

    if not github_id or not otp:
        return jsonify({"message": "GitHub ID and OTP are required"}), 400

    if github_id == "invalid":
        return jsonify({"message": "Invalid ID"}), 400
    if github_id == "timeout":
        return jsonify({"message": "timeout"}), 400

    # Check if the github_id is in otp_storage
    if github_id not in otp_storage:
        return jsonify({"message": "User not found"}), 404

    if not readme_exists(github_id):
        return jsonify({"message": "README missing"}), 404

    if otp_storage[github_id] != otp:
        return jsonify({"message": "Invalid OTP"}), 400

    # If verified, remove the entry from otp_storage
    del otp_storage[github_id]
    return jsonify({"message": "Verified"}), 200

if __name__ == "__main__":
    app.run(debug=True, threaded=True)

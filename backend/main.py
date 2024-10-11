from flask import Flask ,jsonify
from utils import *
app = Flask(__name__)
def otp_json():
        return {
                "otp":"",
                "error":""
        }

@app.route("/generate_otp/<string:github_id>")
def generate_otp(github_id: str):
        response = otp_json()
        if not github_exists(github_id):
                response["error"] = "Invalid Github"
        elif processing(github_id):
                response["error"] = "Wait to retry"
        elif already_verified(github_id):
                response["error"] = "Already Verified"
        else:
                response["otp"] = get_otp()
                append_to_processing_list(github_id)
        return jsonify(response)

        
if __name__ == "__main__":
    app.run(debug=True, threaded=True)
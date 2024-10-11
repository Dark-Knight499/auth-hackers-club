import requests
import redis
import random
import string
processing_list = []
#verified must be in the db what if server is off
verified_list = []
auth_repo_name = "auth-github-dj"
base_url = "http://github.com"
#have to handle multiple request 
#have to handle exceptions
def github_exists(github_id:str):
    res = requests.get(url=f"{base_url}/{github_id}", timeout=5)
    return res.status_code == 200

def processing(github_id:str):
    return github_id in processing_list

#Can givee tries
def already_verified(github_id:str):
    return github_id in verified_list
def get_otp():
    length = 8
    letters_and_digits = string.ascii_letters + string.digits  # Combine letters and digits
    return ''.join(random.choice(letters_and_digits) for _ in range(length))


def otp_expired(github_id:str):
    pass

def repo_exists(github_id:str):
    res = requests.get(f"{base_url}/{github_id}/{auth_repo_name}")
    return res.status_code == 200

def README_exists(github_id:str):
    res = requests.get(f"{base_url}/{github_id}/{auth_repo_name}/main/README.md")
    print(res)
    return res.status_code == 200

def append_db(github_id:str,otp:str):
    pass

def append_to_processing_list(github_id:str):
    processing_list.append(github_id)

def append_to_verification_list(github_id:str):
    verified_list.append(github_id)



if __name__ == "__main__":
    # print(github_exists("Prasham-Karkera"))
    # print(github_exists("aagam17"))
    print(github_exists("Dark-knight499"))
    # print(github_exists("http://youtube.com"))
    print(repo_exists("Dark-knight499"))
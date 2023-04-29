from flask import Flask

api=Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Wesley", 
        "about": "Im struggling but its ok"
    }

    return response_body
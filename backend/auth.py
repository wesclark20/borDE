from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/home')
def home():
    return "<p>This is a test</p>"
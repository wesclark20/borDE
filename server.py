from bottle import Bottle, static_file, run, route, post, request
from sqlalchemy import create_engine, Column, Integer, String, text

app = Bottle()

@app.route('/')
def home():
    return static_file('index.html', root='.\\borde\public')

@app.route('/<filename:path>')
def serve_static(filename):
    return static_file(filename, root='.\\borde\src')

@app.post('/login')
def do_login():
    pass

@app.post('/signup')
def do_signup():
    pass

@app.post('/post_event')
def do_event():
    pass

run(app, host='localhost', port=8080, debug=True)
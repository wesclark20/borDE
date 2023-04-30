from flask import Flask, send_file, send_from_directory

app = Flask(__name__)

@app.route('/')
def serveIndex():
    return send_file('static/index.html')

@app.route('/static/<path:path')
def serveStatic(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
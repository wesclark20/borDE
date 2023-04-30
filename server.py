from flask import Flask, send_file, send_from_directory, url_for

app = Flask(__name__)

@app.route('/')
def serveIndex():
    return send_file('borde\\build\index.html')

@app.route('/build/<path:path>')
def serveStatic(path):
    return send_from_directory('borde\\build\static', path)

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
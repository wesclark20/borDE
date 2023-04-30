from flask import Flask, send_file, send_from_directory

app = Flask(__name__)

@app.route('/')
def serveIndex():
    return send_file('borde\\build\index.html')

@app.route('/build/<path:path>')
def serveStatic(path):
    return send_from_directory('borde\\build', path) #may need \static at the end

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)

''' To Do:
-
'''
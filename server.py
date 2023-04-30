from flask import Flask

app = Flask(__name__)

@app.route('/')
def serveIndex():
    return app.send_static_file('.\\build\index.html')

@app.route('/static/<filename:path')
def serveStatic(filename):
    return app.send_static_file(f'.\\build\{filename}')

if __name__ == '__main__':
    app.run(host='localhost', port=8080, debug=True)
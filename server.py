from bottle import route, run, template, Bottle, static_file

app = Bottle()

@app.route('/')
def home():
    return static_file('index.html', root='.\\borde\public\index.html')

run(app, host='localhost', port=8080)
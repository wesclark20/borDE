from flask import Flask, render_template

app = Flask(__name__)

'''static_folder = '.\\borde\public'''

@app.route('/')
def home():
    return app.send_static_file('.\\borde\public\index.html')
    '''return "<h1> I don't know how the hell this is suposed to work!</h1>"'''

if __name__ == '__main__':
    app.run(host="localhost", port="8080", debug=True)
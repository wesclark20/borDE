from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route('/api', methods=['GET', 'POST'])
def api():
    if request.method == 'POST':
        with open("data.json", "r") as f:
            stored = json.load(f)

            newReport = json.loads(request.data)
            stored['events'].append(newReport)

            print("stored:", stored)
        with open("data.json", "w") as f:
            json.dump(stored, f)
    if request.method == 'GET':
        with open("data.json", "r") as data:
            return data.read()
    return None


if __name__ == "__main__":
    app.run(debug=True)

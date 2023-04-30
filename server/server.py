from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000', 'http://localhost:5000'])


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route('/api', methods=['POST'])
def api():
    with open("data.json", "r") as f:
        stored = json.load(f)

        newReport = json.loads(request.data)
        stored['events'].append(newReport)

        print("stored:", stored)
    with open("data.json", "w") as f:
        json.dump(stored, f)
    return "Working"


if __name__ == "__main__":
    app.run(debug=True)

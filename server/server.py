from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins=['http://localhost:3000', 'http://localhost:5000'])


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()  # get the JSON data from the request
    # do something with the data
    return jsonify({'status': 'success'})


if __name__ == "__main__":
    app.run(debug=True)

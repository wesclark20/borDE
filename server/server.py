from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import json
# from os import path

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])


# ---=== SQLAlchemy Stuff ===---#
# db = SQLAlchemy()
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
# db.init_app(app)


# def create_database(app):
#     if not path.exists('database.db'):
#         db.create_all(app=app)
#         print('Created Database')

# ---=== End SQLAlchemy nonsense ===---#


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
    # create_database(app)
    app.run(debug=True)

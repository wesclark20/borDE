from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)

#---=== SQLAlchemy Stuff ===---#
db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db.init_app(app)

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


if __name__ == "__main__":
    app.run(debug=True)

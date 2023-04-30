from server import db

class UserPost(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    date = db.Column(db.String)
    time = db.Column(db.String)
    description = db.Column(db.String)
    email = db.Column(db.String)

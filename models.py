from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func

#---=== SQLAlchemy Database ===---#
db = SQLAlchemy()
DB_NAME="database.db"

class PostedEvent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_type = db.Column(db.String(250))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    event_location = db.Column(db.String(250))
    description = db.Column(db.String(1000))
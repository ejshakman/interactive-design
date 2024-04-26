from flask import Flask, render_template
from helper import url_for

app = Flask(__name__)

@app.route('/') #initial page on session start

@app.route('/index')
def index():
        return render_template('index.html')
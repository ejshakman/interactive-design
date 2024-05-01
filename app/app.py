from flask import Flask, render_template

# app = Flask(__name__)
app = Flask(__name__, template_folder='templates/')


@app.route('/')  # initial page on session start
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/home')
def home():
    return render_template('home.html')


if __name__ == "__main__":
    app.run(debug=True)

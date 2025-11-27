from flask import Flask, render_template

app = Flask(__name__) # Application instance

@app.route("/")
def home():
    return render_template("home.html")  # Flask loads templates/index.html

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/education")
def education():
    return render_template("education.html")

@app.route("/certificates")
def certification():
    return render_template("certificates.html")

if __name__ == "__main__":
    app.run(debug=True, port = 5001)
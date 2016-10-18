from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=['GET'])
def homepage():
    return render_template("index.html")

@app.route("/myfunction", methods=["POST"])
def myfunction():
    return request.get_json()

if __name__ == "__main__":
    app.run(debug=True)
from flask import *
import requests


app = Flask(__name__)
app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"
app.secret_key = "OCML3BRawWEUeaxcuKHLpw"
app.jinja_env.cache = {}


@app.route('/c/<string:file_name>', methods=['GET', 'POST'])
def get_c(file_name):
    r = requests.post(f"http://mpstats.io/c/{file_name}")
    response = make_response(r.text, 200)
    response.mimetype = "text/css"
    return response


@app.route('/c/fonts/<string:file_name>', methods=['GET', 'POST'])
def get_c_fonts(file_name):
    r = requests.post(f"http://mpstats.io/c/fonts/{file_name}")
    response = make_response(r.text, 200)
    response.mimetype = "text/css"
    return response


@app.route('/j/<string:file_name>', methods=['GET', 'POST'])
def get_j(file_name):
    r = requests.post(f"http://mpstats.io/j/{file_name}")
    response = make_response(r.text, 200)
    response.mimetype = "text/javascript"
    return response
# http://localhost:8080/api/oz/get/category/subcategories?path=%D0%91%D1%8B%D1%82%D0%BE%D0%B2%D0%B0%D1%8F%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%2F%D0%9A%D0%BB%D0%B8%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0&d1=2020-07-05&d2=2020-08-03


@app.route('/api/oz/get/category/subcategories', methods=['GET', 'POST'])
def get_api():
    print(request.args)


@app.route('/j/mp-grid/<string:file_name>', methods=['GET', 'POST'])
def get_j_mpgrid(file_name):
    r = requests.post(f"http://mpstats.io/j/mp-grid/{file_name}")
    response = make_response(r.text, 200)
    response.mimetype = "text/javascript"
    return response


@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template("result.html")


if __name__ == '__main__':
    app.run(port=8080, host='127.0.0.1', threaded=True)


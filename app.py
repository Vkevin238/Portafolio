from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/projectos')
def projectos():
    return render_template('projectos.html')

@app.route('/www.linkedin.com/in/kevin-vargas-50b49a219')
def linkedin():
    return redirect('https://www.linkedin.com/in/tu_nombre')

@app.route('/vkevin238@gmail.com')
def correo():
    return redirect('vkevin238@gmail.com')

@app.route('/aptitudes')
def aptitudes():
    return render_template('aptitudes.html')

if __name__ == '__main__':
    app.run(debug=True)

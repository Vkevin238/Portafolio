from flask import Flask, render_template, redirect, url_for, request, jsonify
import sqlite3

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

@app.route('/contact', methods=['POST'])
def contact():
    print("Se recibe el formulario")
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    with sqlite3.connect('contact.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO contacts (name, email, message) 
            VALUES (?, ?, ?)
        ''', (name, email, message))
        conn.commit()
    
    return jsonify({"status": "success", "message": "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto."})

@app.route('/thankyou')
def thank_you():
    return "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto."


def init_db():
    with sqlite3.connect('contact.db') as conn:
        cursor = conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL
            )
        ''')
        conn.commit()

init_db()

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, jsonify
from procesoXml import parse_xml

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/data') 
def data(): 
    data = parse_xml('full/et.xml') 
    return jsonify(data)

@app.route('/modal') 
def modal():
    print('imprimo Modal')
    data = parse_xml('full/et.xml') 
    return render_template('components/modal.html', data=data)


@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/acerca')
def acerca():
    return render_template('acerca.html')

@app.route('/get_page/<page>')
def get_page(page):
    pages = {
        'home': 'home.html',
        'contacto': 'contacto.html',
        'acerca': 'acerca.html'
    }
    if page in pages:
        return jsonify({'page': render_template(pages[page])})
    return jsonify({'error': 'Página no encontrada'}), 404

if __name__ == '__main__':
    app.run(debug=True)

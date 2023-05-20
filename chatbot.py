from flask import Flask, request
from docx import Document

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_question():
    question = request.json['question']
    # Procesar la pregunta y extraer información del archivo DOCX
    # Aquí se asume que se utiliza la biblioteca python-docx para extraer información del archivo
    
    doc = Document('nuevo.docx')

    extracted_info = ""
    for paragraph in doc.paragraphs:
        extracted_info += paragraph.text + '\n'

    return extracted_info

if __name__ == '__main__':
    app.run()

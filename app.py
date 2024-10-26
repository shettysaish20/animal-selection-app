from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' in request.files:
            file = request.files['file']
            if file.filename != '':
                file_size = len(file.read())
                file.seek(0)  # Reset file pointer after reading
                file_info = {
                    'name': file.filename,
                    'size': f"{file_size / 1024:.2f} KB",
                    'type': os.path.splitext(file.filename)[1][1:].lower()  # Get extension without dot
                }
                return jsonify(file_info)
    return render_template('upload_form.html')

if __name__ == '__main__':
    app.run(debug=True)

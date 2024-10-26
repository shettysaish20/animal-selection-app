# Animal Selection and File Upload Web Application

This is a simple web application that allows users to select animals and upload files. It demonstrates the use of HTML, CSS, JavaScript, and Python with Flask to create an interactive web page.

## Features

1. Animal Selection
   - Users can select one or more animals (cat, dog, elephant) using checkboxes.
   - Selected animal images are dynamically displayed on the page.

2. File Upload
   - Users can upload a file.
   - File information (name, size, type) is displayed after upload.
   - Preview is available for PDF and image files.

## Project Structure

- `app.py`: Flask application server
- `templates/upload_form.html`: HTML template for the web page
- `static/styles.css`: CSS styles for the web page
- `static/script.js`: JavaScript for client-side interactions
- `static/`: Directory containing animal images (cat.jpg, dog.jpg, elephant.jpg)

## Setup and Running

1. Ensure you have Python and Flask installed.
2. Clone this repository.
3. Navigate to the project directory.
4. Run the Flask application:
   ```
   python app.py
   ```
5. Open a web browser and go to `http://127.0.0.1:5000/`

## Code Overview

### HTML Template (upload_form.html)


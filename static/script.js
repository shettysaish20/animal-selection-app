document.addEventListener('DOMContentLoaded', function() {
    const animalCheckboxes = document.querySelectorAll('input[name="animal"]');
    const animalImagesDiv = document.getElementById('animalImages');
    const fileInput = document.getElementById('file');
    const form = document.getElementById('uploadForm');
    const fileInfoBox = document.getElementById('fileInfoBox');
    const filePreviewDiv = document.getElementById('filePreview');
    const fileInfoDiv = document.getElementById('fileInfo');

    function updateAnimalImages() {
        animalImagesDiv.innerHTML = '';
        animalCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const img = document.createElement('img');
                img.src = `/static/${checkbox.value}.jpg`;
                img.alt = checkbox.value;
                animalImagesDiv.appendChild(img);
            }
        });
    }

    animalCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateAnimalImages);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const file = fileInput.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                fileInfoDiv.innerHTML = `
                    <p>File Name: ${data.name}</p>
                    <p>File Size: ${data.size}</p>
                    <p>File Type: ${data.type}</p>
                `;

                filePreviewDiv.innerHTML = '';
                if (data.type === 'pdf') {
                    const iframe = document.createElement('iframe');
                    iframe.src = URL.createObjectURL(file);
                    filePreviewDiv.appendChild(iframe);
                } else if (['jpg', 'jpeg', 'png', 'gif'].includes(data.type)) {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    filePreviewDiv.appendChild(img);
                } else {
                    filePreviewDiv.textContent = 'Preview not available for this file type.';
                }

                fileInfoBox.style.display = 'block';
            })
            .catch(error => console.error('Error:', error));
        }
    });
});

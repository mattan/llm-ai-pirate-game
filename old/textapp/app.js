document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const text = document.getElementById('textInput').value;

    fetch('/save-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        fetchText();
    })
    .catch(error => console.error('Error:', error));
});

function fetchText() {
    fetch('/get-text')
    .then(response => response.text())
    .then(data => {
        document.getElementById('textDisplay').innerText = data;
    })
    .catch(error => console.error('Error:', error));
}

fetchText();

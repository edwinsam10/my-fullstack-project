function fetchData() {
    fetch("http://localhost:5000/api/data")
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => console.error(err));
}

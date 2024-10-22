function checkNumber() {
    const num = document.getElementById("numInput").value;

    if (num < 1 || num > 10) {
        document.getElementById("output").innerText = "число вне диапазона от 1 до 10";
    } else {
        const url = `https://jsonplaceholder.typicode.com/photos?_limit=${num}`;

        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                const data = JSON.parse(xhr.responseText);
                console.log(data); 
                document.getElementById("output").innerText = "Request successful! Please check console for data.";                
            } else {
                document.getElementById("output").innerText = "Error in making request";
            }
        };
        xhr.send();
    }
}

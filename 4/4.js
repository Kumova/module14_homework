const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

submitBtn.addEventListener('click', () => {
    const number1 = Number(number1Input.value);
    const number2 = Number(number2Input.value);

    if (isNaN(number1) || isNaN(number2) || number1 < 100 || number1 > 300 || number2 < 100 || number2 > 300) {
        result.textContent = "одно из чисел вне диапазона от 100 до 300";
    } else {
        fetch(`https://dummyimage.com/${number1}x${number2}/`)
        .then(response => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('Network response was not OK.');
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            result.innerHTML = `<img src="${imageUrl}" alt="Dummy Image">`;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
});
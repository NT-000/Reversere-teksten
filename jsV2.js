let reversed = "";

function updateView() {
    let html = /*HTML*/ `
    <h1>String Reverse</h1>
    <div>${reversed}</div>
    <input type="text">
    <button  onclick="reversedText(this.previousElementSibling)">Reverse</button>
    `;
    document.getElementById('app').innerHTML = html;
}

function reversedText(input) {
    let text = input.value;
    reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    updateView();
}
updateView();
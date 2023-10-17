var data;
function GetNama(data) {
    const xhr = new XMLHttpRequest();

    if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                let result = document.querySelector('.result')
                innerHTML = ` ${response.name}, ${response.id}`;
                result.appendChild(innerHTML);
            } else {
                console.error('Gagal memuat data');
            }
        }

    xhr.open('GET', `http://159.223.51.203:81/api/bio`, true);
    xhr.send();

    inputKeyword.value = null;
};
/*
 function GetNama() {
    const xhr = new XMLHttpRequest();
    let card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('card1');
                card.classList.add('card2');
                card.innerHTML = `<h2 style="margin-bottom: 15px;">Results for: ${document.name}, ${document.id}</h2>`;
                result.appendChild(card);
    xhr.open('GET', `http://159.223.51.203:81/api/bio`, true);
    xhr.send();

}
*/

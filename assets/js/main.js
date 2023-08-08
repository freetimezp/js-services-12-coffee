document.getElementById('cart').addEventListener('click', () => {
    document.getElementById('cart__bx').classList.toggle('cart__bx_active');
});

let card_count = 0;
let price_add = 0;

const addCard = () => {
    let card = document.createElement('div');
    card.className = 'card';
    card.id = `card${card_count}`;
    //console.log(card.id);

    card.innerHTML = `
        <div class="img_title">
            <img src="${document.getElementsByClassName('main__img')[0].src}" alt="coffee">
            <div class="">
                <h5>${document.getElementsByClassName('coffee__title')[0].innerText}</h5>
                <h6 title="${document.getElementsByClassName('coffee__price')[0].title}">
                    $${document.getElementsByClassName('coffee__price')[0].title}
                </h6>
            </div>
        </div>
    `;
    //console.log(card);

    let removeBtn = document.createElement('i');
    removeBtn.className = 'bi bi-x';
    removeBtn.addEventListener('click', () => removeCard(card.id));
    card.appendChild(removeBtn);

    document.getElementsByClassName('coffee__cards')[0].appendChild(card);
    card_count++;
    price_add += +document.getElementsByClassName('coffee__price')[0].title;
    document.getElementById('total').innerText = '$' + price_add;

    function removeCard(cardId) {
        let card = document.getElementById(cardId);
        //console.log(card);

        if (card) {
            card.remove();
            price_add -= +card.getElementsByTagName('h6').title;
            document.getElementById('total').innerText = '$' + price_add;
        }
    }
}

document.getElementById('add__button').addEventListener('click', () => {
    addCard();
});
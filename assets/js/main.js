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
            <div class="title_price">
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
    //console.log(price_add);

    function removeCard(cardId) {
        let card = document.getElementById(cardId);
        //console.log(cardId);

        if (card) {
            card.remove();
            price_add -= +card.getElementsByTagName('h6')[0].title;
            document.getElementById('total').innerText = '$' + price_add;
        }
    }
}

document.getElementById('add__button').addEventListener('click', () => {
    addCard();
});

let coffee = [
    {
        name: "Simple Coffee",
        price: "9",
        img: "assets/images/coffee_cup.png"
    },
    {
        name: "Cappuccino",
        price: "15",
        img: "assets/images/cappuccino.png"
    },
    {
        name: "Royal Coffee",
        price: "18",
        img: "assets/images/coffee_cup3.png"
    },
];

let next_back_count = 0;

let pagi_fun = () => {
    Array.from(document.getElementsByClassName('pagi__btn')).forEach((el, i) => {
        el.style.width = "10px";
        el.style.height = "10px";
    })
}

document.getElementById('next').addEventListener('click', () => {
    if (coffee.length - 2 < next_back_count) {
        next_back_count = 0;
    } else {
        next_back_count++;
    }

    document.getElementsByClassName('main__img')[0].src = coffee[next_back_count].img;
    document.getElementsByClassName('coffee__title')[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName('coffee__price')[0].innerText = '$' + coffee[next_back_count].price;
    document.getElementsByClassName('coffee__price')[0].title = coffee[next_back_count].price;

    document.getElementById('count').innerText = next_back_count + 1;

    pagi_fun();

    document.getElementsByClassName('pagi__btn')[next_back_count].style.width = "15px";
    document.getElementsByClassName('pagi__btn')[next_back_count].style.height = "15px";
});

document.getElementById('back').addEventListener('click', () => {
    if (0 >= next_back_count) {
        next_back_count = coffee.length - 1;
    } else {
        next_back_count--;
    }

    document.getElementsByClassName('main__img')[0].src = coffee[next_back_count].img;
    document.getElementsByClassName('coffee__title')[0].innerText = coffee[next_back_count].name;
    document.getElementsByClassName('coffee__price')[0].innerText = '$' + coffee[next_back_count].price;
    document.getElementsByClassName('coffee__price')[0].title = coffee[next_back_count].price;

    document.getElementById('count').innerText = next_back_count + 1;

    pagi_fun();

    document.getElementsByClassName('pagi__btn')[next_back_count].style.width = "15px";
    document.getElementsByClassName('pagi__btn')[next_back_count].style.height = "15px";
});
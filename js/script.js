const groseryList = ['Latte', 'Pane', 'Lattuga', 'Pomodoro', 'Carote'];
const target = document.getElementById('target')

let i = 0;
let shoppingList = '<ul>'

while (i < groseryList.length) {

    console.log(groseryList[i]);

    shoppingList += `<li>${groseryList[i]}</li>`;

    i++
}

shoppingList += '<ul>'

target.innerHTML = shoppingList;
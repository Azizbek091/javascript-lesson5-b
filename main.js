let object = receipt()
let delivery = 9000
let total = delivery
let menu = 'Вы заказали '

for(let i in object){
    menu += i + ' ' + object[i].info + ', '
    total += object[i].price
}

console.log(menu + ' | Общая стоимость ' + total + `сумм с доставкой (${delivery})`);

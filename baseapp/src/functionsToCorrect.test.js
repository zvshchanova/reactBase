import {difference, timeOfDay} from './functionsToCorrect';

test ('testing ', () => {
expect(difference()).toBe();

})
//Function 3
//Протестируйте всевозможные сценарии и исправьте функцию ( если не получится- подсказка будет в дискорде)
// export function timeOfDay(date) {

//     let hours = date.getHours();

//     if (hours >= 0 && hours <= 5) {
//         return 'night';
//     } else if (hours > 5 && hours <= 11) {
//         return 'morning';
//     } else if (hours > 11 && hours <= 17) {
//         return 'day';
//     } else {
//         return 'evening';
//     }

// }


//Function 4
/* В этой функции есть пара ошибок. Протестируйте функцию и исправьте недочеты.
Убедитесь что вы получили именно тот список проверяя уникальный предмет из списка 
https://jestjs.io/docs/using-matchers#arrays-and-iterables */
export function getShoppingListByNum(listNum) {

    const shoppingList1 = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
    ];

    const shoppingList2 = [
        'tomatoes',
        'bread',
        'carrot',
        'paper towels',
        'milk',
    ];

    const shoppingList3 = [
        'porridge',
        'milk',
        'cheese',
        'newspaper',
        'potatoes',
    ];

    switch (listNum) {
        case 0:
            return shoppingList1;
        case 1:
            return shoppingList2;
        case 2:
            return shoppingList3;
    }
}
import {timeOfDay, getShoppingListByNum} from './functionsToCorrect';

test ('testing3 timeOfDay ', () => {
    const morning = new Date();
    morning.setHours(8);
    expect(timeOfDay(morning)).toBe('morning');
    const day = new Date();
    day.setHours(15);
    expect(timeOfDay(day)).toBe('day');
    const evening = new Date();
    evening.setHours(20);
    expect(timeOfDay(evening)).toBe('evening');
    const night = new Date();
    night.setHours(2);
    expect(timeOfDay(night)).toBe('night');
})


test ('testing4 getShoppingListByNum ', () => {
    expect(getShoppingListByNum(1)).toContain('milk')

})


//Function 4
/* В этой функции есть пара ошибок. Протестируйте функцию и исправьте недочеты.
Убедитесь что вы получили именно тот список проверяя уникальный предмет из списка 
https://jestjs.io/docs/using-matchers#arrays-and-iterables */

// export function getShoppingListByNum(listNum) {

//     const shoppingList1 = [
//         'diapers',
//         'kleenex',
//         'trash bags',
//         'paper towels',
//         'milk',
//     ];

//     const shoppingList2 = [
//         'tomatoes',
//         'bread',
//         'carrot',
//         'paper towels',
//         'milk',
//     ];

//     const shoppingList3 = [
//         'porridge',
//         'milk',
//         'cheese',
//         'newspaper',
//         'potatoes',
//     ];

//     switch (listNum) {
//         case 0:
//             return shoppingList1;
//         case 1:
//             return shoppingList2;
//         case 2:
//             return shoppingList3;
//     }
// }
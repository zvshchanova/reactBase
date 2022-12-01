import {multipyBythree, difference, division} from './functions';

test('testing multipyBythree', () =>{
     expect (multipyBythree(4)).toBe(12);
     expect (multipyBythree(0)).toBe(0);
     expect (multipyBythree(1)).toBe(3);
;
})

test ('testing difference', () => {
    expect (difference(8, 2)).toBe(6);

})

test ('testing division', () => {
    const value1 = 10;
    const value2 = 2;
    expect (division(value1, value2)).toBe(5);
    expect (division(value1, value2)).not.toBe(0);
    
})

// https://jestjs.io/docs/using-matchers


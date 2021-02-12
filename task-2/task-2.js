"use strict";

// Когда 2 плитки

const cookPancake = (quantity, stove = 2) => `${((quantity - (quantity % stove)) + ((quantity % stove) * 2))} минуты`

console.log('1 блинчик -', cookPancake(1))
console.log('2 блинчика -', cookPancake(2))
console.log('3 блинчика -', cookPancake(3))
console.log('4 блинчика -', cookPancake(4))
console.log('5 блинчиков -', cookPancake(5))

// Получается, когда два блинчика одновременно жаратся, то на блинчик уходит минута.
// Когда один блинчик жарится, то на него уходит 2 минуты.


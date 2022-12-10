const RodCut = require('./rod-cut');
const RodCutIterative = require('./rod-cut-iterative');

const timesRodCutMemo = [];
const timesRodCutIterative = [];
const m = Math.floor(Math.random() * (20 - 10 + 1) + 10);
const inputsSize = [];

for (let i = 0; i < 10; i++) {
    const n = Math.floor(Math.random() * (1000 - 10 + 1) + 10);
    inputsSize.push(n);
}

// ordenar os tamanhos de entrada
inputsSize.sort();

for (let i = 0; i < inputsSize.length; i++) {
    const n = inputsSize[i];
    const cutCost = Math.floor(Math.random() * (n + 1));


    let totalTimesRodCutMemo = 0;
    let totalTimesRodCutIterative = 0;

    for (let j = 0; j < m; j++) {
        const arrayRodCutMemo = [];
        const arrayRodCutIterative = [];

        for (let size = 1; size <= n; size++) {
            const randomNumber = (Math.random() * ((2 * n) + 1));
            arrayRodCutMemo.push(randomNumber);
            arrayRodCutIterative.push(randomNumber);
        }

        arrayRodCutMemo.sort();
        arrayRodCutIterative.sort();

        let start = new Date().getTime();
        RodCut.printCuts(arrayRodCutMemo, n, cutCost);
        let total = new Date().getTime() - start;
        totalTimesRodCutMemo += total;

        start = new Date().getTime();
        RodCutIterative.printCuts(arrayRodCutIterative, n, cutCost);
        total = new Date().getTime() - start;
        totalTimesRodCutIterative += total;
    }

    timesRodCutMemo.push([n, Number((totalTimesRodCutMemo / m).toFixed(4))]);
    timesRodCutIterative.push([n, Number((totalTimesRodCutIterative / m).toFixed(4))]);
}

console.log(timesRodCutMemo);
console.log(timesRodCutIterative);
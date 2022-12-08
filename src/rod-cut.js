/**
 *
 * @param {Array} prices
 * @param {int} rodSize
 * @returns [bestPrice, cuts]
 */
function rodCutMemo(prices, rodSize) {
    const bestPrices = [];
    for (let i = 0; i < rodSize; i++) {
        bestPrices.push(0)
    }

    return rodCutMemoRecursive(prices, rodSize, bestPrices);
}

function rodCutMemoRecursive(prices, rodSize, bestPrices) {
    if(rodSize === 1) {
        bestPrices[1] = prices[1];
        return bestPrices[1];
    }

    let best = prices[rodSize];
    for (let i = 1; i < rodSize - 1; i++) {
    }
}

module.exports = rodCutMemo;
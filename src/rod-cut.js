/**
 *
 * @param {Array} prices
 * @param {int} rodSize
 * @param {float} cutCost
 * @returns [bestPrice, cutPoints]
 */
function rodCutMemo(prices, rodSize, cutCost) {
    const bestPrices = [];
    const cutPoints = [];
    for (let i = 0; i <= rodSize; i++) {
        bestPrices.push(0);
        cutPoints.push(0)
    }

    return [rodCutMemoRecursive([0, ...prices], rodSize, cutCost, bestPrices, cutPoints), cutPoints];
}

function rodCutMemoRecursive(prices, rodSize, cutCost, bestPrices, cutPoints) {
    if(rodSize == 1) {
        bestPrices[1] = prices[1];
        cutPoints[1] = 1;

        return bestPrices[1];
    }

    let best = prices[rodSize];
    cutPoints[rodSize] = rodSize;
    for (let i = 1; i <= rodSize - 1; i++) {
        if(bestPrices[rodSize - i] == 0) {
            bestPrices[rodSize - i] = rodCutMemoRecursive(prices, rodSize - i, cutCost, bestPrices, cutPoints);
        }

        const possibleBetter = prices[i] + bestPrices[rodSize - i] - cutCost;
        if (best < possibleBetter) {
            best = possibleBetter;
            cutPoints[rodSize] = i;
        }
    }

    bestPrices[rodSize] = best;

    return best;
}

/**
 *
 * @param {Array} prices
 * @param {int} rodSize
 * @param {float} cutCost
 */
function printCuts(prices, rodSize, cutCost) {
    const [profit, cutPoints] = rodCutMemo(prices, rodSize, cutCost);

    console.log("Lucro: ", profit);
    while (rodSize > 0) {
        console.log("Corte de tamanho: ", cutPoints[rodSize]);
        rodSize -= cutPoints[rodSize];
    }
}

module.exports.rodCutMemo = rodCutMemo;
module.exports.printCuts = printCuts;
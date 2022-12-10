/**
 *
 * @param {Array} prices
 * @param {int} rodSize
 * @param {float} cutCost
 * @returns [bestPrice, cutPoints]
 */
function rodCutIterative(prices, rodSize, cutCost) {
    const bestPrices = [];
    const cutPoints = [];
    prices = [0, ...prices];

    bestPrices[0] = prices[0];
    cutPoints[0] = 0;
    bestPrices[1] = prices[1];
    cutPoints[1] = 1;

    for (let j = 2; j <= rodSize; j++) {
        let best = prices[j];
        cutPoints[j] = j;

        for (let i = 1; i <= j - 1; i++) {
            const possibleBetter = prices[i] + bestPrices[j - i] - cutCost;
            if (best < possibleBetter) {
                best = possibleBetter;
                cutPoints[j] = i;
            }
        }

        bestPrices[j] = best;
    }

    return [bestPrices[rodSize], cutPoints];
}

/**
 *
 * @param {Array} prices
 * @param {int} rodSize
 * @param {float} cutCost
 */
function printCuts(prices, rodSize, cutCost) {
    const [profit, cutPoints] = rodCutIterative(prices, rodSize, cutCost);

    console.log("Lucro: ", profit);
    while (rodSize > 0) {
        console.log("Corte de tamanho: ", cutPoints[rodSize]);
        rodSize -= cutPoints[rodSize];
    }
}

module.exports.rodCutIterative = rodCutIterative;
module.exports.printCuts = printCuts;
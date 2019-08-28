// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/



// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.



var maxProfit = function(prices) {
    // [7,1,5,3,6,4] => buy day 2, sell day 3, buy day 4, sell day 5 (profit = 7)
    // [1,2,3,4,5] => buy day 1, sell day 5 (profit = 4)
    // [7,6,4,3,1] => no transactions (profit = 0)
    // [13,9,4,5,12,10,4,2,1,2] => buy day 3, sell day 5, buy day 9, sell day 10 (profit = 9)
    
    let profit = 0;
    let lowestPrice = prices[0];
    let highestPrice;
    
    for (i = 0; i < prices.length; i++) {
        
        // check for buy conditions
        if (prices[i] < lowestPrice) {                      // today's price is lower than previous lowest price
            lowestPrice = prices[i];
        };
        
        // check for sell conditions, and update profit
        if (prices[i+1] > lowestPrice &&                    // next day's price is greater, AND
            (!prices[i+2] || prices[i+1] > prices[i+2])     // next day is the final day, OR next day's price is higher than next-next day's price
        ) {
            highestPrice = prices[i+1];
            profit += highestPrice - lowestPrice;
            lowestPrice = highestPrice;
        };
        
    };
    
    return profit
};
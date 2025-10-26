function maxProfit(prices: number[]): number {
    if(prices.length===0) return 0;
    let min = prices[0];
    let maxProfit = 0;
    for(let i=1;i<prices.length;i++){
        if((prices[i]-min)>maxProfit){
            maxProfit = prices[i]-min
        }
        if(prices[i]<min){
            min= prices[i]
        }
    }
    return maxProfit;
};
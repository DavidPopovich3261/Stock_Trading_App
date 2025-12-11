export function updated(indexStock,operation,stockMarket){
    if (operation == "+"){
        let correntPrice = stockMarket.stocks[indexStock].currentPrice
        let category = stockMarket.stocks[indexStock].category
        for (let stock of stockMarket.stocks){
            if(stock.category == category){
                stock.previousPrices.push(stock.currentPrice)
                stock.currentPrice *= 1.01
            }
            stockMarket.stocks[indexStock].currentPrice = correntPrice * 1.05
    }}else if (operation == "-"){
        let correntPrice = stockMarket.stocks[indexStock].currentPrice
        let category = stockMarket.stocks[indexStock].category
        for (let stock of stockMarket.stocks){
            if(stock.category == category){
                stock.previousPrices.push(stock.currentPrice)
                stock.currentPrice *= 0.99
            }
            stockMarket.stocks[indexStock].currentPrice = correntPrice * 0.95
    }
}
const d = new Date();
stockMarket.lastUpdated = d.getTime();

}
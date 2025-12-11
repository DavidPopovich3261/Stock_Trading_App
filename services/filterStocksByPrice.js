import { stockMarket } from "../data/data.js";

function filterStocksByPrice(givenPrice, above){
    let stocksByPrice = undefined
    if(typeof(givenPrice) == "number"){
        if(above){
            stocksByPrice = stockMarket.stocks.filter((stock)=>{
                if (stock.currentPrice >= givenPrice){
                    return true
                }
            })
        }else{
            stocksByPrice = stockMarket.stocks.filter((stock)=>{
                if (stock.currentPrice <= givenPrice){
                    return true
                }
            })
        }  
    }else{
        console.log(`givenPrice: ${givenPrice} is not a number is ${typeof(givenPrice)}`);
        return []
    }
    
    if(typeof(stocksByPrice[0]) == "undefined"){
        console.log("No shares were found within the requested price range.");
        return []
    }    
    return stocksByPrice
    
}

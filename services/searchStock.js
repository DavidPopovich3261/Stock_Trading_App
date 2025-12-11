import { stockMarket } from "../data/data.js";

function searchStock(identifier){
    let stocks = stockMarket.stocks.filter((stock)=>{
        if (identifier == stock.id  || identifier == stock.name){
            return true
        }
    })
    if (stocks[0] != undefined){
        return stocks
    }else {
        console.log("No similar ID found.");
        return stocks
    }
}

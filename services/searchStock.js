import { stockMarket } from "../data/data.js";

export function searchStock(identifier){
    let stocksfound = stockMarket.stocks.filter((stock)=>{
        if (identifier == stock.id  || identifier == stock.name){
            return true
        }
    })
    if (stocksfound[0] != undefined){
        return stocksfound
    }else {
        console.log("No similar ID found.");
        return []
    }
}

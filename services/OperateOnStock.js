import { stockMarket } from "../data/data.js";
import input from 'analiza-sync';
import { searchStock } from "./searchStock.js";
import { updated } from "../utils/updated.js";

function OperateOnStock(operation, identifier=0){
    if (operation != 'buy' && operation != 'sell'){
        console.log(`${operation} != 'buy' && ${operation} != 'sell'`);
    }else{
        let stocksfound = searchStock(identifier)
        let indexStock = stockMarket.stocks.findIndex((stock)=>stock.id == stocksfound[0].id)
        console.log(stocksfound);
        if (stocksfound != []) {     
            if (operation == "buy"){
                console.log(`There are ${stocksfound[0].availableStocks} shares available for sale.`);
                let choice = Number(input("how many units to buy ?  "))
                if(choice <= stocksfound[0].availableStocks){
                    stockMarket.stocks[indexStock].availableStocks -= choice
                    updated(indexStock,"+",stockMarket)
                    
                }
            }else if(operation == 'sell'){
                let choice = Number(input("how many units to sell ?  "))
                    stockMarket.stocks[indexStock].availableStocks += choice
                    updated(indexStock,"-",stockMarket)

                }

    }
}}
OperateOnStock("buy","f1s8dnq")


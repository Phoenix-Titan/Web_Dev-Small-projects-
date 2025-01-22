import { EcommerceStore, StoreDesign }  from "./main.js"

console.log('hello from home2')



let homeProduct = new EcommerceStore()

//tech Data
homeProduct.addToStore({name:'smart Watch',price:'$34.89'}, 'popular')
//------------------------------------------||||||
//Movies Data
homeProduct.addToStore({name:'Ender',price:'$34.89'}, 'latest')
homeProduct.addToStore({name:'Ender',price:'$34.89'}, 'games')

document.addEventListener('DOMContentLoaded', ()=>{
    let homeDesign = new StoreDesign(homeProduct)
    homeDesign.createProductScroll(homeDesign.popularData ,'sect1d');
    homeDesign.createProductScroll(homeDesign.latestData ,'sect2d');
    homeDesign.createProductScroll(homeDesign.gameData ,'sect3d');
    

});

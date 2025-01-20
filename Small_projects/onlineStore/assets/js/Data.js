class Categories{
    constructor(CategoryName,dataObject){
	this.CategoryName = CategoryName;
	this.dataObject = dataObject || [];
    }

}

class EcommerceStore{
    constructor(){
	this.fashion = new Categories('fashion',[]);
	this.games = new Categories('games',[]);
	this.tech = new Categories('tech',[]);
	this.movies = new Categories('movies',[]);
    }

    //This adds product to the category specificied.
    addToStore(productData , category){
	if(category === 'fashion'){
	    this.fashion.dataObject.push(productData);	    
	}
	else if(category === 'games'){
	    this.games.dataObject.push(productData);
	}
	else if(category === 'tech'){
	    this.tech.dataObject.push(productData);
	}
	else if(category === 'movies'){
	    this.movies.dataObject.push(productData);
	}
	else{
	    console.error(`Please correct the data you are entering ${productData} ,${category}`);
	}
	
    }

    showCategoryData(){
	console.log(this.fashion);
	console.log(this.games);
	console.log(this.tech);
	console.log(this.movies);
    }

    //this return the data of the specified category.
    Data(category, intance){
	if(category === 'fashion'){
	    let  fashionData = intance.fashion.dataObject;
	    return fashionData;
	}
	else if(category == 'games'){
	   let  gameData = this.games.dataObjects;
	    return gameData;
	    
	}
	else if(category == 'tech'){
	    let  techData = this.tech.dataObjects;
	    return techData;
	    
	}
	else if(category == 'movies'){
	    let movieData = this.movies.dataObjects;
	    return movieData;
	}
	else{
	    console.error(`This category ${category} doesn't exist.`);
	}
    }

    
}


class StoreDesign{
   constructor(dataIntance){
       this.dataIntance = dataIntance;
	
    //The data is categorizes here
       this.fashionData = dataIntance.fashion.dataObject;
       this.gameData = dataIntance.games.dataObject;
       this.techData = dataIntance.tech.dataObject;
       this.moviesData = dataIntance.movies.dataObject; 

   }
    //methods
    
    toggleNavbar(){
	//this handle the opening and closing of the navbar
	let open_Sidebar_icon = document.getElementById('openBtn');
	let close_Sidebar = document.getElementById('closeBtn');
	let Sidebar_menu = document.querySelector('#side_bar');

	open_Sidebar_icon.addEventListener('click',(event) =>{
	    Sidebar_menu.classList.toggle('open_and_close_Sidebar');
	});

	close_Sidebar.addEventListener('click',(event) =>{
	    Sidebar_menu.classList.remove('open_and_close_Sidebar');
	})


    }
    show(dataIntance){
	let fashionData = dataIntance.fashion.dataObject;
	let gameData = dataIntance.games.dataObject;
	let techData = dataIntance.tech.dataObject;
	let moviesData =dataIntance.movies.dataObject; 

	console.log(moviesData)
    }
    
    show_2(){
	console.log(this.gameData)
    }
    
}














//Data
let storeProducts = new EcommerceStore();










//Fashion Data
// 1
storeProducts.addToStore({name:'t-shirt',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025'}, 'fashion') 

// 2
storeProducts.addToStore({name:'jeans',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025'}, 'fashion')

// 3
storeProducts.addToStore({name:'sunglasses',price:'$24.95',description:'UV protection', date:'apr 10,2025'}, 'fashion')

// 4
storeProducts.addToStore({name:'backpack',price:'$45.00',description:'Durable and spacious', date:'may 5,2025'}, 'fashion')

// 5
storeProducts.addToStore({name:'dress',price:'$69.99',description:'Summer dress', date:'jun 25,2025'}, 'fashion')

// 6
storeProducts.addToStore({name:'skirt',price:'$39.99',description:'Midi skirt, floral print', date:'jul 18,2025'}, 'fashion')

// 7
storeProducts.addToStore({name:'hat',price:'$15.00',description:'Baseball cap', date:'aug 12,2025'}, 'fashion')

// 8
storeProducts.addToStore({name:'scarf',price:'$29.95',description:'Soft cashmere', date:'sep 3,2025'}, 'fashion')

// 9
storeProducts.addToStore({name:'shoes',price:'$79.99',description:'Leather boots', date:'oct 21,2025'}, 'fashion')

// 10
storeProducts.addToStore({name:'jewelry',price:'$149.00',description:'Elegant necklace', date:'nov 17,2025'}, 'fashion')

// 11
storeProducts.addToStore({name:'coat',price:'$199.00',description:'Winter coat, warm and stylish', date:'dec 12,2025'}, 'fashion')

// 12
storeProducts.addToStore({name:'hoodie',price:'$49.99',description:'Comfortable and cozy', date:'jan 28,2026'}, 'fashion')

// 13
storeProducts.addToStore({name:'shorts',price:'$29.99',description:'Denim shorts', date:'feb 22,2026'}, 'fashion')

// 14
storeProducts.addToStore({name:'sweater',price:'$34.99',description:'Soft and warm', date:'mar 18,2026'}, 'fashion')

// 15
storeProducts.addToStore({name:'belt',price:'$25.00',description:'Leather belt', date:'apr 15,2026'}, 'fashion')

// 16
storeProducts.addToStore({name:'socks',price:'$9.99',description:'Cotton socks', date:'may 10,2026'}, 'fashion')

// 17
storeProducts.addToStore({name:'swimsuit',price:'$49.95',description:'Bikini', date:'jun 30,2026'}, 'fashion')

// 18
storeProducts.addToStore({name:'gloves',price:'$19.99',description:'Leather gloves', date:'jul 25,2026'}, 'fashion')

// 19
storeProducts.addToStore({name:'underwear',price:'$14.99',description:'Cotton underwear', date:'aug 19,2026'}, 'fashion')


//Games Data
storeProducts.addToStore({name:'COD',price:'$34.89'}, 'games')

//tech Data
storeProducts.addToStore({name:'smart Watch',price:'$34.89'}, 'tech')

//Movies Data
storeProducts.addToStore({name:'Ender',price:'$34.89'}, 'movies')







//store Designing
let storeDesign = new StoreDesign(storeProducts);

//storeDesign.show(storeProducts);
storeDesign.show_2();


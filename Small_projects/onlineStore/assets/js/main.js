//Aurthor: Samuel H. Barker
// January 3 2025 to  ___ 2025.




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
	this.popular = new Categories('movies',[]);
	this.latest = new Categories('latest',[]);
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
	else if (category == 'popular'){
	    this.popular.dataObject.push(productData);
	}
	else if(category === 'latest'){
	    this.latest.dataObject.push(productData);
	}
	else{
	    console.error(`Please correct the data you are entering ${productData} ,${category}`);
	}
	
    }

    showCategoryData(){
	console.log(this.fashion);
	console.log(this.games);
	console.log(this.tech);
	console.log(this.popular);
	console.log(this.latest);
    }

    //this return the data of the specified category.
    Data(category){
	if(category === 'fashion'){
	    let  fashionData = this.fashion.dataObject;
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
	else if(category == 'popular'){
	    let popularData = this.popular.dataObjects;
	    return popularData;
	}
	else if(category == 'latest'){
	    let popularData = this.latest.dataObjects;
	    return latestData;
	}
	else{
	    console.error(`This category ${category} doesn't exist.`);
	}
    }

    
}

//This class contain the methods the handle the functionality of various parts
//of the web store small and large parts.
class StoreDesign{
     constructor(dataIntance){
	 this.dataIntance = dataIntance;
	
	 //The data is categorizes here
	 this.fashionData = dataIntance.fashion.dataObject;
	 this.gameData = dataIntance.games.dataObject;
	 this.techData = dataIntance.tech.dataObject;
	 this.popularData = dataIntance.popular.dataObject;
	 this.latestData = dataIntance.latest.dataObject; 

     }
    //methods

    
    //this handles the navbar opening and closing on click.
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

    //This handle display the product data into product item html for store
    // and home  pages.
    createProductScroll(data , containerClassName){
	let productContainer = document.querySelector(containerClassName);
	data.forEach((product,index)=>{
	    let divTag = document.createElement('div');
	    divTag.classList.add('product_item');
	    
	    let itemDetail = (divTag.innerHTML = `
 <img src="${product.src}"/>
		    <p data-index=${index}>${product.name}<br/>
			<span>Chan Tio</span>	
		    </p>
		    <span class="product_price">${product.price}USD</span>
		    
		    <span class="product_rating">
			 <i class="fa-solid fa-star"></i>
			 <i class="fa-solid fa-star"></i>
			 <i class="fa-solid fa-star"></i>
			 <i class="fa-regular fa-star"></i>
			 <i class="fa-regular fa-star"></i>
		    </span>
		    <span class="add_cartBtn">
			<i class="fa-solid fa-cart-plus" style="color: #63E6BE;"></i>
			
		    </span>

	    `);
	    productContainer.appendChild(divTag) 
	});
	
    }

   

    

}

















//Data
let storeProducts = new EcommerceStore();



//Fashion Data
// 1
storeProducts.addToStore({name:'T-shirt',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025' ,src:''}, 'fashion') 

// 2
storeProducts.addToStore({name:'Jeans',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025' ,src:''}, 'fashion')

// 3
storeProducts.addToStore({name:'Sunglasses',price:'$24.95',description:'UV protection', date:'apr 10,2025' ,src:''}, 'fashion')

// 4
storeProducts.addToStore({name:'Backpack',price:'$45.00',description:'Durable and spacious', date:'may 5,2025' ,src:''}, 'fashion')

// 5
storeProducts.addToStore({name:'Dress',price:'$69.99',description:'Summer dress', date:'jun 25,2025' ,src:''}, 'fashion')

// 6
storeProducts.addToStore({name:'Skirt',price:'$39.99',description:'Midi skirt, floral print', date:'jul 18,2025' ,src:''}, 'fashion')

// 7
storeProducts.addToStore({name:'Hat',price:'$15.00',description:'Baseball cap', date:'aug 12,2025' ,src:''}, 'fashion')

// 8
storeProducts.addToStore({name:'Scarf',price:'$29.95',description:'Soft cashmere', date:'sep 3,2025' ,src:''}, 'fashion')

// 9
storeProducts.addToStore({name:'Shoes',price:'$79.99',description:'Leather boots', date:'oct 21,2025' ,src:''}, 'fashion')

// 10
storeProducts.addToStore({name:'Jewelry',price:'$149.00',description:'Elegant necklace', date:'nov 17,2025' ,src:''}, 'fashion')

// 11
storeProducts.addToStore({name:'Coat',price:'$199.00',description:'Winter coat, warm and stylish', date:'dec 12,2025' ,src:''}, 'fashion')

// 12
storeProducts.addToStore({name:'Hoodie',price:'$49.99',description:'Comfortable and cozy', date:'jan 28,2026' ,src:''}, 'fashion')

// 13
storeProducts.addToStore({name:'Shorts',price:'$29.99',description:'Denim shorts', date:'feb 22,2026' ,src:''}, 'fashion')

// 14
storeProducts.addToStore({name:'Sweater',price:'$34.99',description:'Soft and warm', date:'mar 18,2026' ,src:''}, 'fashion')

// 15
storeProducts.addToStore({name:'Belt',price:'$25.00',description:'Leather belt', date:'apr 15,2026' ,src:''}, 'fashion')

// 16
storeProducts.addToStore({name:'Socks',price:'$9.99',description:'Cotton socks', date:'may 10,2026' ,src:''}, 'fashion')

// 17
storeProducts.addToStore({name:'Swimsuit',price:'$49.95',description:'Bikini', date:'jun 30,2026' ,src:''}, 'fashion')

// 18
storeProducts.addToStore({name:'Gloves',price:'$19.99',description:'Leather gloves', date:'jul 25,2026' ,src:''}, 'fashion')

// 19
storeProducts.addToStore({name:'Underwear',price:'$14.99',description:'Cotton underwear', date:'aug 19,2026' ,src:''}, 'fashion')


//Games Data
storeProducts.addToStore({name:'COD',price:'$34.89'}, 'games')
storeProducts.addToStore({name:'pubg',price:'$34.89'}, 'games')
storeProducts.addToStore({name:'Galaxy',price:'$34.89'}, 'games')

//tech Data
storeProducts.addToStore({name:'smart Watch',price:'$34.89'}, 'tech')

//Movies Data
storeProducts.addToStore({name:'Ender',price:'$34.89'}, 'movies')







//store Designing
let storeDesign = new StoreDesign(storeProducts);

storeDesign.toggleNavbar();
storeDesign.createProductScroll(storeDesign.gameData ,'.product_wrapper');
storeDesign.createProductScroll(storeDesign.fashionData ,'.sect2');
storeDesign.createProductScroll(storeDesign.techData ,'.sect3');
storeDesign.createProductScroll(storeDesign.moviesData ,'.sect4');


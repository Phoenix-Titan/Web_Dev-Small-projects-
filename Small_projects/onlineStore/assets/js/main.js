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
	let productContainer = document.getElementById(containerClassName);
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
ex
   

    

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


//------------------------------------------||||||


//Games Data

 storeProducts.addToStore({
    name: "Ethereal Swords",
    price: "$59.99",
    description: "Embark on a epic journey through a fantasy world, wielding powerful swords and magic to defeat ancient evils.",
    date: "Nov 15, 2024",
    src: "ethereal_swords.jpg" },"games")

storeProducts.addToStore({
    name: "Cogs & Creatures",
    price: "$29.99",
    description: "A whimsical puzzle platformer where you guide a curious creature through intricate mechanical worlds.",
    date: "Jan 20, 2025",
    src: "cogs_creatures.png" }, "games")
    
storeProducts.addToStore({
    name: "Whispering Sands",
    price: "$49.99",
    description: "Explore a vast and vibrant open world filled with secrets, hidden treasures, and intriguing characters.",
    date: "Mar 5, 2025",
    src: "whispering_sands.jpeg" },"games")

storeProducts.addToStore({
    name: "The Iron Alliance",
    price: "$19.99",
    description: "A challenging turn-based strategy game with a focus on deep tactical combat and political intrigue.",
    date: "May 10, 2025",
    src: "iron_alliance.gif" },"games")

storeProducts.addToStore({
    name: "Pro Soccer League",
    price: "$69.99",
    description: "Experience the thrill of professional soccer with realistic gameplay, player customization, and extensive career modes.",
    date: "Jul 15, 2025",
    src: "pro_soccer_league.jpg" },"games")
    
storeProducts.addToStore({
    name: "Nitro Rush 3",
    price: "$39.99",
    description: "High-octane arcade racing with intense speed, stunning visuals, and a variety of challenging tracks.",
    date: "Aug 25, 2025",
    src: "nitro_rush_3.png" }, "games")

storeProducts.addToStore({
    name: "Crimson Manor",
    price: "$24.99",
    description: "A chilling psychological horror game where you must uncover the dark secrets of an abandoned mansion.",
    date: "Oct 30, 2025",
    src: "crimson_manor.jpeg" }, "games")

storeProducts.addToStore({
    name: "Bounce & Dash",
    price: "$14.99",
    description: "A fast-paced and colorful platformer with challenging levels, unique power-ups, and a catchy soundtrack.",
    date: "Nov 18, 2025",
    src: "bounce_dash.gif" },"games")

storeProducts.addToStore({
    name: "Legends of Atheria",
    price: "$59.99",
    description: "A classic RPG with deep character customization, a rich story, and challenging turn-based combat.",
    date: "Dec 20, 2025",
    src: "legends_of_atheria.jpg" },"games")

storeProducts.addToStore({
    name: "Ghost Recon: Warzone",
    price: "$49.99",
    description: "A tactical first-person shooter with realistic gunplay, intense multiplayer modes, and a challenging campaign.",
    date: "Jan 10, 2026",
    src: "ghost_recon_warzone.png" }, "games")


//------------------------------------------||||||


//tech Data
storeProducts.addToStore({name:'smart Watch',price:'$34.89'}, 'tech')


//------------------------------------------||||||

//Movies Data
storeProducts.addToStore({name:'Ender',price:'$34.89'}, 'movies')







//store Designing
let storeDesign = new StoreDesign(storeProducts);

storeDesign.toggleNavbar();
storeDesign.createProductScroll(storeDesign.popularData ,'sect1');
storeDesign.createProductScroll(storeDesign.latestData ,'sect2');

storeDesign.createProductScroll(storeDesign.fashionData ,'sect3');
storeDesign.createProductScroll(storeDesign.techData ,'sect4');
storeDesign.createProductScroll(storeDesign.gameData ,'sect5');


//Aurthor: Samuel H. Barker
// January 3 2025 to  ___ 2025.




class Categories{
    constructor(CategoryName,dataObject){
	this.CategoryName = CategoryName;
	this.dataObject = dataObject || [];
    }

}


export class EcommerceStore{
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
	    console.log(`Please correct the data you are entering ${productData} ,${category}`);
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
	    console.log(`This category ${category} doesn't exist.`);
	}
    }

    
}

//This class contain the methods the handle the functionality of various parts
//of the web store small and large parts.
export class StoreDesign{
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
    createProductScroll(data ,containerClassName){
	let productContainer = document.getElementById(containerClassName);
	if(!productContainer){
	    console.log(`${containerClassName} was not found`)
	}
	else{
	    console.log(`${containerClassName} was found`)
	}
	
	data.forEach((product,index)=>{
	    let divTag = document.createElement('div');
	    divTag.classList.add('product_item');
	    
	    let itemDetail = (`
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
	    divTag.innerHTML = itemDetail
	    productContainer.appendChild(divTag) 
	});
	
    }

   

    

}






//Data for Store page
let storeProducts = new EcommerceStore();



//Fashion Data
// 1
storeProducts.addToStore({name:'T-shirt',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025' ,src:"/assets/images/store/fashion/T-shirt.jpg"}, 'fashion') 

// 2
storeProducts.addToStore({name:'Jeans',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025' ,src:"/assets/images/store/fashion/blue_jeans.jpg"}, 'fashion')

// 3
storeProducts.addToStore({name:'Sunglasses',price:'$24.95',description:'UV protection', date:'apr 10,2025' ,src:"/assets/images/store/fashion/sun_glasses.jpg"}, 'fashion')

// 4
storeProducts.addToStore({name:'Backpack',price:'$45.00',description:'Durable and spacious', date:'may 5,2025' ,src:"/assets/images/store/fashion/backpack.jpg"}, 'fashion')

// 5
storeProducts.addToStore({name:'Dress',price:'$69.99',description:'Summer dress', date:'jun 25,2025' ,src:"/assets/images/store/fashion/Dresses.jpg"}, 'fashion')

// 6
storeProducts.addToStore({name:'Skirt',price:'$39.99',description:'Midi skirt, floral print', date:'jul 18,2025' ,src:"/assets/images/store/fashion/redshorts.jpg"}, 'fashion')

// 7
storeProducts.addToStore({name:'Hat',price:'$15.00',description:'Baseball cap', date:'aug 12,2025' ,src:"/assets/images/store/fashion/brown_heart.jpg"}, 'fashion')

// 8
storeProducts.addToStore({name:'Scarf',price:'$29.95',description:'Soft cashmere', date:'sep 3,2025' ,src:"/assets/images/store/fashion/scof.jpg"}, 'fashion')

// 9
storeProducts.addToStore({name:'Brown Court',price:'$79.99',description:'Leather boots', date:'oct 21,2025' ,src:"/assets/images/store/fashion/brown_court.jpg"}, 'fashion')

// 10
storeProducts.addToStore({name:'Jewelry',price:'$149.00',description:'Elegant necklace', date:'nov 17,2025' ,src:"/assets/images/store/fashion/wedding_ring.jpg"}, 'fashion')

// 11
storeProducts.addToStore({name:'Coat',price:'$199.00',description:'Winter coat, warm and stylish', date:'dec 12,2025' ,src:"/assets/images/store/fashion/coffee_court.jpg"}, 'fashion')

// 12
storeProducts.addToStore({name:'Hoodie',price:'$49.99',description:'Comfortable and cozy', date:'jan 28,2026' ,src:"/assets/images/store/fashion/hoddie.jpg"}, 'fashion')


//------------------------------------------||||||

storeProducts.addToStore({
  name: 'T-shirt',price: '$19.99',description: 'Comfortable cotton',date: 'feb 15, 2025',src: '/assets/images/store/fashion/T-shirt.jpg',}, 'tech');

storeProducts.addToStore({name: 'Laptop',price: '$999.99',description: 'Powerful and portable',date: 'jan 10, 2024',src: '/assets/images/store/tech/laptop.jpg',}, 'tech');

storeProducts.addToStore({name: 'Smartphone', price: '$799.99',description: 'Flagship features', date: 'mar 20, 2023',src: '/assets/images/store/tech/smartphone.jpg',}, 'tech');

storeProducts.addToStore({ name: 'Headphones',price: '$149.99',description: 'High-fidelity sound',date: 'apr 5, 2025',src: '/assets/images/store/tech/headphones.jpg',}, 'tech');

storeProducts.addToStore({name: 'Smartwatch',price: '$299.99',description: 'Fitness tracking and more',date: 'may 15, 2024',src: '/assets/images/store/tech/smartwatch.jpg',}, 'tech');

storeProducts.addToStore({name: 'Tablet',price: '$399.99',description: 'Versatile and portable',date: 'jun 20, 2023',src: '/assets/images/store/tech/tablet.jpg',}, 'tech');

storeProducts.addToStore({ name: 'Router', price: '$199.99', description: 'Fast and reliable Wi-Fi',date: 'jul 10, 2024', src: '/assets/images/store/tech/router.jpg',}, 'tech');

storeProducts.addToStore({ name: 'Speaker', price: '$99.99',description: 'Portable and powerful sound', date: 'aug 25, 2023',src: '/assets/images/store/tech/speaker.jpg',}, 'tech');

storeProducts.addToStore({name: 'Keyboard',price: '$79.99', description: 'Mechanical keys for smooth typing',date: 'sep 5, 2025',src: '/assets/images/store/tech/keyboard.jpg',}, 'tech');

storeProducts.addToStore({name: 'Mouse',price: '$39.99',description: 'Ergonomic design for comfort',date: 'oct 20, 2024', src: '/assets/images/store/tech/mouse.jpg',}, 'tech');

storeProducts.addToStore({ name: 'Monitor',price: '$249.99',description: 'High resolution for stunning visuals',date: 'nov 15, 2023',src: '/assets/images/store/tech/monitor.jpg',}, 'tech');

storeProducts.addToStore({name: 'Webcam',price: '$49.99',description: 'Crystal-clear video calls', date: 'dec 10, 2024',
src: '/assets/images/store/tech/webcam.jpg',}, 'tech');



//Games Data

 storeProducts.addToStore({
    name: "Ethereal Swords",
    price: "$59.99",
    description: "Embark on a epic journey through a fantasy world, wielding powerful swords and magic to defeat ancient evils.",
    date: "Nov 15, 2024",
    src: "/assets/images/store/games/Desert_war.jpeg" },"games")

storeProducts.addToStore({
    name: "Cogs & Creatures",
    price: "$29.99",
    description: "A whimsical puzzle platformer where you guide a curious creature through intricate mechanical worlds.",
    date: "Jan 20, 2025",
    src: "/assets/images/store/games/Elf_hallow.png" }, "games")
    
storeProducts.addToStore({
    name: "Whispering Sands",
    price: "$49.99",
    description: "Explore a vast and vibrant open world filled with secrets, hidden treasures, and intriguing characters.",
    date: "Mar 5, 2025",
    src: "/assets/images/store/games/Demon_world.jpeg" },"games")

storeProducts.addToStore({
    name: "The Iron Alliance",
    price: "$19.99",
    description: "A challenging turn-based strategy game with a focus on deep tactical combat and political intrigue.",
    date: "May 10, 2025",
    src: "/assets/images/store/games/Halo.jpeg" },"games")

storeProducts.addToStore({
    name: "Pro Soccer League",
    price: "$69.99",
    description: "Experience the thrill of professional soccer with realistic gameplay, player customization, and extensive career modes.",
    date: "Jul 15, 2025",
    src: "/assets/images/store/games/football.jpg" },"games")
    
storeProducts.addToStore({
    name: "Nitro Rush 3",
    price: "$39.99",
    description: "High-octane arcade racing with intense speed, stunning visuals, and a variety of challenging tracks.",
    date: "Aug 25, 2025",
    src: "/assets/images/store/games/neon_city.png" }, "games")

storeProducts.addToStore({
    name: "Crimson Manor",
    price: "$24.99",
    description: "A chilling psychological actionr game where you must uncover the dark secrets of an abandoned country.",
    date: "Oct 30, 2025",
    src: "/assets/images/store/games/WarZone.png" }, "games")

storeProducts.addToStore({
    name: "Bounce & Dash",
    price: "$14.99",
    description: "A fast-paced and colorful platformer with challenging levels, unique power-ups, and a catchy soundtrack.",
    date: "Nov 18, 2025",
    src: "/assets/images/store/games/Fallen_Queen.png" },"games")

storeProducts.addToStore({
    name: "Legends of Atheria",
    price: "$59.99",
    description: "A classic RPG with deep character customization, a rich story, and challenging turn-based combat.",
    date: "Dec 20, 2025",
    src: "/assets/images/store/games/League_of_Legends.jpeg" },"games")

storeProducts.addToStore({
    name: "Ghost Recon: Warzone",
    price: "$49.99",
    description: "A tactical first-person shooter with realistic gunplay, intense multiplayer modes, and a challenging campaign.",
    date: "Jan 10, 2026",
    src: "/assets/images/store/games/apocalyptic.jpg" }, "games")


//------------------------------------------||||||




document.addEventListener('DOMContentLoaded', ()=>{
    //store Designing
    let storepage = new StoreDesign(storeProducts);
  
    storepage.toggleNavbar();

    storepage.createProductScroll(storepage.popularData ,'sect1');
    storepage.createProductScroll(storepage.latestData ,'sect2');
    storepage.createProductScroll(storepage.fashionData ,'sect3');
    storepage.createProductScroll(storepage.techData ,'sect4');
    storepage.createProductScroll(storepage.gameData ,'sect5');
  
})

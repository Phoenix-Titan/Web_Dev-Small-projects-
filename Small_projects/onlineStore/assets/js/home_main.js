import { EcommerceStore, StoreDesign }  from "./main.js"


let homeProducts = new EcommerceStore()

//Popular Data

homeProducts.addToStore({name: 'Laptop',price: '$999.99',description: 'Powerful and portable',date: 'jan 10, 2024',src: '/assets/images/store/tech/laptop.jpg',}, 'popular');


homeProducts.addToStore({name:'T-shirt',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025' ,src:"/assets/images/store/fashion/T-shirt.jpg"}, 'popular') 

homeProducts.addToStore({
    name: "Whispering Sands",
    price: "$49.99",
    description: "Explore a vast and vibrant open world filled with secrets, hidden treasures, and intriguing characters.",
    date: "Mar 5, 2025",
    src: "/assets/images/store/games/Demon_world.jpeg" },"popular")

homeProducts.addToStore({name:'Sunglasses',price:'$24.95',description:'UV protection', date:'apr 10,2025' ,src:"/assets/images/store/fashion/sun_glasses.jpg"}, 'popular')


homeProducts.addToStore({
  name: 'Cyber Punk glasses',price: '$19.99',description: 'Wear the future of technology in style',date: 'feb 15, 2025',src: '/assets/images/store/tech/cyber_punk_glasses.webp',}, 'popular');


homeProducts.addToStore({name:'Beach Swim Suit',price:'$24.95',description:'UV protection', date:'apr 10,2025' ,src:"/assets/images/store/fashion/swim_suit_blue.jpg"}, 'latest')


homeProducts.addToStore({name: 'Smartphone', price: '$799.99',description: 'Flagship features', date: 'mar 20, 2023',src: '/assets/images/store/tech/flip_phone.jpg',}, 'popular');

homeProducts.addToStore({name:'Jeans',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025' ,src:"/assets/images/store/fashion/blue_jeans.jpg"}, 'popular')

homeProducts.addToStore({
    name: "Ethereal Swords",
    price: "$59.99",
    description: "Embark on a epic journey through a fantasy world, wielding powerful swords and magic to defeat ancient evils.",
    date: "Nov 15, 2024",
    src: "/assets/images/store/games/Desert_war.jpeg" },"popular")

homeProducts.addToStore({
    name: "Cogs & Creatures",
    price: "$29.99",
    description: "A whimsical puzzle platformer where you guide a curious creature through intricate mechanical worlds.",
    date: "Jan 20, 2025",
    src: "/assets/images/store/games/Elf_hallow.png" }, "popular")

homeProducts.addToStore({name:'Men Boxers',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025' ,src:"/assets/images/store/fashion/boxers.jpg"}, 'popular') 

//2 
homeProducts.addToStore({ name: 'Monitor',price: '$249.99',description: 'High resolution for stunning visuals',date: 'nov 15, 2023',src: '/assets/images/store/tech/monitor.jpg',}, 'popular');

// 3
homeProducts.addToStore({name:'Leader Gloves',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025' ,src:"/assets/images/store/fashion/leader_gloves.jpg"}, 'popular')

//------------------------------------------||||||


//Latest Data

homeProducts.addToStore({
    name: "Legends of Atheria",
    price: "$59.99",
    description: "A classic RPG with deep character customization, a rich story, and challenging turn-based combat.",
    date: "Dec 20, 2025",
    src: "/assets/images/store/games/League_of_Legends.jpeg" },"latest")

homeProducts.addToStore({
    name: "Ghost Recon: Warzone",
    price: "$49.99",
    description: "A tactical first-person shooter with realistic gunplay, intense multiplayer modes, and a challenging campaign.",
    date: "Jan 10, 2026",
    src: "/assets/images/store/games/apocalyptic.jpg" }, "latest")

homeProducts.addToStore({ name: 'Headphones',price: '$149.99',description: 'High-fidelity sound',date: 'apr 5, 2025',src: '/assets/images/store/tech/headphone.jpg',}, 'latest');

homeProducts.addToStore({name: 'Smartwatch',price: '$299.99',description: 'Fitness tracking and more',date: 'may 15, 2024',src: '/assets/images/store/tech/smart_watch.jpg',}, 'latest');

homeProducts.addToStore({name: 'Tablet',price: '$399.99',description: 'Versatile and portable',date: 'jun 20, 2023',src: '/assets/images/store/tech/tablet.jpg',}, 'latest');


homeProducts.addToStore({name:'Men Boxers',price:'$19.99',description:'Comfortable cotton', date:'feb 15,2025' ,src:"/assets/images/store/fashion/boxers.jpg"}, 'latest') 

//2 
homeProducts.addToStore({ name: 'Monitor',price: '$249.99',description: 'High resolution for stunning visuals',date: 'nov 15, 2023',src: '/assets/images/store/tech/monitor.jpg',}, 'latest');

// 3
homeProducts.addToStore({name:'Leader Gloves',price:'$59.99',description:'Slim fit, dark wash', date:'mar 20,2025' ,src:"/assets/images/store/fashion/leader_gloves.jpg"}, 'latest')

//------------------------------------------||||||

//Games Data

homeProducts.addToStore({
    name: "Ethereal Swords",
    price: "$59.99",
    description: "Embark on a epic journey through a fantasy world, wielding powerful swords and magic to defeat ancient evils.",
    date: "Nov 15, 2024",
    src: "/assets/images/store/games/Desert_war.jpeg" },"games")

homeProducts.addToStore({
    name: "Cogs & Creatures",
    price: "$29.99",
    description: "A whimsical puzzle platformer where you guide a curious creature through intricate mechanical worlds.",
    date: "Jan 20, 2025",
    src: "/assets/images/store/games/Elf_hallow.png" }, "games")
    
homeProducts.addToStore({
    name: "Whispering Sands",
    price: "$49.99",
    description: "Explore a vast and vibrant open world filled with secrets, hidden treasures, and intriguing characters.",
    date: "Mar 5, 2025",
    src: "/assets/images/store/games/Demon_world.jpeg" },"games")

homeProducts.addToStore({
    name: "The Iron Alliance",
    price: "$19.99",
    description: "A challenging turn-based strategy game with a focus on deep tactical combat and political intrigue.",
    date: "May 10, 2025",
    src: "/assets/images/store/games/Halo.jpeg" },"games")

homeProducts.addToStore({
    name: "Pro Soccer League",
    price: "$69.99",
    description: "Experience the thrill of professional soccer with realistic gameplay, player customization, and extensive career modes.",
    date: "Jul 15, 2025",
    src: "/assets/images/store/games/football.jpg" },"games")
    
homeProducts.addToStore({
    name: "Nitro Rush 3",
    price: "$39.99",
    description: "High-octane arcade racing with intense speed, stunning visuals, and a variety of challenging tracks.",
    date: "Aug 25, 2025",
    src: "/assets/images/store/games/neon_city.png" }, "games")

homeProducts.addToStore({
    name: "Crimson Manor",
    price: "$24.99",
    description: "A chilling psychological actionr game where you must uncover the dark secrets of an abandoned country.",
    date: "Oct 30, 2025",
    src: "/assets/images/store/games/WarZone.png" }, "games")

homeProducts.addToStore({
    name: "Bounce & Dash",
    price: "$14.99",
    description: "A fast-paced and colorful platformer with challenging levels, unique power-ups, and a catchy soundtrack.",
    date: "Nov 18, 2025",
    src: "/assets/images/store/games/Fallen_Queen.png" },"games")

homeProducts.addToStore({
    name: "Legends of Atheria",
    price: "$59.99",
    description: "A classic RPG with deep character customization, a rich story, and challenging turn-based combat.",
    date: "Dec 20, 2025",
    src: "/assets/images/store/games/League_of_Legends.jpeg" },"games")

homeProducts.addToStore({
    name: "Ghost Recon: Warzone",
    price: "$49.99",
    description: "A tactical first-person shooter with realistic gunplay, intense multiplayer modes, and a challenging campaign.",
    date: "Jan 10, 2026",
    src: "/assets/images/store/games/apocalyptic.jpg" }, "games")


//------------------------------------------||||||


//This is creation of the object.
//the eariler page will load first befire executing the code.

document.addEventListener('DOMContentLoaded', ()=>{
    let homeDesign = new StoreDesign(homeProducts)
    homeDesign.createProductScroll(homeDesign.popularData ,'sect1d');
    homeDesign.createProductScroll(homeDesign.latestData ,'sect2d');
    homeDesign.createProductScroll(homeDesign.gameData ,'sect3d');
    

});

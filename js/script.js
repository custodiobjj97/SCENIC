import MenuMobile from "./module/MenuMobile.js";
import ScrollAnimation from "./module/ScrollAnimetion.js";
import AnimeNumber from "./module/AnimeNumber.js";
import SlidesNav from "./module/slidesnav.js";
import LinkSmooth from "./module/linkSmooth.js";
import DarkMode from "./module/DarkMode.js";

const menu = new MenuMobile('.toggle','.list-menu');

menu.start()


const scroll = new ScrollAnimation('.scroll');

scroll.start();

const number = new AnimeNumber('.value','.number')

number.start()


const slide = new SlidesNav('.slide','.slide-wrapper');

slide.init();


slide.addControl('.custom-control')

const link= new LinkSmooth('.list-menu li a');

link.start()

const darkMode= new DarkMode('#dark-mode','#icon');

darkMode.start()
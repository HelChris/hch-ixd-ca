import { getGames } from "./getGames.mjs";
import { getGamesSorted } from "./allTheGamesSorted.mjs";

// get the games to the index site
getGames();
getGamesSorted();

//switch function
const switchTheme = () => {
	// get root element and data-theme value
	const rootElm = document.documentElement;
	let dataTheme = rootElm.getAttribute("data-theme"),
		newTheme;

	newTheme = dataTheme === "light" ? "dark" : "light";

	//set the new HTML attribute
	rootElm.setAttribute("data-theme", newTheme);

	//Set the new local storage item
	localStorage.setItem("theme", newTheme);
};

//Add event listener for the theme switcher
document
	.querySelector("#theme-switcher")
	.addEventListener("click", switchTheme);

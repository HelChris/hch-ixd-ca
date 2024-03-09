import { getGames } from "./getGames.mjs";
// import { handleThemeToggle } from "./ui/shared/darkmode.mjs";

//call the function to setup the theme toggle
// handleThemeToggle();

// get the games to the index site
getGames();

//switch function
const switchTheme = () => {
	// get root element and data-theme value
	const rootElm = document.documentElement;
	let dataTheme = rootElm.getAttribute("data-theme"),
		newTheme;

	newTheme = dataTheme === "light" ? "dark" : "light";

	//set the new HTML attribute
	rootElm.setAttribute("data-theme", newTheme);
};

//Add event listener for the theme switcher
document
	.querySelector("#theme-switcher")
	.addEventListener("click", switchTheme);

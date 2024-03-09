import { getGames } from "./getGames.mjs";
import { handleThemeToggle } from "./ui/shared/darkmode.mjs";

//call the function to setup the theme toggle
handleThemeToggle();

// get the games to the index site
getGames();

import { createGames } from "./ui/games/createGames.js";
import { url } from "./constants.js";

async function getGames() {
	try {
		const response = await fetch(url);

		if (response.ok !== true) {
			throw new Error(`HTTP Error! status: ${response.status}`);
		}

		const games = await response.json();

		const groupedGames = Object.groupBy(games, (game) => game.genre);

		const actionContainer = document.querySelector("#action-games");
		createGames(actionContainer, groupedGames.Action);

		const horrorContainer = document.querySelector("#horror-games");
		createGames(horrorContainer, groupedGames.Horror);

		const sportsContainer = document.querySelector("#sports-games");
		createGames(sportsContainer, groupedGames.Sports);

		const adventureContainer = document.querySelector("#adventure-games");
		createGames(adventureContainer, groupedGames.Adventure);
	} catch (error) {
		console.error("Error fetching games:", error);
		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML = "";
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = `Oh no! An error has occured: "${error.message}"`;
		resultsContainer.appendChild(errorParagraph);
	}
}
getGames();

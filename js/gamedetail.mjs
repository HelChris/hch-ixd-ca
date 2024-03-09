import { getQueryStringParam } from "./getQueryStringParam.mjs";
import { url } from "./constants.mjs";
import { handleThemeToggle } from "./ui/shared/darkmode.mjs";

//call the function to setup the theme toggle
handleThemeToggle();

async function getGame() {
	const id = getQueryStringParam("id");

	if (!id) {
		document.location.href = "/";
	}

	const gameUrl = `${url}/${id}`;

	try {
		const response = await fetch(gameUrl);

		if (response.ok === false) {
			throw new Error("There was an error fetching the game with id: " + id);
		}

		const game = await response.json();
		const resultsContainer = document.querySelector("#game-detail-page");
		resultsContainer.innerHTML = "";

		const section = document.createElement("section");
		section.className = "game-detail-page";
		resultsContainer.appendChild(section);

		const img = document.createElement("img");
		img.src = game.image;
		img.className = "image-size";
		img.alt = game.title;
		section.appendChild(img);

		const gameDetailDiv = document.createElement("div");
		gameDetailDiv.className = "gamedetail";
		section.appendChild(gameDetailDiv);

		// append game details
		const details = [
			{ tag: "h1", text: `${game.title}` },
			{ tag: "p", text: `Price: $${game.price}` },
			{ tag: "p", text: `Genre: ${game.genre}` },
			{ tag: "p", text: `Released: ${game.released}` },
			{ tag: "p", text: `Age: ${game.ageRating}` },
			{ tag: "p", text: game.description },
		];

		details.forEach((detail) => {
			const element = document.createElement(detail.tag);
			element.textContent = detail.text;
			gameDetailDiv.appendChild(element);
		});

		const addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		gameDetailDiv.appendChild(addToCart);
	} catch (error) {
		console.error(error);
		const resultsContainer = document.querySelector("#game-detail-page");
		resultsContainer.innerHTML = "";
		const errorParagraph = document.createElement("p");
		errorParagraph.className = "error";
		errorParagraph.textContent = `Oh no! An error has occured: "${error.message}"`;
		resultsContainer.appendChild(errorParagraph);
	}
}

getGame();

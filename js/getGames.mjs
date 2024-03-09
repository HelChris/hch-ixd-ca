import { url } from "./constants.mjs";

export async function getGames() {
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error("HTTP Error! status: ${response.status}");
		}

		const games = await response.json();
		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML = "";

		games.forEach((game) => {
			const section = document.createElement("section");
			section.className = "product-list";
			resultsContainer.appendChild(section);

			const gameCard = document.createElement("div");
			gameCard.className = "game-card";
			section.appendChild(gameCard);

			const img = document.createElement("img");
			img.src = game.image;
			img.className = "image-size";
			img.alt = game.title;
			gameCard.appendChild(img);

			const title = document.createElement("h3");
			title.textContent = game.title;
			gameCard.appendChild(title);

			const price = document.createElement("p");
			price.textContent = `$${game.price}`;
			gameCard.appendChild(price);

			const genre = document.createElement("p");
			genre.textContent = game.genre;
			gameCard.appendChild(genre);

			const readMore = document.createElement("a");
			readMore.href = `gamedetail.html?id=${game.id}`;
			readMore.className = "button button-white";
			readMore.textContent = "Read more";
			gameCard.appendChild(readMore);

			const addToCart = document.createElement("a");
			addToCart.href = "cart.html";
			addToCart.className = "button button-turquoise";
			addToCart.textContent = "Add to cart";
			gameCard.appendChild(addToCart);
		});
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

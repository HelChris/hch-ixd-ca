export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		const gameCard = document.createElement("div");
		gameCard.className = "gamecard-wrapper";

		const imageWrapper = document.createElement("div");
		imageWrapper.className = "image-wrapper";
		gameCard.appendChild(imageWrapper);

		const img = document.createElement("img");
		img.src = game.image;
		img.className = "gamecard-image";
		img.alt = game.title;
		imageWrapper.appendChild(img);

		const gameCardCopy = document.createElement("div");
		gameCardCopy.className = "gamecard-copy";
		gameCard.appendChild(gameCardCopy);

		const title = document.createElement("h3");
		title.textContent = game.title;
		gameCardCopy.appendChild(title);

		const price = document.createElement("p");
		price.textContent = "$" + game.price;
		gameCardCopy.appendChild(price);

		const genre = document.createElement("p");
		genre.textContent = game.genre;
		gameCardCopy.appendChild(genre);

		const gameCardButtons = document.createElement("div");
		gameCardButtons.className = "gamecard-buttons";
		gameCard.appendChild(gameCardButtons);

		const readMore = document.createElement("a");
		readMore.href = "gamedetail.html?id=" + game.id;
		readMore.className = "button button-white";
		readMore.textContent = "Read more";
		gameCardButtons.appendChild(readMore);

		const addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		gameCardButtons.appendChild(addToCart);

		container.appendChild(gameCard);
	});
}

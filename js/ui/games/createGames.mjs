export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		const gameCard = document.createElement("div");
		gameCard.className = "gamecard";

		const img = document.createElement("img");
		img.src = game.image;
		img.className = "image-size";
		img.alt = game.title;
		gameCard.appendChild(img);

		const title = document.createElement("h3");
		title.textContent = game.title;
		gameCard.appendChild(title);

		const price = document.createElement("p");
		price.textContent = "$" + game.price;
		gameCard.appendChild(price);

		const genre = document.createElement("p");
		genre.textContent = game.genre;
		gameCard.appendChild(genre);

		const readMore = document.createElement("a");
		readMore.href = "gamedetail.html?id=" + game.id;
		readMore.className = "button button-white";
		readMore.textContent = "Read more";
		gameCard.appendChild(readMore);

		const addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		gameCard.appendChild(addToCart);

		container.appendChild(gameCard);
	});
}

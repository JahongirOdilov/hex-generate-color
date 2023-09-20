const hexes = document.querySelectorAll(".hex");
const title = document.querySelector(".text-color");
const refreshButton = document.querySelector(".btn");
const addBtn = document.querySelector(".btn2");
const container = document.querySelector(".container");

function hexColor(hexElements) {
	hexElements.forEach((hex) => {
		const color = "#" + Math.random().toString(16).substring(2, 8);
		hex.innerText = color;
		hex.style.backgroundColor = color;
		hex.onclick = () => {
			document.body.style.backgroundColor = color;
			title.innerText = color;
			refreshButton.style.backgroundColor = color;
			addBtn.style.backgroundColor = color;
		};
	});
}

function more() {
	const addHexes = [];

	for (let i = 0; i < 8; i++) {
		const hex = document.createElement("div");
		hex.className = "hex";
		addHexes.push(hex);
		container.appendChild(hex);
	}
	hexColor(addHexes);
}

hexColor(hexes);

refreshButton.onclick = () => {
	const hexes = document.querySelectorAll(".hex");
	hexColor(hexes);
};

addBtn.onclick = more;

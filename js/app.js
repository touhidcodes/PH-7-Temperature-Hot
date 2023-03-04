const loadData = async (city) => {
	const API_Key = `990768f78b8fc8bf9e2ad424932b32ef`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

	const res = await fetch(url);
	const data = await res.json();
	displayData(data);
};

const displayData = (data) => {
	setData("city-name", data.name);
	setData("temp", data.main.temp);
	setData("lead", data.weather[0].main);

	const imgId = document.getElementById("icon");
	const imgUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	imgId.setAttribute("src", imgUrl);
};

const setData = (id, value) => {
	const element = document.getElementById(id);
	element.innerText = value;
};

document.getElementById("btn").addEventListener("click", () => {
	const searchValue = document.getElementById("input-search").value;
	loadData(searchValue);
});

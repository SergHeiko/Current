$(document).ready(function() {
		$('.header__burger').click(function(event) {  
			$('.header__burger,.header__menu').toggleClass('active');  
			$('body').toggleClass('lock');	
		})
	})


	let switchMode = document.getElementById("switchMode");
	switchMode.onclick = function(){
		let theme = document.getElementById("theme");

		if(theme.getAttribute("href") == "css/style.css"){
			theme.href = "css/styleD.css"
		} else {
			theme.href = "css/style.css";
		}
	}





	async function getCurr(){
		const url = ' https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
		const respons = await fetch(url);
		const data = await respons.json();
	
		console.log(data[0].sale);
		console.log(data[1].sale);
	
	const usd = data[0].sale;
	const eur = data[1].sale
	
	const usdEl = document.querySelector('#usd');
	const eurEl = document.querySelector('#eur');
	
	usdEl.innerHTML = usd;
	eurEl.innerHTML = eur;
	//--------------------------------//
	
	console.log(data[0].buy);
	console.log(data[1].buy);
	
	const us = data[0].buy;
	const eu = data[1].buy;
	
	const usEl = document.querySelector('#u');
	const euEl = document.querySelector('#e');
	
	usEl.innerHTML = us;
	euEl.innerHTML = eu;
	
	}
	
	getCurr()
	
	async function getCurre(){
		const url = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
		const respons = await fetch(url);
		const data = await respons.json();
	
		console.log(data[0].sale);
		console.log(data[1].sale);
	
	const pusd = data[0].sale;
	const peur = data[1].sale
	
	const pusdEl = document.querySelector('#pusd');
	const peurEl = document.querySelector('#peur');
	
	pusdEl.innerHTML = pusd;
	peurEl.innerHTML = peur;
	//--------------------------------//
	
	console.log(data[0].buy);
	console.log(data[1].buy);
	
	const pus = data[0].buy;
	const peu = data[1].buy;
	
	const usEl = document.querySelector('#pu');
	const euEl = document.querySelector('#pe');
	
	usEl.innerHTML = pus;
	euEl.innerHTML = peu;
	
	}
	
	getCurre()
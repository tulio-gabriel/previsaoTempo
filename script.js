const key = "cb81e2019934cecfe3ba0cde5e0c06dd"


function popularDados(dados){
	document.querySelector(".cidade").innerHTML="Tempo em " + dados.name
	document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp) + "°C"
	document.querySelector(".texto-previsao").innerHTML= dados.weather[0].description 
	document.querySelector(".umidade").innerHTML= dados.main.humidity + "%"
	document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
	console.log(dados)
	if(dados.cod=="404"){
		document.querySelector(".cidade").innerHTML="Local invalido, Tente Tovamente"
		document.querySelector(".temp").innerHTML="°C"
		document.querySelector(".texto-previsao").innerHTML= "Situação" 
		document.querySelector(".umidade").innerHTML= "Umidade"
	}else{
		popularDados(dados)
	}
}

function cliqueiNoBotao(){
	const cidade = document.querySelector(".input-cidade").value
	buscarCidade(cidade)
}
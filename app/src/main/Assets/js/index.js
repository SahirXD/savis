/*
  Author : Sahir XD
  Email : diegosam802@gmail.com 
  Github : https://github.com/SahirXD
*/
function selectQuery(query){
	let QUERY = document.querySelector(query)
	return QUERY
}
function appendText(){
	let text = document.createElement("p")
	text.setAttribute('id','text')
	document.body.appendChild(text) 
}
function changeBackground(colorName){
	let BODY = selectQuery('body')
	BODY.style.background = colorName
}
function changeText(content){
	let textQeuery = selectQuery('#text')
	textQeuery.textContent = content
}
function changeHour(number){
	let hourQuery = selectQuery("#hour")
	hourQuery.innerHTML = number
}
let body_node = selectQuery('body')
body_node.onload = function(){
	var date = new Date()
	let hour = date.getHours()
	let minute = date.getMinutes()
	appendText()
	switch (hour) {
		case 1:
			// 1 O'Clock AM 
			changeHour("1/")
      changeBackground("#000000")
      changeText("😯 Waking up at this time is injurious to health, go to bed early. Good Night 😉")
			break;
		case 2:
			// 2 O'Clock AM
			changeHour("2/")
			changeBackground("#C0C0C0")
			changeText("😯 Waking up at this time is injurious to health, go to bed early. Good Night 😉")
			break
		case 3:
			// 3 O'Clock AM
			changeHour("3/")
			changeBackground("#808080")
			changeText("😯 Waking up at this time is injurious to health, go to bed early. Good Night 😉")
			break;
		case 4:
			// 4 O'Clock AM
			changeHour("4/")
			changeBackground("#800000")
			changeText("Good Morning 🌄, Now you can wake up 🥱 and at this time you can do exercises like running, jumping etc.🥳")
			break;
		case 5:
			// 5 O'Clock AM
			changeHour("5/")
			changeBackground("#FF0000")
			changeText(" Good Morning 🌄, If you have already woken up then take a shower and get fresh. 🥳")
			break;
		case 6:
			// 6 O'Clock AM
			changeHour("6/")
			changeBackground("#800080")
			changeText("have tea or coffee and have some fresh air 😊👍")
			break;
		case 7:
			// 7 O'Clock AM
			changeHour("7/")
			changeBackground("#FF00FF")
			changeText("If there is a task, then complete it 👍")
			break;
		case 8:
			// 8 O'Clock AM
			changeHour("8/")
			changeBackground("#008000")
			changeText("Visit social media, read new news and more ✌👈")
			break;
		case 9:
			// 9 O'Clock AM
			changeHour("9/")
			changeBackground("#00FF00")
			changeText("Ahhh 😋 have some delicious breakfast 🌮🧇")
			break;
		case 10:
			// 10 O'Clock AM
			changeHour("10/")
			changeBackground("#808000")
			changeText("If you want to go to office then go or do your important work.👋")
			break;
		case 11:
			// 11 O'Clock AM
			changeHour("11/")
			changeBackground("#000080")
			changeText("Talk to a family member, relative or friend 🥰😇")
			break;
		case 12:
			// 12 O'Clock AM
			changeHour("12/")
			changeBackground("#008080")
			changeText("if possible take some rest 🤗")
			break;
		case 13:
			// 1 O'Clock PM
			changeHour("1/")
			changeBackground("#00FFFF")
			changeText(" OMG, Lets have lunch 🌮🧇😋")
			break;
		case 14:
			// 2 O'Clock PM
			changeHour("2/")
      changeBackground("#8a2be2")
      changeText("meet a friend or relative and have fun")
			break;
		case 15:
			// 3 O'Clock PM
			changeHour("3/")
			changeBackground("#5f9ea0")
			changeText("do your job 👍")
			break;
		case 16:
			// 4 O'Clock PM
			changeHour("4/")
			changeBackground("#d2691e")
			changeText("it's tea or coffee time ☕🍵")
			break;
		case 17:
			// 5 O'Clock PM
			changeHour("5/")
			changeBackground("#6495ed")
			changeText("Go to the Market 🚗 Club 🏰 Gym 🏢 Ground 🏞 etc And Have Fun.✌")
			break;
		case 18:
			// 6 O'Clock PM
			changeHour("6/")
			changeBackground("#ff7f50")
			changeText("Time for Snacks Crunch.🧇🌮")
			break;
		case 19:
			// 7 O'Clock PM
			changeHour("7/")
			changeBackground("#008b8b")
			changeText("Visit social media 📱 or chat with your family/freinds/relatives 👨‍👩‍👦‍👦")
			break;
		case 20:
			// 8 O'Clock PM 
			changeHour("8/")
			changeBackground("#556b2f")
			changeText("hey there 🙌 its time to read some interesting books 📒")
			break;
		case 21:
			// 9 O'Clock PM
			changeHour("9/")
			changeBackground("#bdb76b")
			changeText("Hii 😊 its time to have dinner 😋🤑")
			break;
		case 22:
			// 10 O'Clock PM
			changeHour("10/")
			changeBackground("#9932cc")
			changeText("Okay It's time to sleep 🥱 see you tomorrow morning 🌄")
			break;
		case 23:
			// 11 O'Clock PM
			changeHour("11/")
			changeBackground("#e9967a")
			changeText("😯 Waking up at this time is injurious to health, go to bed early. Good Night 😉")
			break;
		case 24:
			// 12 O'Clock PM
			changeHour("12/")
			changeBackground("#2f4f4f")
			changeText("😯 Waking up at this time is injurious to health, go to bed early. Good Night 😉")
			break;
		default:
			// code
			changeBackground("#dcdcdc")
	}
}
function refreshUpdateTime(){
	let today = new Date()
	let hour = today.getHours()
	let minute = today.getMinutes()
	let second = today.getSeconds()
	updateTime = 60-minute
	secondUpdateTime = 60-second
	selectQuery("#finished-minute").innerHTML = updateTime+":"
	selectQuery("#finished-second").innerHTML = secondUpdateTime
	selectQuery("#minute").innerHTML = minute+"/"
	selectQuery("#second").innerHTML = second
	if(hour>12){
		selectQuery("#type").innerHTML = "PM"
	}else{
		selectQuery("#type").innerHTML = "AM"
	}
}
setInterval(refreshUpdateTime,1000)
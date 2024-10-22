const h1 = document.querySelector('h1');

function changeColor(el , color) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			el.style.color = color;
			resolve()
		}, 1000)
	})
}

changeColor(h1, 'teal')
.then(() => changeColor(h1, 'orange'))
.then(() => changeColor(h1, 'red'))
.then(() => changeColor(h1, 'green'))
.then(() => changeColor(h1, 'blue'))
.then(() => changeColor(h1, 'pink'))

function get(url){
	const request = new XMLHttpRequest();
	return new Promise((resolve, reject) => {
		request.onload = function () {
			if (request.readyState !== 4) return;
		
		
			if (request.status >= 200 && request.status < 300) {
				resolve(JSON.parse(request.response))
			} else {
				reject(request.status)
			}
		}
		request.onerror = function handleError() {
			request = null;
			reject('network error!')
		};
		request.open('GET',url);
		request.send();
	})
}

get("https://swapi.dev/api/planets/1/")
.then(res => console.log(res))
.catch(err => console.log(err))



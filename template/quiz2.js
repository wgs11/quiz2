
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	var result;
	$mouseover = $('.mouse-over');
	$click = $('.click');
	$sub = $('.submit');
	$timeout = $('.timeout');
	$press = $('.press');
	$mouseover.on('mouseover', function () {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});


	$click.click('click', function () {
		$this.html('Peace Out!')
		$(this).fadeOut(1500);
		return false;
	});

	$sub.on('submit', function (e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function () {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>"Congratulations! You\'ve entered some text!</h2>');
		}
	});
	$(document).on('ready', function() {
		function search(){
			var xhttp = new XMLHttpRequest();
			var type = "quizData";
			xhttp.onreadystatechange = function() {
				if (xhttp.readyState == 4) {
					var get = xhttp.responseText;
					get.trim();
					var response = JSON.parse(get);
					var comics = response.data;
					var choose = comics[Math.floor(Math.random()*comics.length)];
					result = choose;
					console.log(result);
				}
			};
			xhttp.open("GET", "http://www.mattbowytz.com/simple_api.json?data=" + type, true);
			xhttp.send();
		}
		function setCookie(){
			document.cookie = result;
		}
		var btn = document.createElement("BUTTON");
		btn.id = "button";
		btn.innerHTML = "Get Title";
		btn.onclick = function(){
			var result = search()
		//	document.getElementById('mouseover').innerText=result;
			var check = document.getElementsByClassName("button2");
			if (check.length == 0) {
				var btn2 = document.createElement("BUTTON");
				btn2.innerHTML = "Keep It";
				btn2.className = "button2";
				document.body.appendChild(btn2);
				btn2.onclick = function () {
					setCookie()
				}
			}
		};
		document.body.appendChild(btn);



	});



	$(document).on('ready', function () {
		setTimeout(function () {
			$timeout.fadeOut('slow');
		}, 1000);
	});

//}
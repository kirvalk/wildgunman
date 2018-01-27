var wrapper   = document.querySelector('.wrapper');
var startBtn  = document.querySelector('.startbtn');
var replayBtn = document.querySelector('.replay');
var logo      = document.querySelector('.logo');
var badGuy    = document.querySelector('.bandit');

wrapper.addEventListener('click', function(ev){
	document.querySelector('.au_shot').play();
	if (ev.target.classList.contains('bandit_shot')) {
		badGuy.classList.remove('bandit_shot');
		badGuy.classList.add('bandit_dead');
		document.querySelector('.au_win').play();
	}
});

startBtn.addEventListener('click', function(){
	startBtn.style.display = 'none';
	logo.style.display = 'none';
	badGuy.style.display = 'block';
	setTimeout(function(){
		document.querySelector('.au_main').pause();
		document.querySelector('.au_walk').play();
		badGuy.classList.add('bandit_walk');
	}, 1000);
	setTimeout(function(){
		document.querySelector('.au_prep').play();
		badGuy.classList.remove('bandit_walk');
		badGuy.classList.add('bandit_prepare');
	}, 6000);
	setTimeout(function(){
		document.querySelector('.au_fire').play();
		badGuy.classList.remove('bandit_prepare');
		badGuy.classList.add('bandit_shot');
	}, 7830);
	setTimeout(function(){
		if (!badGuy.classList.contains('bandit_dead')) {
			badGuy.classList.remove('bandit_shot');
			badGuy.classList.add('bandit_wins');
			document.querySelector('.au_defeat').play();
			document.querySelector('.defeatscreen').style.display = "block";
		}
	}, 9000);
	setTimeout(function(){
		document.querySelector('.replay').style.display = 'block';
	}, 12000);

});

replayBtn.addEventListener('click', function() {
	window.location.reload();
});
var countDownDate = new Date('September 25, 2022 12:00:00').getTime();

var update = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("container-timer").innerHTML = days + "j " + hours + "h "+ minutes + "min " + seconds + "sec ";    
    
    if (distance < 0) {
        document.getElementById('div-timer').remove();
        
        document.getElementById('website').innerHTML = 'Si vous souhaitez participer à la liste de naissance vous trouverez le lien de cette dernière <a href="https://www.amazon.fr/baby-reg/marine-besnard-ludovic-besnard-fvrier-2023-carpentras/3T8VGBNAF8KLN">: en cliquant ici. </a>';
        clearInterval(update);
        firework();
        init();
    }
}, 1000);
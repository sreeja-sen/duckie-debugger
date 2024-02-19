document.addEventListener("DOMContentLoaded", function() {
    let duck = document.getElementById("output");
    duck.innerHTML = "< quack quack <br>";

    document.getElementById('input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            humanSpeak();
            document.getElementById('input').value = "";
            
        }
    });

    function humanSpeak() {
        let human = document.getElementById('input').value;
        human = human.toLowerCase();
        duck.innerHTML += "> " +  human + "<br>";
        quack();
    }

    function quack() {
        let human = document.getElementById('input').value;
        human = human.toLowerCase();
        
        length = human.toString().length;

        if (length <= 0) {
            duck.innerHTML += "< quack? <br>";
        }
        else {
            duck.innerHTML += "< quack quack <br>";
        }
    }
});


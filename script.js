document.addEventListener('DOMContentLoaded', function() {
    var cities = document.querySelectorAll('.cities h2');
    cities.forEach(function(city) {
        city.addEventListener('click', function() {
            alert('Cargando informe meteorológico...');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var acceptButton = document.getElementById('acceptButton');
    acceptButton.addEventListener('click', function() {
        var cookieMessage = document.getElementById('cookieMessage');
        cookieMessage.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var tempSelect = document.getElementById('temp');

    tempSelect.addEventListener('change', function() {
        var celsiusTemps1 = document.querySelectorAll('.temperature .temp1');
        var celsiusTemps2 = document.querySelectorAll('.temperature .temp2');

        celsiusTemps1.forEach(function(temp) {
            var celsius = parseInt(temp.textContent);
            var fahrenheit = (celsius * 9/5) + 32;
            temp.textContent = Math.round(fahrenheit) + '°';
        });

        celsiusTemps2.forEach(function(temp) {
            var celsius = parseInt(temp.textContent);
            var fahrenheit = (celsius * 9/5) + 32;
            temp.textContent = Math.round(fahrenheit) + '°';
        });
    });
});
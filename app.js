
/* API Meteo */
const APIKEY = '4a13f3882a29d25b4d0e1ede85d106ff';
    
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#ville').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;
    
    fetch(url)
    .then((response) => 
        response.json().then((data) => {
        console.log(data);
        document.querySelector('.ville').innerHTML = data.name;
        document.querySelector('.temps').innerHTML = Math.round(data.main.temp) + "°";
        document.querySelector('.ciel').innerHTML = data.weather[0].description;
        switch(data.weather[0].description){
            case 'peu nuageux' :
            document.querySelector('.des').innerHTML = '<i class="fas fa-cloud-sun fa-4x"></i>';
            break;

            case 'partiellement nuageux' :
            document.querySelector('.des').innerHTML = '<i class="fas fa-cloud-sun fa-4x"></i>';
            break;

            case 'nuageux' :
            document.querySelector('.des').innerHTML = '<i class="fas fa-cloud-sun fa-4x"></i>';
            break;

            case 'couvert' : 
            document.querySelector('.des').innerHTML = '<i class="fas fa-cloud fa-4x"></i>';
            break;

            case 'ciel dégagé' : 
            document.querySelector('.des').innerHTML = '<i class="fas fa-sun fa-4x"></i>';
            break;
        }
        document.querySelector('.erreur').innerHTML = "";
        document.querySelector('.my-4').style.display = 'block';
        document.getElementById('ville').value = '';
        document.getElementById('result').style.backgroundColor = '#F2F2F2';
    })
    )
    .catch((err) => {
        document.querySelector('.erreur').innerHTML = "Veuillez entrer une ville existante";
        document.querySelector('.ville').innerHTML = '';
        document.querySelector('.temps').innerHTML = '';
        document.querySelector('.des').innerHTML = '';
        document.querySelector('.my-4').style.display = 'none';
        document.getElementById('ville').value = '';
        document.querySelector('.ciel').innerHTML = '';
        document.getElementById('result').style.backgroundColor = '';
    });
});
    

//alert('oi')

function chngimg() {
        var img = document.getElementById('modelight').src;
        var logo = document.getElementById('logo').src;

        if (img.indexOf('control.png')!=-1) {
            document.getElementById('modelight').src  = '../static/imagens/controldark.png';
            document.getElementById('logo').src  = '../static/imagens/logo2.png';
            document.body.style.backgroundImage = "url('../static/imagens/Mambofundo.png')";
            document.querySelector('bg').style.background="#1E1E1E"
            document.querySelector('.activo').style.background="#141313"
            document.getElementById("Inicio").style.background="#141313"
            document.getElementById('fundowhite').src  = '../static/imagens/fundodark.png';
            document.querySelector('#Inicio img').style.boxShadow="0px 8px 90px 10px #FF5757"
            document.querySelector('#Inicio img').style.borderRadius="30px"
            document.querySelector('#Inicio img').style.width="350px"
            document.querySelector('#Inicio img').style.height="450px"
            document.getElementById('Oquefazemos').style.background="#434141"
            document.getElementById('Quemsomos').style.background="#694533"
            document.querySelector('a').style.color='white'






        }
         else {
           document.getElementById('modelight').src = '../static/imagens/control.png';
           document.getElementById('logo').src  = '../static/imagens/logo1.png';
           document.body.style.backgroundImage = "url('../static/imagens/fundowhite.png')";
           document.querySelector('bg').style.background="#DFE2EB"
           document.querySelector('.activo').style.background="#B2B5BC"
           document.getElementById("Inicio").style.background="#FF5757"
           document.getElementById('fundowhite').src  = '../static/imagens/fundowhite.png';
           document.querySelector('#Inicio img').style.boxShadow="0px 8px 90px 10px rgba(0, 0, 0, 0.50)"
            document.querySelector('#Inicio img').style.borderRadius="200px"
            document.querySelector('#Inicio img').style.width="300px"
            document.querySelector('#Inicio img').style.height="300px"
            document.getElementById('Oquefazemos').style.background="white"
            document.getElementById('Quemsomos').style.background="#781919"
            document.querySelector('a').style.color='black'


       }

    }
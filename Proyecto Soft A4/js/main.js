function contacto(){
    let nombre="";
    let edad=0;
    let mensaje=""
    let obs = ""
    nombre= document.getElementById("nombre").value
    obs= document.getElementById("obs")
    console.log(obs)
    edad= document.getElementById("edad").value
    edad = parseInt(edad)
    mensaje="${nombre} tienes ${edad} años y tu mensaje ha sido enviado"
    obs.innerHTML=mensaje
  }
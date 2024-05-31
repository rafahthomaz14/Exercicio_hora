function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>=0 && hora<12){
        // bom dia
        img.src = 'Img/DIA.png'
        document.body.style.background = '#e2cd7f'
    }
    else if(hora>=12 && hora <18){
        // boa tarde
        img.src = 'Img/TARDE.png'
        document.body.style.background = '#b9856f'
    }
    else {
        //boa noite
        img.src = 'Img/NOITE.png'
        document.body.style.background = '#515154'
    }

}

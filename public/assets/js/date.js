const date = () =>{
    const hora = document.getElementById("hours");
    const pegarH = new Date().getHours();
    const pegarM = new Date().getMinutes();
    const pegarS = new Date().getSeconds()
    hora.innerHTML = `${pegarH}h e ${pegarM}m e ${pegarS}s`;
}

setInterval(() => {
    date()
}, 1);
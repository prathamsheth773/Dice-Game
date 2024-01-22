roll = () =>{
    let audio = document.getElementById('audio');
    audio.play();
    document.getElementById('diceValue').innerHTML = " ";
    document.getElementById('dice').classList.add('dice-animation')
    setTimeout(()=>{
        let diceNumber =  Math.floor(Math.random()*7)
        if(diceNumber == 0){
            diceNumber = 4;
        }
        document.getElementById('diceValue').innerHTML = diceNumber;

    },1000)
    setTimeout(()=>{
        document.getElementById('dice').classList.remove('dice-animation')

    },1600)
}

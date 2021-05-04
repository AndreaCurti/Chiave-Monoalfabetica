setInterval(codWithKey, 250);
var key = "";
var testoDaCod = "";
var oKey = document.getElementById("key");
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

function isKeyCorrect(testo){
    var lettersControls = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
    for(var i = 0; i < testo.length; i++){
        var indice = letters.indexOf(testo.charAt(i))
        if(indice >= 0){
            lettersControls[indice] = 1;
        }
    }
    for(var i = 0; i < lettersControls.length; i++){
        if(lettersControls[i] == 0){
            document.getElementById("errore").innerHTML = "La key non contiene tutti i 36 caratteri";
            return false;
        }
    }
    if(testo.length == 36){
        return true;
    }
}

oKey.oninput = function(){
    if (this.value.length > 36){
        this.value = this.value.slice(0, 36);
    }
}

function randomKey(){
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    while(randomChars.length > 0){
        var i = Math.floor(Math.random() * randomChars.length);
        result += randomChars.charAt(i);
        randomChars = randomChars.replace(randomChars.charAt(i), "");
    }
    document.getElementById("key").value = result;
}

function codWithKey(){
    testoDaCod = document.getElementById("tDaCod").value;
    key = document.getElementById("key").value;
    key = key.toLowerCase();
    testoDaCod = testoDaCod.toLowerCase();
    document.getElementById("errore").innerHTML = "";
    if(key.length > 0){
        if(isKeyCorrect(key) == true){
            document.getElementById("errore").innerHTML = "";
            var out = "";
            for(var i = 0; i < testoDaCod.length; i++){
                out += key.charAt(letters.indexOf(testoDaCod.charAt(i)));
            }
            document.getElementById("finale").value = out;
        } 
    }
}
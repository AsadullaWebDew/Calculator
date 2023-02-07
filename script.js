

function masla(){
    let brinson = document.getElementById("brinchiSon").value;
    let amal = document.getElementById("amal").value;
    let ikkinchiSon = document.getElementById("ikkinchiSon").value;
    // let natija = getElementById("natija")

    document.getElementById("brinchiSon").value = "";
    document.getElementById("ikkinchiSon").value = "";

    let natija;
    if(brinson.length > 0 && ikkinchiSon.length > 0 || amal === "plas"){
        if(amal === "plas"){    
            natija = Number(brinson) + Number(ikkinchiSon);
        } else if(amal == "ayru"){
            natija = Number(brinson)-Number(ikkinchiSon)
        } else if(amal === "kopaytma"){
            natija = Number(brinson)*Number(ikkinchiSon);
        }
        else if(amal === "bolish"){
            if(Number(ikkinchiSon) !== 0){
                natija = Number(brinson)/Number(ikkinchiSon)
            }
        }

        document.getElementById("natijasw").innerHTML = `<div class="jn"> Javobi; ${natija} </div>`
    } else {
                document.getElementById("natijasw").innerHTML = "<div class='alert alert-danger mt-3'>Xatolik sonni kiriting!!!</div>"
            }


}

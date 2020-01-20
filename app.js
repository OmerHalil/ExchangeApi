const form   = document.querySelector("#form");
const btn    = document.querySelector("#btn").addEventListener("click" , exchange);
const amount = document.querySelector("#amount");
const row    = document.querySelector("#row");
const s1     = document.querySelector("#s1");
const s2     = document.querySelector("#s2"); 

function showAlert(msg , type){
    form.innerHTML +=`<div id="result" style="margin-top:25px;">
    <div class="alert alert-${type}" role="alert">${msg}</div></div>`
    
    
    setTimeout(function(){
        console.log("aaaaa");
        form.removeChild(document.querySelector("#result"));
    },3000);
}

function exchange(e) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 200){
            for(let i in JSON.parse(xhr.responseText).rates){
                if(i==s2.value){
                    let val = (JSON.parse(xhr.responseText).rates.TRY/JSON.parse(xhr.responseText).rates.USD) * amount.value;
                    document.getElementById("result").value = val ;
                    break ;
                }else{
                    let val =  Number(amount.value) * JSON.parse(xhr.responseText).rates.TRY ;  
                    document.getElementById("result").value =  val ;
                }
        }
        }
    }

    xhr.open("GET" , "https://api.exchangeratesapi.io/latest");


    xhr.send();
    e.preventDefault();
}

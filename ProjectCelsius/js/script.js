// Referências da DOM - HTML

const inpC = document.getElementById('inpC');
const inpF = document.getElementById('inpF');

//código

var c=0, res=0, f=0;

inpC.oninput = ()=>{
    c = parseFloat(inpC.value);
    res = parseFloat(((c*9)/5)+32);
    if (isNaN(res)){
        inpF.value ='';
    }else{
        inpF.value = res.toFixed(4);
    }
    console.log('c = ', c ,'res = ', res );
}

inpF.oninput = ()=>{
    f = parseFloat(inpF.value);
    res = parseFloat(((f-32)*5)/9);
    if (isNaN(res)){
        inpC.value ='';
    }else{
        inpC.value = res.toFixed(4);
    }
    console.log('F = ', f ,'res = ', res );
}


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage();
},5000);

function nextImage(){
    count++
    if(count>8){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

var o_festa = window.document.getElementById("option");
var form= window.document.getElementById("form");
var p_fim= window.document.getElementById("pg-orc");
var img_fim=window.document.getElementById("img-final");
function orc(){
    var comeco = window.document.getElementById("apresentacao");
    var s_btn = window.document.getElementById("btn-orc");


    comeco.style.display="none";
    s_btn.style.display="none";
    o_festa.style.display="block";
}
// opcoes das barras de selecao
var b_op1=window.document.getElementById("b_nao").value;
var b_op2=window.document.getElementById("b_sim").value;

var d_op1=window.document.getElementById("d_nao").value;
var d_op2=window.document.getElementById("d_sim").value;

var tp_cas =window.document.getElementById("op_cas").value;
var tp_confra=window.document.getElementById("op_con").value;
var tp_cha_rev=window.document.getElementById("op_cha").value;
var tp_fim=window.document.getElementById("op_fim").value;
var tp_corp=window.document.getElementById("op_cor").value

function env_form(e){
    // cancela a atualizacao da pagina apos o submit
    e.preventDefault();

    // pegando o valor de todos os inputs
    const tp_festa = window.document.getElementById("tp-festa").value;
    const qtde = window.document.getElementById("qtde").value;
    const bebida = window.document.getElementById("bebida").value;
    const decoracao = window.document.getElementById("decoracao").value;
    const particularidades =document.getElementById("particularidades").value;
    const nome = window.document.getElementById("nome").value;
    const email = window.document.getElementById("email").value;
    const telefone = window.document.getElementById("telefone").value;

    function env_inf(){
        fetch('https://api.sheetmonkey.io/form/o4fCQhiNXfaVbKTWgskbVS"',{
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({tp_festa, qtde, bebida, decoracao, particularidades, nome, email, telefone})
        })
    }

    form.style.display="none";
    p_fim.style.display="block";
    o_festa.style.height="850px";

    let v_decoracao;
    let v_bebida;
    let v_padrao;
    let v_final;

    // calculo bebida
   if(bebida==b_op2){
    v_bebida = qtde*47;
    v_final =v_bebida
   }
   else{
    v_bebida=qtde*25;
    v_final =v_bebida
   }

    // calculo decoracao
    if(decoracao==d_op2,tp_festa==tp_cas){
    v_decoracao = qtde*75;
    v_final=v_final+v_decoracao;
   }

    else if(decoracao==d_op2,tp_festa==tp_confra){
        v_decoracao = qtde*20;
        v_final=v_final+v_decoracao;
    }

    else if(decoracao==d_op2,tp_festa==tp_cha_rev){
        v_decoracao = qtde*12;
        v_final=v_final+v_decoracao;
    }    

    else if(decoracao==d_op2,tp_festa==tp_fim){
        v_decoracao = qtde*25;
        v_final=v_final+v_decoracao;
    }

    else if(decoracao==d_op2,tp_festa==tp_corp){
        v_decoracao = qtde*40;
        v_final=v_final+v_decoracao;
    }

    if(decoracao==d_op1){
        v_final=v_final-v_decoracao;
    }
    // calculo valor padrao
    v_padrao=qtde*118;
    v_final=v_final+v_padrao;



   console.log("valor final:"+v_final)
   console.log("valoe decoracao:"+v_decoracao)
    console.log("valor bebidas:"+v_bebida)
    console.log("valor padrao:"+v_padrao)

    document.querySelector("#h3").innerHTML= "O valor do seu orcamento e:";
    document.querySelector("#p_orc").innerHTML="Valor total do orcamento e de: "+v_final+"<br>";
    document.querySelector("#detalhe").innerHTML="Valor das bebidas: "+v_bebida+"<br> valor decoracao: "+v_decoracao+"<br>valor alimentacao: "+v_padrao;
    

    if(tp_festa==tp_cas){
        document.getElementById("img-final").innerHTML="<img src='imgs/casamen.jpg'>"
    }

    else if(tp_festa==tp_confra){
        document.getElementById("img-final").innerHTML="<img src='imgs/confra.png'>"
    }

    else if(tp_festa==tp_cha_rev){
        document.getElementById("img-final").innerHTML="<img src='imgs/revelacao.jpg'>"
    }

    else if(tp_festa==tp_fim){
        document.getElementById("img-final").innerHTML="<img src='imgs/FimAno.jpg'>"
    }

    else if(tp_festa==tp_corp){
        document.getElementById("img-final").innerHTML="<img src='imgs/corporativo.jpg'>"
    }
}
  
    function finalizar(){
        p_fim.style.display="none";
        o_festa.style.height="500px";
        o_festa.style.marginTop="500px"
        document.querySelector("#h3").innerHTML= "Muito obrigado por fazer seu orcamento com a A&P festas!!<br> Em breve entraremos em contato.";
        document.querySelector(".h5").innerHTML= "Para Maiores informacoes entre em contato pelo emial: pemarra70@gmail.com";
        document.querySelector("#logo").innerHTML= "A&P Festas";
        setInterval(function(){
            document.location.reload(true);
        },10000);
    }
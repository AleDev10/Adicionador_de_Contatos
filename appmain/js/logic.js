var contagem = 0;
var entrada1 = document.getElementById("b2");
var entrada2 = document.getElementById("b1");
var txt = document.getElementById("txt");
var bloco = document.getElementById("testos");
var corpo = document.getElementById("corpo");
var secao_page1 = document.getElementById("main");
var nomes=[];
var numeros =[];


function enviar() {
  var nome = entrada1.value;
  var numero = Number(entrada2.value);
  nomes.push(nome);
  numeros.push(numero);

  txt.innerHTML = `<p>${contagem + 1}º<b> contato</b> adicionado</p>`;
  txt.innerHTML += `<p><b>Nome:</b> ${nome}</p>`;
  txt.innerHTML += `<p><b>Numero:</b> ${numero}</p>`;
  contagem += 1;
  entrada1.value = "";
  entrada2.value = "";
}

function reiniciar() {
  txt.innerHTML = `<p><b>Lista de contatos</b></p>`;
  contagem = 0;
}

function detalhes() {
  
  //segunda pagina surge dinamicamente
  corpo.removeChild(secao_page1);
  const secao_page2 = document.createElement("section");
  corpo.appendChild(secao_page2);
  secao_page2.setAttribute("id", "main2");
  
  //seção primaria
  const sec_primaria = document.createElement("section");
  secao_page2.appendChild(sec_primaria);
  sec_primaria.setAttribute("id", "primaria");
  sec_primaria.setAttribute("class", "seção");
  const bt_voltar = document.createElement("button");
  sec_primaria.appendChild(bt_voltar);
  bt_voltar.setAttribute("id","voltar");
  bt_voltar.setAttribute("type","button");
  bt_voltar.setAttribute("class","btn btn-primary");
  const link = document.createElement("a");
  link.setAttribute("href","index.html");
  bt_voltar.appendChild(link);
  const bt_icone = document.createElement("i");
  link.appendChild(bt_icone);
  bt_icone.setAttribute("class","far fa-arrow-alt-circle-left");
  bt_icone.style.color="#0d6efd";
  const titulo_secprimaria = document.createElement("h1");
  sec_primaria.appendChild(titulo_secprimaria);
  titulo_secprimaria.setAttribute("id","titulo");
  titulo_secprimaria.innerHTML="Detalhes";
  const caixas = document.createElement("div");
  sec_primaria.appendChild(caixas);
  caixas.setAttribute("class","d-flex flex-wrap");
  caixas.setAttribute("id","caixas");

  //bloco de informações adicionadas pelo arry dinamicamente
  for (let c =0; c < nomes.length; c++) {
    const informacoes = document.createElement("div");
    caixas.appendChild(informacoes);
    informacoes.setAttribute("id","informacoes");
    const subtitulo = document.createElement("h4");
    informacoes.appendChild(subtitulo);
    subtitulo.innerHTML=`Contatos nº ${c+1}`;
    const p1 = document.createElement("p");
    informacoes.appendChild(p1);
    p1.innerHTML=`<b>Nome: </b>${nomes[c]}`;
    const p2 = document.createElement("p");
    informacoes.appendChild(p2);
    p2.innerHTML=`<b>Numero: </b>${numeros[c]}`;
  }
  

  //seção secundaria
  const sec_secundaria = document.createElement("section");
  secao_page2.appendChild(sec_secundaria);
  sec_secundaria.setAttribute("id", "secundaria");
  sec_secundaria.setAttribute("class", "seção");
  const listade = document.createElement("h1");
  sec_secundaria.appendChild(listade);
  listade.setAttribute("id","listade")
  listade.innerHTML="Lista de";
  const contatos = document.createElement("h1");
  sec_secundaria.appendChild(contatos);
  contatos.innerHTML="Contatos";

  console.log("esta a carregar");
}

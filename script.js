function exibir(event) {
  var x = event.target.id;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      document.getElementById("simbolo").innerHTML = myObj.prop[x].simb;
      document.getElementById("nome").innerHTML = myObj.prop[x].elemento; document.getElementById("lat").innerHTML = myObj.prop[x].latim;
      document.getElementById("pg").innerHTML = "Período: " + myObj.prop[x].periodo + "&nbsp &nbsp &nbsp Grupo: " + myObj.prop[x].grupo;
      document.getElementById("categoria").innerHTML = "Categoria: " + myObj.prop[x].categoria;
      document.getElementById("info").innerHTML = "Número Atômico: " + myObj.prop[x].numero + "<br> Peso Atômico: " + myObj.prop[x].peso + " g/mol <br> Estado Físico: " + myObj.prop[x].estadoFisico + "<br> Densidade: " + myObj.prop[x].densidade + " g/cm<sup>3</sup> <br> Ponto de Fusão: " + myObj.prop[x].fusao + " K <br> Ponto de Ebulição: " + myObj.prop[x].ebulicao + " K <br> Raio Atômico: " + myObj.prop[x].raio + " pm <br> Carga de Íons: " + myObj.prop[x].carga + "<br> Configuração de Elétrons: " + myObj.prop[x].config + "<br> Radioatividade: " + myObj.prop[x].radioatividade;
      
    }
  };
  xhttp.open("GET", "propriedades.json", true);
  xhttp.send();
}

function enviarRequisicao(){
  var request = new XMLHttpRequest();
  var opcao = document.getElementById("opcao").value;
  var url = "";

  request.open("GET", url, true);

  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText); //o que faz isso aqui????
      console.log(response); //e isso aqui também?

     
    }
  };

  request.send();


}
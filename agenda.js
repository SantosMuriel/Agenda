
var contato = {
	nome: document.getElementById("nome"),
 	email: document.getElementById("email"),
	telefone: document.getElementById("telefone")	
}

function saltarLinha(){
	document.write("<br>");
	document.write("<hr>");
}

function exibirContatos(){
	saltarLinha();
	document.write("Nome: " + contato.nome.value + ".");
	saltarLinha();
	document.write("E-mail: " + contato.email.value + ".");
	saltarLinha();
	document.write("Telefone: " + contato.telefone.value + ".");
	saltarLinha();
}

var	botaoSelecionado = document.getElementById("botaoExibir");
	botaoSelecionado.onclick = exibirContatos;
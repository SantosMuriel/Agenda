
var contato = {
	nome: document.getElementById("nome"),
 	email: document.getElementById("email"),
	telefone: document.getElementById("telefone")	
}
var aux = 1;
var a = new Array ();

function salvarContatos(){
	a[aux] = contato;
	aux++;
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

var	botaoSelecionado = document.getElementById("botaoSalvar");
	botaoSelecionado.onclick = salvarContatos;

var	botaoSelecionado = document.getElementById("botaoExibir");
	botaoSelecionado.onclick = exibirContatos;
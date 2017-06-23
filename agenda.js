
var contato = {
	nome: document.getElementById("nome"),
 	email: document.getElementById("email"),
	telefone: document.getElementById("telefone")	
}
var aux = 1;
var arrayDeContatos = [{nome: contato.nome, email: contato.email, telefone: contato.telefone}];

function salvarContatos(){
	arrayDeContatos[aux] = contato;
	aux++;
}

function saltarLinha(){
	document.write("<br>");
	document.write("<hr>");
}

function exibirContatos(){
	saltarLinha();
	document.write("Nome: " + arrayDeContatos[1].nome.value + ".");
	saltarLinha();
	document.write("E-mail: " + arrayDeContatos[1].email.value + ".");
	saltarLinha();
	document.write("Telefone: " + arrayDeContatos[1].telefone.value + ".");
	saltarLinha();
}

var	botaoSelecionado = document.getElementById("botaoSalvar");
	botaoSelecionado.onclick = salvarContatos;

var	botaoSelecionado = document.getElementById("botaoExibir");
	botaoSelecionado.onclick = exibirContatos;
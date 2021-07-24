function salvarCliente(){
    
    let cliente={
        "nome":$('#nome').val(),
        "email":$('#email').val(),
        "telefone":$('#telefone').val(),
    }
    localStorage.setItem('Cliente', JSON.stringify(cliente));
    let endereco={
        "endereco":$('#endereco').val(),
        "numero":$('#numero').val(),
        "bairro":$('#bairro').val(),
        "cidade":$('#cidade').val(),
        "estado":$('#estado').val(),
    }
    localStorage.setItem('Endereco', JSON.stringify(endereco));
    alert('Dados salvos com sucesso!')

}

$(document).ready(function(){
    let cliente = localStorage.getItem('Cliente');
    
    let clienteObJ = JSON.parse(cliente);
    $('#nome').val(clienteObJ.nome)
    $('#telefone').val(clienteObJ.telefone)
    $('#email').val(clienteObJ.email) 

    let endereco = localStorage.getItem('Endereco');
    
    let enderecoCliente = JSON.parse(endereco);
    $('#endereco').val(enderecoCliente.endereco)
    $('#numero').val(enderecoCliente.numero)
    $('#bairro').val(enderecoCliente.bairro) 
    $('#cidade').val(enderecoCliente.cidade)
    $('#estado').val(enderecoCliente.estado) 
})
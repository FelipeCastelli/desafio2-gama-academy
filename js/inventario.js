function salvarInventario(){
    let inventario={
        "q_px": $('#q_px').val(),
        "q_py": $('#q_py').val(),
        "q_pz": $('#q_pz').val(),
    }
    localStorage.setItem('Inventario', JSON.stringify(inventario));
    alert('Dados salvos com sucesso!')

}

$(document).ready(function(){
    let inventario = localStorage.getItem('Inventario');
    
    let inventarioObJ = JSON.parse(inventario);
    $('#q_px').val(inventarioObJ.q_px)
    $('#q_py').val(inventarioObJ.q_py)
    $('#q_pz').val(inventarioObJ.q_pz) 
})
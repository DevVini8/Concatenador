function concatenar() {
    var matriculas = document.getElementById("matricula").value.split('\n').map(function(item) {
        return item.trim();
    });

    var valores = document.getElementById("valor").value.split('\n').map(function(item) {
        return item.trim();
    });

    var resultado = '';

    for (var i = 0; i < Math.max(matriculas.length, valores.length); i++) {
        var matricula = matriculas[i] || ''; 
        var valor = valores[i] ? valores[i].replace(',', '') : ''; 
        
        var espacosEmBranco = Array(13).join(" "); 
        resultado += (espacosEmBranco + matricula + valor).slice(-20) + '\n';
    }

    
    document.getElementById("resultado").value = resultado.trim();
}
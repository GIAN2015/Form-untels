function terminarProceso() {
    // Simular clic en el alert para cerrarlo
    var alertElement = document.getElementById('alert');
    if (alertElement) {
        alertElement.style.display = 'none'; // Otra opción: alertElement.remove();
    }
}
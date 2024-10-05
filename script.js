var wheelSpinning = false;
function spin() {
    if (!wheelSpinning) {
        wheelSpinning = true
        let wheel = document.getElementById('wheel');
        const pi = Math.PI;
        var random = Math.random() * 10;
        let currentRotation = parseFloat(wheel.getAttribute('data-rotation')) || 0;
        currentRotation += Math.floor(pi * random + 2 * pi); // Add one radian to the current rotation
        wheel.setAttribute('data-rotation', currentRotation);
        wheel.style.transition = `${pi}s`; // 1 second for 1 radian
        wheel.style.transform = `rotate(${currentRotation}rad)`;
        //wheel.style.transform = `translate(-50%, -50%)`
        // Wait pi seconds then set wheelSpinning to false
        setTimeout(function() {
            wheelSpinning = false;
        }, pi * 1000); // Convert pi seconds to milliseconds
    }
}

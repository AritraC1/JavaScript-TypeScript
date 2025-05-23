// Calculate BMI
document.getElementById('bmiForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    // Value of Height & Weight
    const ht = parseFloat(document.getElementById('height').value)/100;
    const wt = parseFloat(document.getElementById('weight').value);
    const result = document.getElementById('result')

    if (!isNaN(ht) && !isNaN(wt) && ht > 0 && wt > 0) {
        const bmi = (wt) / (ht * ht);
        console.log(bmi);
        
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
        result.classList.remove('placeholder');
    }
    else {
        result.textContent = 'Please enter valid height and weight values.';
        result.classList.remove('placeholder');
    }
});
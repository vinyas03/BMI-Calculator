let height = document.querySelector('#height-value');
let weight = document.querySelector('#weight-value');
let calcBtn = document.querySelector('#calc-button');

let bmiValue = document.querySelector('#bmi-value');
let bmiResult = document.querySelector('#bmi-result');
// let bmiGauge = document.querySelector('.bmi-gauge');
calcBtn.addEventListener('click', () => 
    {
        let h = parseFloat(height.value);
        let w = parseFloat(weight.value);
        let bmi = w / (h * h);
        if (!isNaN(bmi)) {
            bmiValue.innerHTML = bmi.toFixed(2);
            gauge.set(bmi); //set the new gauge value everytime the button is clicked.
            // bmiGauge.style.display = 'block';
            if (bmi < 18.5) {
                bmiResult.style.color = '#F03E3E';
                bmiResult.innerHTML = "Underweight";
            } else if (bmi >= 18.5 && bmi <= 25) {
                bmiResult.style.color = '#30B32D';
                bmiResult.innerHTML = "Normal";
            } else if (bmi >= 25 && bmi <= 30) {
                bmiResult.style.color = '#FF8700';
                bmiResult.innerHTML = "Overweight";
            } else {
                bmiResult.style.color = '#F03E3E';
                bmiResult.innerHTML = "Obesity";
            }
        } else {
            alert('Enter numerical inputs !');
        }

});


//Settings for GaugeJS library
var opts = {
    angle: -0.1, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 0.95, // Relative radius
    pointer: {
      length: 0.58, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: true,     // If false, max value increases automatically if value > maxValue // true means max value is fixed to 40 as i set below gauge.maxValue = 40;
    limitMin: true,     // If true, the min value of the gauge will be fixed // true means min value is fixed to 10 as i set below gauge.setMinValue(10);
    //colorStart: 'red', 
    //colorStop: 'blue',    
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticZones: [
        {strokeStyle: "#F03E3E", min: 10, max: 16.5}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 16.5, max: 18.5}, // Yellow
        {strokeStyle: "#30B32D", min: 18.5, max: 25}, // Green
        {strokeStyle: "#FFDD00", min: 25, max: 30}, // Yellow
        {strokeStyle: "#F03E3E", min: 30, max: 40}  // Red
     ],
     staticLabels: {
        font: "15px sans-serif",  // Specifies font
        labels: [10, 16.5, 18.5, 25, 30, 40],  // Print labels at these values
        color: "#1B0838",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
  };
  var target = document.getElementById('gauge-canvas'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 40; // set max gauge value
  gauge.setMinValue(10);  // set min value
  gauge.animationSpeed = 8; // set animation speed (32 is default value)
  gauge.set(10); //initially set to 10
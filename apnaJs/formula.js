let iniAmount = parseInt(prompt("enter your number : " ));
let withGst = iniAmount + (iniAmount * 0.18);
let gst = iniAmount * 0.18;
let clspls = iniAmount * 0.048;
let internetHandling = iniAmount * (2.63 / 100);
let internetHandlingTx = internetHandling * (18 / 100);
let totalInterhandle = internetHandling + internetHandlingTx;
let finalAmountGet = iniAmount - (clspls + totalInterhandle+ gst)
let totalDeduction = gst + totalInterhandle + clspls;

document.getElementById("root").innerHTML = totalDeduction;
document.getElementById("totalAmount").innerHTML = iniAmount +totalDeduction;
document.getElementById("setAm").innerHTML = iniAmount;


console.log(`if you have 
initial am - ${iniAmount}, 
gst - ${gst},
with tax - ${withGst},
clasplus - ${clspls}, 
total interhandling - ${totalInterhandle}
final amount we get : ${finalAmountGet}
total deduction : ${totalDeduction}`);

console.log(`student pay = ${iniAmount + totalDeduction }
    `)


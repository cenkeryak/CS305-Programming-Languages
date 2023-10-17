//1-4	5-14	 15-34	35-54	55-74	75+
// 2038	2639	 13440	39763	173269	264168
let deathCounts = [2038,2639,13440,39763,173269,264168];

function ArrayMax(array){
    let maxElement = 0;
    for (let index = 0; index < array.length; index++) {
        if (maxElement < array[index]) {
            maxElement = array[index];
        }
        
    }
    return maxElement;
}

let maxDeathCount = ArrayMax(deathCounts);

console.log("Max Death Count: " + maxDeathCount);

let DeathValAsDist = 100 / maxDeathCount;


document.addEventListener("DOMContentLoaded", function () {

    const rectBar1 = document.getElementById("rect-bar1");
    const rectBar2 = document.getElementById("rect-bar2");
    const rectBar3 = document.getElementById("rect-bar3");
    const rectBar4 = document.getElementById("rect-bar4");
    const rectBar5 = document.getElementById("rect-bar5");
    const rectBar6 = document.getElementById("rect-bar6");
    
    rectBar1.setAttribute("height", (deathCounts[0]/maxDeathCount)*100);
    rectBar2.setAttribute("height", (deathCounts[1]/maxDeathCount)*100);
    rectBar3.setAttribute("height", (deathCounts[2]/maxDeathCount)*100);
    rectBar4.setAttribute("height", (deathCounts[3]/maxDeathCount)*100);
    rectBar5.setAttribute("height", (deathCounts[4]/maxDeathCount)*100);
    rectBar6.setAttribute("height", (deathCounts[5]/maxDeathCount)*100);

    rectBar1.setAttribute("y", 120 - (deathCounts[0]/maxDeathCount)*100);
    rectBar2.setAttribute("y", 120 - (deathCounts[1]/maxDeathCount)*100);
    rectBar3.setAttribute("y", 120 - (deathCounts[2]/maxDeathCount)*100);
    rectBar4.setAttribute("y", 120 - (deathCounts[3]/maxDeathCount)*100);
    rectBar5.setAttribute("y", 120 - (deathCounts[4]/maxDeathCount)*100);
    rectBar6.setAttribute("y", 120 - (deathCounts[5]/maxDeathCount)*100);

    // Setting the position of the text values with respect to the max value

    const valueText1 = document.getElementById("text-value1");
    const valueText2 = document.getElementById("text-value2");
    const valueText3 = document.getElementById("text-value3");
    const valueText4 = document.getElementById("text-value4");
    const valueText5 = document.getElementById("text-value5");
    const valueText6 = document.getElementById("text-value6");
    const valueText7 = document.getElementById("text-value7");
    const valueText8 = document.getElementById("text-value8");
    const valueText9 = document.getElementById("text-value9");

    valueText1.setAttribute("y", 122 - (30000 * DeathValAsDist));
    valueText2.setAttribute("y", 122 - (60000 * DeathValAsDist));
    valueText3.setAttribute("y", 122 - (90000 * DeathValAsDist));
    valueText4.setAttribute("y", 122 - (120000 * DeathValAsDist));
    valueText5.setAttribute("y", 122 - (150000 * DeathValAsDist));
    valueText6.setAttribute("y", 122 - (180000 * DeathValAsDist));
    valueText7.setAttribute("y", 122 - (210000 * DeathValAsDist));
    valueText8.setAttribute("y", 122 - (240000 * DeathValAsDist));
    valueText9.setAttribute("y", 122 - (270000 * DeathValAsDist));

    const valueTick1 = document.getElementById("valueTick1");
    const valueTick2 = document.getElementById("valueTick2");
    const valueTick3 = document.getElementById("valueTick3");
    const valueTick4 = document.getElementById("valueTick4");
    const valueTick5 = document.getElementById("valueTick5");
    const valueTick6 = document.getElementById("valueTick6");
    const valueTick7 = document.getElementById("valueTick7");
    const valueTick8 = document.getElementById("valueTick8");
    const valueTick9 = document.getElementById("valueTick9");

    valueTick1.setAttribute("y1", 120 - (30000 * DeathValAsDist));
    valueTick1.setAttribute("y2", 120 - (30000 * DeathValAsDist));
    valueTick2.setAttribute("y1", 120 - (60000 * DeathValAsDist));
    valueTick2.setAttribute("y2", 120 - (60000 * DeathValAsDist));
    valueTick3.setAttribute("y1", 120 - (90000 * DeathValAsDist));
    valueTick3.setAttribute("y2", 120 - (90000 * DeathValAsDist));
    valueTick4.setAttribute("y1", 120 - (120000 * DeathValAsDist));
    valueTick4.setAttribute("y2", 120 - (120000 * DeathValAsDist));
    valueTick5.setAttribute("y1", 120 - (150000 * DeathValAsDist));
    valueTick5.setAttribute("y2", 120 - (150000 * DeathValAsDist));
    valueTick6.setAttribute("y1", 120 - (180000 * DeathValAsDist));
    valueTick6.setAttribute("y2", 120 - (180000 * DeathValAsDist));
    valueTick7.setAttribute("y1", 120 - (210000 * DeathValAsDist));
    valueTick7.setAttribute("y2", 120 - (210000 * DeathValAsDist));
    valueTick8.setAttribute("y1", 120 - (240000 * DeathValAsDist));
    valueTick8.setAttribute("y2", 120 - (240000 * DeathValAsDist));
    valueTick9.setAttribute("y1", 120 - (270000 * DeathValAsDist));
    valueTick9.setAttribute("y2", 120 - (270000 * DeathValAsDist));

    


});

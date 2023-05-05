

const berechnen = () => {
    const outputGrundcal = document.querySelector(".output-grundcal");
    const outputGrundKj = document.querySelector(".output-grundKj");
    const outputGesamtcal = document.querySelector(".output-gesamtcal");
    const outputGesamtKj = document.querySelector(".output-gesamtKj");
    const bodyHeight = Number(document.querySelector(".height").value);
    const actualAge = Number(document.querySelector(".age").value);
    const weightNow = Number(document.querySelector(".weight").value);
    const maleFemale = document.querySelector('input[name="geschlecht"]:checked').value;
    const activities = document.querySelector("#dropdown").value;

    let grundWert = 0;

    if(maleFemale == "male") {
        grundWert = 66.47 + 13.7 * weightNow + 5 * bodyHeight - 6.8 * actualAge;
    } else if (maleFemale == "female") {
        grundWert = 655.1 + 9.6 * weightNow + 1.8 * bodyHeight -4.7 * actualAge;
    }

    outputGrundcal.innerHTML = Math.round(grundWert);
    outputGrundKj.innerHTML = Math.round(grundWert * 4.184);
    outputGesamtcal.innerHTML = Math.round(outputGrundcal.innerHTML * activities);
    outputGesamtKj.innerHTML = Math.round(outputGrundKj.innerHTML * activities);
    
    
}
function attachEventsListeners() {
    const num = document.getElementById('inputDistance');
    const convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', convert);

    const output = document.getElementById('outputDistance');


    function convert(){
        const numVal = Number(num.value);
        const firstVal = document.getElementById('inputUnits').value;
        const secondVal = document.getElementById('outputUnits').value;
        const km = 1000 * numVal;
        const m = 1 * numVal;
        const cm = 0.01 * numVal;
        const mm = 0.001 * numVal;
        const mi = 1609.34 * numVal;
        const yrd = 0.9144 * numVal;
        const ft = 0.3048 * numVal;
        const inn = 0.0254 * numVal;
        let firstNumInM = 0;
        let result = 0;
        if (firstVal === 'km') {
            firstNumInM = km;
        } else if (firstVal === 'm'){
            firstNumInM = m;
        } else if (firstVal === 'cm'){
            firstNumInM = cm;
        } else if (firstVal === 'mm'){
            firstNumInM = mm;
        } else if (firstVal === 'mi'){
            firstNumInM = mi;
        } else if (firstVal === 'yrd'){
            firstNumInM = yrd; 
        } else if (firstVal === 'ft'){
            firstNumInM = ft;
        } else if (firstVal === 'in'){
            firstNumInM = inn;
        }

        if (secondVal === 'km') {
            result = firstNumInM / 1000;
        } else if (secondVal === 'm'){
            result = firstNumInM;
        } else if (secondVal === 'cm'){
            result = firstNumInM * 100;
        } else if (secondVal === 'mm'){
            result = firstNumInM * 1000;
        } else if (secondVal === 'mi'){
            result = firstNumInM / 1609.34;
        } else if (secondVal === 'yrd'){
            result = firstNumInM / 0.9144;
        } else if (secondVal === 'ft'){
            result = firstNumInM / 0.3048;
        } else if (secondVal === 'in'){
            result = firstNumInM / 0.0254;
        }
        
        output.value = result;

        

    }
}
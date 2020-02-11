function convert(choice) {
    let m = 0;
    let km = 0;
    let cm = 0;
    let inch = 0;
    let ft = 0;
    let m2 = 0;
    let f = 0;
    let k = 0;
    let c = 0;
    let kmph = 0;
    let mps = 0;
    let mph = 0;
    let valid = "Enter A Valid Number !!!"; 
    let possible = "Not Possible";
    
    switch(choice) {

        case 1: km = document.getElementById("km").value;
                if(km === "") {
                    document.getElementById("m").value = km;
                    document.getElementById("cm").value = km;
                } else if(isNaN(+km)){
                    document.getElementById("m").value = valid;
                    document.getElementById("cm").value = valid;
                } else if(+km < 0) {
                    document.getElementById("m").value = possible;
                    document.getElementById("cm").value = possible;
                } else {
                    document.getElementById("m").value = +km * 1000;
                    document.getElementById("cm").value = +km * 100000;
                }
                break;
        

        case 2: m = document.getElementById("m").value;
                if(m === "") {
                    document.getElementById("cm").value = m;
                    document.getElementById("km").value = m;
                } else if(isNaN(+m)){
                    document.getElementById("cm").value = valid;
                    document.getElementById("km").value = valid;
                } else if(+m < 0) {
                    document.getElementById("km").value = possible;
                    document.getElementById("cm").value = possible;
                } else {
                    document.getElementById("cm").value = +m * 100;
                    document.getElementById("km").value = +m / 1000;
                }
                break;
        case 3: cm = document.getElementById("cm").value;
                if(cm === "") {
                    document.getElementById("m").value = cm;
                    document.getElementById("km").value = cm;
                } else if(isNaN(+cm)){
                    document.getElementById("m").value = valid;
                    document.getElementById("km").value = valid;
                } else if(+cm < 0) {
                    document.getElementById("km").value = possible;
                    document.getElementById("m").value = possible;
                } else {
                    document.getElementById("m").value = +cm / 100;
                    document.getElementById("km").value = +cm / 100000;
                }
                break;

    // Feet - inch - meter

        case 4: ft = document.getElementById("ft").value;
                if(ft === "") {
                    document.getElementById("inch").value = ft;
                    document.getElementById("m2").value = ft;
                } else if(isNaN(+ft)){
                    document.getElementById("m2").value = valid;
                    document.getElementById("inch").value = valid;
                } else if(+ft < 0) {
                    document.getElementById("inch").value = possible;
                    document.getElementById("m2").value = possible;
                } else {
                    document.getElementById("inch").value = +ft * 12;
                    document.getElementById("m2").value = +ft * 0.3048;
                }
                break;
        
        case 5: inch = document.getElementById("inch").value;
                if(inch === "") {
                    document.getElementById("ft").value = inch;
                    document.getElementById("m2").value = inch;
                } else if(isNaN(+inch)){
                    document.getElementById("m2").value = valid;
                    document.getElementById("ft").value = valid;
                } else if(+inch < 0) {
                    document.getElementById("ft").value = possible;
                    document.getElementById("m2").value = possible;
                } else {
                    document.getElementById("ft").value = +inch * 0.0833333;
                    document.getElementById("m2").value = +inch * 0.0254;
                }
                break;
        
        case 6: m2 = document.getElementById("m2").value;
                if(m2 === "") {
                    document.getElementById("ft").value = m2;
                    document.getElementById("inch").value = m2;
                } else if(isNaN(+m2)){
                    document.getElementById("ft").value = valid;
                    document.getElementById("inch").value = valid;
                } else if(+m2 < 0) {
                    document.getElementById("ft").value = possible;
                    document.getElementById("inch").value = possible;
                } else {
                    document.getElementById("ft").value = +m2 * 3.28084;
                    document.getElementById("inch").value = +m2 * 39.3701;
                }
                break;
        
    //  Celsius - Fahrenheit - Kelvin

        case 7: c = document.getElementById("c").value;
                if(c === "") {
                    document.getElementById("f").value = c;
                    document.getElementById("k").value = c;
                } else if(isNaN(+c)){
                    document.getElementById("f").value = valid;
                    document.getElementById("k").value = valid;
                } else {
                    document.getElementById("f").value = (+c * (9 / 5))+32;
                    document.getElementById("k").value = +c + 273.15;
                }
                break;
        
        case 8: f = document.getElementById("f").value;
                if(f === "") {
                    document.getElementById("c").value = f;
                    document.getElementById("k").value = f;
                } else if(isNaN(+f)){
                    document.getElementById("c").value = valid;
                    document.getElementById("k").value = valid;
                } else {
                    document.getElementById("c").value = ( +f - 32) * (5 / 9);
                    document.getElementById("k").value = ( +f - 32) * (5 / 9) + 273.15;
                }
                break;
        case 9: k = document.getElementById("k").value;
                if(k === "") {
                    document.getElementById("c").value = k;
                    document.getElementById("f").value = k;
                } else if(isNaN(+k)){
                    document.getElementById("c").value = valid;
                    document.getElementById("f").value = valid;
                } else {
                    document.getElementById("c").value = (+k - 273.15) * (9 / 5) + 32;
                    document.getElementById("f").value = +k - 273.15;
                }
                break;

    // Kmph - Mps - Mph
        
       case 10: kmph = document.getElementById("kmph").value;
                if(kmph === "") {
                    document.getElementById("mps").value = kmph;
                    document.getElementById("mph").value = kmph;
                } else if(isNaN(+kmph)){
                    document.getElementById("mps").value = valid;
                    document.getElementById("mph").value = valid;
                } else if(+kmph < 0) {
                    document.getElementById("mps").value = possible;
                    document.getElementById("mph").value = possible;
                } else {
                    document.getElementById("mps").value = (+kmph / 3.6).toFixed(8);
                    document.getElementById("mph").value = (+kmph / 1.609344).toFixed(8);
                }
                break;

       case 11: mps = document.getElementById("mps").value;
                if(mps === "") {
                    document.getElementById("kmph").value = mps;
                    document.getElementById("mph").value = mps;
                } else if(isNaN(+mps)){
                    document.getElementById("kmph").value = valid;
                    document.getElementById("mph").value = valid;
                } else if(+mps < 0) {
                    document.getElementById("kmph").value = possible;
                    document.getElementById("mph").value = possible;
                } else {
                    document.getElementById("kmph").value = (+mps * 3.6);
                    document.getElementById("mph").value = (+mps * 2.237);
                }
                break;
        
       case 12: mph = document.getElementById("mph").value;
                if(mph === "") {
                    document.getElementById("kmph").value = mph;
                    document.getElementById("mps").value = mph;
                } else if(isNaN(+mph)){
                    document.getElementById("kmph").value = valid;
                    document.getElementById("mps").value = valid;
                } else if(+mph < 0) {
                    document.getElementById("kmph").value = possible;
                    document.getElementById("mps").value = possible;
                } else {
                    document.getElementById("kmph").value = (+mph * 1.609344);
                    document.getElementById("mps").value = (+mph / 2.237).toFixed(8);
                }
    }
    
}

let calcule = document.getElementById("calculate");
let result = document.getElementById("result-text");

// Numbers
    let zero_btn = document.getElementById("number-zero");
    let one_btn = document.getElementById("number-one");
    let two_btn = document.getElementById("number-two");
    let three_btn = document.getElementById("number-three");
    let four_btn = document.getElementById("number-four");
    let five_btn = document.getElementById("number-five");
    let six_btn = document.getElementById("number-six");
    let seven_btn = document.getElementById("number-seven");
    let eight_btn = document.getElementById("number-eight");
    let nine_btn = document.getElementById("number-nine");
// Operators
    let sum_btn = document.getElementById("sum");
    let sub_btn = document.getElementById("subtraction");
    let div_btn = document.getElementById("division");
    let mult_btn = document.getElementById("multiplication");
    let cc_btn = document.getElementById("reset");
    let equal_btn = document.getElementById("equal");
    

zero_btn.onclick = function(){
    calcule.innerText +="0";
    result.innerText = eval(calculate.innerText);
    alert(eval("Math.sqrt(4)"));
};
one_btn.onclick = function(){
    calcule.innerText +="1";
    result.innerText = eval(calculate.innerText);
};
two_btn.onclick = function(){
    calcule.innerText +="2";
    result.innerText = eval(calculate.innerText);
};
three_btn.onclick = function(){
    calcule.innerText +="3";
    result.innerText = eval(calculate.innerText);
};
four_btn.onclick = function(){
    calcule.innerText +="4";
    result.innerText = eval(calculate.innerText);
};
five_btn.onclick = function(){
    calcule.innerText +="5";
    result.innerText = eval(calculate.innerText);
};
six_btn.onclick = function(){
    calcule.innerText +="6";
    result.innerText = eval(calculate.innerText);
};
seven_btn.onclick = function(){
    calcule.innerText +="7";
    result.innerText = eval(calculate.innerText);
};
eight_btn.onclick = function(){
    calcule.innerText +="8";
    result.innerText = eval(calculate.innerText);
};
nine_btn.onclick = function(){
    calcule.innerText +="9";
    result.innerText = eval(calculate.innerText);
};
sum_btn.onclick = function(){
    calcule.innerText +=" + ";
};
sub_btn.onclick = function(){
    calcule.innerText +=" - ";
};
div_btn.onclick = function(){
    calcule.innerText +=" / ";
};
mult_btn.onclick = function(){
    calcule.innerText +=" * ";
};

cc_btn.onclick = function(){
    calculate.innerText = " ";
    result.innerText = "0";
}

equal_btn.onclick = function(){
    calculate.innerText = result.innerText;
    result.innerText = "";
}

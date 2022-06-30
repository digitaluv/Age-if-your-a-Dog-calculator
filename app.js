function bow(){
    let earlyYears=2*10.5;
    // earlyYears*=10.5;
    let age=document.getElementById("age").value;
    let myAge=age;
    myAge-=2;
    myAge*=4;
    let dogage=myAge+earlyYears;
    dogage=(`I am ${age} years old in human years which is ${dogage} years old in dog years.`);
    document.getElementById("dogage").innerText=dogage;

    
}
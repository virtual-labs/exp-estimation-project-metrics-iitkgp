/*Redeveloped
Lab: Software Engineering
Exp:Estimation of Project Metrics
File Name: simulation.js
Author: Prakriti Dhang */


    

  /*  function updateSlider() {
        //var sliderDiv = document.getElementById("sliderAmount");
        //sliderDiv.innerHTML = slideAmount;
        var sliderval = document.getElementById("slide").value;
        document.getElementById("sliderAmount").innerHTML = sliderval;
        typa = document.getElementById("ta").innerText; //a value type
        typb = document.getElementById("tb").innerText; //b value type
        typc = document.getElementById("tc").innerText; //c value type
        var effortpsb= ((parseFloat(sliderval))**(parseFloat(typb))).toFixed(2);  // projectsize^b
        var efforts = (parseFloat(typa) * parseFloat(effortpsb)).toFixed(2); // typa * effortb
       
        var effortsc=((parseFloat(efforts))**(parseFloat(typc))).toFixed(2); // effort^c
       var  tdevs= (2.5 * (parseFloat(effortsc))).toFixed(2); // 2.5 *effort^c

        var ndevolperss = Math.round((parseFloat(efforts))/(parseFloat(tdevs))); //calculate no of developers

        document.getElementById("opteff").value=efforts; //display effort
       document.getElementById("opttdev").value=tdevs; //display tdev
       document.getElementById("optdev").value=ndevolperss; //no of developers
    }*/

    var sliderval = document.getElementById("slide");
   var output= document.getElementById("sliderAmount")
   output.innerHTML = sliderval.value;
    sliderval.oninput = function() {
        output.innerHTML = this.value;
        var sliderval = document.getElementById("slide").value;
        typa = document.getElementById("ta").innerText; //a value type
        typb = document.getElementById("tb").innerText; //b value type
        typc = document.getElementById("tc").innerText; //c value type
        var effortpsb= ((parseFloat(sliderval))**(parseFloat(typb))).toFixed(2);  // projectsize^b
        var efforts = (parseFloat(typa) * parseFloat(effortpsb)).toFixed(2); // typa * effortb
       
        var effortsc=((parseFloat(efforts))**(parseFloat(typc))).toFixed(2); // effort^c
       var  tdevs= (2.5 * (parseFloat(effortsc))).toFixed(2); // 2.5 *effort^c

        var ndevolperss = Math.round((parseFloat(efforts))/(parseFloat(tdevs))); //calculate no of developers

        document.getElementById("opteff").value=efforts; //display effort
       document.getElementById("opttdev").value=tdevs; //display tdev
       document.getElementById("optdev").value=ndevolperss; //no of developers
      }
        
/* simulation  project type choice*/

var typa, typb, typc, prjtsize,effort, tdev,eaf, effcorrec, tdvcorr, ndevolpers; 
var effortb,effortc, efforta, effcorc;

/* Calulation on change in project type in simulation page*/
var ptype =document.getElementById("selecttype");

function choicetype(){
if(ptype.options[ptype.selectedIndex].value==0){
    document.getElementById("ta").innerHTML="2.4";
    document.getElementById("tb").innerHTML="1.05";
    document.getElementById("tc").innerHTML="0.38";
   
   
    var x = document.getElementById("slide");
    x.setAttribute("min", 2);
    x.setAttribute("max", 50);
    x.setAttribute("step", 2);
    var svalue = document.getElementById("slide").value;
   document.getElementById("sliderAmount").innerHTML = svalue;
   typa = document.getElementById("ta").innerText; //a value type
   typb = document.getElementById("tb").innerText; //b value type
   typc = document.getElementById("tc").innerText; //c value type
   var effortpsb= ((parseFloat(svalue))**(parseFloat(typb))).toFixed(2);  // projectsize^b
   var efforts = (parseFloat(typa) * parseFloat(effortpsb)).toFixed(2); // typa * effortb
  
   var effortsc=((parseFloat(efforts))**(parseFloat(typc))).toFixed(2); // effort^c
  var  tdevs= (2.5 * (parseFloat(effortsc))).toFixed(2); // 2.5 *effort^c

   var ndevolperss = Math.round((parseFloat(efforts))/(parseFloat(tdevs))); //calculate no of developers

   document.getElementById("opteff").value=efforts; //display effort
  document.getElementById("opttdev").value=tdevs; //display tdev
  document.getElementById("optdev").value=ndevolperss; //no of developers

  
  
}

if(ptype.options[ptype.selectedIndex].value==1){
    document.getElementById("ta").innerHTML="3";
    document.getElementById("tb").innerHTML="1.12";
    document.getElementById("tc").innerHTML="0.35";
   
    
    var x = document.getElementById("slide");
    x.setAttribute("min", 50);
    x.setAttribute("max", 300);
    x.setAttribute("step", 25);
    var svalue = document.getElementById("slide").value;
   document.getElementById("sliderAmount").innerHTML = svalue;
    typa = document.getElementById("ta").innerText; //a value type
    typb = document.getElementById("tb").innerText; //b value type
    typc = document.getElementById("tc").innerText; //c value type
    var effortpsb= ((parseFloat(svalue))**(parseFloat(typb))).toFixed(2);  // projectsize^b
    var efforts = (parseFloat(typa) * parseFloat(effortpsb)).toFixed(2); // typa * effortb
   
    var effortsc=((parseFloat(efforts))**(parseFloat(typc))).toFixed(2); // effort^c
   var  tdevs= (2.5 * (parseFloat(effortsc))).toFixed(2); // 2.5 *effort^c
 
    var ndevolperss = Math.round((parseFloat(efforts))/(parseFloat(tdevs))); //calculate no of developers
 
    document.getElementById("opteff").value=efforts; //display effort
   document.getElementById("opttdev").value=tdevs; //display tdev
   document.getElementById("optdev").value=ndevolperss; //no of developers

  
   
}
if(ptype.options[ptype.selectedIndex].value==2){
    document.getElementById("ta").innerHTML="3.6";
    document.getElementById("tb").innerHTML="1.2";
    document.getElementById("tc").innerHTML="0.32";
   
    var x = document.getElementById("slide");
    x.setAttribute("min", 300);
    x.setAttribute("max", 500);
    x.setAttribute("step", 25);
    var svalue = document.getElementById("slide").value;
   document.getElementById("sliderAmount").innerHTML = svalue;
    typa = document.getElementById("ta").innerText; //a value type
    typb = document.getElementById("tb").innerText; //b value type
    typc = document.getElementById("tc").innerText; //c value type
    var effortpsb= ((parseFloat(svalue))**(parseFloat(typb))).toFixed(2);  // projectsize^b
    var efforts = (parseFloat(typa) * parseFloat(effortpsb)).toFixed(2); // typa * effortb
   
    var effortsc=((parseFloat(efforts))**(parseFloat(typc))).toFixed(2); // effort^c
   var  tdevs= (2.5 * (parseFloat(effortsc))).toFixed(2); // 2.5 *effort^c
 
    var ndevolperss = Math.round((parseFloat(efforts))/(parseFloat(tdevs))); //calculate no of developers
 
    document.getElementById("opteff").value=efforts; //display effort
   document.getElementById("opttdev").value=tdevs; //display tdev
   document.getElementById("optdev").value=ndevolperss; //no of developers

  
}
}
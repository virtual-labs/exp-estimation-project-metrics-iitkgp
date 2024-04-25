/*Redeveloped
Lab: Software Engineering
Exp:Estimation of Project Metrics
File Name: main.js
Author: Prakriti Dhang */


    

  


/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("exercise3").style.display="none";
        document.getElementById("ex1").style.display="block";
        document.getElementById("ex2").style.display="none";
        document.getElementById("ex3").style.display="none";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("show_result").innerHTML="";
        document.getElementById("exer2").reset();
        document.getElementById("exer1").reset();
        document.getElementById("exer3").reset();
        document.getElementById("ta").innerHTML="2.4";
    document.getElementById("tb").innerHTML="1.05";
    document.getElementById("tc").innerHTML="0.38";
        document.getElementById("cal").disabled=false;
        document.getElementById("dispviewbtn").disabled=false;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
        document.getElementById("exercise2").style.display="block";
        document.getElementById("exercise1").style.display="none";
        document.getElementById("exercise3").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="block";
        document.getElementById("para1").style.display="block";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("show_result").innerHTML="";
        document.getElementById("cal2").disabled=false;
        document.getElementById("exer2").reset();
        document.getElementById("exer1").reset();
        document.getElementById("exer3").reset();
        
        document.getElementById("viewsol").disabled=true;
        document.getElementById("dispviewbtn").disabled=false;
    }

    if(ex.options[ex.selectedIndex].value==3){
        document.getElementById("exercise3").style.display="block";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("exercise1").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="none";
        document.getElementById("ex3").style.display="block";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="block";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("show_result").innerHTML="";
        document.getElementById("exer2").reset();
        document.getElementById("exer1").reset();
        document.getElementById("exer3").reset();
        document.getElementById("cal3").disabled=false;
        document.getElementById("viewsol").disabled=true;
        document.getElementById("dispviewbtn").disabled=false;
    }
    if(ex.options[ex.selectedIndex].value==0){
        document.getElementById("exercise1").style.display="none";
        document.getElementById("exercise2").style.display="none";
        document.getElementById("exercise3").style.display="none";
        document.getElementById("ex1").style.display="none";
        document.getElementById("ex2").style.display="none";
        document.getElementById("para1").style.display="none";
        document.getElementById("ex3").style.display="none";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("show_result3").style.display="none";
        document.getElementById("show_result").innerHTML="";
        document.getElementById("exer2").reset();
        document.getElementById("exer1").reset();
        document.getElementById("exer3").reset();
        document.getElementById("viewsol").disabled=true;
        document.getElementById("dispviewbtn").disabled=true;
    }
}
/* Submit button to directly view the solution*/

function viewsolutionb(){
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    window.scrollBy(0, 2500);
}

 /* simulation  project type choice*/

 var typa, typb, typc, prjtsize,effort, tdev,eaf, effcorrec, tdvcorr, ndevolpers; 
var effortb,effortc, efforta, effcorc;


/* Exercise 1 */

function cal1(){
   
    prjtsize =document.getElementById("inp1").value; //get project size value
    eaf = document.getElementById("inp2").value;  // get eaf value

    if ((prjtsize !== '') && (eaf !== '')  ){
        typa = document.getElementById("ta").innerText; //a value type
        typb = document.getElementById("tb").innerText; //b value type
        typc = document.getElementById("tc").innerText; //c value type
        
        //Effort
       effortb= ((parseFloat(prjtsize))**(parseFloat(typb))).toFixed(2);  // project^b
        effort = (parseFloat(typa) * parseFloat(effortb)).toFixed(2); // typa * effortb
       
        effortc=((parseFloat(effort))**(parseFloat(typc))).toFixed(2); // effort^c
        tdev= (2.5 * (parseFloat(effortc))).toFixed(2); // 2.5 *effort^c
       
       
       effcorrec = ((parseFloat(effort)) *(parseFloat(eaf))).toFixed(2);  //effort * eaf
       effcorc=((parseFloat(effcorrec))**(parseFloat(typc))).toFixed(2); //effortcorrect^c
       tdvcorr = (2.5 * (parseFloat(effcorc))).toFixed(2); //2.5 * effortcorr ^c

       ndevolpers = Math.round((parseFloat(effort))/(parseFloat(tdev))); //calculate no of developers
       
       document.getElementById("optd1").value=effort; //display effort
       document.getElementById("optd2").value=tdev; //display tdev
       document.getElementById("optd3").value=effcorrec; //effortcorrect
       document.getElementById("optd4").value=tdvcorr; //tdevcorr
       document.getElementById("optd5").value=ndevolpers; //no of developers
       //document.getElementById("cal").disabled=true;
       document.getElementById("viewsol").disabled=false;
      

    }
else if(eaf == '' || prjtsize == '' ){
    alert("Cannot be empty. Please enter positive value.");
    document.getElementById("opt1").value=""; //display effort
document.getElementById("opt2").value=""; //display tdev
document.getElementById("opt3").value=""; //effortcorrect
document.getElementById("opt4").value=""; //tdevcorr
}

  else{
   
alert("eaf and project size");
}
}
 /* Calulation on change in project type in exercise page*/
var ptypeex =document.getElementById("selecttypeex");

function choicetypeex(){
if(ptypeex.options[ptypeex.selectedIndex].value==0){
    document.getElementById("ta").innerHTML="2.4";
    document.getElementById("tb").innerHTML="1.05";
    document.getElementById("tc").innerHTML="0.38";
   
   
    typa = document.getElementById("ta").innerText; //a value type
    typb = document.getElementById("tb").innerText; //b value type
    typc = document.getElementById("tc").innerText; //c value type
    
    //Effort
   effortb= ((parseFloat(prjtsize))**(parseFloat(typb))).toFixed(2);  // project^b
    effort = (parseFloat(typa) * parseFloat(effortb)).toFixed(2); // typa * effortb
   
    effortc=((parseFloat(effort))**(parseFloat(typc))).toFixed(2); // effort^c
    tdev= (2.5 * (parseFloat(effortc))).toFixed(2); // 2.5 *effort^c
   
   
   effcorrec = ((parseFloat(effort)) *(parseFloat(eaf))).toFixed(2);  //effort * eaf
   effcorc=((parseFloat(effcorrec))**(parseFloat(typc))).toFixed(2); //effortcorrect^c
   tdvcorr = (2.5 * (parseFloat(effcorc))).toFixed(2); //2.5 * effortcorr ^c

   ndevolpers = Math.round((parseFloat(effort))/(parseFloat(tdev))); //calculate no of developers
   
   document.getElementById("optd1").value=effort; //display effort
   document.getElementById("optd2").value=tdev; //display tdev
   document.getElementById("optd3").value=effcorrec; //effortcorrect
   document.getElementById("optd4").value=tdvcorr; //tdevcorr
   document.getElementById("optd5").value=ndevolpers; //no of developers

  
  
}

if(ptypeex.options[ptypeex.selectedIndex].value==1){
    document.getElementById("ta").innerHTML="3";
    document.getElementById("tb").innerHTML="1.12";
    document.getElementById("tc").innerHTML="0.35";
   
    
    typa = document.getElementById("ta").innerText; //a value type
    typb = document.getElementById("tb").innerText; //b value type
    typc = document.getElementById("tc").innerText; //c value type
    
    //Effort
   effortb= ((parseFloat(prjtsize))**(parseFloat(typb))).toFixed(2);  // project^b
    effort = (parseFloat(typa) * parseFloat(effortb)).toFixed(2); // typa * effortb
   
    effortc=((parseFloat(effort))**(parseFloat(typc))).toFixed(2); // effort^c
    tdev= (2.5 * (parseFloat(effortc))).toFixed(2); // 2.5 *effort^c
   
   
   effcorrec = ((parseFloat(effort)) *(parseFloat(eaf))).toFixed(2);  //effort * eaf
   effcorc=((parseFloat(effcorrec))**(parseFloat(typc))).toFixed(2); //effortcorrect^c
   tdvcorr = (2.5 * (parseFloat(effcorc))).toFixed(2); //2.5 * effortcorr ^c

   ndevolpers = Math.round((parseFloat(effort))/(parseFloat(tdev))); //calculate no of developers
   
   document.getElementById("optd1").value=effort; //display effort
   document.getElementById("optd2").value=tdev; //display tdev
   document.getElementById("optd3").value=effcorrec; //effortcorrect
   document.getElementById("optd4").value=tdvcorr; //tdevcorr
   document.getElementById("optd5").value=ndevolpers; //no of developers

  
   
}
if(ptypeex.options[ptypeex.selectedIndex].value==2){
    document.getElementById("ta").innerHTML="3.6";
    document.getElementById("tb").innerHTML="1.2";
    document.getElementById("tc").innerHTML="0.32";
   
    typa = document.getElementById("ta").innerText; //a value type
        typb = document.getElementById("tb").innerText; //b value type
        typc = document.getElementById("tc").innerText; //c value type
        
        //Effort
       effortb= ((parseFloat(prjtsize))**(parseFloat(typb))).toFixed(2);  // project^b
        effort = (parseFloat(typa) * parseFloat(effortb)).toFixed(2); // typa * effortb
       
        effortc=((parseFloat(effort))**(parseFloat(typc))).toFixed(2); // effort^c
        tdev= (2.5 * (parseFloat(effortc))).toFixed(2); // 2.5 *effort^c
       
       
       effcorrec = ((parseFloat(effort)) *(parseFloat(eaf))).toFixed(2);  //effort * eaf
       effcorc=((parseFloat(effcorrec))**(parseFloat(typc))).toFixed(2); //effortcorrect^c
       tdvcorr = (2.5 * (parseFloat(effcorc))).toFixed(2); //2.5 * effortcorr ^c

       ndevolpers = Math.round((parseFloat(effort))/(parseFloat(tdev))); //calculate no of developers
       
       document.getElementById("optd1").value=effort; //display effort
       document.getElementById("optd2").value=tdev; //display tdev
       document.getElementById("optd3").value=effcorrec; //effortcorrect
       document.getElementById("optd4").value=tdvcorr; //tdevcorr
       document.getElementById("optd5").value=ndevolpers; //no of developers

  
}
}





 /* Exercise 2 */
function calculate2(){
 /* Correct answers operaters */
 
if((document.getElementById('opt1').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";

}
if((document.getElementById('opt2').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt4').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt5').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt7').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt8').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt10').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt12').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt16').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt17').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt19').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opt20').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operator(s) has(have) not been selected.  ";
    document.getElementById("show_result").style.color="green";
    
}
/* wrong answers operators */
if((document.getElementById('opt3').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt6').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt9').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt11').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt13').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt14').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt15').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt18').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opt21').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operator(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}


/* Correct answers operands */
if((document.getElementById('opd3').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd6').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd9').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd11').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd13').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd14').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd15').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd18').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}
if((document.getElementById('opd21').checked)){
    document.getElementById("show_result").innerHTML="Correct. One or more operand(s) has(have) not been selected. ";
    document.getElementById("show_result").style.color="green";
    
}

 /* Wrong answers operands */

if((document.getElementById('opd1').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
    
}
if((document.getElementById('opd2').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd4').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd5').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}

if((document.getElementById('opd7').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd8').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd10').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd12').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}

if((document.getElementById('opd16').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd17').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd19').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}
if((document.getElementById('opd20').checked)){
    document.getElementById("show_result").innerHTML="Wrong. One or more operand(s) is(are) Incorrect ";
    document.getElementById("show_result").style.color="red";
    
}

if((document.getElementById('opt1').checked) && (document.getElementById('opt2').checked)&& (document.getElementById('opt4').checked) && (document.getElementById('opt5').checked) && (document.getElementById('opt7').checked) && (document.getElementById('opt8').checked) && (document.getElementById('opt10').checked)
&& (document.getElementById('opt12').checked) && (document.getElementById('opt16').checked)&& (document.getElementById('opt17').checked)&& (document.getElementById('opt19').checked) && (document.getElementById('opt20').checked)
&& (document.getElementById('opd3').checked) && (document.getElementById('opd6').checked)&& (document.getElementById('opd9').checked)&& (document.getElementById('opd11').checked)&& (document.getElementById('opd13').checked)&& (document.getElementById('opd14').checked)
&& (document.getElementById('opd15').checked) && (document.getElementById('opd18').checked)&& (document.getElementById('opd21').checked)){
    document.getElementById("show_result").innerHTML="All are correct ";
    document.getElementById("show_result").style.color="green";
}
  
  document.getElementById("viewsol").disabled=false;

}
function reset2(){
    document.getElementById("exer2").reset();
    document.getElementById("cal2").disabled=false;
    document.getElementById("show_result").innerHTML="";
}



/* Exercise 3 */

var proglen, progvoca, vol, diffcul, effort3,timpl;
var n1, n2, N1, N2, n1N2,n22;
 /* n1: Number of unique operators used in the program
 /n2: Number of unique operands used in the program
N1: Total number of operators used in the program
N2: Total number of operands used in the program */

 
function calculate3(){
N1=document.getElementById("inp31").value;
N2=document.getElementById("inp32").value;
n1=document.getElementById("inp33").value;
n2=document.getElementById("inp34").value;

if((N1 !== '') && (N2 !== '') && (n1 !== '')&& (n2 !== '')){
    proglen  = parseInt(N1) + parseInt(N2); // Program Length
    progvoca = parseInt(n1) + parseInt(n2); //Program Vocabulary
    vol = (parseInt(proglen) * Math.log2(parseInt(progvoca)) ).toFixed(2); // Volume //log base 2
    n1N2 =parseInt(n1) * parseInt(N2); // n1* N2
    n22=(2 * parseInt(n2)); // 2*N2
    diffcul = (parseInt(n1N2) / parseInt(n22)).toFixed(2); //Diffculty (n1 * N2) / (2 * n2)
    effort3 = ((parseFloat(diffcul)) * parseFloat(vol)).toFixed(2); // Effort
   timpl = (parseFloat(effort3) / 18).toFixed(2);  //Time to Implement (in seconds)
   
   document.getElementById("opt31").value=proglen;
   document.getElementById("opt32").value=progvoca;
   document.getElementById("opt33").value=vol;
   document.getElementById("opt34").value=diffcul;
   document.getElementById("opt35").value=effort3;
   document.getElementById("opt36").value=timpl;
   
       document.getElementById("cal3").disabled=true;
       document.getElementById("viewsol").disabled=false;
}

if((N1 == '')){
    alert("Please enter a positive integer value for total # of operators!");
}
 if((N2 == '')){
    alert("Please enter a positive integer value for total # of operands!");
}
if((n1 == '')){
    alert("Please enter a positive integer value for unique # of operators!");
}
 if((n2 == '')){
    alert("Please enter a positive integer value for unique # of operands!");
}


}

/* Exercise 2 display print, code, help btn */
function displaybtns2(){
    document.getElementById("btnsopta").style.display="block";
    document.getElementById("btnsoptb").style.display="block";
    document.getElementById("btnsoptc").style.display="block";
}
/* Exercise 2 stop display print, code, help btn */
function stopdisplay2(){
    document.getElementById("btnsopta").style.display="none";
    document.getElementById("btnsoptb").style.display="none";
    document.getElementById("btnsoptc").style.display="none";
}

/* Exercise 2 show code */
function showcode(){
    var myWindow = window.open("", "MsgWindow", "width=350,height=300");
    myWindow.document.write("int" +"<br />" + " main(int argc, char **argv) " +"<br />" + "{ " +"<br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +"int x = 10;" +"<br />"  + "&nbsp; &nbsp;&nbsp;&nbsp;" +"int y = 20;" +"<br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" + "int sum; " +"<br /><br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +  "sum = x + y; " +"<br /><br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +"printf(Sum of %d and %d is: %d\n, x, y, sum); " +"<br /><br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +"return 0; " +"<br />" + "}");
    /*var codeImage = document.getElementById('largeImage');
    codeImage.style.display = 'block';
    codeImage.style.width=300+"px";
    codeImage.style.height=300+"px";
   var url=codeImage.getAttribute('src');
   var myNewWindow= window.open(url,'Image','width=codeImage.stylewidth,height=codeImage.style.height,resizable=1,');
   myNewWindow.document.body.style.background = "white";*/
   }

   /* Exercise 2 save and print */
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

/* Exercise 3 display print, code, help btn */
function displaybtns3(){
    document.getElementById("btnsopt1").style.display="block";
    document.getElementById("btnsopt2").style.display="block";
    document.getElementById("btnsopt3").style.display="block";
}

/* Exercise 3 stop display print, code, help btn */
function stopdisplay3(){
    document.getElementById("btnsopt1").style.display="none";
    document.getElementById("btnsopt2").style.display="none";
    document.getElementById("btnsopt3").style.display="none";
}

/* Exercise 3 show code */
function showcode3(){
    var myWindow = window.open("", "MsgWindow3", "width=500,height=350");
    myWindow.document.write("int" +"<br />" + " main(int argc, char **argv) " +"<br />" + "{ " +"<br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +"int radius = 12.34;" +"<br /><br />"  +   "&nbsp; &nbsp;&nbsp;&nbsp;" +"printf(Area of the circle with radius %f is: %f\n, radius, area(radius)); " +"<br /><br />" + "&nbsp; &nbsp;&nbsp;&nbsp;" +"return 0; " +"<br />" + "}" +"<br />" +"float" +"<br/>"+"area(float r){" +"<br />"+ "&nbsp; &nbsp;&nbsp;&nbsp;"+"return 22 * r *r /7;"+"<br />" +"}");
    
   }

   /* Exercise 3 save and print */
   function printDiv3(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}

/*  Display solution for exercise 1,2,3*/
function solview(){
   
    if(ex.options[ex.selectedIndex].value==1){
    document.getElementById("show_result1").style.display="block";
    document.getElementById("viewsol").disabled=true;
   
    }
    if(ex.options[ex.selectedIndex].value==2){
        document.getElementById("show_result2").style.display="block";
        document.getElementById("viewsol").disabled=true;
        
        }
    if(ex.options[ex.selectedIndex].value==3){
        document.getElementById("show_result3").style.display="block";
        document.getElementById("viewsol").disabled=true;
        
        }
}
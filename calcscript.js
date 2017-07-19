

 var result;
 var operation;
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);


function mod(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
 operation="Modulus";
 result=a%b;
 addrow();
 Answer.Input.value=result;

 }

function pow(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
 operation="Power";
 result=Math.pow(a,b);
 addrow();
 Answer.Input.value=result;

 }

 function exp(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
 operation="EXP";
 result=a * (Math.pow(10,b));
 addrow();
 Answer.Input.value=result;

 }


 function hcf() {
var a=parseFloat(Data.Input1.value);
var b=parseFloat(Data.Input2.value);
operation="HCF";
result=gcd(a,b);
addrow();
Answer.Input.value=result;
}

 function gcd(a,b){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
        var i,temp; 
    if (a>b) {a=a+b; b=a-b; a=a-b;}
    if ((b==(Math.round(b/a))*a)) {return a;}
    else {
         for (i=1; i <= Math.round(a/2) ; i=i+1) {
          if ((a==((Math.round(a/i))*i))&&(b==((Math.round(b/i))*i)))
           {temp=i;}
         }
        }
        return temp;
} 

 function lcm() {
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
        operation="LCM";
        var cm=1;
        var f=gcd(a,b);
  cm=a*b/f;
  result=cm;
  addrow();
  Answer.Input.value=result;
}

function add(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
     result=a+b;
     operation="Addition";
     addrow();
     Answer.Input.value=result;
    }

 function sub(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
     result=a-b;
     operation="Subtraction";
     addrow();
     Answer.Input.value=result;
    }

 function mul() {
var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
     result=a*b;
     operation="Multiplication";
     addrow();
     Answer.Input.value=result;
    }

 function div() {
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
     if(b==0)
        {operation="Division";
         result="not defined";}
     else{result=a / b;
     operation="Divison" ;}
     addrow();
     Answer.Input.value=result;
}

 function addrow(){
 var a=parseFloat(Data.Input1.value);
 var b=parseFloat(Data.Input2.value);
 var table=document.getElementById("tabledata"); 
 var rowCount = table.rows.length;
 var j=table.rows.length;
 var row = table.insertRow(rowCount);
     row.insertCell(0).innerHTML=j;
     row.insertCell(1).innerHTML= Data.Input1.value;
     row.insertCell(2).innerHTML= Data.Input2.value;
     row.insertCell(3).innerHTML=operation;
     row.insertCell(4).innerHTML=result;
 var button=row.insertCell(5);
 var button1=row.insertCell(6);
 var addbutton=document.createElement("input");
     addbutton.type="text"
     addbutton.id=j+"text";
 var addbutton1=document.createElement("input");
     addbutton1.type="button"
     addbutton1.value="change"
     addbutton1.id=j+"change";
     button.appendChild(addbutton);
     button1.appendChild(addbutton1);
 document.getElementById(j+"change").onclick=function(){
     table.rows[j].style.backgroundColor=document.getElementById(j+"text").value; 
     table.rows[j].cells[6].style.backgroundColor="#535353"     
     }
     
 }

 function swaprow(){
 var k=document.getElementById("first").value;
 var l=document.getElementById("second").value;
 var table=document.getElementById("tabledata");
 var i;
  for (i=1; i<5 ; i++) {
    tmp = table.rows[k].cells[i].innerHTML;  
    table.rows[k].cells[i].innerHTML = table.rows[l].cells[i].innerHTML;
    table.rows[l].cells[i].innerHTML = tmp;
  }
 }

 function clear()
{
    Calc.Input.value="";
    Answer.Input.value="";
    

}

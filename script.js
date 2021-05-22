function compute()
{
   var principal = document.getElementById("principal").value;
   
   if(parseInt(principal) < 0 || parseInt(principal)==0){
       alert('Enter a positive number');
       principal.focus();
       return false;
   }
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = (principal*rate*years)/100;
   var year = new Date().getFullYear()+ parseInt(years); 
   var sprincipal = "If you deposit is " + principal + ",";
   var srate ="at an interest rate of " +rate + "%.";
   var samount = "You will receive an amount of " +interest + "";
   var syear = "in the year "+ year;
   //var text = sprincipal + srate + samount+syear;

   var node = document.getElementById('result');
   var newNode = document.createElement('p');
   newNode.appendChild(document.createTextNode(sprincipal));
   var newNode1 = document.createElement('p');
   newNode1.appendChild(document.createTextNode(srate));
   var newNode2 = document.createElement('p');
   newNode2.appendChild(document.createTextNode(samount));
   var newNode3 = document.createElement('p');
   newNode3.appendChild(document.createTextNode(syear));
   node.appendChild(newNode);
   node.appendChild(newNode1);
   node.appendChild(newNode2);
   node.appendChild(newNode3);
   //document.getElementById("result").innerText=text;

}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        
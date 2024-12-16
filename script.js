//window.alert("hii");
var arr=[];
var arr2=[];
var c;
var p;

function st(){
    //window.alert(city.value);
    if(city.value.trim()==""|| per.value.trim()==""){
        window.alert("please enter valid input");
    }
    else{
     c=city.value;
     p=per.value;
    city.value="";
    per.value="";
   // window.alert("started");
    one.style.display="none";
    two.style.display="flex";
}
}
function add(){
  if(pur.value.trim()==""|| exp.value.trim()==""){
    window.alert("please enter valid  input");
  }
  else{
    arr.push(pur.value);
    arr2.push(exp.value);
    pur.value="";
    exp.value="";
    window.alert("purpose added");
  }
}
function sub(){
    window.alert("submit");
    des.innerHTML=c;
    person.innerHTML=p;
    var t=0;
    for(var i=0; i<arr.length;i++){
        t=t+parseInt(arr2[i]);
        listt=document.getElementById('listt');
         var tr=document.createElement('tr');
         var td1=document.createElement('td');
         var td2=document.createElement('td');
         td1.textContent=arr[i];
         td2.textContent=arr2[i];
         tr.appendChild(td1);
         tr.appendChild(td2);
         listt.appendChild(tr);
    }
    var tr=document.createElement('tr');
    var td1=document.createElement('th');
    var td2=document.createElement('td');
    td1.textContent="total";
    td2.textContent=t;
    var tr2=document.createElement('tr');
    var td3=document.createElement('th');
    var td4=document.createElement('td');
    td3.textContent="Per Person";
    td4.textContent=t/p;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
 var listt=document.getElementById('listt');
 listt.appendChild(tr);
 listt.appendChild(tr2);
 two.style.display="none";
 three.style.display="flex";
}

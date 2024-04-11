function mark(){
   let a=document.getElementById("grade").value
   if(a>=90){
    document.getElementById("result").innerHTML="You have Grade A!"
   }
   else if(a>=80){
      document.getElementById("result").innerHTML="You have Grade B!"
   }
   else if(a>=70){
      document.getElementById("result").innerHTML=" You have Grade C!"
   }
   else if(a>=60){
      document.getElementById("result").innerHTML="You have Grade D!"
   }
   else if(a<60){
      document.getElementById("result").innerHTML="You have Grade E!"
   }
}



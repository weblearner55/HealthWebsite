function myFunction(){
    window.location="Second.html";
  }
 
function Submit(){ 
  var AGE =document.getElementById('AGE').value;
  var WEIGHT=document.getElementById('WEIGHT').value;
  // document.write(document.getElementById('AGE').value +" "+document.getElementById('WEIGHT').value);
  switch(true){
    case( AGE>= 18 && AGE<=25 && WEIGHT>=30 && WEIGHT<= 40):
    // document.write("less weight");
    document.location="D1.html"
    break;
    case(AGE>= 18 && AGE<=25 && WEIGHT>=40 && WEIGHT<= 60):
    document.location="D2.html"
    break;
    case(AGE>= 18 && AGE<=25 && WEIGHT>=60 && WEIGHT<= 120):
    document.location="D3.html"
    break;
    case(AGE>= 25 && AGE<=40 && WEIGHT>=30 && WEIGHT<= 50):
    document.location="D4.html"
    break;
    case(AGE>= 25 && AGE<=40 && WEIGHT>=50 && WEIGHT<= 70):
    document.location="D5.html"
    break;
    case(AGE>= 25 && AGE<=40 && WEIGHT>=70 && WEIGHT<= 120):
    document.location="D6.html"
    break;
    case(AGE>= 40 && AGE<=55 && WEIGHT>=30 && WEIGHT<= 50):
    document.location="D7.html"
    break;
    case(AGE>= 40 && AGE<=55 && WEIGHT>=50 && WEIGHT<= 70):
    document.location="D8.html"
    break;
    case(AGE>= 40 && AGE<=55 && WEIGHT>=70 && WEIGHT<= 120):
    document.location="D9.html"
    break;
  }
}
//   if (AGE>20 && WEIGHT<30 ) {
//     document.write("jgjj");
//   }
//   else{
//     alert("dfdf");
//   }
// switch(true){
//  case AGE>= 18 && AGE<=25 && WEIGHT>=30 && WEIGHT<= 40:
//     document.write("less weight");
    
//   break;
//   default:
//     document.write("tr");
// }
//    } 

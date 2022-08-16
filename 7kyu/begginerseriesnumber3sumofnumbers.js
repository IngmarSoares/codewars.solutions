function getSum( a,b )
{
  let res = 0
if (a==b) {res = a}
  else if (a>b){
    for (i=b;i<=a;i++){
      res += i
    }
  }
    else if (b>a){
    for (i=a;i<=b;i++){
      res += i
    }
  }
  return res
}

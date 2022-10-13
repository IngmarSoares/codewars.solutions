function Xbonacci(signature,n){
   let sigLength = signature.length
   let total = 0
   for (i=sigLength;i<n;i++){
    total = 0
    for(j=0;j<sigLength;j++){
         total += signature[i-1-j]  
        }
    signature.push(total)
   }
   if (n <= sigLength){
    return signature.slice(0,n)
   }else 
   return signature
}

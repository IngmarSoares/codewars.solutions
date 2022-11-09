const largest = (n,xs) => xs.sort((a,b) => a-b).reverse().slice(0,n).sort((a,b)=>(a-b))

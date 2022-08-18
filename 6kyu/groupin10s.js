function groupIn10s(...args) {
let ordered = args.sort((a,b)=>a-b)

let groups =[]
ordered.forEach(x=> {
    let ind = Math.floor(x/10)
    groups[ind] = new Array()})
  
ordered.forEach(x=> {
    let ind = Math.floor(x/10)
    groups[ind].push(x)})

return groups    
};

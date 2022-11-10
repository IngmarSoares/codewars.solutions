function isHappy(n) {

for (i=0;i<=100;i++) {

n = n.toString(10).split('').map(x => Number(x) * Number(x))
n = n.reduce((pre, cur) => pre + cur,0)
if (n == 1) {return true}
}
return false }

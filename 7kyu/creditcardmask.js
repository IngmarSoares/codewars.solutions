// return masked string
let maskify = cc => cc.split('').map((x,i,a) => i<a.length-4? x='#' : x=x).join('')

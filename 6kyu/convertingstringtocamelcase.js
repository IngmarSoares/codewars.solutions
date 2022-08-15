function toCamelCase(str){
    let sym = '_'
    if(str.indexOf('-')>-1){sym = '-'}
    return str.split(sym).map((x,y) => y>0? x.split('').map((x,y) => y > 0? x : x.toUpperCase() ).join('') : x).join('')
}

function toFreud(string) {
  if (string == '') {
    return ''
  } else {
let palabras = string.split(' ');
  for (i = 0; i < palabras.length ; i++){
    palabras[i] = 'sex'
  }
return palabras.join(' ')
    }
  
}

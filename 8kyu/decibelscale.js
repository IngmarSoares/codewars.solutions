function dBScale(intensity) {
return Math.round((10 * Math.log10(intensity/Math.pow(10,-12))))
}

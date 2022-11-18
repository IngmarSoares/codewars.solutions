function solution(a) {
    let position = 0
    for (i=1; i<1000; i++){
	position = position + a[position]
	if (position < 0) return i
	if (position > a.length - 1) return i
    }
    return -1
}
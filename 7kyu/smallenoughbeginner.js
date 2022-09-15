let smallEnough = (a, limit) => a.map(x => x > limit).includes(true)? false : true

<<<<<<< HEAD
function bestMatch(ALAHLYGoals, zamalekGoals) {
    let diff = []
    for (i=0;i<ALAHLYGoals.length;i++){
        diff.push(ALAHLYGoals[i] - zamalekGoals[i])
    }
    console.log(diff)
    let bestDiff = Math.min(...diff)
    let bestDiffIndexes = []
    for (i=0;i<diff.length;i++){
        bestDiffIndexes.push(diff.indexOf(bestDiff,i))
    }
    console.log(bestDiffIndexes)
    let bestZamScore = 0
    for (i=0;i<bestDiffIndexes.length;i++){
        if (zamalekGoals[bestDiffIndexes[i]] > bestZamScore) {
            bestZamScore = zamalekGoals[bestDiffIndexes[i]]
        }
    }
    console.log(bestZamScore)
    for (i=0;i<bestDiffIndexes.length;i++){
        if (zamalekGoals[bestDiffIndexes[i]] == bestZamScore) {
            return bestDiffIndexes[i]
        }
    }
  }
=======
function bestMatch(ALAHLYGoals, zamalekGoals) {
    let diff = []
    for (i=0;i<ALAHLYGoals.length;i++){
        diff.push(ALAHLYGoals[i] - zamalekGoals[i])
    }
    console.log(diff)
    let bestDiff = Math.min(...diff)
    let bestDiffIndexes = []
    for (i=0;i<diff.length;i++){
        bestDiffIndexes.push(diff.indexOf(bestDiff,i))
    }
    console.log(bestDiffIndexes)
    let bestZamScore = 0
    for (i=0;i<bestDiffIndexes.length;i++){
        if (zamalekGoals[bestDiffIndexes[i]] > bestZamScore) {
            bestZamScore = zamalekGoals[bestDiffIndexes[i]]
        }
    }
    console.log(bestZamScore)
    for (i=0;i<bestDiffIndexes.length;i++){
        if (zamalekGoals[bestDiffIndexes[i]] == bestZamScore) {
            return bestDiffIndexes[i]
        }
    }
  }
>>>>>>> d0f9a1c (Added todays katas)

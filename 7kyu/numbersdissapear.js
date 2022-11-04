var findDisappearedNumbers = function (nums) {
    var numLength = nums.length;
    nums.sort(function (a, b) { return a - b });
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i]) {
            nums.splice(i, 1);
        }
    }
    for (var k = 0; k < nums.length; k++) {
        for (var j = 1; j <= numLength; j++) {
            if (nums[k] !== j) {
                return j;
            }
        }
    }
};

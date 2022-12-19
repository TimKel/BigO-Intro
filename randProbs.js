function reverse(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result+=str[i];
    }
    return result;
}

function reverse2(str){
    return str.split("").reverse().join("")
}

function addUpToFirst(n){
    let total = 0;

    for (let i = 1; i <= n; i++){
        total += 1;
    }
    return total;
}

function addUpToSecond(n){
    return n * (n + 1) /2;
}

function repeater(str, int){
    let repeatedStr = "";
    while (int > 0){
        repeatedStr += str;
        int--;
    }
    return repeatedStr;
}

function repeater2(str, int){
    let repeatedStr = ""
    for(let i = 0; i <= int; i++){
        console.log(str)
        repeatedStr += str;
    };
    return repeatedStr;
}

function allEvens(nums){
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 !== 0){
            return false;
        }
    }
    return true;
}

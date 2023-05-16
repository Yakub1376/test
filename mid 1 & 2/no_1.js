function countZeros(str)
{
    let cnt = 0;
    let f = 0;
    for(let i = 0;i < str.length; i++){
        if(str[i] == "0")
            cnt++;
        if(str[i] > "1")
        {
            f = 1;
            break;
        }
    }
    if(f == 1)
    return "Invalid input";
    else
    return cnt;
}
console.log(countZeros("10101"));
console.log(countZeros("101012"));

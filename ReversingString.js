const str='this is sunny day'
const reverseWords = (str = '') => {
    return str.trim()
    .split(/\s+/)
    .map((s) => {
        let res=''
        for(let i=s.length-1;i>=0;i--){
            res+=s[i]
        }
        return res

    })
    .join(' ');
}
console.log(reverseWords(str));
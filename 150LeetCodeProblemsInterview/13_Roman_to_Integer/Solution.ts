function romanToInt(s: string): number {

    const romanValues = {
    'M':1000,
    'D':500,
    'C':100,
    'L':50,
    'X':10,
    'V':5,
    'I':1    
    }

    let result = 0
    for(let i = 0; i < s.length; i++) {
        romanValues[s[i]] < romanValues[s[i+1]] ? result -= romanValues[s[i]] : result += romanValues[s[i]]
    }
    return result
}
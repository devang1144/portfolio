export const isalpha = c => { return (c > 47 && c < 58) || (c > 64 && c < 91) || (c > 96 && c < 123) }
export const filter = str => {
  if(str.length == 0) return "-"
  let s = ""
  let i = 0, j = 0
  while(i < str.length && !isalpha(str[i].charCodeAt())) i++;
  console.log(i)
  for(j = i ; j < str.length; j++) {
    let c = str[j].charCodeAt()
    if(isalpha(c)) s += str[j].toLowerCase()
    else s += '-'
  }
  j--
  while(j >= 0 && !isalpha(str[j].charCodeAt())) j--;
  return i == j+1 || j < 0 ? `${new Date().getTime()}` : s.slice(0, j-i+1)
}

// export default {
//     isalpha,
//     filter
// }
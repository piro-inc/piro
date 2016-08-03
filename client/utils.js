export function readCookie (name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

export function errorExists (obj) {
  let res = false
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      if (errorExists(obj[key])) {
        res = true
      }
    } else {
      if (key === 'error' && obj[key]) {
        res = true
      }
    }
  })
  return res
}


var getHostName = (url) => {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    let domain = match[2].split('.')[0]
    console.log('domain', domain);
    let first = domain.charAt(0)
    let last = domain.charAt(domain.length - 1)
    let newDomain = first + last
    return newDomain;
  }
  else {
    return null;
  }
}

module.exports = {
  validateUrl: (str) => {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      return false;
    } else {
      return true;
    }
  },
  generateShortUrl: (url) => {
    let hostName = getHostName(url)
    let date = Date.now().toString()
    let last2 = date.slice(-2)
    return hostName + last2
  }
}

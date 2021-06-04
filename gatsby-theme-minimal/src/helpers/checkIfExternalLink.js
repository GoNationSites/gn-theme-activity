export default string => {
  if (string) {
    return (
      string.includes('http') ||
      string.includes('https') ||
      string.includes('www') ||
      string.includes('.com') ||
      string.includes('.') ||
      string.includes('sms') ||
      string.includes('tel')
    )
  } else {
    return false
  }
}

// if the string contains any of the above url structures then return true it is an external link
// https://www.google.com => true
// milford/menu => false

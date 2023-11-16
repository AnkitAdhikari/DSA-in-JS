function generateHashtag(str) {
  const trimmedStr = str.trim();
  if (trimmedStr.length > 140 || trimmedStr.length === 0) return false;
  const formattedStr = trimmedStr.split(' ').map(el => {
    if (el === '') return '';
    return el[0].toUpperCase() + el.slice(1);
  }).join('')
  return '#' + formattedStr;
}
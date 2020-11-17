const cleanString = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
}

export default cleanString

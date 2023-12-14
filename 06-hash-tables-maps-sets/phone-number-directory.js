function phoneNumberDirectory(arr) {
  const numberDirectory = new Map();

  for (let contact of arr) {
    const [name, number] = contact.split(':');
    numberDirectory.set(name, number);
  }
  return numberDirectory;
}
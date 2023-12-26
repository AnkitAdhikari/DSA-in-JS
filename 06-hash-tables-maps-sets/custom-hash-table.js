class HashTable {
  constructor(limit = 14) {
    this.storage = [];
    this.limit = limit;
  }
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }

  set(key, value) {
    let index = this._hash(key, this.limit);

    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]];
    } else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }

  }

  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i} ${JSON.stringify(this.storage[i])}`);
      } else {
        console.log(`Bucket ${i} is empty`);
      }
    }
  }
}

// test
const ht = new HashTable(8);
ht.set('john', '555-234-3544');
ht.set('james', '555-384-5523');
ht.set('jack', '555-384-9933');
ht.set('jill', '555-390-0034');
ht.printTable();
export default class BloomFilter {
  constructor(size = 100) {
    this.size = size;
    this.storage = this.createStore(size);
  }

  insert(item) {
    const hashValues = this.getHashValues(item);
    hashValues.forEach((val) => this.storage.setValue(val));
  }

  mayContain(item) {
    const hashValues = this.getHashValues(item);
    for (let i = 0; i < hashValues.length; i += 1) {
      if (!this.storage.getValue(hashValues[i])) {
        return false;
      }
    }
    return true;
  }

  createStore(size) {
    const storage = new Array(size).fill(false);

    return {
      getValue(index) {
        return storage[index];
      },
      setValue(index) {
        storage[index] = true;
      },
    };
  }

  hash1(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i += 1) {
      const char = item.charCodeAt(i);
      hash = (hash << 5) + hash + char;
      hash &= hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  hash2(item) {
    let hash = 5381;
    for (let i = 0; i < item.length; i += 1) {
      const char = item.charCodeAt(i);
      hash = (hash << 5) + hash + char;
    }
    return Math.abs(hash % this.size);
  }

  hash3(item) {
    let hash = 0;
    for (let i = 0; i < item.length; i += 1) {
      const char = item.charCodeAt(i);
      hash = (hash << 5) - hash;
      hash += char;
      hash &= hash;
    }
    return Math.abs(hash % this.size);
  }

  getHashValues(item) {
    return [this.hash1(item), this.hash2(item), this.hash3(item)];
  }
}
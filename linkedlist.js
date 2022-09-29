class node {
  constructor(value) {
    this.nextNode = null;
    this.value = value;
  }
}

class linkedList {
  constructor() {
    this.firstNode = null;
  }

  append(value) {
    const newNode = new node(value);

    if (this.firstNode === null) {
      this.firstNode = newNode;
      return;
    }

    let tempNode = this.firstNode;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
    }

    tempNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new node(value);

    newNode.nextNode = this.firstNode;
    this.firstNode = newNode;
  }

  size() {
    if (this.firstNode === null) return 0;
    let count = 1;
    let tempNode = this.firstNode;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return this.firstNode;
  }

  tail() {
    let tempNode = this.firstNode;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  at(index) {
    if (index >= this.size()) return null;
    let tempNode = this.firstNode;
    for (let i = 0; i < index; i++) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  pop() {
    let tempNode = this.firstNode;
    while (tempNode.nextNode != this.tail()) {
      tempNode = tempNode.nextNode;
    }

    tempNode.nextNode = null;
  }

  contains(value) {
    if (this.firstNode === null) return false;
    let tempNode = this.firstNode;
    while (tempNode.nextNode != null) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.contains(value)) return null;
    let tempNode = this.firstNode;
    let count = 0;
    while (tempNode.nextNode != null) {
      if (tempNode.value == value) return count;
      tempNode = tempNode.nextNode;
      count++;
    }
  }

  toString() {
    if (this.firstNode === null) return null;
    let tempNode = this.firstNode;
    let result = "";
    while (tempNode.nextNode != null) {
      result += `( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }

    result += `( ${tempNode.value} ) -> null`;

    return result;
  }

  insertAt(value, index) {
    const newNode = new node(value);
    let tempNode = this.firstNode;
    for (let i = 0; i < index - 1; i++) {
      tempNode = tempNode.nextNode;
    }
    const nextNode = tempNode.nextNode;
    tempNode.nextNode = newNode;
    newNode.nextNode = nextNode;
  }

  removeAt(index) {
    const beforeTarget = this.at(index - 1);
    beforeTarget.nextNode = this.at(index).nextNode;
  }
}

const people = new linkedList();
people.append("Terry");
people.append("Percy");
people.append("Billy");
people.append("Bobby");

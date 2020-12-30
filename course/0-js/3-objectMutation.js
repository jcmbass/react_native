const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key'
  }
}

const o2 = o
const o3 = Object.assign({}, o)

o.a = 'new value'
o2.obj.key = 'new value'

console.log(o2.a)
console.log(o3.a)
console.log(o.obj.key)

// deep copy
function deepCopy(obj) {
  // check if vals are objects
  // if so, copy that object (deep copy)
  // else return the value
  const keys = Object.keys(obj)

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[keys] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  return newObject
}

const o4 = deepCopy(o)

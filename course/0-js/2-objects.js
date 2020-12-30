const o = new Object()
o.firstName = 'Josue'
o.lastName = 'Montecinos'
o.isTeaching = true
o.greet = function(){
  console.log('hi')
}

const o2 = {}
o.firstName = 'Josue'
o['lastName'] = 'Montecinos'
const key = 'isTeaching'
o[key] = true
o['greet'] = function(){
  console.log('hi')
}

const o3 = {
  o.firstName: 'Josue',
  o.lastName: 'Montecinos',
  o.key: 'isTeaching',
  o.key: true,
  o.greet: function(){
    console.log('hi')
  },
  addres: {
    stree: 'Main ST.',
    number: 123,
  }
}

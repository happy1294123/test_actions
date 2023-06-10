const sum = require('../fns/sum')
const muti = require('../fns/muti')

test('sum函數, 3 + 4 = 7', () => {
  expect(sum(3, 4)).toBe(7)
})

test('muti函數, 4 * 5 = 20', () => {
  expect(muti(4, 5)).toBe(20)
})

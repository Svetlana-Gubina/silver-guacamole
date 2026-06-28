import reverse from '../src/index.js'
import { fileURLToPath } from 'url'
// import { dirname } from 'path'
import path from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)

test('reverse hello', () => {
  expect(reverse('hello')).toEqual('olleh')
  expect(reverse('')).toEqual('')
})

test('reverse text 1', () => {
  const text = fs.readFileSync(getFixturePath('text1.text'), 'utf-8')
  const result = fs.readFileSync(getFixturePath('output1.text'), 'utf-8')

  expect(reverse(text)).toEqual(result)
})

test('reverse text 2', () => {
  const text = fs.readFileSync(getFixturePath('text2.text'), 'utf-8')
  const result = fs.readFileSync(getFixturePath('output2.text'), 'utf-8')

  expect(reverse(text)).toEqual(result)
})

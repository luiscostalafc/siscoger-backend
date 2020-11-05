import { PrettyLogger } from './pretty-log'

describe('Test PrettyLogger Log', () => {
  test('Test PrettyLogger log', () => {
    const val = new PrettyLogger().log('test log')
    expect(val).toBe(true)
  })

  test('Test PrettyLogger error withouth var', () => {
    const val = new PrettyLogger().error('test error')
    expect(val).toBe(true)
  })

  test('Test PrettyLogger error with var', () => {
    const val = new PrettyLogger().error('test error', 'hello word')
    expect(val).toBe(true)
  })

  test('Test PrettyLogger warn', () => {
    const val = new PrettyLogger().warn('test warn')
    expect(val).toBe(true)
  })

  test('Test PrettyLogger debug', () => {
    const val = new PrettyLogger().debug('test debug')
    expect(val).toBe(true)
  })

  test('Test PrettyLogger verbose', () => {
    const val = new PrettyLogger().verbose('test verbose')
    expect(val).toBe(undefined)
  })

})

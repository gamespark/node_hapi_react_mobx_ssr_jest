import expect from 'expect'
import { getUserProfileImg, formatNumber } from './utils'

test('test utils getUserProfileImg', () => {
    expect(getUserProfileImg()).toBe('/default.jpg')
    expect(getUserProfileImg('aaa.png')).toBe('/aaa.png')
    expect(getUserProfileImg('bbb')).toBe('/bbb')
})

test('test utils formatNumber', () => {
    expect(formatNumber()).toBe('0')
    expect(formatNumber('123')).toBe('123')
    expect(formatNumber('123a')).toBe('0')
    expect(formatNumber('12345')).toBe('12.3k')
})

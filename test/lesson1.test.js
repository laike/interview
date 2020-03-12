import { reverseStr, reverseStr1, reverseStr2, canPlaceFlowers } from '../src/code/lesson1'

test(`add "Let's take LeetCode contest" to "s'teL ekat edoCteeL tsetnoc"`, () => {
    expect(reverseStr1("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})

test(`demo`, () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
})
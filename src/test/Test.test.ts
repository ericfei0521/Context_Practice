import { numberSwitcher } from '../reducer/reducer'
import { render } from '@testing-library/react'
describe('App DOM , GlobalState , Function test', () => {
    test('select number 1 should return 1 ', () => {
        const initialNumber: { [index: string]: number } = {
            "0": 0,
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9
        }
        const result = numberSwitcher(initialNumber, { type: 'SELECT_NUMBER' })
        expect(result[0]).toBe(1)
    }),

})
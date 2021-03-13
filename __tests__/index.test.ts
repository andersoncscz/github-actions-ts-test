import { PORT } from "@constants/"

describe('\n\n\n-----------------------       >>>>   JEST   <<<<           -----------------------', () => {
    test('Just a simple test 1', () => {
        expect(1 + 1).toStrictEqual(2)
    })

    test('Just a simple test 2', () => {
        // Testing tsconfig-paths running in Github actions
        expect(PORT).toStrictEqual(3000)
    })
})
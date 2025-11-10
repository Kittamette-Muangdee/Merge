import { merge } from "../src/Merge";

describe("merge", () => {
    test("case: all collections are normal", () => {
        const col1 = [10, 20, 30, 40, 50];
        const col2 = [15, 25, 35, 45, 55];
        const col3 = [67, 57, 47, 37, 27];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([10, 15, 20, 25, 27, 30, 35, 37, 40, 45, 47, 50, 55, 57, 67]);
    })

    test("case: one collection is a empty collection", () => {
        const col1: number[] = [];
        const col2 = [15, 25, 35, 45, 55];
        const col3 = [67, 57, 47, 37, 27];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([15, 25, 27, 35, 37, 45, 47, 55, 57, 67]);
    })
    test("case: more then one collection are empty collections", () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3 = [67, 57, 47, 37, 27];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([27, 37, 47, 57, 67]);
    })

    test("case: all collections are empty collections", () => {
        const col1: number[] = [];
        const col2: number[] = [];
        const col3: number[] = [];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([]);
    })

    test("case: negative number are included in collections", () => {
        const col1: number[] = [-10, 20, 30, 60, 70];
        const col2: number[] = [-6, -5, 15, 25, 35];
        const col3: number[] = [-50, -15, -12, -11, -8];
        const result = merge(col1, col2, col3);
        expect(result).toEqual([-50, -15, -12, -11, -10, -8, -6, -5, 15, 20, 25, 30, 35, 60, 70]);
    })
})
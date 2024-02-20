import {convertPoundToKilogram} from "../src/libs/converter";

describe('Test Converter', () => {
    test("Convert 0 pound to kilogram", () => {
        const valueInKg = convertPoundToKilogram(0);

        expect(valueInKg).toEqual(0);
    });

    test("Convert 10 pounds to kilogram", () => {
        const valueInKg = convertPoundToKilogram(10);

        expect(valueInKg).toEqual(4.5);
    })

    test("Convert 150 pounds to kilogram", () => {
        const valueInKg = convertPoundToKilogram(150);

        expect(valueInKg).toEqual(67.5);
    });

    test("Convert -75 pounds to kilogram", () => {
        expect(() => convertPoundToKilogram(-75)).toThrow();
    })
});
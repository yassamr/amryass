export const convertPoundToKilogram = (value: number): number => {
    if (value < 0) {
        throw new Error("The value must be greater than 0");
    }

    if (value === 0) {
        return value;
    }

    const halfValue = value / 2;

    return halfValue - halfValue / 10;
};
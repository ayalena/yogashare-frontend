import calculateProgress from "../Helper/CalculateProgress";

test("should calculate the progress of the event", () => {
    //arrange
    const values = {
        loaded : 2752512,
        total : 12147913,
    }
    //act
    const result = calculateProgress(values);
    //assert
    expect(result).toEqual();
})
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
    expect(result).toEqual(Math.round((100 * 2752512) / 12147913));
})

//note: deze testcode is geschreven voor een stukje code in videofileupload.js dat na revision obsolete is geworden (oeps).
//omdat ik al niet zoveel had om helper tests voor te schrijven heb ik deze daarom toch laten staan :)
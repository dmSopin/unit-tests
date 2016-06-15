define(['arrHelper'], function (arrHelper) {

    describe("arrHelper", function () {
        var arr = [1, 2, 4, 5];

        describe("getMax", function () {
            it("should get max element in array", function () {
                expect(arrHelper.getMax(arr)).toEqual(5);
            });

            it("should throw exception when array is empty", function () {
                expect(function () {
                    arrHelper.getMax([]);
                }).toThrow(new Error("Incorrect array"));
            });

            it("should throw exception when argument is not array", function () {
                expect(function () {
                    arrHelper.getMax({});
                }).toThrow(new Error("Incorrect array"));
            });
        });

        describe("getMin", function () {
            it("should get min element in array", function () {
                expect(arrHelper.getMin(arr)).toEqual(1);
            });

            it("should throw exception when array is empty", function () {
                expect(function () {
                    arrHelper.getMin([]);
                }).toThrow(new Error("Incorrect array"));
            });

            it("should throw exception when argument is not array", function () {
                expect(function () {
                    arrHelper.getMin({});
                }).toThrow(new Error("Incorrect array"));
            });
        });

        describe("getLength", function () {
            it("should get length of array", function () {
                expect(arrHelper.getLength(arr)).toEqual(4);
            });

            it("should return zero when array is empty", function () {
                expect(arrHelper.getLength([])).toEqual(0);
            });

            it("should throw exception when argument is not array", function () {
                expect(function () {
                    arrHelper.getLength({});
                }).toThrow(new Error("Incorrect array"));
            });
        });

        describe("getAvg", function () {
            it("should get average element in array", function () {
                expect(arrHelper.getAvg(arr)).toEqual(3);
            });

            it("should throw exception when array is empty", function () {
                expect(function () {
                    arrHelper.getAvg([]);
                }).toThrow(new Error("Incorrect array"));
            });

            it("should throw exception when argument is not array", function () {
                expect(function () {
                    arrHelper.getAvg({});
                }).toThrow(new Error("Incorrect array"));
            });
        });

    });
});

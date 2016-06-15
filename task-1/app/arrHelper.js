define([], function () {
    'use strict';

    return {
        getMax: function (arr) {
            if (Array.isArray(arr) && arr.length) {
                var maxElem = arr[0];

                for (var i = 0, length = arr.length; i < length; i++) {
                    if (arr[i] > maxElem) {
                        maxElem = arr[i];
                    }
                }
                return maxElem;
            }
            throw new Error("Incorrect array");
        },
        getMin: function (arr) {
            if (Array.isArray(arr) && arr.length) {
                var minElem = arr[0];

                for (var i = 0, length = arr.length; i < length; i++) {
                    if (arr[i] < minElem) {
                        minElem = arr[i];
                    }
                }
                return minElem;
            }
            throw new Error("Incorrect array");
        },
        getLength: function (arr) {
            if (Array.isArray(arr)) {
                return arr.length;
            }

            throw new Error("Incorrect array");
        },
        getAvg: function (arr) {
            if (Array.isArray(arr) && arr.length) {
                var sum = 0;

                for (var i = 0, length = arr.length; i < length; i++) {
                    sum += arr[i];
                }
                return sum / length;
            }
            throw new Error("Incorrect array");
        }
    };
});
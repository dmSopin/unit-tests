define([], function () {
    'use strict';

    function _trimString(str) {
        return str.replace(/\s+/g, ' ').trim().replace(/\s*,\s*/g, ',');
    }

    function parse(str) {
        var result = {};

        var arr = _trimString(str).split(' ');

        if (arr[0] === 'SELECT') {
            result.operation = arr[0];

            if (arr[2] === 'FROM' && arr[3]) {
                result.fields = arr[1].split(',');
                result.tables = arr[3].split(',');
            } else {
                result = false;
            }

        } else {
            result = false;
        }
        return result;
    }

    return {
        parse: parse
    };
});
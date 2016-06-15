define(['parserSQL'], function (parserSQL) {
    describe('parserSQL', function () {
        var correctResponse = {};

        it('should return correct response for 1 field', function () {
            correctResponse = {
                operation: 'SELECT',
                fields: ['id'],
                tables: ['table']
            };

            expect(parserSQL.parse('SELECT id FROM table')).toEqual(correctResponse);
        });

        it('should return correct response for many fields', function () {
            correctResponse = {
                operation: 'SELECT',
                fields: ['id', 'name'],
                tables: ['table']
            };

            expect(parserSQL.parse('SELECT id,name FROM table')).toEqual(correctResponse);
        });

        it('should return correct response for many tables', function () {
            correctResponse = {
                operation: 'SELECT',
                fields: ['id', 'name'],
                tables: ['table1', 'table2']
            };

            expect(parserSQL.parse('SELECT id,name FROM table1, table2')).toEqual(correctResponse);
        });

        it('should return correct response when there is extra spaces in query', function () {
            correctResponse = {
                operation: 'SELECT',
                fields: ['id', 'name'],
                tables: ['table1', 'table2']
            };

            expect(parserSQL.parse('   SELECT     id,   name    FROM     table1,     table2')).toEqual(correctResponse);
        });

        it('should return false when no SELECT keyword', function () {
            expect(parserSQL.parse('id FROM table')).toEqual(false);
        });

        it('should return false when no FROM keyword', function () {
            expect(parserSQL.parse('SELECT id,name table')).toEqual(false);
        });

        it('should return false when no fields in query', function () {
            expect(parserSQL.parse('SELECT FROM table')).toEqual(false);
        });

        it('should return false when no tables in query', function () {
            expect(parserSQL.parse('SELECT id FROM')).toEqual(false);
        });

        it('should return false when there is extra coma in fields', function () {
            expect(parserSQL.parse('SELECT id,name, FROM table1, table2')).toEqual(false);
        });

        it('should return false when no coma in fields', function () {
            expect(parserSQL.parse('SELECT id name FROM table')).toEqual(false);
        });
    });
});
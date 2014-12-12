function getTableHeaderJson(requestTable) {
    var result = new Object();
    var tableHeader = [];

    for (var dynamicName in requestTable) {
        tableHeader.push({ "element": dynamicName });
    }

    return tableHeader;
}


function getTableContentJson(requestTable) {
    var result = new Object();
    var tableRows = [];
    var jsonLength = requestTable.length;

    for (var i = 0; i < jsonLength; i++) {

        var jsonRow = requestTable[i];
        var tableValues = [];

        for (var dynamicValue in jsonRow) {
            tableValues.push({ "value": jsonRow[dynamicValue] });
        }

        tableRows.push({ "row": tableValues });
    }

    return tableRows;
}

exports.getCommonJson = function (jsonData)
{
    var requestTable = jsonData.table;

    var tableHeaderJson = getTableHeaderJson(requestTable[0]);

    var tableContentJson = getTableContentJson(requestTable);

    var result = new Object();
    result.tableHeader = tableHeaderJson;
    result.tableContent = tableContentJson;
    result.to = jsonData.to;
    result.from = jsonData.from;
    result.subject = jsonData.subject;

    return result;
}

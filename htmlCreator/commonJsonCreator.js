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

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + ' - ' + mm + ' - ' + yyyy;

    return today;
}

exports.getCommonJson = function (jsonData)
{
    var requestTable = jsonData.table;

    var tableHeaderJson = getTableHeaderJson(requestTable[0]);

    var tableContentJson = getTableContentJson(requestTable);
    var today = getCurrentDate();

    var result = new Object();
    result.tableHeader = tableHeaderJson;
    result.tableContent = tableContentJson;
    result.to = jsonData.to;
    result.from = jsonData.from;
    result.subject = jsonData.subject + today;

    return result;
}

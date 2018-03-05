module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.tableBinding = [];

    for (var i = 1; i < 10; i++) {
        context.bindings.tableBinding.push({
            PartitionKey: "Test",
            RowKey: i.toString(),
            Name: "Name_" + i
        });
    }

    context.done();
};
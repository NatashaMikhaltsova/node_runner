fixture('TestI')

.page('https://www.google.com')

test('TestI.1', async t => {
    console.log("TestI.1");
});

test('TestI.2', async t => {
    console.log("TestI.2");
});
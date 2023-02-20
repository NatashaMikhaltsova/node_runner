fixture('TestG')

.page('https://www.google.com')

test('TestG.1', async t => {
    console.log("TestG.1");
});

test('TestG.2', async t => {
    console.log("TestG.2");
});
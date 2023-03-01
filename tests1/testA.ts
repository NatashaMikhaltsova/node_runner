fixture('Test.A')

.page('https://www.google.com')

test('TestA.1', async t => {
    // @ts-ignore
    console.log(await t.testRun.test.name);
});

test('TestA.2', async t => {
    console.log("TestA.2");
    console.log("TestA.2");
});

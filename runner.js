// TESTING TESTCAFE API //

// const createTestCafe = require("testcafe");

// let testcafe = null;

// createTestCafe()
//   .then((tc) => {
//     testcafe = tc;
//     const runner = testcafe.createRunner();
    
//     return runner
//       .src(["tests1/"])
//       .browsers("chrome")
//       .run();
//   })

//   .then((failed) => {

//     testcafe.close();
    
//     if (failed > 0) {
//       throw new Error(`TestCafe test failed: ${failed}`);
//     }
//   })
//   .catch((error) => {
//     testcafe.close();
//     console.log(error)
//   })





// TESTING MULTIPLE RUNNERS //

const createTestCafe = require('testcafe');

(async () => {
    const testCafe = await createTestCafe();

    const runner1 = testCafe
        .createRunner()
        .src('tests1/')
        .concurrency(4)
        //.reporter([{ name: 'spec', output: 'report1.txt' }])
        .browsers('chrome');

    const runner2 = testCafe
        .createRunner()
        .src('tests2/')
        //.reporter([{ name: 'spec', output: 'report2.txt' }])
        .browsers('chrome');

    await Promise.all([runner1, runner2].map(runner => runner.run()));

    await testCafe.close();
})();
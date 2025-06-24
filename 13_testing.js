// TESTING

// Easiest way to test code: Open the website and check if everything is working currently.
// Use features pertaining to particular blocks of code in the website and then reflect back on that piece of code if you view abnormal behaviour
// This kind of testing is called MANUAL TESTING
// DISADVANTAGES OF MANUAL TESTING:
// 1. It is not very easy to test every aspect of your code and every situation
// 2. It is hard to re-test code

// AUTOMATED TESTING
// In automated testing, we use code to test code
// Here, it is easier to test every aspect of your code
// It is also easier to re test code: we can just re-run the code we use to test
// Examples can be viewed in the tests folder

// The situation that you are testing for in an automated test is called a TEST CASE
// There are usually two kinds of TEST CASES
// 1. BASIC TEST CASES: These are used to just ensure that the code works
// 2. EDGE CASES: These tests will test the code for values that are tricky and not exactly straightforward
// You need a combination of both these kinds of test cases in order to completely test your code

// It also makes sense to name each test we run so that we can see which test passed or failed
// We can simply use the console.log() method and print names out corresponding to the feature the code tests

// We can also group related tests together
// A TEST SUITE refers to a group of related tests
// It also makes sense to name a TEST SUITE so we know what it is testing for

// TESTING FRAMEWORK
// A Testing Framework is an external library that helps us write tests easier
// For now, we will use the popularr testing framework, Jasmine
// In Jasmine, spec means test

// TEST COVERAGE - how much of the code is being tested
// We aim to have as much test coverage as possible
// This is why for example when testing an if statemnet, we test for all possible outcomes of it (i.e the else if cases and else cases)

// FLAKY TEST- A test that sometimes passes and sometimes fails (even without changing the code)

// MOCKS - A mock allows us to replace a method with a fake version. We can make thiss fake version do anything we want
// Jasmine provides us with the ability to use this feature
// We use the spyOn functtion to do this: view the tests in cartTest.js in order to see how this is done
// Note that a mock is valid only for one test, upon which we will have to create new mocks for further tests
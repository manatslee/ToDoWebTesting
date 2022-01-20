// JavaScript source code
// spec.js
//describe = test suite, it = test case, 1 test suite composed of several test cases.
describe('Functional Test of Web App Angular Todo App', function () {//อธิบาย test suit
    it('Test Title of Main Page of Web Angular Todo App', function () {//source code for test
        browser.get('http://cburgdorf.github.io/angular-todo-app/#/main');//คำสั่งของprotractor
        expect(browser.getTitle()).toEqual('Angular Todo App');
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('Flow of Test_adding_and_complete_todo_list', function () {
  
        browser.get("http://cburgdorf.github.io/angular-todo-app/#/main");

        let adding = element(by.id('new-todo')).sendKeys('do cs262 homework');
        adding.sendKeys(protractor.Key.ENTER)
        /*waiting for adding list*/
        
        let EC = browser.ExpectedConditions;
        let addtodo = element(by.id('todos'));

        browser.wait(EC.presenceOf(addtodo), 30000, 'Too long for adding process');
        addtodo.getText().then(function (text) {
            console.log('Adding todo Finish');
        expect(addtodo.getText()).toEqual('do cs262 homework');
        });
        /*Adding todo list finish*/
    
        /*Check todos when finish your work*/
        element(by.css('input[class="check"]')).click().then(function (text) {
            console.log('Complete todos is done');
        });
      
           
    });
    
  
});

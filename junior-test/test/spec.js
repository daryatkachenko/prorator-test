describe('junior-test', function() {
  var EC = protractor.ExpectedConditions;
  var title = element.all(by.css('input[name="newNoteTitle"]')).first();
  var noteText = element.all(by.css('input[name="newNoteTitle"]')).last();
  var submitBtn = element(by.css('.btn-light'));

  var expectedFieldTitleLast = element.all(by.css('.col-xs-12.title')).last();
  var expectedFieldValueLast = element.all(by.css('.col-xs-12.value')).last();



    beforeEach(function() {
    browser.get('http://localhost:3000/');
    browser.waitForAngular();
});

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Angular2JuniorTest');
  });

  it('adding new note', function(){
    title.sendKeys('Dasha');
    noteText.sendKeys('my test note');
    submitBtn.click();
    browser.wait(EC.visibilityOf($('.col-xs-12.title')), 5000);
    expect(expectedFieldTitleLast.getText()).toBe('Dasha');
    expect(expectedFieldValueLast.getText()).toBe('my test note');
  });

  it('try adding an empty note', function(){
    title.sendKeys('');
    noteText.sendKeys('');
    submitBtn.click();
    expect(expectedFieldTitleLast.getText()).toBe('test_title');
    expect(expectedFieldValueLast.getText()).toBe('test_value3');
  });

  it('can check one default note', function () {
       browser.actions().mouseMove(element(by.css('note-card'))).perform();
            expect(element(by.css('div.icon')).isDisplayed()).toBeTruthy();
            element(by.css('div.icon')).click();
      browser.wait(EC.visibilityOf($('.col-xs-12.value')), 5000);
            var firstNote = element.all(by.css('.col-xs-12.value')).first();
          expect(firstNote.getText()).toBe('test_value2');

  });


});

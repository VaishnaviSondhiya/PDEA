const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
    const driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('hhtp://www.lambdatest.com/selenium-playground');

        const simpleFormLink = await driver.findElement(By.linkText('Simple Form Demo'));
        const currentURL = await driver.getCurrentUrl();
        if (currentURL.includes('simple-form-demo')){
            console.log('URL validation passed.');
        }else{
            console.log('URL validation failed.');
        }

    const message = 'Welcome to Lamda Test';
    const messageTextBox = await driver.findElement(By.xpath('//input[@id="user-message"]'));
    await messageTextBox.sendKeys(message, Key.RETURN);
    const getCheckedValueButton = await driver.findElement(By.xpath('//button[text()="Get Checked Value"]'));
    await getCheckedValueButton.click();

    const displayedMessage = await driver.findElement(By.id('display')).getText();
    if (displayedMessage == message){
        console.log('Message validation passed.');
    }else {
        console.log('Message validation failed.');
    }
}finally {
    await driver.quit();
}
}
runTest();
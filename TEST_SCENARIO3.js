const { Builder, By, Key, until, Actions } = require('selenium-webdriver');

async function runTestScenario() {
    const driver = await new Builder().forBrowser('chrome').build();

    try{
        await driver.get('hhtp://www.lambdatest.com/selenium-playground');
        await driver.wait(until.elementLocated(By.linkText('Input From Submit')), 5000);
        
        await driver.findElement(By.linkText('Input From Submit')).click();
        await driver.findElement(By.name('name')).sendKeys('john Doe');
        const countryDropdown = await driver.findElement(By.name('country'));
        await countryDropdown.click();
        const unitedStatesOption = await countryDropdown.findElement(By.xpath("//option[text()='United States']"));
        await unitedStatesOption.click();

        await driver.findElement(By.linkText('submit'));
        await driver.wait(until.elementLocated(By.id('thanks')), 5000);
        const successMessage = await driver.findElement(By.id('thanks')).getText();
        console.log('Success message:', successMessage);
    }finally{
        await driver.quit();
    }
}

runTestScenario();
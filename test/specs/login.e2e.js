import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('magnus181098@gmail.com', 'dilolilo')
        expect ((await profilePage.profileName('magnus gabriel')).isDisplayed()).toBeTruthy()
        await driver.pause(10000)
    })
})


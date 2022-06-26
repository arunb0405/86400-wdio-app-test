export default class TabBar {
    static async waitForNumericPadShown ():Promise<boolean|void> {
        return $('~clear').waitForDisplayed({
            timeout: 10000,
        });
    }

    static async clickNum8 () {
        await $('id=com.google.android.calculator:id/digit_8').click();
    }

    static async clickPlus () {
        await $('~plus').click();
    }

    static async clickMultiply () {
        await $('~multiply').click();
    }

    static async clickNum3 () {
        await $('id=com.google.android.calculator:id/digit_3').click();
    }

    static async clickEqual () {
        await $('~equals').click();
    }

    static async getResult () {
        let selector = await $('id=result_final'); //ID works
        // let selector = await $('android.widget.TextView'); Class name works
        // let selector = await $('//*[contains(@resource-id,"result_final")]'); // Xpath works
        return await selector.getText();
    }

    static async clearScreen () {
        await $('~clear').click();    
    }
}

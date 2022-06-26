import CalculatorScreen from '../screenobjects/CalculatorScreen';

describe('WebdriverIO and Appium, when interacting with Calculator,', () => {
    beforeEach(async () => {
        await CalculatorScreen.waitForNumericPadShown();
    });

    it('Should test Addition of numbers and Verify result successfully', async () => {
        await CalculatorScreen.clickNum3();
        await CalculatorScreen.clickPlus();
        await CalculatorScreen.clickNum8();
        await CalculatorScreen.clickEqual();
        const txt = await CalculatorScreen.getResult();
        console.log(`Addition Result is -${txt}`);
        expect(parseInt(txt)).toBe(11);
        await CalculatorScreen.clearScreen();
    });

    it('Should test Multiplication of numbers and Verify result successfully', async () => {
        await CalculatorScreen.clickNum3();
        await CalculatorScreen.clickMultiply();
        await CalculatorScreen.clickNum8();
        await CalculatorScreen.clickEqual();
        const txt = await CalculatorScreen.getResult();
        console.log(`Addition Result is -${txt}`);
        expect(parseInt(txt)).toBe(24);
        await CalculatorScreen.clearScreen();
    });
});

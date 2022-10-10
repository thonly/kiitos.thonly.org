import puppeteer from 'puppeteer';
import { DEVICE_ACCESS_CODE, ROUTER_ADDRESS } from '../private/router.mjs';

export default async () => {
    await resetRouter();
    console.info("Finished resetting router!");
    await rescanForDevices();
    console.info("Finished rescaning for devices!");
    await restartBroadband();
    console.info("Finished restarting broadband!");
    return 'success';
};

export async function resetRouter() {
    //TODO:
    return 'success';
}

export async function rescanForDevices() {
    const browser = await puppeteer.launch({ headless: false, devtools: false, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    const page = await browser.newPage();
    //await page.goto(`http://${ROUTER_ADDRESS}`);
    await page.goto(`http://${ROUTER_ADDRESS}/cgi-bin/devices.ha`);
    await page.click('input[name="Clear"]');
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.close();
    await browser.close();
    return 'success';
}

export async function restartBroadband() {
    const browser = await puppeteer.launch({ headless: false, devtools: false, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    const page = await browser.newPage();
    await page.goto(`http://${ROUTER_ADDRESS}`);

    try {
        await page.goto(`http://${ROUTER_ADDRESS}/cgi-bin/apphosting.ha`);
        await page.waitForSelector('#password', { timeout: 2000 });
        await page.type('#password', DEVICE_ACCESS_CODE);
        await page.click('input[name="Continue"]');
    } finally {
        await page.goto(`http://${ROUTER_ADDRESS}/cgi-bin/home.ha`);
        await page.click('input[name="Broadband"]');
        console.info("Waiting for router to restart...");
        // <div id="error-message-text">The Broadband Connection has been successfully restarted.</div>
        await page.waitForSelector('#error-message-text', { timeout: 60000 });
        await page.close();
        await browser.close();
    }

    return 'success';
}
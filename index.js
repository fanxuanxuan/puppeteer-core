const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');

(async () => {
  const executablePath = await chromium.executablePath();
  console.log('Executable Path:', executablePath);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox'],
  });
  console.log('Browser launched successfully');
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  console.log('页面标题:', await page.title());
  await browser.close();
})();
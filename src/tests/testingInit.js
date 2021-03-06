export const isDebugging = () => {
    let debugging_mode = {
        puppeteer: {
            headless: false,
            slowMo: 80,
            args: [`--window-size=1920,1080`]
        },
        jasmine: 16000
    };
    return process.env.NODE_ENV === "debug" ? debugging_mode : false;
};
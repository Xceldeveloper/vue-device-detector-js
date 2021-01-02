import DeviceDetector from "device-detector-js";
import BotDetector from "device-detector-js/dist/parsers/bot";


const deviceDetector = new DeviceDetector();
const detector = deviceDetector.parse(window.navigator.userAgent);
const botDetector = new BotDetector();
const bot = botDetector.parse(window.navigator.userAgent);

function devices() {

    return {

        isMobile: detector.device.type == "smartphone",
        isTablet: detector.device.type == "tablet",
        isDesktop: detector.device.type == "desktop",

        model: detector.device.model,
        brand: detector.device.brand,
        type: detector.device.type,
        os_name: detector.os,
        os_platform: detector.os.platform,
        os_version: detector.os.version,
        browser_name: detector.client.name,
        browser_version: detector.client.version,
        browser_engine: detector.client.engine,
        browser_engine_version: detector.client.engineVersion,

        browser: {
            chrome: detector.client.name == "Chrome",
            chrome_view: detector.client.name == "Chrome Webview",
            chrome_mobile: detector.client.name == "Chrome Mobile",
            chrome_mobile_ios: detector.client.name == "Chrome Mobile iOS",
            safari: detector.client.name == "Safari",
            safari_mobile: detector.client.name == "Mobile Safari",
            msedge: detector.client.name == "Microsoft Edge",
            msie_mobile: detector.client.name == "IE Mobile",
            msie: detector.client.name == "Internet Explorer"
        },

        os: {
            android: detector.os.name == "Android",
            blackberry: detector.os.name == "BlackBerry OS",
            ios: detector.os.name == "iOS",
            windows: detector.os.name == "Windows",
            windows_phone: detector.os.name == "Windows Phone",
            mac: detector.os.name == "Mac",
            linux: detector.os.name == "GNU/Linux" || detector.os.name == "GNU\/Linux",
            chrome: detector.os.name == "Chrome OS",
            firefox: detector.os.name == "Firefox OS",
            gamingConsole: detector.os.name == "Gaming Console"
        },

        isAndroid: detector.os.name == "Android",
        isBlackberry: detector.os.name == "BlackBerry OS",
        isIOS: detector.os.name == "iOS",
        isWindows: detector.os.name == "Windows",
        isWindowsPhone: detector.os.name == "Windows Phone",
        isOsx: detector.os.name == "Mac",
        isLinux: detector.os.name == "GNU/Linux" || detector.os.name == "GNU\/Linux",
        isChromeOs: detector.os.name == "Chrome OS",
        isFireFoxOS: detector.os.name == "Firefox OS",
        GamingConsole: detector.os.name == "Gaming Console",
        isBot: bot,



        machine: {
            brand: detector.device.brand,
            model: detector.device.model,
            os_name: detector.os.name,
            os_version: detector.os.version,
            type: detector.device.type,
        },
        bot: bot,
        client: detector.client,
        device: detector.device
    }


}

const device = {
    install(Vue, options) {
        Vue.prototype.$device = devices()
    }
}


export default device
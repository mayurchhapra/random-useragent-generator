// Import necessary constants from the helper module
import {
  androidWebkitVersions,
  chromeWebkitVersions,
  device,
  os,
  safariWebkitVersions,
  tridentVersions
} from './constant';


// Define a type for the browser, allowing 'android' as an option
type Browser = 'chrome' | 'firefox' | 'safari' | 'ie' | 'edge' | 'android' | string;

/**
 * Function to get a random version from a given set of versions.
 * @param versions - Object containing version information.
 * @returns A randomly selected version from the provided set.
 */
function getRandomVersion(versions: Record<string, string>): string {
  const availableVersions = Object.keys(versions);
  const randomIndex = Math.floor(Math.random() * availableVersions.length);
  return versions[availableVersions[randomIndex]];
}

/**
 * Generate a random user agent based on the specified browser or a random browser.
 * @param browser - Optional parameter to specify the browser for which to generate a user agent.
 * ```ts
 * =============================================================
 * Note:
 *      possible values for browser:
 *      'chrome' | 'firefox' | 'safari' | 'ie' | 'edge' | 'android'
 *     If no browser is specified, a 'random' browser will be chosen.
 * =============================================================
 * ```
 * @returns A randomly generated user agent string.
 */
export function generateUserAgent(browser?: Browser): string {
  const randomDevice          = getRandomVersion(device),
        randomOS              = getRandomVersion(os),
        randomChromeVersion   = getRandomVersion(chromeWebkitVersions),
        randomSafariVersion   = getRandomVersion(safariWebkitVersions),
        randomAndroidVersion  = getRandomVersion(androidWebkitVersions),
        randomTridentVersion  = getRandomVersion(tridentVersions);

  // Choose a random browser if not specified
  const browsers = ['chrome', 'firefox', 'safari', 'ie', 'edge'];
  const randomBrowser = browser || browsers[Math.floor(Math.random() * browsers.length)];

  switch (randomBrowser) {
    case 'chrome':
      return generateChrome(randomChromeVersion, randomOS, randomDevice);
    case 'firefox':
      return generateFirefox(randomChromeVersion, randomOS, randomDevice);
    case 'safari':
      return generateSafari(randomSafariVersion, randomOS, randomDevice);
    case 'ie':
      return generateIE(randomTridentVersion, randomOS, randomDevice);
    case 'edge':
      return generateEdge(randomChromeVersion, randomOS, randomDevice);
    case 'android':
      return generateAndroid(randomAndroidVersion, randomDevice, randomAndroidVersion);
    default:
      return generateDefault();
  }
}

/**
 * Generate a Chrome user agent based on the specified version, OS, and device.
 * @param version - Chrome version.
 * @param os - Operating System.
 * @param device - Device information.
 * @returns Chrome user agent string.
 */
function generateChrome(version: string, os: string, device: string): string {
  return `Mozilla/5.0 (${os}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36`;
}

/**
 * Generate a Firefox user agent based on the specified version, OS, and device.
 * @param version - Firefox version.
 * @param os - Operating System.
 * @param device - Device information.
 * @returns Firefox user agent string.
 */
function generateFirefox(version: string, os: string, device: string): string {
  return `Mozilla/5.0 (${os}; rv:${version}) Gecko/20100101 Firefox/${version}`;
}

/**
 * Generate a Safari user agent based on the specified version, OS, and device.
 * @param version - Safari version.
 * @param os - Operating System.
 * @param device - Device information.
 * @returns Safari user agent string.
 */
function generateSafari(version: string, os: string, device: string): string {
  return `Mozilla/5.0 (${os}) AppleWebKit/${version} (KHTML, like Gecko) Version/${version} Safari/${version}`;
}

/**
 * Generate an Android user agent based on the specified version, device, and build version.
 * @param version - Android version.
 * @param device - Device information.
 * @param buildVersion - Build version.
 * @returns Android user agent string.
 */
function generateAndroid(version: string, device: string, buildVersion: string): string {
  return `Mozilla/5.0 (Linux; Android ${version}; ${device} Build/${buildVersion};) AppleWebKit/${version} (KHTML, like Gecko) Version/4.0 Chrome/${version} Mobile Safari/${version}`;
}

/**
 * Generate an Internet Explorer user agent based on the specified version, OS, and device.
 * @param version - IE version.
 * @param os - Operating System.
 * @param device - Device information.
 * @returns IE user agent string.
 */
function generateIE(version: string, os: string, device: string): string {
  return `Mozilla/5.0 (compatible; MSIE ${version}; ${os}; Trident/7.0)`;
}

/**
 * Generate an Edge user agent based on the specified version, OS, and device.
 * @param version - Edge version.
 * @param os - Operating System.
 * @param device - Device information.
 * @returns Edge user agent string.
 */
function generateEdge(version: string, os: string, device: string): string {
  return `Mozilla/5.0 (${os};) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36 Edge/${version}`;
}

/**
 * Generate a default user agent string for unspecified browsers.
 * @returns Default user agent string.
 */
function generateDefault(): string {
  return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.99 Safari/537.36';
}

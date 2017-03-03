//const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')

require('nightwatch-cucumber')({
  cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
  "src_folders" : ["tests"],
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  page_objects_path: 'page_objects',
  selenium: {
    start_process: true,
    server_path: "selenium/selenium.jar",
    log_path: '',
    host: '127.0.0.1',
    port: 5555,
    "cli_args" : {
      "webdriver.chrome.driver" : "bin/chromedriver.exe",
      "webdriver.ie.driver" : "",
      "webdriver.gecko.driver" : "bin/geckodriver.exe",
      "webdriver.firefox.profile" : ""
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 5555,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': "C:/nightwatch-from-repo/nightwatch-from-repo/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe"
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': "bin/chromedriver.exe"
        }
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}

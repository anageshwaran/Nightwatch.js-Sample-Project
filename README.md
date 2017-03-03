In nightwatch.js file, please correct or update the path of the runner.js

require("C:/project/nightwatch/bin/runner.js");


In nightwatch json file, please correct or update the fields which are commented

{
  "src_folders" : ["tests"],   //Path of the tests folder
  
  "output_folder" : "reports", //Path of the reports folder
  
  "custom_commands_path" : "",
  
  "page_objects_path" : "pages",  //Path of the pages folder
  
  "custom_assertions_path" : "",
  
  "globals_path" : "",
  
  "live_output" : false,
  
  "parallel_process_delay" : 10,
  
  "disable_colors": false,
  
  "test_workers" : false,

  "selenium" : {
  
    "start_process" : true,     //To be set true if to start selenium server automatically on executing the tests
    
    "server_path" : "selenium/selenium.jar",   //Path of the selenium jar 
    
    "log_path" : "log",    
    
    "host" : "127.0.0.1",
    
    "port" : 5555,                        //Selenium server will not be started in default port 4444 since its already in use. In that case change the port to 5555 or to any unused
    
    "cli_args" : {
    
      "webdriver.chrome.driver" : "bin/chromedriver.exe",   //path of the chrome driver
      
      "webdriver.ie.driver" : "",
      
      "webdriver.gecko.driver" : "bin/geckodriver.exe", 
      
      "webdriver.firefox.profile" : ""
    }
    
  },

  "test_settings" : {
  
    "default" : {
    
      "launch_url" : "http://localhost",
      
      "selenium_host" : "127.0.0.1",
      
      "selenium_port" : 5555,                         // Update the selenium server port 
      
      "silent" : true,                                // should be true
      
      "disable_colors": false,
      
      "screenshots" : {
        
        "enabled" : false,
       
        "path" : ""
     
      },
      
      "desiredCapabilities" : {
        
        "browserName" : "chrome",                 // Change browser name as wish. but make sure the path of the driver is mentioned in the "Cli_args"
        
        "javascriptEnabled" : true,
       
        "acceptSslCerts" : true
      
      }
    
    },
   
    }
# vue-device-detector-js
vue wrapper for [device-detector-js](https://www.npmjs.com/package/device-detector-js)

## Installation
```javascript
npm i vue-device-detector-js
```


## Setup 

  **Vue** 

  ```javascript

  //add code  to main.js 
  import device from 'vue-device-detector-js'
  ...

  Vue.use(device)

  ...

  ```

  **Nuxt** 
        
  ```javascript
  
  //create device.js file in /plugins dir then add code below 
  import Vue from 'vue'
  import device from 'vue-device-detector-js'
  Vue.use(device)
  
  //add code  to nuxt.config.js 
  ...
  
   plugins: [
    {src:'~/plugins/device'} //this line
  ],
  
  ...
  
  ```
           
## Example

```html

<template>
  <div>


    <div v-if="$device.isDesktop">Desktop</div>
    <div v-else-if="$device.isTablet">Tablet</div>
    <div v-else>Mobile</div>

    <div v-if="$device.os.android">Android</div>
    <div v-else-if="$device.isIOS">IOS</div>
    <div v-else-if="$device.os.windows">Windows</div>
     <div v-else-if="$device.os.windows_phone">Windows Mobile</div>
    <div v-else-if="$device.isOSx">MAc</div>

  <span v-if="$device.browser.chrome" >{{$device.browser_name}}</span>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$device.machine);
    if(this.$device.isAndroid){
      console.log("I am using an Android Device")
    }
  },
};
</script>

<style>
</style>

```

## Access Flags

 ```javascript
 
 //NOTE instance.$device   (this.$device)
 
  $device.isMobile //boolean
  $device.isTablet  //boolean
  $device.isDesktop  //boolean

  $device.model //string eg 'iphone'
  $device.brand //string eg 'Apple'
  $device.type //string eg 'smartphone'
  $device.os_name //string eg 'iOS'
  $device.os_platform //string
  $device.os_version //string
  $device.browser_name // string eg 'Chrome'
  $device.browser_version 
  $device.browser_engine //string eg 'webkit
  $device.browser_engine_version
  
  
  //boolean
  $device.isAndroid
  $device.isBlackberry
  $device.isIOS
  $device.isWindows
  $device.isWindowsPhone
  $device.isOsx
  $device.isLinux
  $device.isChromeOs
  $device.isFireFoxOS
  $device.GamingConsole
  $device.isBot
  
  
  //boolean
  $device.os.android
  $device.os.blackberry
  $device.os.ios
  $device.os.windows
  $device.os.windows_phone
  $device.os.mac
  $device.os.linux
  $device.os.chrome
  $device.os.firefox
  $device.os.gamingConsole
  
  
   
  $device.machine.brand //string
  $device.machine.model //string
  $device.machine.os_name 
  $device.machine.os_version
  $device.machine.type  // 'smartphone' || 'Tablet' || 'Desktop'
       
   
  //boolean
  $device.browser.chrome
  $device.browser.chrome_view
  $device.browser.chrome_mobile
  $device.browser.chrome_mobile_ios
  $device.browser.safari
  $device.browser.safari_mobile
  $device.browser.msedge
  $device.browser.msie_mobile
  $device.browser.msie


  $device.client //object
  $device.detector //object
  $device.bot //object
  $device.machine //object
        
//NOTE instance.$device   (this.$device)

```

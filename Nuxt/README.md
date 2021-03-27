## Lottie Interactive Testbeds

This repository is for testing [lottie-interactive](https://github.com/samuelOsborne/Lottie-interactive) on different 
web frameworks.

# How to use Lottie-interactive

##_Nuxt.js_

- ```npm -i lottie-interactive```
- Create a plugin for lottie-interactive in ```/plugins/lottie-interactive.client.js```:
```javascript
import Vue from 'vue'
import LottieInteractive from 'lottie-interactive'

Vue.use(LottieInteractive)
```
- You can then use lottie-interactive inside of your templates:
```html
<template>
    <lottie-interactive
      path="/animations/svgenius-logo.json"
      autoplay
      loop
      view-box="0 0 500 300"
    />
</template>
```

Remarks: Animation files (.json) can be accessed if put inside the ```/static``` directory. URLs to the animation
can also be used.

## Lottie Interactive Testbeds

This repository is for testing [lottie-interactive](https://github.com/samuelOsborne/Lottie-interactive) on different 
web frameworks.

# How to use Lottie-interactive

## _Nuxt.js_

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

## _Next.js_

- ```npm -i lottie-interactive```

- Then inside of your pages:
```Javascript
import React from "react";

export default function Home() {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });

  return (
    <div>
          <lottie-interactive
              path="/animations/svgenius-logo.json"
              autoplay
              loop
          />
    </div>
  );
}
```

Remarks: Animation files (.json) can be accessed if put inside the ```/public/``` directory. URLs to the animation
can also be used.

### Static website

With static websites, you can either link to the lottie-interactive script in the header of your HTML if you 
have the package downloaded locally:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hover example</title>
  <script type="module" src="../../dist/lottie-interactive.js"></script>
</head>

<body>
    <h1>
      Interaction: 'hover'
    </h1>
    <div style="text-align: center">
      <lottie-interactive path="../animations/right-arrow.json"
                          interaction="hover">
      </lottie-interactive>
    </div>
</body>
</html>

<style>
  h1 {
    text-align: center;
    font-family: 'Verdana', serif;
  }
</style>
```

Or you can use the CDN:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hover example</title>
</head>

<body>
    <h1>
      Interaction: 'hover'
    </h1>
    <div style="text-align: center">
      <lottie-interactive path="../animations/right-arrow.json"
                          interaction="hover">
      </lottie-interactive>
    </div>

<script type="text/javascript" src="https://unpkg.com/lottie-interactive@latest/dist/lottie-interactive.js"></script>
</body>
</html>

<style>
  h1 {
    text-align: center;
    font-family: 'Verdana', serif;
  }
</style>
```

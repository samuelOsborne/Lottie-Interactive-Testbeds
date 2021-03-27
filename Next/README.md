## Lottie Interactive Testbeds

This repository is for testing [lottie-interactive](https://github.com/samuelOsborne/Lottie-interactive) on different 
web frameworks.

# How to use Lottie-interactive

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

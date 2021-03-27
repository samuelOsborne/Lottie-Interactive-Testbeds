import React from "react";

export default function Home() {
  React.useEffect(() => {
    import("lottie-interactive/dist/lottie-interactive.js");
  });

  return (
    <div className="container mx-auto px-4 items-center ">
      <div className="container mx-auto flex">
        <div className="float-left text-5xl flex p-1.5 text-black">
          <h1>Lottie-Interactive Test Bed 🛌</h1>
        </div>
      </div>

      <div className="pt-3 text-2xl">
        <h2 className="underline">Interactions</h2>
      </div>

      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/instagram.json" interaction="click"/>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"click"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; interaction=&quot;click&quot;/&gt;
                </p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Play animation on click</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/instagram.json"
              interaction="freeze-click"
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"freeze-click"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; interaction=&quot;freeze-click&quot;/&gt;
                </p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Freezes animation when user clicks on animation container</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/instagram.json"
              interaction="hover"
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"hover"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; interaction=&quot;hover&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation when user hovers on animation container</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/affiliate-outline-morph.json"
              interaction="morph"
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"morph"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-green-400 to-blue-500">&lt;lottie-interactive path=&quot;/animations/affiliate-outline-morph.json&quot; interaction=&quot;morph&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation when user hovers on animation container, plays in reverse on 'mouseexit' event</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/affiliate-outline-morph.json"
              interaction="morph-lock"
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"morph-lock"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-green-400 to-blue-500">&lt;lottie-interactive path=&quot;/animations/affiliate-outline-morph.json&quot; interaction=&quot;morph-lock&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation when user hovers on animation container. Locks animation at the end if user clicks. Plays in reverse on 'mouseexit' event.</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/switch.json" interaction="switch" />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"switch"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-green-400 to-blue-500">&lt;lottie-interactive path=&quot;/animations/switch.json&quot; interaction=&quot;switch&quot; /&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation when user clicks on animation container, plays again in reverse on second click</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/instagram.json"
              interaction="play-on-show"
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"play-on-show"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; interaction=&quot;play-on-show&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation when container is visible</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
              path="/animations/instagram.json"
              interaction="play-once"
              autoplay
            />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Interaction name:</h1>
                <h1 className="ml-2 text-md mt-2">"play-once"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; interaction=&quot;play-once&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Plays animation once</p>
              </div>
            </footer>
          </article>
        </div>
      </div>

        <div className="pt-3 text-2xl">
          <h2 className="underline">Attributes</h2>
        </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/instagram.json" loop autoplay />
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"loop"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; loop autoplay /&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Makes the animation loop</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/affiliate-outline-morph.json" interaction="morph" s-width="10"/>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"s-width"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-green-400 to-blue-500">&lt;lottie-interactive path=&quot;/animations/affiliate-outline-morph.json&quot; interaction=&quot;morph&quot; s-width=&quot;10&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Changes the stroke width of every stroke</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/affiliate-outline-morph.json" interaction="morph" s-color="#8512e3"/>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"s-color"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-green-400 to-blue-500">&lt;lottie-interactive path=&quot;/animations/affiliate-outline-morph.json&quot; interaction=&quot;morph&quot; s-color=&quot;#8512e3&quot;/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Changes the stroke color of every stroke, must be a full hexadecimal color</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/instagram.json" autoplay/>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"autoplay"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/instagram.json&quot; autoplay/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Makes the animation play automatically on load</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive path="/animations/svgenius-logo.json" autoplay reset/>
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"reset"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">&lt;lottie-interactive path=&quot;/animations/svgenius-logo.json&quot; autoplay reset/&gt;</p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">Resets the animation to the first frame after it has finished playing</p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
                path="/animations/svgenius-logo.json"
                autoplay
                loop
                view-box="0 0 500 300"
                aspect-ratio="xMaxYMax slice"
            />
            <footer
                className="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"aspect-ratio"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p
                    className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                >
                  &lt;lottie-interactive
                  path=&quot;/animations/svgenius-logo.json&quot; autoplay loop
                  view-box="0 0 500 300" aspect-ratio="xMaxYMax slice"/&gt;
                </p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">
                  Define aspect ratio, default value is 'xMidYMid slice'
                </p>
              </div>
            </footer>
          </article>
        </div>

        <div className="my-1 w-full px-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <lottie-interactive
                path="/animations/svgenius-logo.json"
                autoplay
                loop
                view-box="0 0 500 300"
                aspect-ratio="xMaxYMax meet"
            />
            <footer
                className="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <div className="row-auto">
                <h1 className="text-lg underline">Attribute name:</h1>
                <h1 className="ml-2 text-md mt-2">"aspect-ratio"</h1>
                <h1 className="text-lg underline mt-4">Code snippet:</h1>
                <p
                    className="ml-2 text-sm text-white p-1.5 mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                >
                  &lt;lottie-interactive
                  path=&quot;/animations/svgenius-logo.json&quot; autoplay loop
                  view-box="0 0 500 300" aspect-ratio=&quot;xMaxYMax
                  meet&quot;/&gt;
                </p>
                <h1 className="text-lg underline mt-4">Description:</h1>
                <p className="ml-2 text-md mt-2">
                  Define aspect ratio, default value is 'xMidYMid slice'
                </p>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}

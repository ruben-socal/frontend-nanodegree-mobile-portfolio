## Website Performance Optimization portfolio project

The purpose of this project is to optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second. In order to accomplish the required target page speed score and ability to run 60 frames per second the following was completed. [Pagespeed Insight](https://developers.google.com/speed/pagespeed/insights/)

Part 1: Make Optimization to page index.html so that a score of 90 can be achieved for desktop and mobile on Pagespeed Insights.

Part 2: Make optimizations to views/main.js so that views/pizza.html renders consistently at 60 frames per second. Also resize pizzas on views/pizza.html
		is less than 5ms on browser developer tool.

#### Tools Used on This Project
* [Grunt](http://gruntjs.com/)

**Grunt plugin used:**
* [uglify](https://www.npmjs.com/package/grunt-contrib-uglify) used to minify javascript files
* [imagemin](https://www.npmjs.com/package/grunt-contrib-imagemin) used to minify images
* [cssmin](https://www.npmjs.com/package/grunt-contrib-cssmin) used to minify css files

#### Installation Instructions
* [Clone github reposititory](https://github.com/ruben-socal/frontend-nanodegree-mobile-portfolio.git)
* Open git bash application, go to directory where clone was downloaded
* Make sure Node.js is installed by typing: node --version 
* Install npm by typing the following: npm install
* Start the local http server by typing: http-server
* Open Chrome Browser with ip address listed by  local server
* [Hosting the website was done on github pages](https://guides.github.com/features/pages/) to test on Page Speed Insights
*  [Chrome Devtools](https://developer.chrome.com/devtools) used to measure frame per second and resize speed of 5ms

## Project Optimizations

#### Index.html optimizations
1. Minimized style.css then inlined styles sheet on html
2. Used web font loader to load google fonts asynchronously using javascript
4. Minimized images with extension -min.jpg, -min.png using grunt imagemin
3. Used preload in <link> to preload images
5. Minimized javascript perfmatters.js to perfmatters.min.js using grunt uglify
6. Used asynchronous on javascript files for google analytics and perfmatters-min

#### views/pizza.html optimizations
1. Minimized style.css using grunt grunt cssmin and inlined it on html
2. Minimized bootstrap-grid.css and added extension to name as follows: bootstrap-grid.min.css
3. Minimized images using grunt imagemin and added file name extension of -min.jpg and -min.png
4. Used preload in <link> to preload images
5. Minimized javascript main.js and added file name extension: main.min.js

#### views/main.js optimizations
1. On the function changePizzaSizes I used Cameron Pittmans video Stop FSL (Forced Synchronous Layout) to
   solve the problem of FSL. The offsetWidth being called before the style.width
   was causing the FSL, therefore I removed offsetWidth, combined determinDX with
   changePizzaSizes and set the newwidth based on the size and set the style.width = newwidth.
   I also optimized the code by removing function determineDx.

2. On function updatePositions I used "Website Optimization Project webcasts: Tips - Increasing
   Framerate (FPS)" to optimized the function. I used transform = translateX to keep layouts
   from retriggering and removed items.style.left and moved variables not required in
   for loop out: items, cacheScrollTop and phaseNumber.

3. I replaced window.addEventListener('scroll', updatePositions) with window.addEventListener('scroll', onScroll, false)
   using code optimization called "Debouncing Scroll Events" by Paul Lewis https://www.html5rocks.com/en/tutorials/speed/animations
   this keeps requestAnimationFrame from causing reflow and repaint which increases the frame rates per second.
   onScroll and requestTick are used to with requestAnimationFrame to avoid reflow-repaint loops
   and is only call when requestAnimationFrame updates are needed.

4. I replaced document.addEventListener('DOMContentLoaded', function() with
   document.readystatechange this checks when the document has loaded and
   prevents the async main.min.js file from loading before the document causing
   background pizzas to disappear. [The solution came from this site:](http://stackoverflow.com/questions/9237044/async-loaded-scripts-with-domcontentloaded-or-load-event-handlers-not-being-call)
   I also reduced number of pizzas from 200 to 31 which is all that is needed to fill window. This reduces the 
   time it takes to load pizza images.


















Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

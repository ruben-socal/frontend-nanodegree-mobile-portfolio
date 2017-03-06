## Website Performance Optimization portfolio project

The purpose of this project is to optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second. In order to accomplish the required target page speed score and ability to run 60 frames per second the following was completed. [Pagespeed Insight](https://developers.google.com/speed/pagespeed/insights/)

Part 1: Make Optimization to page index.html so that a score of 90 can be achieved for desktop and mobile on Pagespeed Insights.

Part 2: Make optimizations to views/main.js so that views/pizza.html renders consistently at 60 frames per second. Also resize pizzas on views/pizza.html
		is less than 5ms on browser developer tool.

#### Tools Used on This Project
* [Grunt](http://gruntjs.com/)

	**Grunt plugins used:**
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
* Directories used for source src and producion dist files:
```bash
	src     	dist    	views/src    		views/dist
	|-img       |-img             |-images            |-images
	|-css       |-css             |-css               |-css
	|-js        |-js              |-js                |-js
```

## Project Optimizations

#### Index.html optimizations
1. Minimized style.css then inlined styles sheet on html
2. Used web font loader to load google fonts asynchronously using javascript
4. Minimized images with extension -min.jpg, -min.png using grunt imagemin
3. Prioritizing visible content [preload](https://developers.google.com/web/updates/2016/03/link-rel-preload) in <link> to preload images
5. Minimized javascript perfmatters.js to perfmatters.min.js using grunt uglify
6. Used asynchronous on javascript files for google analytics and perfmatters-min

#### views/pizza.html optimizations
1. Minimized style.css using grunt grunt cssmin and inlined it on html
2. Minimized bootstrap-grid.css and added extension to name as follows: bootstrap-grid.min.css
3. Minimized images using grunt imagemin and added file name extension of -min.jpg and -min.png
4. Used preload in <link> to preload images
5. Minimized javascript main.js and added file name extension: main.min.js

#### views/main.js optimizations
1. On the function **changePizzaSizes** I used **Udacitys Cameron Pittmans video Stop FSL** (Forced Synchronous Layout) to
   solve the problem of FSL. The **offsetWidth** being called before the **style.width**
   was causing the FSL, therefore I removed **offsetWidth**, combined **determinDX** with
   **changePizzaSizes** and set the newwidth based on the size and set the **style.width = newwidth**.
   I also optimized the code by removing function determineDx.

2. On function **updatePositions** I used **"Website Optimization Project webcasts: Tips - Increasing
   Framerate (FPS)"** to optimized the function. I used **transform = translateX** to keep layouts
   from retriggering and removed items.style.left and moved variables not required in
   for loop out: items, cacheScrollTop and phaseNumber.

3. I replaced **window.addEventListener('scroll', updatePositions)** with **window.addEventListener('scroll', onScroll, false)**
   using code optimization called ["Debouncing Scroll Events" by Paul Lewis](https://www.html5rocks.com/en/tutorials/speed/animations)
   this keeps requestAnimationFrame from causing reflow and repaint which increases the frame rates per second.
   onScroll and requestTick are used to with requestAnimationFrame to avoid reflow-repaint loops
   and is only call when requestAnimationFrame updates are needed.

4. I replaced **document.addEventListener('DOMContentLoaded', function()** with
   **document.readystatechange** this checks when the document has loaded and
   prevents the asynchronous javascript file main.min.js from loading before the document causing
   background pizzas to disappear. [The solution came from this site:](http://stackoverflow.com/questions/9237044/async-loaded-scripts-with-domcontentloaded-or-load-event-handlers-not-being-call)
   I also reduced number of pizzas from 200 to 31 which is all that is needed to fill window. This reduces the
   time it takes to load pizza images.
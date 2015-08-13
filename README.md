# Bricks
A tiny (~2kb), responsive grid.

## Get Bricks

*Bricks is still beta. Use with caution*

### From npm
1. Install [node](https://nodejs.org/download/), which bundles the Node Package Manager (npm)

2. Navigate to the project root and install the package `npm install bricks-css`

3. You'll find the file to include here: `./node_modules/bricks-css/dist/bricks.min.css`

### From Sourcce 
1. Install [node](https://nodejs.org/download/), which bundles the Node Package Manager (npm)

2. Clone this repository `git clone https://github.com/robotnoises/Bricks.git`

3. Navigate to the project root and install the dependencies `npm install`

4. Compile the SASS into CSS `grunt build`

5. The minified CSS will be here: `./dist/bricks.min.css`

## How to use Bricks
1. A `brick` represents a side-by-side container. What you put inside a brick is up to you.

2. A `wall` contains bricks. You can put as many bricks in a wall as you like. By default, a wall will take up 100% of its own container. You can make a wall as wide or narrow as you like.

3. You can control the amount of proportional row space a brick occupies by giving it a special `p-*` class like this: `<div class="brick p-1-3"></div>`, which will take up one-third of the space.

4. You can put a max of `6` bricks in a row before they start breaking to the next line, E.g.

```html
<div class="wall">
  <div class="brick p-1-6"></div>
  <div class="brick p-1-6"></div>
  <div class="brick p-1-6"></div>
  <div class="brick p-1-6"></div>
  <div class="brick p-1-6"></div>
  <div class="brick p-1-6"></div>
</div>
```
5. If you want *more* than 6 bricks in a row, just leave-off the `p-*` class. These bricks will display as if they were cells in a table row, which you can add an unlimited amount of.

6. If you want a brick to have a fixed width, you may add that style in a separate class of your choosing. If you want the bricks around it to take up the remaining side-to-side space, leave-off the `p-*` class. E.g.

```html
<div class="wall">
  <div class="brick fixed"> <!-- .fixed { width: 300px; } -->
    <!-- Content here -->
  </div>
  <div class="brick">
    <!-- Will occupy the remaining space to the right... -->
  </div>
</div>
```

## Available proportions
1/2 `brick p-1-2`

1/3 `brick p-1-3`

1/4 `brick p-1-4`

1/5 `brick p-1-5`

1/6 `brick p-1-6`

2/3 `brick p-2-3`

3/4 `brick p-3-4`

2/5 `brick p-2-5`

3/5 `brick p-3-5`

4/5 `brick p-4-5`

# Browser support
* All the good ones
* IE9+

# Examples
[https://robotnoises.github.io/Bricks/](https://robotnoises.github.io/Bricks/)
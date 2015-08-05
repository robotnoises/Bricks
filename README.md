# Bricks
A tiny (< 5kb), responsive grid.

## Getting started
1. Install [https://nodejs.org/download/](node), which bundles the Node Package Manager (npm)

2. Clone this repository `git clone https://github.com/robotnoises/Bricks.git`

3. Navigate to the project root and install the dependencies `npm install` 

## How to use bricks
1. A `brick` represents a side-by-side container. What you put inside a brick is up to you.

2. A `wall` contains bricks. You can put as many bricks is you want in a wall.

3. You can put a max of `6` bricks in a row before they start breaking to the next line.

4. A brick will take up a proportinal amount of space in a row based on the fractional width you give it, e.g.

<!-- Three column layout --->
<div class="wall">
  <div class="brick col-1-3"></div>
  <div class="brick col-1-3"></div>
  <div class="brick col-1-3"></div>
</div>

## Available proportions
> 1/2 `brick col-1-2`

> 1/3 `brick col-1-3`

> 1/4 `brick col-1-4`

> 1/5 `brick col-1-5`

> 1/6 `brick col-1-6`

> 2/3 `brick col-2-3`

> 3/4 `brick col-3-4`

> 2/5 `brick col-2-5`

> 3/5 `brick col-3-5`

> 4/5 `brick col-4-5`


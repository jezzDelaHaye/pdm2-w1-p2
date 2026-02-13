const fillCols = new Map();
const strokeCols = new Map();
let pressedCount = 0;


function setup()
{
    createCanvas(400,400);
    fillMaps();

}

function draw()
{
   
}

function mousePressed()
{
    background(255)
    pressedCount++;
    fill(fillCols.get(pressedCount))
    strokeWeight(10)

    stroke(strokeCols.get(pressedCount))
    for (let i =0; i < pressedCount; i ++)
    {
        ellipse(random(400),random(400),random(50))
    }
}

function fillMaps()
{
    for (let i = 0; i < 100; i++)
    {
        fillCols.set(i,random(255))
        strokeCols.set(i,random(255))
    }
}
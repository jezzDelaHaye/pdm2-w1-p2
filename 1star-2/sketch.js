const fillCols = new Map();
const strokeCols = new Map();
let pressedCount = 0;


function setup()
{
    createCanvas(400,400);

}

function draw()
{
   
}

function mousePressed()
{
    background(255)
    pressedCount++;
    for (let i =0; i < pressedCount; i ++)
    {
        ellipse(random(400),random(400),50)
    }
}

function fillSets()
{
    fillCols.set('1',100)
    strokeCols.set('1',255)

}
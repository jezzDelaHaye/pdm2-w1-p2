const fillCols = new Map();
const strokeCols = new Map();
let pressedCount = 0;


function setup()
{
    createCanvas(400,400);

}

function draw()
{
    /*
    for (let i = 0; i > pressedCount; i++)
    {
        ellipse(random(400),random(400),50)
        console.log('circle')
    }
        */

}

function mousePressed()
{
    pressedCount++;
    
}

function fillSets()
{
    fillCols.set('1',100)
    strokeCols.set('1',255)

}
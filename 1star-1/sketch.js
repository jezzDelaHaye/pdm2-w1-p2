let textInput;
let button;
let output;
const userNames = new Set();


function setup()
{
    createCanvas(400,400)
    textInput = createInput();
    button = createButton('input')
    textInput.position(170,202)
    button.position(360,202)
    button.mousePressed(inputName)
    
}
function draw()
{
    background(255);
    textSize(23)
    text('username:',22,100)
    text(output,100,200)
    
}

function inputName()
{
    text(output,100,200)
    if (userNames.has(textInput.value()))
    {
        output = 'username in use'
    }
    else if (textInput.value() === '')
    {
        output = 'username cannot be empty'
    }
    else
    {
        userNames.add(textInput.value())
        output = (`hello ${textInput.value()}`)
    }
}

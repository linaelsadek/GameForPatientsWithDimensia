//List of puzzle images
images = ["photos/brother.jpg", "photos/sister.jpg", "photos/nephew1.jpg", "photos/nephew2.jpg", "photos/neice1.jpg", "photos/neice2.jpg", "photos/neice3.jpg", "photos/grandchild1.jpg", "photos/grandchild2.jpg"]
numOfPuzzlePieces = 5; //this will be used as a global variable to be easily changed later on

//Those two variables will set the dimensions of each puzzle piece
puzzlePieceWidth = 0;
puzzlePieceHeight = 0;

//Those two variables will set the dimensions of the canvas
puzzleWidth = 800;
puzzleHeight = 800;

pieces = [];
currImage = 0; //keeps track of current image displayed to produce the right answer
var img;

$( document ).ready(function() {
    
    console.log("Your screen resolution is: " + screen.width + "x" + screen.height);
    CalcPuzzleDimensions();
    window.addEventListener("resize", CalcPuzzleDimensions);
});

function StartGame()
{
    console.log("Game Started!");

    document.getElementById("question").style.display = "block";
    

    currImage = 0;
    img = new Image();
    img.src = images[currImage];   
    img.width = 800;
    img.height= 800;
    img.addEventListener('load',onImage,false);
}

function CalcPuzzleDimensions()
{
    var calcDim = 0;

    //First determine which is smaller, width or height
    if (screen.width <= screen.height)
        calcDim = screen.width;
    else
        calcDim = screen.height;
   

    //If the screen size is less 650px, then use the entire width
    if (calcDim > 760)
        calcDim = (calcDim * 3)/4;    
    puzzleHeight = Math.ceil(calcDim/10)*10;
    puzzleWidth = puzzleHeight;
    console.log(puzzleHeight);
    console.log(puzzleWidth);
}

function LoadMCQAnswer()
{
    //Everytime this function is called, we need to remove previous content from mcq div
    document.getElementById("mcq").innerHTML = "";
  
    var options = 4;
    var indexPicked = -1;
    var currentOptions = [];

    for(var i=0; i< options; i++)
    {
        //for each iteration, re-initialize this variable
        indexPicked = -1;
        //get the modulus of the image to determine its location
        if((currImage%options) == i)
        {
            CreateMCQOption(i, options, currImage, true);
            currentOptions.push(currImage);
        }
        else
        {
            //randomize a number except for the current image
            do{
                indexPicked = Math.floor((Math.random() * 9));
                
            }while((indexPicked == currImage) || (currentOptions.includes(indexPicked)));

            if (indexPicked > -1)
            {
                CreateMCQOption(i, options, indexPicked, false);
                currentOptions.push(indexPicked);
            }
                
        }

    }

}

function CreateMCQOption(optionIndex, totalOptions, imgIndex, isChecked)
{
    //variable definitions
    var label;
    var input;
    var image;
    var optionName;

    switch(optionIndex%totalOptions)
    {
        case 0:
            optionName = "a";
            break;
        case 1:
            optionName = "b";
            break;
        case 2:
            optionName = "c";
            break;
        case 3:
            optionName = "d";
            break;
        default:
            break;
    }

    //variable initialization
    label = document.createElement("label");
    input = document.createElement("input");
    image = document.createElement("img");
    
    //input variable options
    input.setAttribute("type", "radio");
    input.setAttribute("name", "relative");
    input.setAttribute("value", optionName);
    input.setAttribute("checked", isChecked);

    //image variable options
    image.setAttribute("class", "mcqImage");
    image.setAttribute("id", "mcqImage-"+imgIndex);  
    image.setAttribute("onclick", "CheckAnswer(id)");     
    image.src = images[imgIndex];

    //Add elements to the document
    label.append(input);
    label.append(image);
    document.getElementById("mcq").append(label);

    
}

function CheckAnswer(imgIndex)
{
    var indexStr = imgIndex.replace("mcqImage-", "");
    var index = parseInt(indexStr);
    var message = "";
    var isCorrectAnswer = false;

    if (index==currImage)
    {
        message = "Correct! ";
        isCorrectAnswer = true;
    }
    else{
        message = "False! ";
    }

    message += GetImageDescription(index);
    //alert(message);

    ShowModal(message);

    if (isCorrectAnswer)
        ShowNextQuestion();

}

function HideModal()
{
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function ShowModal(description)
{
    var modal = document.getElementById("modal");
    var span = document.getElementById("btnClose");
    var modaltxt = document.getElementById("modaltxt");

    modaltxt.innerText = description;
    modal.style.display = "block";
}

function GetImageDescription(imgIndex)
{
    var description ="";

    switch(imgIndex)
    {
        case 0:
            description = "This is Joey, your brother. He is 78 years old, and lives in Ontario, Canada.";
            break;
        case 1:
            description = "This is Nancy, your sister. She is 66 years old, and lives in British Columbia, Canada";
            break;
        case 2:
            description = "This is Tommy, your nephew. Tommy is Joey's youngest child. He is 24 years old.";
            break;
        case 3:
            description = "This is Jake, your nephew. Jake is Nancy's eldest child. He is 30 years old. ";
            break;
        case 4:
            description = "This is Tamara, your niece. Tamara is Joey's eldest child. She is 28 years old.";
            break;
        case 5:
            description = "This is Stephanie, your niece. Stephanie is Nancy's youngest daughter. She is 26 years old.";
            break;
        case 6:
            description = "This is Sam, your niece. Sam is Nancy's daughter and Stephanie's twin. She is 26 years old.";
            break;
        case 7:
            description = "This is Teddy. Teddy is the newest addition to the family. He is 5 months old. Teddy is your grandson.";
            break;
        case 8:
            description = "This is Mickey. Mickey is your grandson. He is 6 years old.\n\nGame Ended!";
            break;
        default:
            break;
    }

    return description;
}

function ShowNextQuestion()
{
    //check the current index of the image, if it does not reach the end, then keep playing, otherwise
    //show "Game Ended!"
    if (currImage == (images.length-1))
    {
        //alert("Game Ended!");
        //ShowModal("Game Ended!");

    }else{
        currImage++;
        img.src = images[currImage];
        InitializeCanvase();
    }

}

function onImage(e){			
    
    InitializeCanvase();
}


//This function will set the image user selects into the canvas
function InitializeCanvase()
{
    
    pieces = [];
    canvas = document.getElementById("puzzleCanvas");
    canvasContext = canvas.getContext("2d");    
    puzzlePieceWidth = Math.floor(puzzleWidth/numOfPuzzlePieces); //divide the image into n slices horizontally
    puzzlePieceHeight = Math.floor(puzzleHeight/numOfPuzzlePieces); //divide the image into n slices vertically
    img.width = puzzleWidth;
    img.height = puzzleHeight;
    canvasContext.drawImage(img, 0, 0, puzzleWidth, puzzleHeight, 0, 0, puzzleWidth, puzzleHeight);
    canvas.width = puzzleWidth;
    canvas.height = puzzleHeight;
    canvas.style.border = "1px solid black";

    //Build the puzzle
    buildPieces();

    //Load the MCQ options
    LoadMCQAnswer();
    
}

function buildPieces(){
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    
    var xiPos = 0;
    var yiPos = 0;
    var pixelsX = 0;
    var pixelsY = 0;
    var xOffset = 0;
    var yOffset = 0;

    //determine if image is bigger than canvas, then get the pixels from the middle of the image
    if (img.naturalWidth > puzzleWidth)
    {
        xOffset = img.naturalWidth - puzzleWidth;
        xiPos = Math.floor(xOffset/2);       
    }

    if (img.naturalHeight > puzzleHeight)
    {
        yOffset = img.naturalHeight - puzzleHeight;
        yiPos = Math.floor(yOffset/2);
        
    }

    pixelsY = yiPos;
    
    for(i = 0;i < numOfPuzzlePieces * numOfPuzzlePieces;i++){
        piece = {};

        //This will determine the pixels of the image, not the canvas
        if (xPos == 0)
            pixelsX = xiPos; 
        else
            pixelsX += puzzlePieceWidth;

        piece.sx = pixelsX;
        piece.sy = pixelsY;    

        pieces.push(piece);
        xPos += puzzlePieceWidth;
        if(xPos >= puzzleWidth){   
            xPos = 0;
            yPos += puzzlePieceHeight;
            if (yPos == 0)
                pixelsY = yiPos; 
            else
                pixelsY += puzzlePieceHeight;
        }
    }

    shufflePuzzle();
}


//This function will randomize the pieces created, and place them on the canvas
function shufflePuzzle(){
    pieces = shuffleArray(pieces);
    canvasContext.clearRect(0,0,puzzleWidth,puzzleHeight);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;   
    
    for(i = 0;i < pieces.length;i++){
        piece = pieces[i];
        piece.xPos = xPos;
        piece.yPos = yPos;
        
        canvasContext.drawImage(img, piece.sx, piece.sy, puzzlePieceWidth, puzzlePieceHeight, xPos, yPos, puzzlePieceWidth, puzzlePieceHeight);
        canvasContext.strokeRect(xPos, yPos, puzzlePieceWidth,puzzlePieceHeight);
        
        xPos += puzzlePieceWidth;
        if(xPos >= puzzleWidth){
            xPos = 0;
            yPos += puzzlePieceHeight;           
        }
    }
}

function shuffleArray(o){
    for (var i = o.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var bi = o[i];
        var bj = o[j];
        o[i] = bj;
        o[j] = bi;
    }
    return o;
}
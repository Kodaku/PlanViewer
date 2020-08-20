var url = "http://127.0.0.1:8000/data";

const window_width = 800;
const height = 35;

function setup(){
    loadJSON(url, (data) => {
        renderData(data);
    });
}

function renderData(data){
    createCanvas(window_width + 400, height * data.CompletePlan.length + 50);
    background(0,0,0);
    let width = calculateWidth(data);
    textSize(12);
    for(let i = 0; i < data.CompletePlan.length; i++){
        const color = chooseColors();
        fill(color.red, color.green, color.blue);
        rect(i * width, i * height, width, height);
        fill(255);
        text(data.CompletePlan[i].id + ": " + data.CompletePlan[i].action, i * width + width + 10, i * height + 20);
    }
}

function calculateWidth(data){
    return ((35 * window_width) / (data.CompletePlan.length * 35));
}

function chooseColors(){
    const index = int(random(0, 3));
    let color = {
        red: 0,
        green: 0,
        blue: 0
    }
    if(index == 0){
        color.red = 255;
    }
    else if(index == 1){
        color.green = 255;
    }
    else{
        color.blue = 255;
    }
    return color;
}

function draw(){
    
}

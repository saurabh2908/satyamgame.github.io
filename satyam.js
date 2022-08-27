//90 //30 //0 //100

var correctOptions=[
        90,
        30,
        0,
        100,
        30
]

function getAnswer(x,y){
    let val=y.split('');
    let newVal=val[1];

    if(correctOptions[newVal-1]==x){
        console.log("correct ");
        UIkit.modal('#modal-media-image').show()
    }
    else{
        console.log('wrong');
        UIkit.modal('#modal-media-video').show()
    }
}
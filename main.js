var dog = 0;
var cat = 0;
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/EN7ttFmv2/model.json', modelReady);
}
function modelReady() {
    classifier.classify(check);
}
function check(error,results) {
    if(error) {
        console.error(error);
    }
    else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
        if(results[0].label == 'Meawing') {
            document.getElementById("image_for_output").src="cat.gif";
        }
        else if(results[0].label == 'Braking') {
            document.getElementById("image_for_output").src="Braking.jpg";
        }
        else if(results[0].label == 'Background Noise') {
            document.getElementById("image_for_output").src="ear.png";
        }
        
    }
}
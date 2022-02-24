
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
        document.getElementById("result_label").innerHTML="I can hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+" %";
    }
}

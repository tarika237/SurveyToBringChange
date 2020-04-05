var peopleCount = 0;
var radio1,radio2,radio3;
var question1,question2,question3;

function setup() {
    canvas = createCanvas(800, 600);
    database = firebase.database();
    form = new Form()
    form.display();
    user = new User();

}
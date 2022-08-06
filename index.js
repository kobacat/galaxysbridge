const staffbtn = document.getElementById('staffbtn');
const homebtn = document.getElementById('homebtn');
const aboutbtn = document.getElementById('aboutbtn');
const charabtn = document.getElementById('charabtn');

staffbtn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'white';
});

homebtn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'black';
});

aboutbtn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'black';
    if (document.getElementById("projectimg").src == "/images/project.png" ){
        document.getElementById("projectimg").src = "/images/ctnerr.png";
    }
});

charabtn.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'black';
});
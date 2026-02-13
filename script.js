function checkPassword()
{
    const pass = document.getElementById("passwordInput").value;

    if(pass === "kita"){   // ganti password di sini
        document.getElementById("login").style.display = "none";
        document.getElementById("story").classList.remove("hidden");
        startStory();
    } else {
        alert("Password salah 😅");
    }
}
burstHearts();
function burstHearts(){

    const container = document.querySelector(".hearts");

    for(let i=0;i<40;i++){

        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = "50vw";
        heart.style.top = "50vh";

        heart.style.position = "fixed";
        heart.style.animation = "none";

        const x = (Math.random()-0.5)*600;
        const y = (Math.random()-0.5)*600;

        heart.style.transition = "1s ease-out";
        container.appendChild(heart);

        setTimeout(()=>{
            heart.style.transform =
                `translate(${x}px, ${y}px) rotate(45deg) scale(1.5)`;
            heart.style.opacity = "0";
        },10);

        setTimeout(()=>{
            heart.remove();
        },1000);
    }
document.querySelector(".login-card").style.opacity = "0";
document.querySelector(".login-card").style.transform = "scale(0.5)";
}
function startStory(){

    setTimeout(()=>{
        document.getElementById("scene1").classList.remove("hidden");
    },1000);

    setTimeout(()=>{
        document.getElementById("scene1").classList.add("hidden");
        document.getElementById("scene2").classList.remove("hidden");
    },4000);

    setTimeout(()=>{
        document.getElementById("scene2").classList.add("hidden");
        document.getElementById("scene3").classList.remove("hidden");
    },7500);

    setTimeout(()=>{
        document.getElementById("scene3").classList.add("hidden");
        document.getElementById("gallery").classList.remove("hidden");
        document.getElementById("gallery").scrollIntoView({behavior:"smooth"});

        setTimeout(()=>{
            document.getElementById("letterSection").classList.remove("hidden");
        },2000);

    },12000);
}

function openLetter(){
    document.getElementById("loveLetter").classList.remove("hidden");
}

/* FLOATING HEARTS */
function createHearts(){
    const container = document.querySelector(".hearts");

    setInterval(()=>{
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random()*100 + "vw";
        heart.style.animationDuration = (Math.random()*4+4)+"s";
        container.appendChild(heart);

        setTimeout(()=>{ heart.remove(); },8000);

    },300);
}

createHearts();
document.getElementById("passwordInput")
.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        checkPassword();
    }
});
function explodeEffect(){
    let audio = new Audio("boom.mp3");
    audio.play();

    document.body.classList.add("shake");

    document.body.style.background = "radial-gradient(circle, hotpink, black)";

    setTimeout(()=>{
        document.body.style.background = "black";
        document.body.classList.remove("shake");
    },500);

    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
}

function typeText(){
    let text = "Welcome to Henda's World";
    let i = 0;
    let speed = 50;
    let target = document.getElementById("typing");

    function typing(){
        if(i < text.length){
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}
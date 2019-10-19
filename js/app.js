
/// np z zmiennymi jezykami var lang = "jap";
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.nav-toggle').addEventListener('click', function() {
        
        document.querySelector('.main-menu').classList.toggle('show');        
    })

    const tableOfPage = [
        {///0
            imgUrl: "/images/story0001.jpeg",
            desc: "Jesteś chłopakiem czy dziewczyną? ", 
            left: 1, 
            right: 2,
            leftText: "Jestem dziewczyną.",
            rightText: "Jestem chłopakiem."
        },
        {///1
            imgUrl: "/images/story0002.jpeg",
            desc: "Jaki masz kolor włosów dziewczyno?", 
            left: 3, 
            right: 4,
            leftText: "Jasne",
            rightText: "Ciemne"
        },
        {///2
            imgUrl: "/images/story0003.jpeg",
            desc: "Jaki masz kolor włosów chłopcze ", 
            left: 5, 
            right: 6,
            leftText: "Jasne",
            rightText: "Ciemne"
        },
        {///3
            imgUrl: "/images/story0007.jpeg",
            desc: "Wiec jesteś, jasno włosą dziewczyną", 
            left: 0, 
            right: 0,
            leftText: "Tak",
            rightText: "Tak"
        },
        {///4
            imgUrl: "/images/story0007.jpeg",
            desc: "Wiec jesteś, ciemno włosą dziewczyną", 
            left: 0, 
            right: 0,
            leftText: "Tak",
            rightText: "Tak"
        },
        {///5
            imgUrl: "/images/story0007.jpeg",
            desc: "Wiec jesteś, jasno włosym chłopakiem",
            /// możliwosc dodanie innego języka desc_jap: "" 
            left: 0, 
            right: 0,
            leftText: "Tak",
            rightText: "Tak"
        },
        {///6
            imgUrl: "/images/story0007.jpeg",
            desc: "Wiec jesteś, ciemno włosym chłopakiem", 
            left: 0, 
            right: 0,
            leftText: "Tak",
            rightText: "Tak"
        }
    ];
    let currentNumber = 0;  
    
    const appScreen = document.querySelector(".screen");
    const buttonLeft = document.querySelector(".button_left");
    const buttonRight = document.querySelector(".button_right");
    const dial = document.querySelector(".dialogue");
    
    buttonLeft.addEventListener("click", () =>{
        currentNumber = parseInt(buttonLeft.getAttribute("data-next"));
        nextStory();
        
    
    });
    buttonRight.addEventListener("click", () =>{
        currentNumber = parseInt(buttonRight.getAttribute("data-next"));
        prevStory();
        
    });

    function nextStory() {

        console.log(currentNumber);
        appScreen.setAttribute("src", tableOfPage[currentNumber].imgUrl);
        
        dial.innerText = tableOfPage[currentNumber].desc;

        buttonLeft.innerText = tableOfPage[currentNumber].leftText;
        buttonRight.innerText = tableOfPage[currentNumber].rightText;

        buttonLeft.setAttribute("data-next",tableOfPage[currentNumber].left);
        buttonRight.setAttribute("data-next",tableOfPage[currentNumber].right);
        topFunction();        
    }

    function prevStory(){
        console.log(currentNumber);
        appScreen.setAttribute("src", tableOfPage[currentNumber].imgUrl);
        dial.innerText = tableOfPage[currentNumber].desc;

        buttonLeft.innerText = tableOfPage[currentNumber].leftText;
        buttonRight.innerText = tableOfPage[currentNumber].rightText;

        buttonLeft.setAttribute("data-next",tableOfPage[currentNumber].left);
        buttonRight.setAttribute("data-next",tableOfPage[currentNumber].right);
        topFunction(); 
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  
    topFunction();
    prevStory();
    nextStory();
});

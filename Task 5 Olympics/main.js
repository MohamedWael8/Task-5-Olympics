var olympics = 
[
    {
        name : "Paris",
        year: 1992,
        description: "The 1992 Summer Olympic Games officially known as the Games of the XXV Olympiad, was an international multi-sport event celebrated in Barcelona, Catalonia, Spain from July 25 to August 9, 1992.",
        imageUrl: "Images/Flags/france.png"
    }
    ,
    {
        name : "Atlanta",
        year: 1996,
        description: "The 1996 Summer Olympics, officially known as the Games of the XXVI Olympiad, commonly known as Atlanta 1996, and also referred to as the Centennial Olympic Games, were an international multi-sport event that was held from July 19 to August 4, 1996, in Atlanta, Georgia, United States. These Games, which were the fourth Summer Olympics to be hosted by the United States, marked the centenary of the 1896 Summer Olympics in Athens—the inaugural edition of the modern Olympic Games. They were also the first since 1924 to be held in a different year from a Winter Olympics, under a new IOC practice implemented in 1994 to hold the Summer and Winter Games in alternating, even-numbered years",
        imageUrl: "Images/Flags/america.png"
    }
    ,
    {
        name : "London",
        year: 2000,
        description: "The 2000 Summer Olympic Games, officially known as the Games of the XXVII Olympiad and commonly known as Sydney 2000 or the Millennium Olympic Games/Games of the New Millennium, were an international multi-sport event which was held between 15 September and 1 October 2000 in Sydney, New South Wales, Australia. It was the second time that the Summer Olympics were held in Australia, and also the Southern Hemisphere, the first being in Melbourne, Victoria, in 1956.",
        imageUrl: "Images/Flags/england.png"
    }
]

function OlympicGame(name , year, description , imageUrl)
{
    this.name = name;
    this.year = year;
    this.description = description;
    this.imageUrl = imageUrl;
} 

OlympicGame.prototype.romanNumeralCalculation = function ()
{
    var num = Math.floor((this.year - 1896)/4)+1;
    var roman = 
    {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };

      var str = '';
    
      for (var i of Object.keys(roman)) 
      {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
      }
    
    return this.romanNumeral = str;
}

OlympicGame.prototype.urlChange = function ()
{
    this.url = "https://en.wikipedia.org/wiki/" + this.year + "_Summer_Olympics";
}

var games = []

const LetTheGamesBegin = () =>
{
    for(var i=0; i<olympics.length; i++)
    {
        games.push(new OlympicGame(
            olympics[i].name ,
            olympics[i].year , 
            olympics[i].description , 
            olympics[i].imageUrl
            ));
        games[i].id = i;
        games[i].romanNumeralCalculation();
        games[i].urlChange();
    }
}

function Builder()
{
    for(var i=0; i<games.length; i++)
    {
        var button = document.createElement("button");
        button.className = "btn";
        button.olympic = games[i];
        button.innerText = games[i].year;
        button.addEventListener("click" , (event) => 
            {             
                console.log(event.srcElement.olympic);
                document.querySelector("#image").src = event.srcElement.olympic.imageUrl;
                document.querySelector("#title").innerText=event.srcElement.olympic.year + " , " + event.srcElement.olympic.name;
                document.querySelector("#description").innerText= event.srcElement.olympic.description + " ";
                var a =  document.createElement("a");
                a.innerHTML = "link";
                a.href = event.srcElement.olympic.url;
                document.querySelector("#description").append(a);
                document.querySelector("#romanNumeral").innerText = event.srcElement.olympic.romanNumeral;
                document.querySelector("#olympic").hidden = false;
                console.log( document.querySelector("#olympic"));
            })
        $(".button").append(button);
    }
   
    
}

$(document).ready(
    function()
    {
        LetTheGamesBegin();
        console.log(games);
        Builder();
    }
)
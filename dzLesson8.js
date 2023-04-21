// задача n2

const functionDeclinationRus = (number) => {
   if(number === 1){
    return "фильм";
   }
   else if(number > 2 && number <= 4 ){
    return "фильма"
   }
   else if(number >= 5){
    return "фильмов"
   }
}

console.log(functionDeclinationRus(7));


const functionDeclinationEng = (number) => {
   if(number > 1 ){
    return "Movies"
   }
   else{
    return "Movie"
   }
 }
 
 console.log(functionDeclinationEng(5));

 //задание n3

 const films = [
    {
        id:"678",
        title:"The Green Mile",
        year:1999,
        actors:["Tom Hanks","David Morse","Michael Clarke Duncan"],
        description:"A prisoner with a divine gift appears in a death row prison.",
        details:{
            genre:"drama",
            reviews:[{userName:"Fozzy",content:"Magic or reality",score:10},
                     {userName:"Eminem",content:"Almost like an eighth mile, but green",score:4},
                     {userName:"Samuel L. Jackson",content:"Hello motherfucker",score:3},
                     {userName:"Kats",content:"Mur",score:7},]
        }
    },
    {
        id:"w32",
        title:"Breaking Bad",
        year:2008,
        actors:["Bryan Cranston","Aaron Paul","Dean Norris"],
        description:"School chemistry teacher prepares drugs.",
        details:{
            genre:"crime",
            reviews:[{userName:"Kitaika",content:"Chemistry",score:10},
                     {userName:"Johnny Depp",content:"Over 3000 methamphetamine of paradise ",score:10},
                     {userName:"Nicolas Cage",content:"Talanted nephew",score:10}]
        }
    },
    {
        id:"342",
        title:"The Lord of the Rings:The Return of the King",
        year:2003,
        actors:["Viggo Mortensen","Elijah Wood","Sean Astin"],
        description:"The lord of the forces of darkness Sauron derects his countless army under the wall of Minas Tirith",
        details:{
            genre:"fantasy",
            reviews:[{userName:"Gimli",content:"I already have two",score:10},
                     {userName:"Aragorn",content:"The Return of the King",score:1},
                     {userName:"Gollum",content:"where is my beauty",score:5},
                     {userName:"Gendalf",content:"I am now white",score:7},
                ]
        }
    },
];


const searchByCriteria = (rated,title,year) => {

    const resultItem = films.filter(item =>{
        const resultScore =  item.details.reviews.reduce((a, b) => a + b.score, 0) / item.details.reviews.length;
        const resultTitle = item.title;
        const resultYear = item.year;
        if(rated <= resultScore && resultTitle === title && resultYear >= year ){
           return true;
        } 
    })
    console.log(resultItem)
 };
 searchByCriteria(1,"The Lord of the Rings:The Return of the King",1999);

// задание n4

        const userNum = prompt();
        
        if(userNum >= 0 && userNum <= 40 ){
           alert("You failed the exam, try again")
        }else if (userNum >= 41 && userNum <= 70){
             alert("You passed the exam , but you have to attend additional classes")
        }else if ( userNum >=71 && userNum <= 100){
             alert("You number passed the exam, get some rest before the next one")
        } else  if(typeof(userNum) != 'number'){
             alert("It must be a number")
             
        }else{
              alert("The number must be from 0 to 100")
        };


        //задание n5

    const resultFunctionPalindromom = (text) => {
        const resultUserText = text.split('').reverse().join('');
        if(text === resultUserText){
            console.log('Good');
        }else{
            console.log('NNNNOOO GOD');
        }
    }

    
    resultFunctionPalindromom("dom");


    





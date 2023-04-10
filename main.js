const films = [
    {
        id:"Movie",
        title:"The Green Mile",
        year:1999,
        actors:["Tom Hanks","David Morse","Michael Clarke Duncan"],
        description:"A prisoner with a divine gift appears in a death row prison.",
        details:{
            genre:"drama",
            reviews:[{userName:"Fozzy",content:"Magic or reality",score:10}]
        }
    },
    {
        id:"Serial",
        title:"Breaking Bad",
        year:2008,
        actors:["Bryan Cranston","Aaron Paul","Dean Norris"],
        description:"School chemistry teacher prepares drugs.",
        details:{
            genre:"crime",
            reviews:[{userName:"Kitaika",content:"Chemistry",score:8}]
        }
    },
    {
        id:"Anime",
        title:"The Lord of the Rings:The Return of the King",
        year:2003,
        actors:["Viggo Mortensen","Elijah Wood","Sean Astin"],
        description:"The lord of the forces of darkness Sauron derects his countless army under the wall of Minas Tirith",
        details:{
            genre:"fantasy",
            reviews:[{userName:"Gimli",content:"One Ring to rule all,it is the most important of all,it will bring everyone together and enclosethem in darkness.",score:10}]
        }
    },
];

const result = films.map((even)=>{
    console.log(`The ${even.year} film "${even.title}",which tells of the story of "${even.description}".This movie starred ${even.actors}. It was rated by ${even.details.reviews[0].userName}, wits rating of ${even.details.reviews[0].score}. Register to watch this ${even.details.genre}.`)

});

const getMovieByYear = (movies,year)=>{
    const result = films.map((even)=>{
        if(even.id == movies & even.year == year){
            console.log(even);
        }
        
    });
    
};

getMovieByYear('Serial',2008);

const getMovieByTitle = (tytle)=>{
    const result = films.map((even)=>{
        if(even.title == tytle){
            console.log(even);
        }
        
    });
    
};

getMovieByTitle("The Green Mile");
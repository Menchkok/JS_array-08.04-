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
// const result = films.map((even,index)=>{
//     const results =  even.details.reviews.reduce((a, b) => a + b.score, 0) / even.details.reviews.length;
//     const resultQuantity = even.details.reviews
//    console.log(`The ${even.year} film "${even.title}",which tells of the story of "${even.description}".This movie starred ${even.actors}. It was rated by ${even.details.reviews.length} users, wits rating of ${results}. Register to watch this ${even.details.genre}.`)
// });


// const getMovieByYear = (movies,year)=>{
//     const result = films.map((even)=>{
//         if(even.id == movies & even.year == year){
//             console.log(even);
//         }
        
//     });
    
// };

// getMovieByYear('Serial',2008);

// const getMovieByTitle = (tytle)=>{
//     const result = films.map((even)=>{
//         if(even.title == tytle){
//             console.log(even);
//         }
//     });
    
// };

// getMovieByTitle("The Green Mile");

 const getMovieByYear = (year) => {
    const result = films.filter(item =>{
        if(item.year >= year)
        return true;
    })
    console.log(result);
 }
getMovieByYear(2003);


const getMovieByTitle = (title) => {
    films.title.toLowerCase();
    const result = films.filter(item => {
        if(item.title === title)
        return true;
    });
    console.log("The lord of the Rings:The Return of the King");
}

// я сделаль 
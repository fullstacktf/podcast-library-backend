use("podcast-library");
/* db.createCollection("podcast"); */
/* db.podcast.insertOne({title:"The Wild Project", author:"Jordi Wild",episode:"95", description:"Hackers peligrosos, Bill Gates tramposo, China y microchips",image:"http://i3.ytimg.com/vi/coLTc0qDDtg/hqdefault.jpg",language:"español",url:"https://www.youtube.com/watch?v=coLTc0qDDtg" }); */
db.podcast.insertMany([
   {title:"Is a vegan diet better for your health?",author:"BBC", episode:"", description:"Podcast sobre la dieta vegana", image:"http://i3.ytimg.com/vi/jgjiMixh_nE/hqdefault.jpg", language:"english", url:"https://www.youtube.com/watch?v=jgjiMixh_nE&t=1660s", genre:"Veganismo"  },
    {title:"Space: What is dark matter", author:"BBC", episode:"", description: "Podcast sobre la materia oscura", image:"http://i3.ytimg.com/vi/jgjiMixh_nE/hqdefault.jpg", language:"english" ,url:"https://www.youtube.com/watch?v=mG0P0-cwfd0", genre:"Física"},
    {title:"Inteligencia emocional", author:"Entiende tu mente", episode:53, description:"Podcast sobre la inteligencia emocional y comprender las emociones propias y las de los demás", image:"http://i3.ytimg.com/vi/WDqXWA5pBUE/hqdefault.jpg" ,language:"español",url:"https://www.youtube.com/watch?v=WDqXWA5pBUE",genre:"Psicología" },
    {title:"¿Cómo nos afecta el estrés físicamente?",author:"Entiende tu mente", episode:117, description:"Podcast sobre las consecuencias del estrés en el cuerpo", image:"http://i3.ytimg.com/vi/hu-OH6UqlNI/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=hu-OH6UqlNI",genre:"Psicología"},
    {title:"El sentimiento de culpa",author:"Entiende tu mente", episode:67, description:"Podcast sobre el sentimiento de culpa", image:"http://i3.ytimg.com/vi/S0pHHydQGAU/hqdefault.jpg", language:"español", url:"https://www.youtube.com/watch?v=S0pHHydQGAU", genre:"Psicología"},
    {title:"Autosabotaje", author:"Entiende tu mente", episode:78, description:"Podcast sobre como el autosabotaje nos afecta", image:"http://i3.ytimg.com/vi/6ZQ1pIZeTXg/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=6ZQ1pIZeTXg", genre:"Psicología"},
    {title:"Poner fin a una relación de la forma más saludable", author:"Entiende tu mente", episode:17, description:"Podcast sobre como terminar una relación adecuadamente", image:"http://i3.ytimg.com/vi/adM-f1-Lvmg/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=adM-f1-Lvmg", genre:"Psicología"},
    {title:"Asertividad, algo más que saber decir NO", author:"Entiende tu mente", episode:3 , description:"Podcast sobre la asertividad", image:"http://i3.ytimg.com/vi/lvDkZpbzJWo/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=lvDkZpbzJWo", genre:"Psicología"},
    {title:"Xenofobia", author:"Entiende tu mente", episode:113 , description:"Podcast sobre la xenofobia", image:"http://i3.ytimg.com/vi/bBM98uFb7Ps/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=bBM98uFb7Ps", genre:"Psicología"},
    {title:"La química del amor", author:"Entiende tu mente", episode:80 , description:"Podcast sobre como afecta el amor en el cerebro", image:"http://i3.ytimg.com/vi/QnagzT6uzTE/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=QnagzT6uzTE", genre:"Psicología"},
    {title:"El apego emocional", author:"Entiende tu mente", episode:36 , description:"Podcast sobre el apego emocional", image:"http://i3.ytimg.com/vi/K8cHFR4mZGo/hqdefault.jpg",language:"español", url:"https://www.youtube.com/watch?v=K8cHFR4mZGo", genre:"Psicología"}
]);

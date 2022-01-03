/* 
props do renderowania aktualnosci: 
idx -> ktore od lewej,
title -> tytul aktualnosci,
description -> opis aktualnosci,
img -> link do zdjecia,
alt -> img alt=
*/

const newsData = {
    news: [
        {
            idx: 0,
            title: "Małe ROBO-motion 2021 w Rzeszowie",
            description: "20 nagród dla KoNaRu!",
            img: "/news_robomotion.jpg",
        },
        {
            idx: 1,
            title: "IronCup 2019 w Brazylii",
            description:"Złoto za MiniSumo i LineFollowera",
            img: "/news_ironcup.jpg",
        },
        {
            idx: 2,
            title: "Minesweepers 2019 w Makau",
            description:"KoNaR z robotem pirotechnicznym Ariadna",
            img: "/news_minesweepers.jpg",
        },
        {
            idx: 3,
            title: "Robot SM 2019 w Szwecji",
            description:"Dwa razy złoto i srebro",
            img: "/news_robotsm.jpg",
        },
        {
            idx: 4,
            title: "RobotChallenge 2018 w Pekinie",
            description:"Trzy medale dla KoNaRu!",
            img: "/news_robotchallenge.jpg",
        },
        {
            idx: 5,
            title: "RoboGames 2018 USA",
            description:"Robotyczna szachownica najlepsza na zawodach w USA",
            img: "/news_robogames.jpg",
        },
    ],
};

export default newsData;

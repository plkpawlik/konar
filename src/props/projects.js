/* 
props do renderowania projektow: 
idx -> ktore od lewej,
name -> nazwa projektu,
img -> link do zdjecia,
alt -> img alt=
*/

const projectsData = {
    projects: [
        {
            idx: 0,
            name: "Ariadna",
            img: "/ariadna.jpg",
            details: `Tematyką projektu badawczego jest rozwinięcie konstrukcji pojazdu terenowego będącego w
                stanie autonomicznie przeszukiwać określony teren, wykrywać obiekty stanowiące atrapy
                ładunków wybuchowych i przeniesienie ich w bezpieczne miejsce. Konstrukcja powstała na
                bazie doświadczenia zdobytego we wcześniejszych edycjach projektu rozwijanych w latach
                2019, 2020 i 2021. Wzorem poprzedniej konstrukcji, w robocie zaimplementowana zostanie
                zarówno kontrola zdalna (RC), implementacja ramienia robotycznego jak i możliwość
                autonomicznego skanowania terenu o zadanym polu, według specyfikacji międzynarodowych
                zawodów The Minesweepers: Towards a Landmine-free World.`,
            sponsor_img: "/img-logo-wca2.png",
            long_name: "Autonomiczny robot terenowy wykrywający i zbierający atrapy min lądowych “Ariadna V2.2”"
        },
        {
            idx: 1,
            name: "Luna",
            img: "/02iLuna.jpg",
            details: `Tematyką projektu jest zaprojektowanie oraz wykonanie aplikacji internetowej oraz
            autorskich systemów hydroponicznych. Dodatkowo rozwinięty zostanie szereg modułów
            elektronicznych pozwalających na automatyzację rutynowych czynności. W pierwszej
            kolejności powstanie projekt elektroniki wraz z programami do obsługi modułów, a następnie
            zostaną wytworzone obudowy. Równolegle będzie rozwijana strona internetowa. Końcowym
            etapem projektu będą testy oraz gotowa aplikacja i moduły do ogólnego użytku członków
            Koła.`,
            sponsor_img: "/img-logo-wca2.png",
            long_name: "Systemy hydroponiczne Luna"
        },
        {
            idx: 2,
            name: "Robotyczna szachownica",
            img: "/szachy.jpg",
        },
        {
            idx: 3,
            name: "Dron",
            img: "/dron.jpg",
        },
        {
            idx: 4,
            name: "Serwer tenere",
            img: "/tenere.png",
        },
        {
            idx: 5,
            name: "Romek",
            img: "/romek.jpg",
        },
        {
            idx: 6,
            name: "Balbina",
            img: "/balbina.jpg",
        },
        {
            idx: 7,
            name: "Calliope",
            img: "/calliope.jpg",
        },
    ],
};

export default projectsData;

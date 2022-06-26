/* 
props do renderowania projektow: 
idx -> ktore od lewej,
name -> nazwa projektu,
img -> link do zdjecia,
placeholder -> link do zdjecia od niskiej rozdzielczości potrzebne przy lazy loading
alt -> img alt=

Do ładowanie grafik typu placeholder zalecam stosowanie formatu webp.
Dla grafik standardowych zalecam format avif, choć niekóre przeglądarki
mogą go nie wspierać, w tym przypadku zalecam więc webp a jeżeli i to jest niemożliwe 
to format jpg.
*/

const projectsData = {
    projects: [
        {
            idx: 0,
            name: "Małe roboty",
            img: "/maleRoboty",
            placeholder: "/low/maleRoboty.webp"
        },
        {
            idx: 1,
            name: "Ariadna",
            img: "/ariadna",
            placeholder: "/low/ariadna.webp"
        },
        {
            idx: 2,
            name: "02 i Luna",
            img: "/02iLuna",
            placeholder: "/low/02iLuna.webp"
        },
        {
            idx: 3,
            name: "Robotyczna szachownica",
            img: "/szachy",
            placeholder: "/low/szachy.webp"
        },
        {
            idx: 4,
            name: "Dron",
            img: "/dron",
            placeholder: "/low/dron.webp"
        },
        {
            idx: 5,
            name: "Serwer tenere",
            img: "/tenere",
            placeholder: "/low/tenere.webp"
        },
        {
            idx: 6,
            name: "Romek",
            img: "/romek",
            placeholder: "/low/romek.webp"
        },
        {
            idx: 7,
            name: "Balbina",
            img: "/balbina",
            placeholder: "/low/balbina.webp"

        },
        {
            idx: 8,
            name: "Calliope",
            img: "/calliope",
            placeholder: "/low/calliope.webp"

        },
    ],
};

export default projectsData;

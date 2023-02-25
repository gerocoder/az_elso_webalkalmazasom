let currentPhoto = 0;

let data = [
    {photo: "00_lone-tree-oak",
     title: "Magányos tölgyfa",
     description: "A magányos tölgyfa az idő múlásával egyre mélyebbre gyökerezik a táj szívébe, emlékeztetve bennünket a természet erejére és szépségére." },
    {photo: "01_timelapse",
     title: "Időzítés",
     description: "Este nyolc körül az óramutatók lassan a kívánt időpont felé mutatnak, miközben az időzített események várják, hogy bekövetkezzenek." },
    {photo: "02_james-webb-cosmic-cliffs",
     title: "Kozmikus sziklás",
     description: "A James Webb űrteleszkóp elképesztően részletes felvételeket készített a kozmikus sziklákról, amelyek segítenek a kutatóknak megérteni a világegyetem eredetét és fejlődését." },
    {photo: "03_lamborghini-sian-roadster",
     title: "Lamborghini Sian Roadster",
     description: "A Lamborghini Sian Roadster, a legendás olasz autómárka legújabb modellje, hibrid technológiával és elképesztő sebességgel rendelkezik, amely még a legtapasztaltabb autósokat is meglepi." },
    {photo: "04_blue-eye-art",
     title: "Kék szem",
     description: "A digitális művész által létrehozott képen a kék szem árnyalt részletei és a szem tekintetének kifejező ereje lenyűgözően élethűen jelennek meg." },
    {photo: "05_miss-crane-fate-grand-order",
     title: "Miss Crane",
     description: "Miss Crane egy ravasz és magabiztos nő, akinek kiváló érzéke van a mágikus energiákhoz és azok manipulálásához." },
    {photo: "06_candle-water-flame-illustration",
     title: "Gyertya víz láng",
     description: "Az ősi kultúrák szerint a gyertyák lángja olyan titokzatos erőt hordoz magában, amely számos szimbolikus értelmezést kapott az évszázadok során, és amelynek forrása a vízből táplálkozó életenergia lehet." },
    {photo: "07_sea-side-beach",
     title: "Tengerparti strand",
     description: "A tenger habjai finoman mossák a homokos partot, a nap sugarai ragyogó aranyba öntik a tengervizet, és a partról boldogan élvezhetjük az idilli táj nyújtotta szépséget." }
];

function loadPhoto(i) {
    $('#imageView').css('background-image', `url("./images/${data[i].photo}.jpg"`);
    $('#photo-title').text(data[i].title);
    $('#photo-description').html(data[i].description);
    $('.thumbnail').removeClass('selection');
    $(`.thumbnail[data-number='${i}']`).addClass('selection');
}

for (let i = 0; i < data.length; i++) {
    $('#thumbnailBox').append(`<img class="thumbnail" src="./images/${data[i].photo}_tn.jpg" data-number=${i}></img>`);
}

loadPhoto(currentPhoto);

$('.thumbnail').click(function() {
    currentPhoto = $(this).data("number");
    loadPhoto(currentPhoto);
});

$('#buttonLeft').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {currentPhoto = 7};
    loadPhoto(currentPhoto);
});

$('#buttonRight').click(() => {
    currentPhoto++;
    if (currentPhoto > 7) {currentPhoto = 0};
    loadPhoto(currentPhoto);
});

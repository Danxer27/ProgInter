
class Serie {
    tag = 0;    
    title = "";
    totalEsisodes = 0;
    numSeaons = 0;
    releaseSeason = "";
    malScore = 0;
    sinopsis = "";
    studio = ""
    doblaje = false;
    platforms = "";
    trailerLink = "";
    posterLink = "";
    totalInteractions = 0;
    likeInteraction = 0;
    dislikeInteractions = 0;
    streamingSite = []

    constructor(tag, n, tE, nS, rS, mS, sin, st, dob, pt, tl, pl, SS){
        this.tag = tag;
        this.title = n
        this.totalEsisodes = tE;
        this.numSeaons = nS;
        this.releaseSeason = rS;
        this.malScore = mS;
        this.sinopsis = sin;
        this.studio = st;
        this.doblaje = dob;
        this.platforms = pt;
        this.trailerLink = tl;
        this.posterLink = pl;
        this.streamingSite.push(SS);
    };

    getTitle(){
        return this.title;
    }
    getPoster(){
        return this.posterLink;
    }
}

anim = new Serie(0, "The emminence in shadow", 32,  2, "Fall", 8.5, "Es un Isekai xd", "Nexus", true, "Netflix", "none", "https://images.justwatch.com/poster/301091057/s718/the-eminence-in-shadow.jpg", "https://www.netflix.com/watch/81642098?source=35");
anim.posterLink = "https://images.justwatch.com/poster/301091057/s718/the-eminence-in-shadow.jpg";
anim2 = new Serie(1, "The apothecary Daires", 36, 2, "Fall", 9.1, "Los diarios chidos de la boticaria", "Chido", true, "Crunchyroll", "https://www.youtube.com/watch?v=XYNGkSvFT8c&t=19s", "https://m.media-amazon.com/images/M/MV5BNjAxMmFjZjgtYjM1ZS00NzdmLTliZDktZmIyMzU5YTBlNDBmXkEyXkFqcGc@._V1_.jpg","https://www.crunchyroll.com/es/series/G3KHEVDJ7/the-apothecary-diaries")
recentSeries = [];

recentSeries.push(anim);

recentSeries.push(anim2);

document.querySelector("#card1 .card-title").innerText=anim.getTitle();
document.getElementById("card1").classList.add("bg-custom"); //url('${recentSeries[0].getPoster()}')
document.getElementById("card1").style.backgroundImage = `url('${recentSeries[0].getPoster()}'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
document.getElementById("card1").style.backgroundSize = "cover"; // Ajustar tamaño
document.getElementById("card1").style.backgroundPosition = "center"; // Centrar imagen

document.querySelector("#card2 .card-title").innerText=recentSeries[1].getTitle();
document.getElementById("card2").classList.add("bg-custom"); //url('${recentSeries[0].getPoster()}')
document.getElementById("card2").style.backgroundImage = `url('${recentSeries[1].getPoster()}'), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`;
document.getElementById("card2").style.backgroundSize = "cover"; // Ajustar tamaño
document.getElementById("card2").style.backgroundPosition = "center"; // Centrar imagen

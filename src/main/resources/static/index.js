// Oppretter Array for å lagre informasjon fra brukeren og bruker Regex for input validering
let billetter = [];
let telefonNrRegex = /^(\+\d{1,3}[- ]?)?\d{8}$/;
let epostRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let navnRegex = /^[a-zA-ZæøåÆØÅ' ]{2,30}$/;

//lager en funksjon som kjører når noen trykker på kjøpBilett;
function kjopBilett() {
    // Henter verdier fra inputfeltene
    const film = document.getElementById('film').value;
    const antall = document.getElementById('antall').value;
    const fornavn = document.getElementById('navn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('epost').value;

// Validerer om det er tekst skrevet i input feltene
if (fornavn === "" || etternavn === "" || telefonnr === "" || epost === "" || antall === "" || film === "") {
    alert("Alle felt må fylles ut");
    return false; //
}
// Bruker if setninger og regex for å sjekke om kravene blir oppfylt
if (!navnRegex.test(fornavn + etternavn)) {
    alert("Skriv inn et gyldig navn og etternavn")
    return false;
}

if (!epostRegex.test(epost)) {
    alert("skriv inn en gyldig e-postadresse");
    return false;
}

if (!telefonNrRegex.test(telefonnr)) {
    alert("skriv inn et gyldig telefonnummer");
    return false;
}

// Lager et objekt for biletten som blir kjøpt og legger den til i arrayet
const nyBillett = {
    filmer: film,
    antall: antall,
    fornavn: fornavn,
    etternavn: etternavn,
    telefonNr: telefonnr,
    epost: epost
}
billetter.push(nyBillett);
//for å vise bilettene
    visBilletter();
//for å tømme input
    tomInput();
}

//lager en funksjon slik at billetten til brukeren vises
function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    for (let i = 0; i < billetter.length; i++) {
        const billett = billetter[i];
        const li = document.createElement('li');
        li.innerHTML =
            `Film: ${billett.filmer},<br> 
            Navn: ${billett.fornavn} ${billett.etternavn}<br>
            E-post: ${billett.epost},<br>
            Telefonnummer: ${billett.telefonNr},<br>
            Antall billetter: ${billett.antall}`;
            billettListe.appendChild(li);
    }
}
//sletter alle billetter
function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

// Blanker alle inputfeltene og sletter arraryet
function tomInput() {
    document.getElementById('film').selectedIndex = 0;
    document.getElementById('antall').value = '';
    document.getElementById('navn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('epost').value = '';
}

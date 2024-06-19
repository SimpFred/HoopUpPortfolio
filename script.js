// Hämta alla video länkar
var videoLinks = document.querySelectorAll('a.glightbox[data-type="video"]');

// Loopa igenom varje video länk
for (var i = 0; i < videoLinks.length; i++) {
    // Hämta nästa sibbling element (som borde vara <p> taggen med beskrivningen)
    var description = videoLinks[i].nextElementSibling;

    // Ändra data-title attributet till texten i beskrivningen
    videoLinks[i].setAttribute('data-title', description.textContent);
}
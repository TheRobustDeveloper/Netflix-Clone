// faq buttons event listeners
for (let i = 0; i < 6; i++) {
    const faq = document.getElementsByClassName("faq-btn")
    const p = document.getElementsByClassName("faq-btn-p")
    faq[i].addEventListener('click', () => {
        faq[i].lastElementChild.toggleAttribute("hidden")
        p[i].toggleAttribute("hidden")
    });
}
const animacion = ScrollReveal({
    origin: "top",
    distance: "-50px",
    duration: 2000,
    reset: false,
});

animacion.reveal(
    `.header__brand, .header__nav, .principal__presentation, 
    .projects__banner, .projects__cards, .languages__container, 
    .contact__title, .contact__form, .footer__about, .footer__service, 
    .footer__tags`,
    {
        interval: 300,
    }
);

const animacion2 = ScrollReveal({
    origin: "right",
    distance: "50%",
    duration: 2000,
    reset: false,
});

animacion2.reveal(
    `.about__section, .lower__footer--2`,
    {
        interval: 300,
    }
);

const animacion3 = ScrollReveal({
    origin: "left",
    distance: "50%",
    duration: 2000,
    reset: false,
});

animacion2.reveal(
    `.about__article, .lower__footer--1`,
    {
        interval:300,
    }
);
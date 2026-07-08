import SiteHeader from "../SiteHeader";

export const metadata = {
  title: "Mes livres · Julia Laureau",
  description: "Le Déconditionnement et Supers Pouvoirs, les deux livres de Julia Laureau pour adultes et enfants.",
};

const LIVRES = [
  {
    id: "le-deconditionnement",
    title: "Le Déconditionnement",
    subtitle: "Une bible de transformation intérieure",
    coverImage: "/images/livre-deconditionnement.jpg",
    description: [
      "Bien plus qu'un livre, un véritable programme de transformation intérieure. Un guide interactif avec coaching vidéo, méditations guidées et séances énergétiques accessibles par QR codes, pour vous libérer en profondeur des conditionnements, croyances et blessures qui vous empêchent d'accéder à votre véritable essence.",
      "Sans des années de thérapie. Sans détours. Une bible de réinitialisation pour celles et ceux qui sont prêts à appuyer sur le bouton Reset.",
    ],
    meta: "288 pages · Paru le 5 juin 2024",
    audience: "POUR LES ADULTES",
    amazonUrl: "https://www.amazon.fr/SOS-Shine-Briller-Comme-Diamant/dp/2959566807/",
    accent: "deep",
  },
  {
    id: "supers-pouvoirs",
    title: "Supers Pouvoirs",
    subtitle: "Les quatre forces intérieures qui construisent un enfant",
    coverImage: "/images/livre-supers-pouvoirs.jpg",
    description: [
      "Chaque enfant naît avec un superpouvoir : une force dominante qui colore sa façon de ressentir, d'agir et d'aimer. Le courage du Guerrier. La vision du Chasseur. La douceur du Soigneur. La sagesse du Scientifique.",
      "À travers l'histoire d'Addy et Arvey, ce livre aide les enfants dès 8 ans à reconnaître la force qu'ils portent déjà en eux. Une pédagogie douce et solide, fondée sur la psychologie du développement, les sciences du comportement et l'intelligence émotionnelle.",
      "Pas un conte imaginaire. Une lumière posée sur ce que votre enfant est déjà, naturellement.",
    ],
    meta: "Dès 8 ans · Collection SOS Shine Édition",
    audience: "POUR LES ENFANTS",
    amazonUrl: "https://www.amazon.fr/Supers-Pouvoirs-quatre-int%C3%A9rieures-construisent/dp/B0G6Y96NT1/",
    accent: "light",
  },
];

export default function Livres() {
  return (
    <>
      <SiteHeader />

      <section className="livres-page">
        <header className="livres-header">
          <div className="section-label">Mes livres</div>
          <h1 className="livres-title">
            Deux livres, deux <em>chemins</em>
          </h1>
          <p className="livres-intro">
            L&apos;un pour les adultes qui cherchent à comprendre. L&apos;autre pour les enfants
            qui apprennent encore à se connaître. Deux livres pour deux âges, un seul mouvement :
            revenir à soi.
          </p>
        </header>

        <div className="livres-grid">
          {LIVRES.map((livre) => (
            <article key={livre.id} className={`livre-card livre-${livre.accent}`}>
              <div className="livre-cover">
                <img
                  src={livre.coverImage}
                  alt={`Couverture du livre ${livre.title} par Julia Laureau`}
                  className="cover-image"
                  loading="lazy"
                />
              </div>

              <div className="livre-content">
                <div className="livre-audience">{livre.audience}</div>
                <h2 className="livre-title-main">{livre.title}</h2>
                <p className="livre-subtitle">{livre.subtitle}</p>

                <div className="livre-description">
                  {livre.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="livre-meta">{livre.meta}</div>

                <a
                  href={livre.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="livre-btn"
                >
                  Le commander sur Amazon
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

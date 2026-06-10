import SiteHeader from "./SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tagline">Une femme. Un chemin. Une voix.</div>

          <h1 className="hero-name">
            <span className="first">Julia</span>
            <span className="last">
              Laureau
              <svg className="pearl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="pearl-grad" cx="35%" cy="35%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="20%" stopColor="#FFF8E6" stopOpacity="0.95" />
                    <stop offset="55%" stopColor="#F0D89B" stopOpacity="0.85" />
                    <stop offset="85%" stopColor="#D4A85E" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#B89047" stopOpacity="0.6" />
                  </radialGradient>
                  <radialGradient id="pearl-glow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#F0D89B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#E8C77D" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#pearl-glow)" />
                <circle cx="50" cy="50" r="32" fill="url(#pearl-grad)" />
                <ellipse cx="40" cy="38" rx="10" ry="6" fill="#FFFFFF" opacity="0.7" />
                <ellipse cx="38" cy="36" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.95" />
              </svg>
            </span>
          </h1>

          <p className="hero-signature">
            Se retrouver soi-même est le travail d&apos;une vie. Le <em>silence</em> en est le chemin.
          </p>

          <div className="hero-cta">
            <a href="#offrandes" className="btn-primary">Entrer</a>
            <a href="/mon-histoire" className="btn-link">Lire ma voix</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image"></div>
          <div className="hero-frame"></div>
          <div className="hero-quote">
            <p className="hero-quote-text">
              &laquo; Je suis une femme qui a appris à se reconstruire, et qui dépose ici ce qu&apos;elle a trouvé en chemin. &raquo;
            </p>
            <div className="hero-quote-author">Julia · Le Déconditionnement</div>
          </div>
        </div>
      </section>

      {/* MES OFFRANDES */}
      <section className="offrandes" id="offrandes">
        <div className="offrandes-header">
          <div className="section-label">Mes offrandes</div>
          <h2 className="offrandes-title">
            Ce que je <em>dépose</em> au monde
          </h2>
          <p className="offrandes-subtitle">
            Quatre lieux, quatre possibilités. Entre, reste, repars. Selon ce qui résonne aujourd&apos;hui.
          </p>
        </div>

        <div className="offrandes-grid">
          <div className="offrande-card">
            <div className="offrande-number">I · POUR LES ADULTES</div>
            <h3>SOS Shine<em>®</em></h3>
            <p>
              Là où je dépose ce que j&apos;ai compris du conditionnement humain. Un espace pour
              celles et ceux qui cherchent à se libérer de ce qui n&apos;est pas eux, et à
              retrouver leur signature intérieure.
            </p>
            <a href="https://sos-shine-platform.vercel.app" target="_blank" rel="noopener noreferrer" className="card-link">
              Entrer dans cet espace
            </a>
          </div>

          <div className="offrande-card">
            <div className="offrande-number">II · POUR LES ENFANTS</div>
            <h3>SOS Shine® <em>Kids</em></h3>
            <p>
              Une plateforme entièrement gratuite pour les enfants et leurs parents. Pour
              qu&apos;ils apprennent à comprendre leurs émotions avant que la vie ne les
              enseigne à les taire.
            </p>
            <a href="https://sosshine.fr" target="_blank" rel="noopener noreferrer" className="card-link">
              Rejoindre les enfants
            </a>
          </div>

          <div className="offrande-card">
            <div className="offrande-number">III · MES LIVRES</div>
            <h3>Mes <em>livres</em></h3>
            <p>
              Le Déconditionnement et Supers Pouvoirs. Deux livres comme deux portes ouvertes sur
              le même chemin, celui du retour à soi. À lire seule, ou ensemble.
            </p>
            <a href="/livres" className="card-link">Lire ensemble</a>
          </div>

          <div className="offrande-card">
            <div className="offrande-number">IV · ACCOMPAGNEMENT</div>
            <h3>La coach des <em>thérapeutes</em></h3>
            <p>
              Pour les coachs, thérapeutes et accompagnants qui sentent qu&apos;il leur manque
              une dimension dans leur pratique. Un accompagnement individuel multidimensionnel,
              en présence rare.
            </p>
            <a href="/contact" className="card-link">Me trouver</a>
          </div>
        </div>
      </section>

      {/* CADEAU GRATUIT */}
      <section className="cadeau-section" id="cadeau">
        <div className="cadeau-content">
          <div className="section-label">Mon cadeau</div>
          <h2 className="cadeau-title">
            Une <em>offrande</em>, librement
          </h2>
          <p className="cadeau-text">
            J&apos;aime offrir d&apos;abord. Ici, un cadeau sans condition, sans email à laisser,
            sans rien à acheter. Juste à recevoir, librement.
          </p>
          <div className="cadeau-placeholder">
            ✦ Bientôt déposé ici ✦
          </div>
        </div>
      </section>

      {/* CITATION FINALE */}
      <section className="citations">
        <div className="citation">
          <div className="citation-mark">«</div>
          <p className="citation-text">
            Au fur et à mesure que nous laissons briller notre propre lumière, nous donnons
            inconsciemment aux autres la permission de faire de même.
          </p>
          <div className="citation-author">Marianne Williamson</div>
          <div className="signature-33-citation">33</div>
        </div>
      </section>
    </>
  );
}

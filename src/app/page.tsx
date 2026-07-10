import SiteHeader from "./SiteHeader";
import RevealOnScroll from "./RevealOnScroll";
import WaitlistForm from "./WaitlistForm";

export default function Home() {
  const decondWord = "Déconditionnement";

  return (
    <>
      <SiteHeader />
      <RevealOnScroll />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true"></div>

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

          <h2 className="hero-title">
            <span className="word">Comprendre</span>{" "}
            <span className="word">ce</span>{" "}
            <span className="word">qui</span>{" "}
            <span className="word gold">dirige</span>{" "}
            <span className="word gold">ta</span>{" "}
            <span className="word gold">vie</span>{" "}
            <span className="word">pour</span>{" "}
            <span className="word">retrouver</span>{" "}
            <span className="word">ce</span>{" "}
            <span className="word">qui</span>{" "}
            <span className="word gold">t’appartient</span>{" "}
            <span className="word gold">vraiment.</span>
          </h2>

          <p className="hero-lede">
            Nous passons une grande partie de notre existence à répéter des mécanismes que
            nous n’avons jamais consciemment choisis. Mon travail consiste à t’aider à les
            comprendre, puis à t’en libérer.
          </p>

          <div className="hero-cta">
            <a href="#offrandes" className="btn-primary">Découvrir mon univers</a>
            <a href="/mon-histoire" className="btn-link">Comprendre mon approche</a>
          </div>

          <div className="hero-keywords" aria-hidden="true">
            Le Déconditionnement <span>·</span> L’émotionnel <span>·</span> Le retour à soi
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

      {/* MANIFESTE */}
      <section className="manifeste">
        <div className="manifeste-inner">
          <p className="manifeste-line" data-reveal>
            Nous ne voyons pas le monde tel qu’il est.
          </p>
          <p className="manifeste-line" data-reveal style={{ "--reveal-delay": "0.5s" } as React.CSSProperties}>
            Nous le voyons à travers notre histoire.
          </p>
          <p className="manifeste-line manifeste-gold" data-reveal style={{ "--reveal-delay": "1s" } as React.CSSProperties}>
            C’est cette histoire que je t’aide à comprendre.
          </p>
        </div>
      </section>

      {/* JULIA / ORIGINE */}
      <section className="origine" id="origine">
        <div className="origine-grid">
          <div className="origine-text" data-reveal>
            <div className="section-label">L’origine</div>
            <h2 className="origine-title">
              Une approche née d’un <em>chemin de vie</em>
            </h2>
            <p>
              Pendant longtemps, j’ai cru que certaines réactions faisaient simplement partie
              de ma personnalité. Puis j’ai compris qu’elles étaient souvent les traces
              d’histoires plus anciennes : l’enfance, les loyautés familiales, les blessures,
              les conditionnements, les silences.
            </p>
            <p>Cette compréhension a transformé ma manière de regarder l’être humain.</p>
            <p>
              Aujourd’hui, j’explore les mécanismes invisibles qui construisent notre identité
              afin de rendre leur compréhension accessible au plus grand nombre.
            </p>
            <a href="/mon-histoire" className="btn-link origine-cta">Lire mon histoire</a>
          </div>

          {/* Emplacement image — remplacer le contenu par une <img> ou un background */}
          <div className="origine-visual" data-reveal style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <div className="origine-frame" aria-hidden="true">
              <span className="origine-monogram">JL</span>
            </div>
          </div>
        </div>
      </section>

      {/* LE DÉCONDITIONNEMENT */}
      <section className="decond" id="deconditionnement">
        <div className="decond-inner">
          <h2 className="decond-title" data-reveal-letters aria-label="Le Déconditionnement">
            <span className="decond-le" aria-hidden="true">Le </span>
            {decondWord.split("").map((ch, i) => (
              <span
                key={i}
                className="decond-letter"
                aria-hidden="true"
                style={{ "--i": i } as React.CSSProperties}
              >
                {ch}
              </span>
            ))}
          </h2>

          <p className="decond-subtitle" data-reveal style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
            Comprendre ce qui t’a construit pour choisir ce que tu veux devenir.
          </p>

          <div className="decond-body" data-reveal style={{ "--reveal-delay": "0.25s" } as React.CSSProperties}>
            <p>
              Nous croyons souvent choisir librement nos réactions, nos peurs, nos désirs,
              nos blocages ou nos relations.
            </p>
            <p>
              Pourtant, une grande partie de notre manière d’aimer, de nous protéger, de
              réussir, d’échouer ou de nous saboter s’est construite bien avant que nous
              ayons conscience de nous-mêmes.
            </p>
            <p>
              Le Déconditionnement n’est pas une méthode pour devenir quelqu’un d’autre.
            </p>
            <p className="decond-highlight">
              C’est un chemin pour reconnaître ce qui ne t’appartient plus, et revenir à une
              forme de liberté intérieure.
            </p>
          </div>

          <div className="decond-cta" data-reveal style={{ "--reveal-delay": "0.35s" } as React.CSSProperties}>
            <a href="#offrandes" className="btn-primary">Découvrir cette approche</a>
          </div>
        </div>
      </section>

      {/* CHOISIR TON CHEMIN */}
      <section className="offrandes" id="offrandes">
        <div className="offrandes-header" data-reveal>
          <div className="section-label">Les espaces créés pour t’accompagner</div>
          <h2 className="offrandes-title">Choisir ton <em>chemin</em></h2>
          <p className="offrandes-subtitle">
            Chaque espace a été créé pour répondre à un besoin différent, mais tous suivent la
            même intention : comprendre, libérer, transmettre.
          </p>
        </div>

        <div className="offrandes-grid">
          <a
            href="https://sosshine.com"
            target="_blank"
            rel="noopener noreferrer"
            className="offrande-card"
            data-reveal
          >
            <div className="offrande-number">I · POUR LES ADULTES</div>
            <h3>SOS Shine<em>®</em></h3>
            <p>
              Pour comprendre tes schémas, libérer ce qui se répète et retrouver une relation
              plus consciente à toi-même, aux autres et à ta vie.
            </p>
            <span className="card-link">Découvrir SOS Shine</span>
          </a>

          <a
            href="https://sosshine.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="offrande-card"
            data-reveal
            style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
          >
            <div className="offrande-number">II · POUR LES ENFANTS</div>
            <h3>SOS Shine® <em>Kids</em></h3>
            <p>
              Un espace gratuit pour aider les enfants et leurs parents à comprendre les
              émotions avant que le monde ne leur apprenne à les cacher.
            </p>
            <span className="card-link">Rejoindre l’espace Kids</span>
          </a>

          <a
            href="/livres"
            className="offrande-card"
            data-reveal
            style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
          >
            <div className="offrande-number">III · LES LIVRES</div>
            <h3>SOS Shine® <em>Éditions</em></h3>
            <p>
              Des livres pour ouvrir le dialogue, comprendre autrement et transmettre aux
              enfants une manière plus libre d’habiter leurs émotions.
            </p>
            <span className="card-link">Découvrir les livres</span>
          </a>

          <a
            href="/contact"
            className="offrande-card"
            data-reveal
            style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
          >
            <div className="offrande-number">IV · ACCOMPAGNEMENT</div>
            <h3>Accompagnement <em>privé</em></h3>
            <p>
              Pour les personnes qui sentent qu’elles ont déjà beaucoup compris, mais qu’un
              schéma résiste encore. Un accompagnement individuel, profond et entièrement
              personnalisé.
            </p>
            <span className="card-link">Travailler avec moi</span>
          </a>
        </div>

        <p className="offrandes-note" data-reveal>
          J’accompagne aussi bien des particuliers que des thérapeutes et des accompagnants qui
          souhaitent approfondir leur propre chemin.
        </p>
      </section>

      {/* PREUVES / CRÉDIBILITÉ */}
      <section className="preuves">
        <div className="preuves-header" data-reveal>
          <div className="section-label">La démarche</div>
          <h2 className="preuves-title">Un travail de fond, transmis avec exigence</h2>
          <p className="preuves-intro">
            Depuis plusieurs années, Julia Laureau explore les liens entre conditionnement,
            émotions, inconscient, transmission familiale et liberté intérieure.
          </p>
        </div>

        <div className="preuves-grid">
          <div className="preuve-block" data-reveal>
            <div className="preuve-key">Des années</div>
            <p>d’exploration personnelle et professionnelle.</p>
          </div>
          <div className="preuve-block" data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <div className="preuve-key">Un accompagnement</div>
            <p>individuel, profond et sur mesure.</p>
          </div>
          <div className="preuve-block" data-reveal style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <div className="preuve-key">Des contenus</div>
            <p>de transformation : livres et ressources.</p>
          </div>
          <div className="preuve-block" data-reveal style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}>
            <div className="preuve-key">Une vision globale</div>
            <p>adultes, enfants, familles et transmission.</p>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="temoignages">
        <div className="temoignages-header" data-reveal>
          <div className="section-label">Les retours</div>
          <h2 className="temoignages-title">Ce qu’ils en disent</h2>
          <p className="temoignages-rating">
            <span className="temoignages-stars" aria-hidden="true">★★★★★</span>
            4,9 / 5 · 13 avis Google
          </p>
        </div>

        <div className="temoignages-grid">
          <figure className="temoignage-card" data-reveal>
            <blockquote>
              « Une séance inoubliable. Avec sa douceur, son écoute active et respectueuse,
              Julia sait détecter vos blessures et enclencher le travail qu’il faut faire pour
              les guérir. Une mise en lumière bienveillante. »
            </blockquote>
            <div className="temoignage-stars" aria-hidden="true">★★★★★</div>
            <figcaption>— Lénaick L. <span className="temoignage-src">· Avis Google</span></figcaption>
          </figure>

          <figure className="temoignage-card" data-reveal style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
            <blockquote>
              « J’ai suivi tout un programme avec Julia, de l’amour de soi au déconditionnement.
              Ensemble, nous avons débloqué plein de choses que je ne soupçonnais même pas.
              Grâce à elle, j’ai compris mes blessures et je continue d’apprendre chaque jour
              sur moi. »
            </blockquote>
            <div className="temoignage-stars" aria-hidden="true">★★★★★</div>
            <figcaption>— Christine B. <span className="temoignage-src">· Avis Google</span></figcaption>
          </figure>

          <figure className="temoignage-card" data-reveal style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}>
            <blockquote>
              « Juste WOW ! Un grand merci à Julia pour son écoute, sa patience et sa
              bienveillance. Elle utilise bon nombre d’outils de qualité et est une
              professionnelle très complète. Je recommande les yeux fermés ! »
            </blockquote>
            <div className="temoignage-stars" aria-hidden="true">★★★★★</div>
            <figcaption>— Laura L. <span className="temoignage-src">· Avis Google</span></figcaption>
          </figure>
        </div>
      </section>

      {/* COMMENCER GRATUITEMENT */}
      <section className="commencer" id="commencer">
        <div className="commencer-content" data-reveal>
          <div className="section-label">Entrée libre</div>
          <h2 className="commencer-title">Commencer <em>gratuitement</em></h2>
          <p className="commencer-text">
            Pour entrer doucement dans cet univers, tu peux recevoir une première ressource
            offerte autour du Déconditionnement et des mécanismes émotionnels.
          </p>
          <p className="commencer-note">
            La première ressource offerte arrive bientôt. Laisse ton adresse pour être
            prévenu(e) dès sa sortie.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <div className="final-glow" aria-hidden="true"></div>
        <div className="final-content" data-reveal>
          <h2 className="final-title">Chaque transformation commence par une rencontre.</h2>
          <p className="final-text">
            Avec soi. Avec son histoire. Avec ce qui demande enfin à être vu autrement.
          </p>
          <div className="final-buttons">
            <a href="#offrandes" className="btn-primary">Découvrir mon univers</a>
            <a href="/contact" className="btn-link">Me contacter</a>
          </div>
          <div className="final-signature" aria-hidden="true">33</div>
        </div>
      </section>
    </>
  );
}

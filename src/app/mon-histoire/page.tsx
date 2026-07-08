import SiteHeader from "../SiteHeader";
import SiteBackground from "../SiteBackground";
import Link from "next/link";

export const metadata = {
  title: "Mon histoire · Julia Laureau",
  description: "Il y a des voyages qui changent une vie. L'histoire de Julia Laureau, fondatrice de SOS Shine, auteure et sonothérapeute.",
};

export default function MonHistoire() {
  return (
    <>
      <SiteBackground />
      <SiteHeader />

      <article className="story-page">
        {/* INTRO */}
        <header className="story-header">
          <div className="section-label">Mon histoire</div>
          <h1 className="story-title">
            Il y a des voyages qui changent <em>une vie</em>
          </h1>
        </header>

        {/* CHAPITRE 1 — INTRO */}
        <section className="story-chapter">
          <p className="story-text">
            Pendant longtemps, j&apos;ai cherché à comprendre pourquoi certaines personnes semblaient
            avancer librement, tandis que d&apos;autres répétaient les mêmes schémas, les mêmes
            souffrances, les mêmes blocages, malgré tous leurs efforts.
          </p>
          <p className="story-text">
            Comme beaucoup, j&apos;ai d&apos;abord cherché les réponses à l&apos;extérieur.
          </p>
          <p className="story-text-emphasis">
            Puis la vie m&apos;a invitée à entreprendre le plus grand voyage qui soit.
            Celui vers <em>moi-même</em>.
          </p>
        </section>

        <div className="story-divider"></div>

        {/* CHAPITRE 2 — LE COMMENCEMENT */}
        <section className="story-chapter">
          <p className="story-text">
            Tout a commencé à mes seize ans. J&apos;ai d&apos;abord exploré pour moi. Pour comprendre
            ce que je portais, ce qui me traversait, ce qui me faisait répéter certaines choses.
            Mais sans même que je le cherche, des personnes ont commencé à venir vers moi. Pour me
            parler, se confier, déposer quelque chose. C&apos;était là, sans que je l&apos;aie demandé.
          </p>
          <p className="story-text">
            J&apos;ai créé ma première entreprise à vingt-et-un ans. Et puis sont venus les livres,
            la sonothérapie, les plateformes, les accompagnements. Tout ça n&apos;est pas un projet
            de carrière. <em>C&apos;est une vocation qui est venue me chercher.</em>
          </p>
          <p className="story-text">
            Aujourd&apos;hui je suis maman de trois enfants. Je vis dans le sud de la France, près
            des montagnes et du silence. Je suis auteure, sonothérapeute, et j&apos;accompagne
            d&apos;autres accompagnants.
          </p>
          <p className="story-text">
            Mais avant tout cela, je suis une femme qui s&apos;est cherchée. Et qui a fini par se
            trouver.
          </p>
        </section>

        <div className="story-divider"></div>

        {/* CHAPITRE 3 — L'ASIE */}
        <section className="story-chapter">
          <h2 className="story-chapter-title">Le tournant asiatique</h2>
          <p className="story-text">
            L&apos;expatriation en Asie a marqué un tournant. Ce n&apos;est pas le monde que
            j&apos;y ai découvert, c&apos;est moi.
          </p>
          <p className="story-text">
            Pendant longtemps, j&apos;avais fui certaines peurs et certains ressentis parce que je
            ne savais pas quoi en faire. Les reconnaître aurait signifié leur donner une place
            réelle dans ma vie, et je n&apos;étais pas prête.
          </p>
          <p className="story-text">
            Mais à des milliers de kilomètres de chez moi, les distractions ont disparu. Je ne
            pouvais plus courir. Plus contourner. <em>J&apos;ai dû regarder en face ce qui
            m&apos;habitait depuis toujours et apprendre, peu à peu, à l&apos;accueillir plutôt
            qu&apos;à le combattre.</em>
          </p>
          <p className="story-text-emphasis">
            Nous passons souvent une grande partie de notre existence à essayer de <em>devenir
            quelqu&apos;un</em>. Alors que notre véritable travail consiste peut-être à <em>nous
            souvenir de qui nous sommes déjà</em>.
          </p>
        </section>

        <div className="story-divider"></div>

        {/* CHAPITRE 4 — LE TRAVAIL */}
        <section className="story-chapter">
          <h2 className="story-chapter-title">Vingt ans d&apos;exploration</h2>
          <p className="story-text">
            Depuis plus de vingt ans, j&apos;explore la psychologie humaine, le fonctionnement du
            subconscient, les dynamiques émotionnelles, et les mécanismes invisibles qui
            influencent nos décisions, nos relations, notre santé, notre confiance.
          </p>
          <p className="story-text">
            J&apos;ai investi des dizaines de milliers d&apos;euros en formations, en thérapies, en
            accompagnements. Pas pour devenir une experte. <em>Pour me comprendre moi.</em>
          </p>
          <p className="story-text">
            Et c&apos;est en me comprenant que j&apos;ai commencé à comprendre les autres.
          </p>
        </section>

        <div className="story-divider"></div>

        {/* CHAPITRE 5 — LES OFFRANDES */}
        <section className="story-chapter">
          <h2 className="story-chapter-title">Ce qui est né de ce chemin</h2>
          <p className="story-text">
            De tout ce chemin sont nées plusieurs offrandes.
          </p>

          <ul className="story-offrandes">
            <li>
              <strong>SOS Shine®</strong>, une plateforme dédiée à la connaissance de soi et au
              bien-être émotionnel pour les adultes.
            </li>
            <li>
              <strong>SOS Shine® Kids</strong>, la version gratuite pour les enfants et leurs
              parents.
            </li>
            <li>
              <strong>Deux livres</strong>, Le Déconditionnement et Supers Pouvoirs.
            </li>
            <li>
              <strong>Des accompagnements individuels</strong>, pour les coachs, thérapeutes et
              accompagnants qui sentent qu&apos;il leur manque une dimension dans leur pratique.
            </li>
          </ul>

          <p className="story-text">
            Et au quotidien, sur les réseaux, je partage ce qui monte. Quand ça monte. Pour celles
            et ceux qui ne peuvent pas s&apos;offrir un accompagnement, ou qui ont juste besoin
            d&apos;un mot, d&apos;une intuition, d&apos;un rappel.
          </p>
        </section>

        <div className="story-divider"></div>

        {/* CONCLUSION */}
        <section className="story-chapter story-final">
          <p className="story-text">
            Je ne prétends pas détenir toutes les réponses.
          </p>
          <p className="story-text-emphasis">
            Mais je crois profondément qu&apos;une vie peut changer lorsque l&apos;on commence à se
            poser les bonnes questions. Et qu&apos;une <em>présence</em>, parfois, suffit à
            réveiller quelque chose qui dormait.
          </p>
          <p className="story-text">
            Si tu es arrivée jusqu&apos;ici, peut-être que ce n&apos;est pas un hasard.
          </p>
          <p className="story-welcome">
            <em>Bienvenue chez moi.</em>
          </p>
          <div className="story-signature-33">33</div>
        </section>

        {/* CTA VERS CONTACT */}
        <section className="story-cta">
          <p className="story-cta-text">
            Une question, un échange, une conversation à ouvrir ?
          </p>
          <Link href="/contact" className="btn-primary">
            Me trouver
          </Link>
        </section>
      </article>
    </>
  );
}

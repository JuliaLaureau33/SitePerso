"use client";

import { useState } from "react";
import SiteHeader from "../SiteHeader";
import SiteBackground from "../SiteBackground";

const WHATSAPP_NUMBER = "33665775669";

export default function Contact() {
  const [prenom, setPrenom] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let composedMessage = "Bonjour Julia,\n\n";
    if (prenom.trim()) {
      composedMessage = `Bonjour Julia,\n\nJe m'appelle ${prenom.trim()}.\n\n`;
    }
    if (sujet.trim()) {
      composedMessage += `Sujet : ${sujet.trim()}\n\n`;
    }
    if (message.trim()) {
      composedMessage += message.trim();
    } else {
      composedMessage += "Je vous écris depuis votre site...";
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SiteBackground />
      <SiteHeader />

      <section className="contact-page-v2">
        <div className="contact-container">
          <div className="contact-intro">
            <div className="section-label">Me trouver</div>
            <h1 className="contact-title-v2">
              Une <em>conversation</em> commence ici
            </h1>
            <p className="contact-intro-text">
              Je préfère le lien direct et chaleureux de WhatsApp à la froideur d&apos;un formulaire
              classique. Écris-moi quelques mots ci-dessous, ou clique directement sur le bouton
              pour me parler maintenant.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="prenom">Ton prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Comment t'appelles-tu ?"
                autoComplete="given-name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="sujet">Le sujet de ton message</label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
                placeholder="Coaching, sonothérapie, SOS Shine, livre, autre..."
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Ton message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Dépose ici ce que tu veux me partager..."
                rows={5}
              />
            </div>

            <button type="submit" className="whatsapp-btn-form">
              <svg className="whatsapp-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Envoyer sur WhatsApp
            </button>

            <p className="form-note">
              Ton message s&apos;ouvrira directement dans WhatsApp pour que tu puisses l&apos;envoyer.
              Aucune donnée n&apos;est stockée sur ce site.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

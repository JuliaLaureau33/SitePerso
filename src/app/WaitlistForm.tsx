"use client";

import { useState } from "react";

/**
 * Formulaire de liste d'attente / ressource offerte.
 *
 * Pour connecter un vrai service (Formspree, Mailchimp, Brevo, etc.) :
 *   1. Renseigner ENDPOINT ci-dessous avec l'URL du service.
 *   2. Le formulaire enverra alors l'email en POST.
 * Tant que ENDPOINT est vide, le formulaire affiche simplement un message de confirmation.
 */
const ENDPOINT = ""; // ex : "https://formspree.io/f/xxxxxxx"

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    if (!ENDPOINT) {
      setStatus("done");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className="waitlist-message" role="status">
        Merci. Tu seras prévenu(e) dès la sortie de la ressource.
      </p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ton adresse email"
        aria-label="Adresse email"
        className="waitlist-input"
      />
      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Envoi…" : "Recevoir la ressource offerte"}
      </button>
      {status === "error" && (
        <p className="waitlist-message waitlist-error" role="alert">
          Un souci est survenu. Réessaie dans un instant.
        </p>
      )}
    </form>
  );
}

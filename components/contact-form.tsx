"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";

type ContactFormProps = { recipient: string };

export function ContactForm({ recipient }: ContactFormProps) {
  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!recipient) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const replyTo = String(formData.get("replyTo") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = "Portfolio inquiry — Dishant Rathi";
    const body = [
      "Hi Dishant,",
      "",
      message,
      "",
      name ? `— ${name}` : "",
      replyTo ? `Reply to: ${replyTo}` : "",
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <div className="contact-composer reveal is-visible" data-reveal>
    <div className="composer-intro">
      <span className="composer-icon"><Mail size={19} strokeWidth={1.5} /></span>
      <p className="eyebrow">A DIRECT LINE</p>
      <h3>Tell me what<br />you’re <span className="serif-italic">thinking.</span></h3>
      <p className="composer-copy">A role, a product idea, a data challenge, or simply a good conversation. Send a note and I’ll take it from there.</p>
      {recipient ? <a className="composer-address" href={`mailto:${recipient}`}>{recipient}<ArrowUpRight size={15} /></a> : <span className="composer-address composer-address-pending">[ADD YOUR PUBLIC EMAIL IN lib/content.ts]</span>}
    </div>

    <form className="inquiry-form" onSubmit={openDraft}>
      <div className="form-row"><label htmlFor="inquiry-name">YOUR NAME <span>OPTIONAL</span></label><input id="inquiry-name" name="name" type="text" autoComplete="name" placeholder="How should I address you?" /></div>
      <div className="form-row"><label htmlFor="inquiry-email">YOUR EMAIL <span>OPTIONAL</span></label><input id="inquiry-email" name="replyTo" type="email" autoComplete="email" placeholder="Where can I reply?" /></div>
      <div className="form-row"><label htmlFor="inquiry-message">YOUR MESSAGE</label><textarea id="inquiry-message" name="message" required rows={3} placeholder="What would you like to talk about?" /></div>
      <div className="form-submit-row"><button className="button button-dark inquiry-submit" type="submit" disabled={!recipient}>Open email draft <Send size={15} /></button><p>{recipient ? "Opens your email app with a draft. You decide whether to send." : "Set your public email address to enable the composer."}</p></div>
    </form>
  </div>;
}

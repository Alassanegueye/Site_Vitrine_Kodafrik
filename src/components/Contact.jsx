import { useState } from 'react'
import {
  budgets,
  company,
  contactAccessKey,
  contactEndpoint,
  projectTypes,
} from '../data/site'
import Icon from './Icon'
import './Contact.css'

const emptyForm = {
  nom: '',
  entreprise: '',
  email: '',
  telephone: '',
  type: projectTypes[0],
  budget: budgets[0],
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  // idle · sending · sent · mailto (repli) · error
  const [status, setStatus] = useState('idle')

  const update = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.nom.trim().length < 2) next.nom = 'Indiquez votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      next.email = 'Adresse e-mail invalide.'
    if (form.message.trim().length < 15)
      next.message = 'Décrivez votre projet en quelques mots (15 caractères min.).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildSummary = () =>
    [
      `Nom : ${form.nom}`,
      `Entreprise : ${form.entreprise || '—'}`,
      `E-mail : ${form.email}`,
      `Téléphone : ${form.telephone || '—'}`,
      `Type de projet : ${form.type}`,
      `Budget estimé : ${form.budget}`,
      '',
      'Projet :',
      form.message,
    ].join('\n')

  // Repli quand aucun service d'envoi n'est configuré : on ouvre le client
  // mail du visiteur avec la demande déjà rédigée.
  const sendByMail = () => {
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Demande de devis — ${form.type}`,
    )}&body=${encodeURIComponent(buildSummary())}`
    setStatus('mailto')
    setForm(emptyForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    if (!contactEndpoint) {
      sendByMail()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...(contactAccessKey ? { access_key: contactAccessKey } : {}),
          subject: `Demande de devis — ${form.type}`,
          from_name: form.nom,
          replyto: form.email,
          nom: form.nom,
          entreprise: form.entreprise,
          email: form.email,
          telephone: form.telephone,
          type: form.type,
          budget: form.budget,
          message: form.message,
          recapitulatif: buildSummary(),
        }),
      })

      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setStatus('sent')
      setForm(emptyForm)
    } catch {
      // L'envoi a échoué : le visiteur ne doit pas perdre sa demande.
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__aside reveal">
          <span className="eyebrow">Parlons de votre projet</span>
          <h2>
            Un échange, <span className="accent">un devis sous 48h</span>
          </h2>
          <p className="contact__lead">
            Décrivez votre besoin en quelques lignes. Nous revenons vers vous
            avec une première estimation, un périmètre clair et les prochaines
            étapes — sans engagement.
          </p>

          <ul className="contact__infos">
            <li>
              <span className="contact__info-icon">
                <Icon name="mail" size={19} />
              </span>
              <div>
                <small>E-mail</small>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__info-icon">
                <Icon name="phone" size={19} />
              </span>
              <div>
                <small>Téléphone</small>
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact__info-icon">
                <Icon name="pin" size={19} />
              </span>
              <div>
                <small>Adresse</small>
                <span>{company.address}</span>
              </div>
            </li>
            <li>
              <span className="contact__info-icon">
                <Icon name="clock" size={19} />
              </span>
              <div>
                <small>Horaires</small>
                <span>{company.hours}</span>
              </div>
            </li>
          </ul>

          <a
            className="contact__whatsapp"
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" size={20} />
            Discuter sur WhatsApp
          </a>
        </div>

        <div className="contact__form-wrap reveal">
          {status === 'sent' || status === 'mailto' ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon">
                <Icon name="check" size={28} />
              </span>
              <h3>
                {status === 'sent'
                  ? 'Votre demande est bien partie'
                  : 'Votre demande est prête à partir'}
              </h3>
              <p>
                {status === 'sent' ? (
                  <>
                    Nous l’avons reçue et nous vous répondons sous 24h ouvrées,
                    à l’adresse que vous avez indiquée. Une urgence ? Appelez
                    le <a href={`tel:${company.phoneHref}`}>{company.phone}</a>.
                  </>
                ) : (
                  <>
                    Votre logiciel de messagerie vient de s’ouvrir avec le
                    récapitulatif. Envoyez-le, nous vous répondons sous 24h
                    ouvrées. Rien ne s’est ouvert ? Écrivez-nous directement à{' '}
                    <a href={`mailto:${company.email}`}>{company.email}</a>.
                  </>
                )}
              </p>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => setStatus('idle')}
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="nom">Nom complet *</label>
                  <input
                    id="nom"
                    type="text"
                    value={form.nom}
                    onChange={update('nom')}
                    placeholder="Awa Diop"
                    aria-invalid={Boolean(errors.nom)}
                  />
                  {errors.nom && <span className="field__error">{errors.nom}</span>}
                </div>
                <div className="field">
                  <label htmlFor="entreprise">Entreprise</label>
                  <input
                    id="entreprise"
                    type="text"
                    value={form.entreprise}
                    onChange={update('entreprise')}
                    placeholder="Nom de votre structure"
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="vous@entreprise.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className="field__error">{errors.email}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    id="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={update('telephone')}
                    placeholder="+221 ..."
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="type">Type de projet</label>
                  <select id="type" value={form.type} onChange={update('type')}>
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="budget">Budget estimé</label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={update('budget')}
                  >
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Votre projet *</label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Objectif, utilisateurs, fonctionnalités attendues, délai souhaité…"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && (
                  <span className="field__error">{errors.message}</span>
                )}
              </div>

              {status === 'error' && (
                <p className="contact__error" role="alert">
                  L’envoi a échoué. Réessayez, ou écrivez-nous directement à{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a> — votre
                  message est toujours dans le formulaire.
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary btn--block"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi en cours…' : 'Envoyer ma demande'}
                {status !== 'sending' && <Icon name="arrowRight" />}
              </button>
              <p className="contact__note">
                Vos informations servent uniquement à répondre à votre demande.
                Aucune inscription, aucun spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

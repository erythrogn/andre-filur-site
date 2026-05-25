'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ContatoPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Integração com FormSubmit ou similar
      const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL_HERE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Coluna Esquerda - Texto de Abertura */}
          <div className="space-y-8">
            <h1 className="heading-2">
              {t('contact.title')}
            </h1>
            
            <p className="font-cormorant text-lg md:text-xl text-areia leading-relaxed">
              {t('contact.intro')}
            </p>
          </div>

          {/* Coluna Direita - Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-text block mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-fundo-secundario border border-marrom-medio text-areia px-4 py-3 rounded-sm focus:outline-none focus:border-ocre transition-slow"
                />
              </div>

              <div>
                <label htmlFor="email" className="label-text block mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-fundo-secundario border border-marrom-medio text-areia px-4 py-3 rounded-sm focus:outline-none focus:border-ocre transition-slow"
                />
              </div>

              <div>
                <label htmlFor="message" className="label-text block mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-fundo-secundario border border-marrom-medio text-areia px-4 py-3 rounded-sm focus:outline-none focus:border-ocre transition-slow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="label-text bg-ocre text-fundo-principal px-8 py-3 rounded-sm hover:bg-areia-clara transition-slow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'ENVIANDO...' : t('contact.send')}
              </button>

              {/* Mensagens de status */}
              {status === 'success' && (
                <p className="body-text text-ocre">
                  {t('contact.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="body-text text-red-400">
                  {t('contact.error')}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

# Guia de Customização

Este documento detalha como personalizar o site para adicionar o conteúdo real do artista.

## 📸 1. Adicionar Imagens das Obras

### Passo a Passo

1. **Preparar as imagens:**
   - Formato recomendado: WebP ou JPG
   - Dimensões: 1200px x 1500px (proporção 4:5)
   - Peso máximo: 500KB por imagem
   - Nomenclatura: use nomes descritivos sem espaços (ex: `guardia-do-rio.jpg`)

2. **Copiar para a pasta pública:**
   ```
   /public/images/obras/
   ```

3. **Atualizar referências em `src/data/works.ts`:**
   ```typescript
   {
     id: '1',
     title: 'Guardião do Rio',
     titleEn: 'River Guardian',
     series: 'carranqueira',
     year: '2024',
     technique: 'Madeira esculpida e pigmentos naturais',
     dimensions: '180 x 60 x 40 cm',
     image: '/images/obras/guardia-do-rio.jpg', // <- Atualizar aqui
   }
   ```

### Otimização de Imagens

Use ferramentas online para otimizar:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

## 🎬 2. Integrar Vídeo de Apresentação

### Hospedar no Vimeo (Recomendado)

1. **Upload do vídeo no Vimeo:**
   - Criar conta em [vimeo.com](https://vimeo.com)
   - Fazer upload do vídeo
   - Configurar privacidade conforme necessário
   - Copiar o ID do vídeo da URL

2. **Atualizar `src/app/page.tsx`:**

Encontre este trecho:
```tsx
<div className="relative aspect-video bg-fundo-secundario rounded-sm overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center space-y-4">
      <p className="label-text opacity-50">
        Vídeo de Apresentação
      </p>
      <p className="body-text opacity-40 text-xs">
        (A ser integrado via Vimeo ou YouTube)
      </p>
    </div>
  </div>
</div>
```

Substitua por:
```tsx
<div className="relative aspect-video bg-fundo-secundario rounded-sm overflow-hidden">
  <iframe
    src="https://player.vimeo.com/video/SEU_VIDEO_ID_AQUI"
    className="w-full h-full"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Vídeo de Apresentação - Andre Filúr"
  ></iframe>
</div>
```

### Ou usar YouTube

```tsx
<iframe
  src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI"
  className="w-full h-full"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="Vídeo de Apresentação - Andre Filúr"
></iframe>
```

## 📧 3. Configurar Formulário de Contato

### Opção 1: FormSubmit (Gratuito, Simples)

1. **Editar `src/app/contato/page.tsx`:**

Encontre:
```typescript
const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL_HERE', {
```

Substitua `YOUR_EMAIL_HERE` pelo email do artista:
```typescript
const response = await fetch('https://formsubmit.co/ajax/contato@andrefilur.com', {
```

2. **Primeiro envio:**
   - No primeiro envio, você receberá um email de confirmação
   - Clique no link para ativar

3. **Configurações opcionais do FormSubmit:**

Adicione campos ocultos no formulário para personalização:
```tsx
<input type="hidden" name="_subject" value="Novo contato - Site Andre Filúr" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
```

### Opção 2: Netlify Forms

Se hospedar no Netlify, é ainda mais simples:

1. **Adicionar atributo ao form:**
```tsx
<form onSubmit={handleSubmit} className="space-y-6" name="contato" netlify>
  <input type="hidden" name="form-name" value="contato" />
  {/* resto do formulário */}
</form>
```

2. **Os emails chegarão no painel do Netlify**

### Opção 3: Resend (API moderna)

Para maior controle e templates customizados:

1. **Instalar dependência:**
```bash
npm install resend
```

2. **Criar API Route em `src/app/api/contact/route.ts`:**
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('YOUR_API_KEY');

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Site <contato@andrefilur.com>',
      to: 'email@destino.com',
      subject: `Novo contato de ${name}`,
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensagem:</strong> ${message}</p>`
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

## 🎨 4. Atualizar Dados das Obras

Edite `src/data/works.ts`:

```typescript
export const works: Work[] = [
  {
    id: '1',
    title: 'Nome da Obra em Português',
    titleEn: 'Artwork Title in English',
    series: 'carranqueira', // ou 'encruzilhada', 'ori', 'exposicoes'
    year: '2024',
    technique: 'Técnica utilizada',
    dimensions: '100 x 80 x 50 cm',
    image: '/images/obras/nome-do-arquivo.jpg',
  },
  // Adicionar mais obras aqui...
]
```

## 📅 5. Atualizar Exposições

Edite `src/data/exhibitions.ts`:

```typescript
export const exhibitions: Exhibition[] = [
  {
    id: '1',
    year: '2024',
    name: 'Nome da Exposição',
    nameEn: 'Exhibition Name',
    type: 'individual', // ou 'collective'
    location: 'Nome do Local',
    locationEn: 'Location Name',
    city: 'Cidade, País',
  },
  // Adicionar mais exposições aqui...
]
```

## 🌐 6. Configurar Domínio Personalizado

### No Vercel

1. **Acessar Settings > Domains**
2. **Adicionar domínio (ex: andrefilur.com)**
3. **Configurar DNS conforme instruções:**
   - Tipo A: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`

### No Netlify

1. **Acessar Domain Settings**
2. **Add custom domain**
3. **Configurar DNS:**
   - Netlify DNS (recomendado - automático)
   - Ou adicionar registros manualmente

## 🎨 7. Personalizar Cores (Opcional)

Se desejar ajustar a paleta, edite `tailwind.config.js`:

```javascript
colors: {
  'fundo-principal': '#1A1510',
  'fundo-secundario': '#2C2418',
  'marrom-medio': '#4A3F30',
  'ocre': '#8B7355',
  'areia': '#D4C9B0',
  'areia-clara': '#E8DCC5',
  'creme': '#F5F1EA',
}
```

## 📱 8. Adicionar Links de Redes Sociais

Edite `src/components/Footer.tsx`:

Descomente e atualize:
```tsx
<div className="flex gap-6">
  <a 
    href="https://instagram.com/andrefilur" 
    target="_blank"
    rel="noopener noreferrer"
    className="label-text hover-fade"
  >
    Instagram
  </a>
  <a 
    href="https://linkedin.com/in/andrefilur" 
    target="_blank"
    rel="noopener noreferrer"
    className="label-text hover-fade"
  >
    LinkedIn
  </a>
</div>
```

## 🔍 9. Otimizar SEO

### Meta Tags Globais

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Andre Filúr — Artista Visual',
  description: 'Descrição otimizada para SEO aqui',
  keywords: ['arte', 'artista visual', 'pintura', 'escultura', 'São Paulo'],
  authors: [{ name: 'Andre Filúr' }],
  openGraph: {
    title: 'Andre Filúr — Artista Visual',
    description: 'Obra nascida do encontro entre matéria e espírito.',
    url: 'https://andrefilur.com',
    siteName: 'Andre Filúr',
    images: [
      {
        url: 'https://andrefilur.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andre Filúr — Artista Visual',
    description: 'Obra nascida do encontro entre matéria e espírito.',
    images: ['https://andrefilur.com/og-image.jpg'],
  },
}
```

### Criar OG Image

Criar uma imagem 1200x630px e salvar em `/public/og-image.jpg`

### Google Analytics (Opcional)

1. **Criar conta no Google Analytics**
2. **Obter Measurement ID (ex: G-XXXXXXXXXX)**
3. **Adicionar ao `src/app/layout.tsx`:**

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Todas as imagens das obras foram adicionadas
- [ ] Vídeo de apresentação integrado
- [ ] Formulário de contato configurado e testado
- [ ] Dados de obras atualizados
- [ ] Dados de exposições atualizados
- [ ] Links de redes sociais adicionados
- [ ] Domínio personalizado configurado
- [ ] Meta tags de SEO revisadas
- [ ] Site testado em mobile, tablet e desktop
- [ ] Performance verificada (Lighthouse)
- [ ] Textos revisados em PT e EN

## 🆘 Problemas Comuns

### Imagens não carregam

Verifique se:
1. Arquivos estão em `/public/images/`
2. Caminhos em `works.ts` estão corretos
3. Nomes de arquivo não têm espaços ou caracteres especiais

### Formulário não envia

1. Verifique email configurado no código
2. Teste em produção (alguns serviços não funcionam em localhost)
3. Verifique console do navegador para erros

### Site lento

1. Otimize imagens (use WebP, comprima)
2. Verifique se há imagens muito grandes
3. Use Lighthouse para identificar problemas

---

**Dúvidas?** Consulte o README.md principal ou entre em contato com o desenvolvedor.

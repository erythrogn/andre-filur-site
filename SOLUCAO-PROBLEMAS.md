# Solução Rápida de Problemas

## Problema: "Missing script: dev"

Este erro ocorre quando o `package.json` não tem os scripts corretos.

### Solução 1: Verificar se está na pasta correta

```powershell
# Verifique se você está na pasta correta
ls

# Deve mostrar arquivos como:
# - src/
# - public/
# - package.json
# - next.config.js
# - tailwind.config.js
```

### Solução 2: Substituir o package.json

Se o `package.json` estiver incorreto, copie e cole este conteúdo:

```json
{
  "name": "andre-filur-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.12.7",
    "@types/react": "18.3.1",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.19",
    "eslint": "8.57.0",
    "eslint-config-next": "14.2.3",
    "postcss": "8.4.38",
    "tailwindcss": "3.4.3",
    "typescript": "5.4.5"
  }
}
```

Depois execute:
```powershell
npm install
npm run dev
```

### Solução 3: Reextrair o ZIP em pasta limpa

1. **Crie uma nova pasta vazia:**
   ```powershell
   mkdir C:\projetos\andre-filur
   cd C:\projetos\andre-filur
   ```

2. **Extraia o ZIP nesta nova pasta**

3. **Entre na pasta do projeto:**
   ```powershell
   cd andre-filur-site
   ```

4. **Instale as dependências:**
   ```powershell
   npm install
   ```

5. **Execute o projeto:**
   ```powershell
   npm run dev
   ```

### Solução 4: Limpar cache do npm

Se mesmo assim não funcionar:

```powershell
# Deletar node_modules e package-lock.json
rm -r node_modules
rm package-lock.json

# Limpar cache do npm
npm cache clean --force

# Reinstalar
npm install

# Executar
npm run dev
```

### Verificar se está tudo correto

Após executar `npm run dev`, você deve ver:

```
▲ Next.js 14.2.3
- Local:        http://localhost:3000
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Se ainda não funcionar

1. Verifique se tem Node.js instalado:
   ```powershell
   node --version
   # Deve mostrar v18 ou superior
   ```

2. Se não tiver Node.js, baixe em: https://nodejs.org/

3. Depois de instalar Node.js, repita os passos acima.

## Estrutura esperada do projeto

# Kupię Grunt — gotowy projekt Next.js

To jest kompletna paczka projektu gotowa do uruchomienia lokalnie i wdrożenia na Vercel.

## 1. Co masz w środku
- `app/page.tsx` — gotowa strona
- `app/layout.tsx` — układ aplikacji
- `app/globals.css` — style globalne i Tailwind
- `public/` — logo i wizualizacje
- `package.json` — zależności
- `postcss.config.mjs` — konfiguracja Tailwind
- `tsconfig.json` — konfiguracja TypeScript

## 2. Jak uruchomić lokalnie
W terminalu, będąc w folderze projektu:
```bash
npm install
npm run dev
```

Potem otwórz:
`http://localhost:3000`

## 3. Jak wrzucić na Vercel przez GitHub
1. Rozpakuj ZIP
2. Załóż nowe repozytorium na GitHubie
3. Wgraj cały rozpakowany folder do repozytorium
4. Wejdź na Vercel i zaloguj się
5. Kliknij **Add New → Project**
6. Wybierz repozytorium z tą stroną
7. Kliknij **Deploy**

Vercel powinien sam wykryć Next.js i wdrożyć stronę.

## 4. Jak wrzucić na Vercel bez GitHuba
W folderze projektu:
```bash
npm install
npm i -g vercel
vercel --prod
```

## 5. Dane do podmiany w przyszłości
- telefon
- e-mail
- link do polityki prywatności
- link do RODO
- treść formularza

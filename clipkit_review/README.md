## Getting Started

[Use this template](https://github.com/new?template_name=template-next-app-dir&template_owner=remotion-dev) to clone it into your GitHub account. Run

```
npm i
```

afterwards. Alternatively, use this command to scaffold a project:

```
npx create-video@latest --next
```

## Commands

Start the Next.js dev server:

```
npm run dev
```

Open the Remotion Studio:

```
npm run remotion
```

## Important Ideas Explored

- Clipkit different Texts have been explored in detail

- CSS Properties usage on SVG inside Remotion is reviewed in [SVG Intro](src/remotion/MyComp/SvgIntro1.tsx) file. This only works inside Remotion.

- Inorder to work the same outside using React Components. Take a look at [MyIntroSvg1](src/components/MySvgIntro1/MySvgIntro1.tsx) and its companion [MyIntroSvg1.css](src/components/MySvgIntro1/MySvgIntro1.css).
   - After building the component, one has to just place the component

- Animation part of moving the eyes of the cat is explained under [Cat](src/components/Cat/)
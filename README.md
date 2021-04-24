# Segundo dia -> Coding Dojo: Finalizar design tokens e inicia UIKit(componentes)

## Verificar quais plataforma fazer o build

- [x]  SASS
- [x]  Json
- [x]  Javascript

## Verificar tokens faltando para criar componentes

- [x]  Button
- [ ]  Header
- [ ]  Card

## Criar estrutura do projeto

- [x]  iniciar projeto com React cli
- [x]  instalar storybook
- [x]  instalar dependências para build
    - [x]  cross-env
    - [x]  babel → @babel/cli @babel/core babel-loader
- [x]  configurar babel
    - [x]  [https://gist.github.com/IsraelSampaio/49ddd491b570fa88b7165c12abefb42f](https://gist.github.com/IsraelSampaio/49ddd491b570fa88b7165c12abefb42f)
- [x]  executar o build
    - [x]  cross-env BABEL_ENV=production babel src -d dist

## Criar componentes

- [x]  Button
- [ ]  Header
- [ ]  Card

### Extra: consumir componentes no projeto em Nextjs

## Exemplos

[https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/)


# ------------------------------------ #

# Primeiro dia -> Coding Dojo: Design Tokens

## Estruturar projeto

- [x]  Criar um monorepo
- [x]  Separar pacotes
    - [x]  next
    - [x]  design tokens
    - [x]  ui-components

## Pacote design tokens

- [x]  Instalar cli do style dictionary

    [https://amzn.github.io/style-dictionary/#/quick_start](https://amzn.github.io/style-dictionary/#/quick_start)

## Verificar quais plataforma fazer o build

- [x]  SASS
- [ ]  Flutter
- [ ]  Json
- [ ]  Javascript

## Montar tokens

- [x]  colors
- [x]  spacing
    - [x]  margin
    - [x]  padding
- [x]  font size

## Consumindo tokens

- [x]  Realizar o build no Design tokens
    - [x]  colocar o build para ser realizado quando instalar as dependências
- [ ]  importar tokens na folha de estilo

## Exemplos

### Flutter

 [https://github.com/amzn/style-dictionary/tree/master/examples/advanced/flutter](https://github.com/amzn/style-dictionary/tree/master/examples/advanced/flutter)

### Multi brand and Multi platform

[https://github.com/amzn/style-dictionary/tree/master/examples/advanced/multi-brand-multi-platform](https://github.com/amzn/style-dictionary/tree/master/examples/advanced/multi-brand-multi-platform)

### Auto Rebuild Watcher

[https://github.com/amzn/style-dictionary/tree/master/examples/advanced/auto-rebuild-watcher](https://github.com/amzn/style-dictionary/tree/master/examples/advanced/auto-rebuild-watcher)

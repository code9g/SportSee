# SportSee

Projet 12 de la formation "Développeur JavaScript / React" de OpenClassRoom

Développez un tableau de bord d'analytics avec React

## Mise en garde

Ce projet a été testé et réalisé avec la version 20.15.1 de Node.js

## Mise en place de la partie back

Cette partie utilise de préférence yarn, cependant, vous pouvez également le faire avec npm, ou passer par docker (pour cela je vous recommande de suivre le [README.md](./back/README.md#3-project-with-docker) du back).

### Avec yarn

Installer les dépendances :

```
cd back
yarn
```

Lancer le back :

```
cd back
yarn start
```

### Avec npm

Installer les dépendances :

```
cd back
npm install
```

Lancer le back :

```
cd back
npm run dev
```

## Mise en place de la partie front

Dans un nouveal terminal :

```
cd front
npm install
```

Et lancer le projet avec :

```
npm run dev
```

## Note

Si vous avez déjà installez les dépendances, vous pouvez directement lancer la partie back et la partie front depuit la racine du projet avec :

```
npm run back
```

et

```
npm run front
```

## Documentation

La documentation a été réalisé en utilisant la syntaxe de jsdoc, permettant à la fois d'être directement lisible par Visual Studio Code,
qui affiche un tooltip lorsque la souris passe sur un élément avec une documentation jsdoc, mais également de générer "automatiquement"
un document html.

Pour générer la documentation html, il faut que jsdoc et better-docs soit installé (de préférence en global) avec :

```
npm install -g jsdoc
npm install -g better-docs
```

Puis de lancer la commande :

```
npm run docs
```

La documentation est accessible [ici](https://code9g.github.io/SportSee/)

Note : La documentation sera généré à la racine du projet, afin de faciliter l'affichage via la page github.

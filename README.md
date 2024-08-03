# SportSee

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

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

Si vous avez déjà installé les dépendances, vous pouvez directement lancer la partie back et la partie front depuit la racine du projet avec :

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

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](<[http://](https://github.com/code9g/)>)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pierre-andre-henry/)

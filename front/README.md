# SportSee

Projet 12 de la formation "Développeur JavaScript / React" de OpenClassRoom

Développez un tableau de bord d'analytics avec React

## Introduction

Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif.

En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur.

Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

## Technologies

Ce projet a été réalisé en [Vite + React](https://vitejs.dev/), en Javascript (et non en TypesSript).

Ce choix a été fait par simplicité, en effet, il est plus rapide et facile d'utiliser [Vite + React](https://vitejs.dev/).

Le routage choisi est celui de [react-router-dom](https://reactrouter.com/en/main), assez simple à mettre en oeuvre.

Concernant la partie "charts", j'ai choisi [recharts](https://recharts.org/en-US/), plus facile et plus simple à utiliser, comparé a [d3](https://d3js.org/) que je trouve assez verbeux.

## Les dépendances

Pour installer les dépendances :

```
npm install
```

Liste des dépendances (et leur documentation) en dehors de celle installé par défaut par Vite + React :

- [react-router-dom](https://reactrouter.com/en/main),
- [recharts](https://recharts.org/en-US/),
- [sass](https://sass-lang.com/).

## Tester

Lancer avec :

```
npm run dev
```

Cliquez sur "Profil" pour arriver sur le profil d'un utilisateur choisi arbirtrairement par mes soins.

Sinon, et ce uniquement afin de tester différents utilisateurs disponibles, vous pouvez également y accéder en allant sur /user/:id, avec :id commet identifiant de l'utilisateur.

Cependant, à ce jour, il n'y a que deux utilisateurs, Karl (Id: 12) et Cécilia (Id: 18).

Si vous indiquez un identifiant invalide, comme par exemple "1x" (autrement dit, qui n'est strictement un nombre), une page d'erreur s'affichera et indiquera que l'identifiant est invalide.

Et si l'utilisateur n'existe pas, il vous indiquera simplement que cet
utilisateur n'existe pas.

## Notes

Seule la page "profil" a été développée, ainsi que la route /user/:id qui ne fait que reconduire sur la page "profil" avec l'identifiant souhaité.

🎡 Roue du Hasard

Une petite application web pour prendre des décisions de façon ludique : ajoutez vos options, faites tourner la roue, et laissez le hasard choisir pour vous !

🔗 Démo en ligne : roue-du-hasard.vercel.app

✨ Fonctionnalités
Ajout et suppression d'options à la volée
Roue dessinée en SVG, avec une couleur distincte par option
Animation de rotation fluide et tirage aléatoire équitable
Affichage clair du résultat gagnant
🛠️ Stack technique
React (Vite) — pour l'interface et la gestion d'état
SVG — pour le dessin de la roue et de ses parts
CSS — pour l'animation de rotation et le style général
🚀 Installation et lancement en local

Cloner le dépôt :

bash
git clone https://github.com/Cricrou13/Roue-du-hasard.git
cd Roue-du-hasard

Installer les dépendances :

bash
npm install

Lancer le serveur de développement :

bash
npm run dev

L'application sera accessible sur http://localhost:5173.

📁 Structure du projet
src/
├── components/
│   ├── Wheel.jsx          → la roue (SVG + rotation)
│   ├── Wheel.css          → styles de la roue et du pointeur
│   └── OptionsForm.jsx    → formulaire d'ajout/suppression d'options
├── utils/
│   └── wheelHelpers.js    → calculs (angles, couleurs, rotation, tirage)
├── App.jsx
├── main.jsx
└── index.scss
🔭 Améliorations à venir
Sauvegarde des listes d'options (localStorage)
Historique des tirages précédents
Responsive mobile optimisé
Son au tirage
📄 Licence

Projet personnel réalisé dans le cadre d'une formation développeur web.

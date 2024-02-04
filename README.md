# KreatPass

Inspiré par [MotDePasse.xyz](https://www.motdepasse.xyz/), pour son design et ses fonctionnalités, mais avec un code nouvellement créé, KreatPass est une application de génération de mots de passe sécurisé et personnalisable. Il permet aux utilisateurs de créer des mots de passe forts en sélectionnant des critères tels que la longueur, l'inclusion de chiffres, de lettres majuscules et minuscules, ainsi que de caractères spéciaux.

## Fonctionnalités

- **Personnalisation**: Choisissez la longueur de votre mot de passe et les types de caractères à inclure.
- **Sécurité**: Génère des mots de passe complexes pour une sécurité optimale.
- **Interface utilisateur**: Une interface épurée et facile à utiliser.
- **Exclusion de caractères similaires**: Évite les confusions en excluant des caractères similaires.

## Installation et Construction

Pour installer directement KreatPass, aller sur les `[Releases](https://github.com/Kirua6/KreatPass/releases/tag/v1.0.0)`, télécharger KreatPass.Setup.1.0.0.exe, exécuter le fichier, quand `Windows défend votre ordinateur` apparait, cliquer sur `Informations complémentaires`, puis `Exécuter quand même`.

Pour construire l'application KreatPass localement, suivez ces étapes :

1. Clonez le dépôt :
- `git clone https://github.com/Kirua6/KreatPass.git`
- `cd KreatPass/KreatPass_Code_Source`

2. Installez Node.js et les dépendances nécessaires :
- Installez [Node.js](https://nodejs.org/en), Vérifier son installation avec `node -- version` et `npm --version` 
- Lancer dans le même répertoire que votre projet `npm install`

3. Pour lancer l'application ou l'empaqueter pour Windows 64 bits, exécutez :
- Lancer `npm start` ou créer l'application avec `npx electron-packager . KreatPass --platform=win32 --arch=x64 --icon=KreatPass.ico`

- Ça générera un dossier `KreatPass-win32-x64` contenant l'application prête à être exécutée.
- Il suffira juste de créer et placer un raccourci de KreatPass.exe sur votre bureau par la suite.

## Utilisation

Pour générer un mot de passe :

1. Ouvrez KreatPass.
2. Sélectionnez les critères pour votre mot de passe.
3. Cliquez sur "Créer votre mot de passe".
4. Copiez le mot de passe généré et utilisez-le selon vos besoins.

## Contribuer

Les contributions sont les bienvenues! Pour contribuer à KreatPass, veuillez forker le dépôt, créer une branche pour votre fonctionnalité, et soumettre une pull request.

## Licence

KreatPass est distribué sous la licence MIT. Voir [`LICENSE`](https://github.com/Kirua6/KreatPass/blob/main/LICENSE) pour plus d'informations.

## Contact

Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir un issue ou à me contacter directement sur [LinkedIn](https://www.linkedin.com/in/killian-van-ruymbeke-137b27214/).

---
Créé par [Killian Van Ruymbeke](https://kvrcybertechno.online/)

## Crédits

Cette application utilise des images générées par OpenAI's DALL·E.

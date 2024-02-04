document.addEventListener('DOMContentLoaded', function () {
    const lengthSelect = document.getElementById('length');
    const countSelect = document.getElementById('count');
  
    // créer options pour nombre de caractères
    for (let i = 10; i <= 512; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      lengthSelect.appendChild(option);
    }
  
    // Créer options pour nombre de mdp
    const counts = [2,3,4,5,6,7,8,9,10,15,20,25,30];
    counts.forEach(count => {
      const option = document.createElement('option');
      option.value = count;
      option.textContent = count;
      countSelect.appendChild(option);
    });

    const specialCharsList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '|', '\\', '~'];
    const specialCharsContainer = document.getElementById('specialChars');
    const includeSpecialCheckbox = document.getElementById('includeSpecial');
    const specialCharsContainerDiv = document.getElementById('specialCharsContainer');
    // liste caractères spéciaux masquée par défaut.
    specialCharsContainerDiv.style.display = 'none';
    

    // Générer + insérer cases à cocher pour caractères spéciaux
    specialCharsList.forEach(char => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('value', char);
        //cases à cocher ne sont pas cochées par défaut.
        checkbox.checked = false; 
        label.appendChild(checkbox);
        label.append(char);
        specialCharsContainer.appendChild(label);
    });
  
    
    // Afficher/masquer caractères spéciaux en fonction de l'état de la case à cocher principale
  includeSpecialCheckbox.addEventListener('change', function () {
    specialCharsContainerDiv.style.display = this.checked ? 'block' : 'none';
    specialCharsContainer.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
      checkbox.checked = this.checked;
    });
  });
      
  
    document.getElementById('generatePassword').addEventListener('click', generateAndDisplayPassword);
  });
  
  function generatePassword(options) {
    const numbers = '0123456789';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialCharacters = '!@#$%^&*()-_=+[]{};:,.<>?/|~';
  
    let characters = '';
    if (options.includeDigits) characters += numbers;
    if (options.includeLowercase) characters += lowercaseLetters;
    if (options.includeUppercase) characters += uppercaseLetters;
    if (options.includeSpecial) {
      const allowedSpecials = Array.from(document.querySelectorAll('#specialChars input:checked')).map(el => el.value);
      characters += allowedSpecials.join('');
    }
  
    const similarCharacters = /[oO0l1I]/g;
    if (options.excludeSimilar) {
      characters = characters.replace(similarCharacters, '');
    }
  
    let password = '';
    for (let i = 0; i < options.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  function generateAndDisplayPassword() {
    const options = {
      length: parseInt(document.getElementById('length').value, 10),
      includeDigits: document.getElementById('includeDigits').checked,
      includeLowercase: document.getElementById('includeLowercase').checked,
      includeUppercase: document.getElementById('includeUppercase').checked,
      includeSpecial: document.getElementById('includeSpecial').checked,
      excludeSimilar: document.getElementById('excludeSimilar').checked
    };
  
    const passwordCount = parseInt(document.getElementById('count').value, 10);
    // Vide conteneur de mdp précédents
  const passwordContainer = document.getElementById('generatedPasswords');
  passwordContainer.innerHTML = '';

  for (let i = 0; i < passwordCount; i++) {
    const password = generatePassword(options);
    const passwordDiv = document.createElement('div');
    passwordDiv.classList.add('password-item');

    const passwordSpan = document.createElement('span');
    passwordSpan.classList.add('password-text');
    passwordSpan.textContent = password;
    passwordDiv.appendChild(passwordSpan);

    const actionButtonsDiv = document.createElement('div');
    actionButtonsDiv.classList.add('action-buttons');

    const copyButton = document.createElement('button');
    copyButton.classList.add('action-button');
    copyButton.textContent = 'Copier';
    copyButton.onclick = function() { copyToClipboard(passwordSpan.textContent); };

    const shuffleButton = document.createElement('button');
    shuffleButton.classList.add('action-button');
    shuffleButton.textContent = 'Mélanger';
    shuffleButton.onclick = function() {
      passwordSpan.textContent = shuffleString(passwordSpan.textContent);
    };

    actionButtonsDiv.appendChild(copyButton);
    actionButtonsDiv.appendChild(shuffleButton);
    passwordDiv.appendChild(actionButtonsDiv);

    passwordContainer.appendChild(passwordDiv);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const container = document.querySelector('.container');
          container.scrollTop = container.scrollHeight;
        });
      });
  }
}

// mélanger caractères d'une chaîne de caractères
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Echange les éléments
    }
    return arr.join('');
  }
// copier texte dans presse-papiers
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Texte copié avec succès');
  }).catch(function(err) {
    console.error('Erreur lors de la copie du texte :', err);
  });
}

const container = document.querySelector('.container');
  // défiler vers le bas après avoir ajouté mdp
  container.scrollTop = container.scrollHeight;


/*
#####################################
#  .-. .-')       (`-.   _  .-')    #
#  \  ( OO )    _(OO  )_( \( -O )   #
#  ,--. ,--.,--(_/   ,. \,------.   #
#  |  .'   /\   \   /(__/|   /`. '  #
#  |      /, \   \ /   / |  /  | |  #
#  |     ' _) \   '   /, |  |_.' |  #
#  |  .   \    \     /__)|  .  '.'  #
#  |  |\   \    \   /    |  |\  \   #
#  `--' '--'     `-'     `--' '--'  #
#####################################
*/
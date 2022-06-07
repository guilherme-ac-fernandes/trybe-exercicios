import React from 'react';

// 🐨 receba `animal` e `onAnimalChange` como  props nesse componente
function FavoriteAnimal({ animalProps: { animal, onAnimalChange } }) {

  // 💣 apague essa parte, já que agora ela será gerenciada no App.js

  return (
    <div>
      <label htmlFor="animal">
        Favorite Animal:
        <input
          id="animal"
          value={ animal }
          // 🐨 Passe a utilizar a função onAnimalChange
          onChange={ (event) => onAnimalChange(event.target.value) }
        />
      </label>
    </div>
  );
}

export default FavoriteAnimal;

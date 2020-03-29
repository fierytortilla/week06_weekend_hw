document.addEventListener('DOMContentLoaded', ()=> {
    const newItemform = document.querySelector('#band-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
    // console.dir({event}, {depth:null})

    const favoriteBandListItem = createBandListItem(event.target);
    const favoriteBandsList = document.querySelector('#favorite-bands-list');
    favoriteBandsList.appendChild(favoriteBandListItem);
  
    event.target.reset();
  }

const createBandListItem = function (form) {
    const favoriteBandItem = document.createElement('li');
    favoriteBandItem.classList.add('band-list-item');
  
    const bandName = document.createElement('h2');
    bandName.textContent = form.band_name.value;
    favoriteBandItem.appendChild(bandName);
  
    const origin = document.createElement('h3');
    origin.textContent = form.place_of_origin.value;
    favoriteBandItem.appendChild(origin);
  
    const genre = document.createElement('p');
    genre.textContent = form.genre.value;
    favoriteBandItem.appendChild(genre);

    const status = document.createElement('p');
    status.textContent = form.status.value;
    favoriteBandItem.appendChild(status);
  
    return favoriteBandItem;
}

const handleDeleteAllClick = function (event) {
    const readingList = document.querySelector('#favorite-bands-list');
    readingList.innerHTML = '';
}
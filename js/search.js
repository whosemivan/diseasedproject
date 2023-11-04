
function searchItems() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    const searchTerm = document.querySelector('.search-popup__input').value.toLowerCase();
    const searchResults = cards.filter(card => card.name.toLowerCase().includes(searchTerm));
    const resultBlock = document.querySelector('.search-popup__results-container');

    resultBlock.classList.remove('search-popup__results-container--hidden');
    const searchResultsDiv = document.querySelector('.search-popup__results-cards');
    // searchResultsDiv.innerHTML = '';

    if (searchResults.length === 0) {
        searchResultsDiv.innerHTML = 'No matching items found.';
    } else {
        searchResults.forEach(item => {
            searchResultsDiv.innerHTML += `
            <a href="gamepage.html?productName=${item.name}&image=${item.image}&price=${item.price}&count=${item.count}&buyers=${item.buyers}&description=${item.description}&systemText=${item.systemText}&activation=${item.activationText}&platform=${item.platform}&id=${item.id}" class="results-card">
            <div class="results-card-img" style="background-image: url('${item.image}')"></div>
            <div class="results-card-info">
              <div class="results-card-text-block">
                <div class="results-card-title">${item.name}</div>
                <div class="results-card-icons">
                  <div class="results-card-group-icons">
                    <div class="results-card-icon-info">Сервисы</div>
                    <div class="results-card-icon-spotify">Spotify</div>
                  </div>
                  <div class="results-card-price"></div>
                  <button class="results-card-btn"></button>
                </div>
              </div>
            </div>
          </a>
          `;
        });
    }
}

// Attach event listener to input field for live search
document.querySelector('.search-popup__input').addEventListener('input', searchItems);
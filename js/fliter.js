 
document.querySelector('#searchInput').addEventListener('keyup', function(e) {
  // UI Element
  let namesLI = document.getElementsByClassName('card');

  // Get Search Query
  let searchQuery = searchInput.value.toLowerCase();

  // Search Compare & Display
  for (let index = 0; index < namesLI.length; index++) {
          const name = namesLI[index].textContent.toLowerCase();

          if (name.includes(searchQuery)) {
                  namesLI[index].style.display = 'block';
          } else {
                  namesLI[index].style.display = 'none';
          }
  }
});
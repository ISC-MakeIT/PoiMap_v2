const translate = () => {

  const glot = new Glottologist();

  const headerText = document.getElementById('header-text');

  const searchHeaderText = document.getElementById('search-header-text');

  const postHeaderText = document.getElementById('post-header-text');

  document.getElementsByClassName('ja language')[0].addEventListener('click', () => {
    glot.t(headerText.textContent, 'ja').then(result => {
      headerText.textContent = result;
    })
    glot.t(searchHeaderText.textContent, 'ja').then(result => {
      searchHeaderText.textContent = result;
    });
    glot.t(postHeaderText.textContent, 'ja').then(result => {
      postHeaderText.textContent = result;
    });
  })

}

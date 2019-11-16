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

  document.getElementsByClassName('en language')[0]
    .addEventListener('click', () => {
      glot.t(headerText.textContent, 'en').then(result => {
        headerText.textContent = result;
      });
      glot.t(searchHeaderText.textContent, 'en').then(result => {
        searchHeaderText.textContent = result;
      });
      glot.t(postHeaderText.textContent, 'en').then(result => {
        postHeaderText.textContent = result;
      });
    });

  document.getElementsByClassName('ch language')[0].addEventListener('click', () => {
      glot.t(headerText.textContent, 'zh').then(result => {
        headerText.textContent = result;
      });
      glot.t(searchHeaderText.textContent, 'zh').then(result => {
        searchHeaderText.textContent = result;
      });
      glot.t(postHeaderText.textContent, 'zh').then(result => {
        postHeaderText.textContent = result;
      });
  });

  document
    .getElementsByClassName('kr language')[0]
    .addEventListener('click', () => {
      glot.t(headerText.textContent, 'ko').then(result => {
        headerText.textContent = result;
      });
      glot.t(searchHeaderText.textContent, 'ko').then(result => {
        searchHeaderText.textContent = result;
      });
      glot.t(postHeaderText.textContent, 'ko').then(result => {
        postHeaderText.textContent = result;
      });
    });
}

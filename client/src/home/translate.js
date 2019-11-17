const translate = () => {

  // 翻訳のAPIを取得
  const glot = new Glottologist();

  // 翻訳する文章のIDを取得
  const headerText = document.getElementById('header-text');
  const searchHeaderText = document.getElementById('search-header-text');
  const postHeaderText = document.getElementById('post-header-text');

  // 日本語翻訳
  // 国旗をクリックすると動作する
  document.getElementsByClassName('ja language')[0].addEventListener('click', () => {
    // 取得したIDの中身を日本語に翻訳
    glot.t(headerText.textContent, 'ja').then(result => {
      // 翻訳した内容をまた入れなおす
      headerText.textContent = result;
    })
    glot.t(searchHeaderText.textContent, 'ja').then(result => {
      searchHeaderText.textContent = result;
    });
    glot.t(postHeaderText.textContent, 'ja').then(result => {
      postHeaderText.textContent = result;
    });
  })

  // 以下の翻訳機能は上記の繰り返し
  // 英語翻訳
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

  // 中国語翻訳
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

  // 韓国語翻訳
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

// 投稿ページを生成
const createPostForm = () => {
  const postForm = document.createElement('main');
  postForm.id = 'postForm';
  const postName = document.createElement('imput');
  postName.type = 'text';
  postName.id = 'postName';
  const postCategorys = document.createElement('ul');
  let types = 0b0000;
  for (let i = 0; i <= 4; i++) {
    const garbageType = document.createElement('li');
    postCategorys.appendChild(gabargeType);
    let decisionFlg = 0;
    garbageType.addEventListener('click', () => {
      if (decisionFlg === 0) {
        types = types | CATEGORY[i].flg;
        garbageType.style.backgroundColor = '#CCC'
        decisonFlg = 1;
      } else {
        type = type ^ CATEGORY[i].flg;
        garbageType.style.backgroundColor = '#0271B4'
        decisonFlg = 0;
      }
    });
  }
  const postImg = document.createElement('img');
  const postButton = document.createElement('submit');
  postButton.type = 'submit';
  postButton.innerHTML = '投稿';
  mapSection.appendChild(postForm);
  postForm.appendChild(postName);
  postForm.appendChild(postCategorys);
  postForm.appendChild(postImg);
  postForm.appendChild(postButton);
}
export default createPostForm;



const createConfirmationBar = (mapSection) => {
  const ConfirmationBar = document.createElement('div');
  mapSection.appendChild(ConfirmationBar);
  const ConfirmationText = document.createElement('p');
  ConfirmationText.innerHTML = '新しくゴミ箱を追加しますか？';
  ConfirmationBar.appendChild(ConfirmationText);

  // 返答ボタン生成
  const ConfirmationYes = document.createElement('button');
  const ConfirmationNo = document.createElement('button');
  ConfirmationBar.appendChild(ConfirmationYes);
  ConfirmationBar.appendChild(ConfirmationNo);

  // 「はい」が押されたとき
  ConfirmationYes.addEventListener('click', () => {
    createPostForm();
  });

  // 「いいえ」が押されたとき
  ConfirmationNo.addEventListener('click', () => {
    removeClickMarker(e.latLng);
    mapSection.removeChild(ConfirmationBar);
  });
}
export default createConfirmationBar;

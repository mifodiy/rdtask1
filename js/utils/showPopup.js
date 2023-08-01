
export const openPopup = (popup) => {
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.body.style.marginRight = `${calcScroll()}px`

}

export const closePopup = (popup) => {
  popup.classList.remove('active');
  document.body.style.overflow = '';
  document.body.style.marginRight = `0px`
}

function calcScroll() {
  let div = document.createElement('div');

  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}
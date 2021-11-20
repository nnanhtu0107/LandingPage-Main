const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Popup
const getPopup = $('.popup')
const getbtnClose = $('.popup__box--right > .__close')
const getbtnEnroll = $$('a.section-courses__back--btn')
const getbgNav = $('.nav__background')
const getboxNav = $('.nav__box')
const getitemsNav = $$('.nav__box--list>li>a')
const getcheckboxNav = $('#nav__checkbox')

console.log(getcheckboxNav)
getbtnEnroll.forEach( function(btn) {
   btn.onclick = () => {
      getPopup.style.display = 'block'
   }
})
getPopup.onclick = () => {
   getPopup.style.display = 'none'
}
getbtnClose.onclick = () => {
   getPopup.style.display = 'none'
}

getitemsNav.forEach(function(item) {
   item.onclick = () => {
      getcheckboxNav.checked = false
   }
})
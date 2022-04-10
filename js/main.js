// ---------------------------------------------------------------------------------------------------------------

$('.banner__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  appendArrows:'.banner__slider-arrows',
  prevArrow:'<img class="slick-prev slick-arrow banner__items-arrows" src="../images/icons/arrow_left.png" alt="">',
  nextArrow:'<img class="slick-next slick-arrow banner__items-arrows" src="../images/icons/arrow_right.png" alt="">'
});

// ---------------------------------------------------------------------------------------------------------------

$('.partners__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  infinite: true,
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
  
});

// ---------------------------------------------------------------------------------------------------------------

$('.reviews__items').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  asNavFor: '.reviews__people',
  prevArrow:'<img class="slick-prev slick-arrow reviews__items-arrows" src="../images/icons/arrow_left.png" alt="">',
  nextArrow:'<img class="slick-next slick-arrow reviews__items-arrows" src="../images/icons/arrow_right.png" alt="">',
  responsive:[
    {
      breakpoint: 778,
      settings: {
        arrows:false
      }
    },
  ]
});

// ---------------------------------------------------------------------------------------------------------------

$('.reviews__people').slick({
  infinite:false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  asNavFor: '.reviews__items',
  focusOnSelect:true
});

// ---------------------------------------------------------------------------------------------------------------

$('.recommendation__item-slider').slick({
  infinite:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<img class="slick-prev slick-arrow recommendation__item-arrows" src="../images/icons/arrow_left.png" alt="">',
  nextArrow:'<img class="slick-next slick-arrow recommendation__item-arrows" src="../images/icons/arrow_right.png" alt="">'
});

// ---------------------------------------------------------------------------------------------------------------

const question = document.querySelectorAll('.question__text'),
      questionItems = document.querySelectorAll('.question__item'),
      questionParent = document.querySelector('.question__items');

questionParent.addEventListener("click",(e)=>{
  if(e.target && e.target.matches('div.question__text')){
    questionItems.forEach(item=>{
      item.classList.remove('question__item--active')
    })
    e.target.parentElement.classList.toggle('question__item--active')
  }
})

// ---------------------------------------------------------------------------------------------------------------
new WOW().init();

// const recommendationButtonParent = document.querySelector('.recommendation__item-buttons'),
//       recommendationButton  = document.querySelectorAll('.recommendation__item-btn'),
//       recommendationSlider = document.querySelectorAll(".recommendation__item-slider"),
//       recommendationContent = document.querySelectorAll('.recommendation__item-contetn');
// deleteAllGame()
// showGame()
// recommendationButtonParent.addEventListener('click',(e)=>{
//   if(e.target && e.target.matches('button.recommendation__item-btn')){
//     recommendationButton.forEach((item,index)=>{
//       if(e.target == item){
//         recommendationButton.forEach(item=>item.classList.remove('recommendation__item-btn--active'))
//         e.target.classList.add('recommendation__item-btn--active')
//         deleteAllGame()
//         showGame(index)
//       }
//     })
//   }
// })

// function deleteAllGame(){
//   recommendationSlider.forEach(item => {
//     item.style.display = 'none'
//   });
//   recommendationContent.forEach(item => {
//     item.style.display = 'none'
//   })
// }

// function showGame(index = 0){
//   recommendationSlider[index].style.display = 'block'
//   recommendationContent[index].style.display = 'block'
// }


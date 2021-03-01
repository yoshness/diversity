// 'use strict';

// {
// 	//トップのスライダー
//   // mv
//   const slider = document.querySelector('.slider');
// 	const imgs = document.querySelectorAll('.slider-item');
// 	const indicators = document.querySelectorAll('.indicator-item')
// 	let len = imgs.length;
// 	let current = 0;
// 	let timer;

// 	// インデックス番号に応じて表示するスライドを決定
// 	function goToSlide(index) {
// 		current = index; 
// 		updatePhoto();
// 		updateIndicator();
// 	}

// 	function updatePhoto() {
// 		imgs.forEach(img => {
// 			img.classList.remove('active');
// 			img.classList.remove('active-effect');
// 		});

// 		imgs[current].classList.add('active');
// 		imgs[current].classList.add('active-effect');
// 	}

// 	function updateIndicator () {
// 		indicators.forEach(indicator => {
// 			indicator.classList.remove('active');
// 		});

// 		indicators[current].classList.add('active');
// 	}

// 	// mvをクリックすると次のスライドへうつる
// 	slider.addEventListener('click', () => {
// 		const nextIndex = (current + 1) % len;

// 		goToSlide(nextIndex);
// 		stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる
// 		autoPlay(); // 新たなautoplayが開始
		
// 	});

// 	// インジゲーターをクリックすると該当のスライドへうつる
// 	indicators.forEach(indicator => {
// 		indicator.addEventListener('click', (e) => {

// 			const clickedItem = e.target;
// 			const targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);

// 			goToSlide(targetIndex);
// 			stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる
// 			autoPlay(); // 新たなautoplayが開始

// 		});
// 	});

// 	// オートプレイ
// 	function autoPlay () {
// 		timer = setInterval(() => {
// 			const nextIndex = (current + 1) % len;
// 			goToSlide(nextIndex);
// 		}, 7000);
// 	}

// 	function stopAutoPlay () {
// 		clearInterval(timer);
// 	}

// 	goToSlide(current);
// 	autoPlay();
// }

// {
// 	// トップ
// 	// topicsのボタン
// 	const prev = document.getElementById('card-btn_prev');
// 	const next = document.getElementById('card-btn_next');
// 	const cardList = document.getElementById('card-list');
// 	const cardItems = document.querySelectorAll('.card-item');
// 	const len = cardItems.length;
// 	let w;
// 	let current = 0;

// 	cardItems.forEach(cardItem => {
// 		w = cardItem.clientWidth;
// 	});

// 	//移動距離を取得

//   const moveX = w + 30;

// 	console.log(moveX);

// 	prev.addEventListener('click', () => {
// 		TweenMax.to(cardList, 0.2, {
// 			ease: Power0.easeNone,
// 			x: `+= ${moveX}`
// 		});

// 		current --;
// 		updateNav();
// 	});

// 	next.addEventListener('click', () => {
// 		TweenMax.to(cardList, 0.2, {
// 			ease: Power0.easeNone,
// 			x: `-= ${moveX}`
// 		});

// 		current ++;
// 		updateNav();
// 	});

// 	function updateNav() {

// 		if(current == 0) {
// 			prev.classList.add('disabled');
// 		} else {
// 			prev.classList.remove('disabled');
// 		}

// 		if(current > len - 4) {
// 			next.classList.add('disabled');
// 		} else {
// 			next.classList.remove('disabled');
// 		}

// 	}

// }

'use strict';
// IE対応

{
  // インデックス番号に応じて表示するスライドを決定
  var goToSlide = function goToSlide(index) {
    current = index;
    updatePhoto();
    updateIndicator();
  };

  var updatePhoto = function updatePhoto() {
    // imgs.forEach(function (img) {
    //   img.classList.remove('active');
    //   img.classList.remove('active-effect');
    // });

		Array.prototype.forEach.call(imgs, function(img) {
			img.classList.remove('active');
		});

    // console.log(imgs[current]);
    // console.log(imgs);
    // console.log(current);

    imgs[current].classList.add('active');
    
  };

  var updateIndicator = function updateIndicator() {
    // indicators.forEach(function (indicator) {
    //   indicator.classList.remove('active');
    // });

		Array.prototype.forEach.call(indicators, function(indicator) {
			indicator.classList.remove('active');
		});

    indicators[current].classList.add('active');
  }; 

  // オートプレイ
  var autoPlay = function autoPlay() {
    timer = setInterval(function () {
      var nextIndex = (current + 1) % len;
      goToSlide(nextIndex);
    }, 5000);
  };

  var stopAutoPlay = function stopAutoPlay() {
    clearInterval(timer);
  };

  //トップのスライダー
  // mv
  var slider = document.querySelector('.slider');
  var imgs = document.querySelectorAll('.slider-item');
  var indicators = document.querySelectorAll('.indicator-item');
  var len = imgs.length;
  var current = 0;
  var timer;
  slider.addEventListener('click', function () {
    var nextIndex = (current + 1) % len;
    goToSlide(nextIndex);
    stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる

    autoPlay(); // 新たなautoplayが開始
  }); 
	
	// インジゲーターをクリックすると該当のスライドへうつる
  // indicators.forEach(function (indicator) {
  //   indicator.addEventListener('click', function (e) {
  //     var clickedItem = e.target;
  //     var targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);
  //     goToSlide(targetIndex);
  //     stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる

  //     autoPlay(); // 新たなautoplayが開始
  //   });
  // });

	Array.prototype.forEach.call(indicators, function(indicator) {
		 indicator.addEventListener('click', function (e) {
      var clickedItem = e.target;
      var targetIndex = Array.prototype.indexOf.call(indicators, clickedItem);
      goToSlide(targetIndex);
      stopAutoPlay(); // 再生されていたautoplayがいったんリセットされる

      autoPlay(); // 新たなautoplayが開始
    });
	});

  goToSlide(current);
  autoPlay();
}


function topics() {


 // トップ
  // topicsのボタン
  var prev = document.getElementById('card-btn_prev');
  var next = document.getElementById('card-btn_next');
  var bottom = document.getElementById('card-btn_bottom');
  var cardList = document.getElementById('card-list');
  var cardInner = document.getElementById('card-inner');
  var cardItems = document.querySelectorAll('.card-item');
  var _length = cardItems.length;
  var w;
  var h;
  var _current = 0;

  
  // カードの横幅
	Array.prototype.forEach.call(cardItems, function(cardItem) {
	  w = cardItem.clientWidth;
	});

  // カードインナーの高さ
  // h = cardInner.clientHeight;

	//移動距離を取得
  // var moveX = w + 30;
  // var moveY = h + 140;

  // console.log(moveX);

  var updateNav = function updateNav() {
    if (_current == 0) {
      prev.classList.add('disabled');
    } else {
      prev.classList.remove('disabled');
    }

    if (_current > _length - 4 || _length == 3) {
      next.classList.add('disabled');
    } else {
      next.classList.remove('disabled');
    }
  };

  var updateBottomNav = function updateBottomNav() {
    if (_current == 0) {
      bottom.classList.add('disabled');
    } else {
      bottom.classList.remove('disabled');
    }

    if (_current > _length - 4 || _length == 3) {
      bottom.classList.add('disabled');
    } else {
      bottom.classList.remove('disabled');
    }
  };

  prev.addEventListener('click', function () {
    
    TweenMax.to(cardList, 0.2, {
      ease: Power0.easeNone,
      // x: "+= ".concat(moveX)
      x: "+=380px"
    });
    _current--;
    updateNav();
  });

  next.addEventListener('click', function () {
    TweenMax.to(cardList, 0.2, {
      ease: Power0.easeNone,
      // x: "-= ".concat(moveX)
      x: "-=380px"
    });
    _current++;
    updateNav();
  });

  bottom.addEventListener('click', function () {

    TweenMax.to(cardInner, 0.2, {
      ease: Power0.easeNone,
      height: "+=150px"
    });

    _current++;
    updateBottomNav();
  });

  updateNav();
  updateBottomNav();


  // let ww;
  // let isSP = false;

  // window.addEventListener('resize', () => {

  //   // _current == 0
  //   ww = window.innerWidth;

  //   console.log(_current);

  //   console.log(ww);
  //   console.log(isSP);

  //   if(ww < 1180) {
  //     isSP = true;
  //   } else {
  //     isSP = false;
  //   }

  //   if(isSP) {
  //     cardInner.style.height = '446px';
  //     cardList.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  //     // _current == 0

  //     bottom.addEventListener('click', () => {
  //       isSP = false;
  //     });

  //   } else {
  //     cardInner.style.height = '411.5px';
  //     // _current == 0

  //     prev.addEventListener('click', () => {
  //       isSP = true;
  //     });

  //     next.addEventListener('click', () => {
  //       isSP = true;
  //     });

  //   }

  // });
 



}

topics();



function setMvvh() {
  var topMv = document.getElementById('topMv');
  var h;

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    // sp
    // ロードされた時のheight
    window.addEventListener('load', function () {
      h = window.innerHeight;
      topMv.style.height = "".concat(h, "px");
    }); //アドレスバーが引っ込んで画面の高さが変わった時、サイズを取り直す

    window.addEventListener('resize', function () {
      h = window.innerHeight;
      topMv.style.height = "".concat(h, "px");
    });
  } else {
    //pc(vhを使う)
    topMv.style.height = '100vh';
  }
}

;
setMvvh();



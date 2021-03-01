// 'use strict';

// {
// 	// 共通
//   // ヘッダーメニュー
//   const icon = document.getElementById('menuBtn');
// 	const bars = document.querySelectorAll('.menu-line');
//   const drawer = document.getElementById('drawer');

// 	icon.addEventListener('click', () => {
// 		bars.forEach(bar => {
// 			bar.classList.toggle('active');
// 		});

//     drawer.classList.toggle('active');
    
// 	});

// }

// {
// 	//共通
//   // スムーススクロール
//   const footerBtn = document.getElementById('footer-btn');
// 	const duration = 0.6;

//   footerBtn.addEventListener('click', e => {

//     e.preventDefault();

//     TweenMax.to(document.documentElement, duration, {
//       ease: Expo.easeOut,
//       scrollTop: 0,
//     });

//   });
// }

// {
//   //共通
// 	//メニューhoverで写真変更
// 	const imgs = document.querySelectorAll('#drawer .imgArea-pic');
// 	const drawerMenus = document.querySelectorAll('#drawer .menuArea-item')
// 	let len = imgs.length;
// 	let current = 0;

//   console.log(drawerMenus)

// 	// インデックス番号に応じて表示するスライドを決定
// 	function showPic(index) {
// 		current = index; 
// 		updatePhoto();
// 	}

// 	function updatePhoto() {
// 		imgs.forEach(img => {
// 			img.classList.remove('active');
// 			// img.classList.remove('active-effect');
// 		});

// 		imgs[current].classList.add('active');
// 		// imgs[current].classList.add('active-effect');
// 	}

// 	// メニューをホバーすると該当のスライドを表示する
// 	drawerMenus.forEach(drawerMenu => {
// 		drawerMenu.addEventListener('mouseenter', (e) => {

// 			const hoverItem = e.target;
// 			const targetIndex = Array.prototype.indexOf.call(drawerMenus, hoverItem);

// 			showPic(targetIndex);

// 		});
// 	});


// }

'use strict'; //IE対応

{
  // 共通
  // ヘッダーメニュー
  var icon = document.getElementById('menuBtn');
  var bars = document.querySelectorAll('.menu-line');
  var drawer = document.getElementById('drawer');
  var body = document.body;


  icon.addEventListener('click', function () {
    // bars.forEach(function (bar) {
    //   bar.classList.toggle('active');
    // });

		Array.prototype.forEach.call(bars, function(bar) {
      bar.classList.toggle('active');
    });
    drawer.classList.toggle('active');
    body.classList.toggle('hidden') // 背景スクロール禁止

  });

  

  // icon.addEventListener('mouseenter', function () {

	// 	Array.prototype.forEach.call(bars, function(bar) {
  //     bar.classList.add('hoverable');
  //   });

  // });

  // icon.addEventListener('mouseleave', function () {

	// 	Array.prototype.forEach.call(bars, function(bar) {
  //     bar.classList.remove('hoverable');
  //   });

  // });

}
{
  //共通
  // スムーススクロール
  var footerBtn = document.getElementById('footer-btn');
  var duration = 0.6;
  footerBtn.addEventListener('click', function (e) {
    e.preventDefault();
    TweenMax.to(document.documentElement, duration, {
      ease: Power3.easeOut,
      scrollTop: 0
    });
  });

  footerBtn.addEventListener('touchend', function (e) {
    e.preventDefault();
    TweenMax.to(document.documentElement, duration, {
      ease: Power3.easeOut,
      scrollTop: 0
    });
  });
}

//ドロワーの写真hoverエフェクト
function changeDrawerImg() {

    function updatePhoto() {
    // imgs.forEach(function (img) {
    //   img.classList.remove('active'); 
    // });

    // console.log('updatePhoto');
		Array.prototype.forEach.call(imgs, function(img) {
      // console.log('aaa');
      // console.log(img);
			img.classList.remove('active'); 
		});
            // console.log(current);
    imgs[current].classList.add('active'); 
  }; 


  // スライダー
  function showPic(index) {
    // console.log('showPic');
    current = index;
        // console.log(current);
        // console.log(index);
        // console.log('showPic2');
    updatePhoto();
    
  };


  //共通
  //メニューhoverで写真変更
  var imgs = document.querySelectorAll('#drawer .imgArea-pic');
  var drawerMenus = document.querySelectorAll('#drawer .menuArea-item');
  var len = imgs.length;
  var current = 0;


  // drawerMenus.forEach(function (drawerMenu) {
  //   drawerMenu.addEventListener('mouseenter', function (e) {
  //     var hoverItem = e.target;
  //     var targetIndex = Array.prototype.indexOf.call(drawerMenus, hoverItem);
  //     showPic(targetIndex);
  //   });
  // });

	Array.prototype.forEach.call(drawerMenus, function(drawerMenu) {

    drawerMenu.addEventListener('mouseenter', function (e) {
    //  console.log('mouseenter');
      var hoverItem = e.target;
      var targetIndex = Array.prototype.indexOf.call(drawerMenus, hoverItem);
      showPic(targetIndex);
    });
  });

}

changeDrawerImg();

// function setVh() {

//   const drawer = document.getElementById('drawer');
//   const topMv = document.getElementById('topMv');
//   let h;

//   if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
//     // sp
//     // ロードされた時のheight
//     window.addEventListener('load', () => {
//       h = window.innerHeight;
//       drawer.style.height = `${h}px`;
//       topMv.style.height = `${h}px`;
//     })

//     //アドレスバーが引っ込んで画面の高さが変わった時、サイズを取り直す
//     window.addEventListener('resize', () => {
//       h = window.innerHeight;
//       drawer.style.height = `${h}px`;
//       topMv.style.height = `${h}px`;
//     });

//   } else {
//     //pc(vhを使う)
//     drawer.style.height = '100vh';
//     topMv.style.height = '100vh';
//   }
  
// };

// setVh();
function setVh() {
  var drawer = document.getElementById('drawer');
  var h;

  if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
    // sp
    // ロードされた時のheight
    window.addEventListener('load', function () {
      h = window.innerHeight;
      drawer.style.height = "".concat(h, "px");
    }); 
    
    //アドレスバーが引っ込んで画面の高さが変わった時、サイズを取り直す
    window.addEventListener('resize', function () {
      h = window.innerHeight;
      drawer.style.height = "".concat(h, "px");
    });
  } else {
    //pc(vhを使う)
    drawer.style.height = '100vh';
  }
}

;
setVh();

{
  //別ページリンク ハッシュ

  // const urlHash = location.hash;
  // const el = document.querySelector(urlHash);
  // let scrollPosition;

  // scrollPosition = el.getBoundingClientRect().top + window.pageYOffset;

  // if(urlHash) {
  //   window.scrollTo(0, scrollPosition);
  // } 

  // URLのアンカー（#以降の部分）を取得
  // var urlHash = location.hash;
  // var el = document.querySelector(urlHash);
  // var scrollPosition;
  // scrollPosition = el.getBoundingClientRect().top + window.pageYOffset; 
  
  // urlにハッシュが存在する場合
  // if (urlHash) {
  //   window.scroll(0, scrollPosition);
  // }

  function goToHash() {

    // URLのアンカー（#以降の部分）を取得
    // var urlHash = location.hash;
    // var el = document.querySelector(urlHash);
    // var scrollPosition;
    // scrollPosition = el.getBoundingClientRect().top + window.pageYOffset; 
    
    // // urlにハッシュが存在する場合
    // if (urlHash) {
    //   window.scroll(0, scrollPosition);
    // }

    var urlHash = location.hash;
    // urlにハッシュが存在する場合
    if (urlHash) {
      var el = document.querySelector(urlHash);
      var scrollPosition;
      scrollPosition = el.getBoundingClientRect().top + window.pageYOffset; 
      window.scroll(0, scrollPosition);
    }

  }

  goToHash();

}
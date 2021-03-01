// 'use strict';

// {
// 	// スムーススクロール
//   const btns = document.querySelectorAll('.linkBtn');
//   // const menuArea = document.getElementById('menuArea8');
// 	const duration = 1;
// 	const offsetY = 100; // バッファ

// 	btns.forEach(btn => {

// 		btn.addEventListener('click', e => {

// 			e.preventDefault();

// 			// 目的地の要素を取得
// 			const clickedItem = e.target; 
// 			const targetHref = clickedItem.getAttribute('href'); 
// 			const destination = document.querySelector(targetHref); 

// 			// メニューエリアのボトムから目的地のトップまでの距離
// 			const destinationTop = destination.getBoundingClientRect().top;
	
// 			// 目的地までの絶対距離
// 			const distance = destinationTop + window.pageYOffset - offsetY;
			
// 			TweenMax.to(document.documentElement, duration, {
// 				ease: Expo.easeOut,
// 				scrollTop: distance
// 			});

// 		});
		
// 	});

// }

// {
// 	// スムーススクロール（NEW）
// 	const btnNew = document.getElementById('new');
// 	const duration = 1;
// 	const offsetY = 100; // バッファ

// 	btnNew.addEventListener('click', e => {

// 		e.preventDefault();

// 		// 目的地の要素を取得
// 		// const clickedItem = e.target; 
// 		const targetHref = btnNew.getAttribute('href'); 
// 		const destination = document.querySelector(targetHref); 

// 		// メニューエリアのボトムから目的地のトップまでの距離（ウィンドウ内右上からの位置）
// 		const destinationTop = destination.getBoundingClientRect().top;

// 		// // 目的地の距離（ページ最上部からの絶対位置）
// 		const distance = destinationTop + window.pageYOffset - offsetY;
		
// 		TweenMax.to(document.documentElement, duration, {
// 			ease: Expo.easeOut,
// 			scrollTop: distance
// 		});

// 	});

// }

// {
// 	// スムーススクロール（NEW）
// 	const btnIkukyuu = document.getElementById('ikukyuu');
// 	const duration = 1;

// 	btnIkukyuu.addEventListener('click', e => {

// 		e.preventDefault();

// 		// 目的地の要素を取得
// 		// const clickedItem = e.target; 
// 		const targetHref = btnIkukyuu.getAttribute('href'); 
// 		const destination = document.querySelector(targetHref); 

// 		console.log(destination);

// 		// メニューエリアのボトムから目的地のトップまでの距離（ウィンドウ内右上からの位置）
// 		const destinationTop = destination.getBoundingClientRect().top;

// 		// // 目的地の距離（ページ最上部からの絶対位置）
// 		const distance = destinationTop + window.pageYOffset;
		
// 		TweenMax.to(document.documentElement, duration, {
// 			ease: Expo.easeOut,
// 			scrollTop: distance
// 		});

// 	});

// }

'use strict'; // IE対応

{
  // スムーススクロール
  var btns = document.querySelectorAll('.linkBtn'); // const menuArea = document.getElementById('menuArea8');

  var duration = 1;
  var offsetY = 100; // バッファ

  // btns.forEach(function (btn) {
  //   btn.addEventListener('click', function (e) {
  //     e.preventDefault(); // 目的地の要素を取得

  //     var clickedItem = e.target;
  //     var targetHref = clickedItem.getAttribute('href');
  //     var destination = document.querySelector(targetHref); // メニューエリアのボトムから目的地のトップまでの距離

  //     var destinationTop = destination.getBoundingClientRect().top; // 目的地までの絶対距離

  //     var distance = destinationTop + window.pageYOffset - offsetY;
  //     TweenMax.to(document.documentElement, duration, {
  //       ease: Expo.easeOut,
  //       scrollTop: distance
  //     });
  //   });
  // });

	Array.prototype.forEach.call(btns, function(btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault(); // 目的地の要素を取得


      // e.stopPropagation(); 

      // console.log(e.target);
      // console.log(e.currentTarget);
      
      // var clickedItem = e.target;
      var clickedItem = e.currentTarget;

      // console.log(e);
      var targetHref = clickedItem.getAttribute('href');
      var destination = document.querySelector(targetHref); // メニューエリアのボトムから目的地のトップまでの距離
 
      // console.log(clickedItem);
      // console.log(targetHref);
      // console.log(destination);

      var destinationTop = destination.getBoundingClientRect().top; // 目的地までの絶対距離

      var distance = destinationTop + window.pageYOffset - offsetY;
      TweenMax.to(document.documentElement, duration, {
        ease: Power3.easeOut,
        scrollTop: distance
      });
    });
	});
}

{
  // スムーススクロール（NEW）
  var btnNew = document.getElementById('new');
  var _duration = 1;
  var _offsetY = 0; 

  btnNew.addEventListener('click', function (e) {
    e.preventDefault(); // 目的地の要素を取得
    // const clickedItem = e.target; 

    var targetHref = btnNew.getAttribute('href');
    var destination = document.querySelector(targetHref); // メニューエリアのボトムから目的地のトップまでの距離（ウィンドウ内右上からの位置）

    var destinationTop = destination.getBoundingClientRect().top; // // 目的地の距離（ページ最上部からの絶対位置）

    var distance = destinationTop + window.pageYOffset - _offsetY;
    TweenMax.to(document.documentElement, _duration, {
      ease: Power3.easeOut,
      scrollTop: distance
    });
  });


}
{
  // スムーススクロール（育休）
  var btnIkukyuu = document.getElementById('ikukyuu');
  var _duration2 = 1;

  btnIkukyuu.addEventListener('click', function (e) {
    e.preventDefault(); // 目的地の要素を取得
    // const clickedItem = e.target; 

    var targetHref = btnIkukyuu.getAttribute('href');
    var destination = document.querySelector(targetHref);

    var destinationTop = destination.getBoundingClientRect().top; // // 目的地の距離（ページ最上部からの絶対位置）

    var distance = destinationTop + window.pageYOffset;
    TweenMax.to(document.documentElement, _duration2, {
      ease: Power3.easeOut,
      scrollTop: distance
    });
  });

}
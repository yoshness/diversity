<?php
/* 
Template Name: Interview Archive
*/
get_header();

?>

<main class="l-interview">
	<div class="l-cover">
		<div class="l-cover-bg u-bg-fill" style="background-image: url(<?php echo IMAGE_URL;  ?>interview/cover.png);">
			<h1 class="l-cover__title">
				<p class="l-cover__title-en">
					<img src="<?php echo IMAGE_URL;  ?>interview/title.svg" alt="Interview">
				</p>
				<p class="l-cover__title-ja">社員インタビュー</p>
			</h1>
		</div>
	</div>
	<section class="l-interview__eyecatch">
		<div class="l-container">
			<div class="l-interview__eyecatch-left">
				<span>大東建託を組織する「個」に焦点を</span>
				<h2>一人一人の強い意志と責任<br>それが大東建託を強くしています。</h2>
				<p>ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。</p>
			</div>
			<div class="l-interview__eyecatch-right">
				<img src="<?php echo IMAGE_URL;  ?>interview/eyecatch.jpg" alt="">
			</div>
		</div>
	</section>
	<section class="l-interview__content">
		<div class="l-container">
			<h2>インタビュー一覧</h2>
			<?php
				$categories = ['女性役員', 'ダイバーシティ<br>マネジメント', '働き方改革', 'イクメン', 'イクボス', '女性活躍推進', '両立支援', 'シニア人材の活躍'];
			?>
			<ul class="l-interview__categories u-flex">
				<?php for($i = 0; $i < count($categories); $i++) { ?>
				<li>
					<a href="#" class="u-flex u-flex--center"><?php echo $categories[$i]; ?></a>
				</li>
				<?php } ?>
			</ul>
			<ul class="l-interview__items u-flex">
				<?php for($i = 0; $i < 9; $i++) { ?>
				<li class="interview-block">
					<a href="#">
						<img src="<?php echo IMAGE_URL;  ?>interview/dummy.jpg" alt="">
						<p class="interview-block__tagline">個性を引き出し、個性で組織する。そんな会社であり続けたい。</p>
						<p class="interview-block__company">大東建託株式会社</p>
						<p class="interview-block__department">ダイバーシティマネジメント　イクボス</p>
						<p class="interview-block__position">業務推進部　部長</p>
						<h3 class="interview-block__name">
							<span class="interview-block__name-ja">濱田 洋平</span>
							<span class="interview-block__name-en">YOUHEI HAMADA</span>
						</h3>
					</a>
				</li>
				<?php } ?>
			</ul>
		</div>
	</section>
</main>

<?php
get_footer();
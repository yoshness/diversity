<?php
/**
 * The template for displaying Interview Archive
 */
get_header();
?>

<main class="l-interview">
	<div class="l-cover">
		<div class="l-cover-bg u-bg-fill">
			<h1 class="l-cover__title">
				<p class="l-cover__title-en">
					<img src="<?php echo IMAGE_URL;  ?>interview/title.png" alt="Interview">
				</p>
				<p class="l-cover__title-ja">社員インタビュー</p>
			</h1>
		</div>
	</div>
	<section class="l-interview__eyecatch">
		<div class="l-container u-flex">
			<span>現場の最前線から語る<br>大東建託のダイバーシティ</span>
			<h2>一人ひとりが個性を活かし、<br class="u-show-pc">やりがいを感じ活躍できる喜び。</h2>
			<div class="l-interview__eyecatch-image">
				<img src="<?php echo IMAGE_URL;  ?>interview/eyecatch.jpg" alt="">
			</div>
			<p>多様な人材がやりがいを感じてチャレンジでき、多様性が強みとなる組織づくりを進めている大東建託。現場における働きやすさややりがい、福利厚生制度の活用の仕方などをインタビュー。自分らしく働く喜びについて語ってもらいました。</p>
		</div>
	</section>
	<?php
      	$article_args = array(
			'post_type'      => 'interview',
			'interview_category' => get_queried_object()->slug,
	    	'posts_per_page' => -1,
	    	'order'          => 'DESC',
	    	'post_status'    => 'publish'
		);
		$articles = new WP_Query($article_args);
		if ($articles->have_posts()) {
    ?>
	<section class="l-interview__content" id="interview-list">
		<div class="l-container">
			<h2><a href="<?php echo HOME_URL; ?>interview#interview-list">インタビュー一覧</a></h2>
			<?php 
				$categories = get_terms([
				    'taxonomy' => 'interview_category',
				    'hide_empty' => false,
				]);
			?>
			<ul class="l-interview__categories u-flex">
				<li>
					<a href="<?php echo HOME_URL; ?>interview#interview-list" class="u-flex u-flex--center">全て</a>
				</li>
				<?php foreach($categories as $cat) { ?>
				<li>
					<a href="<?php echo get_category_link( $cat->term_id ) ?>#interview-list" class="u-flex u-flex--center <?php echo $cat->term_id == get_queried_object()->term_id ? 'active' : ''; ?>"><?php echo $cat->name; ?></a>
				</li>
				<?php } ?>
			</ul>
			
			<ul class="l-interview__items u-flex">
				<?php 
					while ($articles->have_posts()): $articles->the_post(); 
						$featured_image = get_field('cover');
				?>
				<li class="interview-block">
					<a href="<?php echo the_permalink(); ?>">
						<div class="interview-block__image">
							<div class="interview-block__img u-bg-fill" style="background-image: url(<?php echo $featured_image; ?>);"></div>
						</div>
						<p class="interview-block__tagline"><?php the_field('tagline'); ?></p>
						<p class="interview-block__company"><?php the_field('company'); ?></p>
						<span class="interview-block__department"><?php the_field('department'); ?></span>
						<span class="interview-block__position"><?php the_field('position'); ?></span>
						<h3 class="interview-block__name">
							<span class="interview-block__name-ja"><?php the_title(); ?></span>
							<span class="interview-block__name-en"><?php the_field('en_name'); ?></span>
						</h3>
					</a>
				</li>
				<?php endwhile; wp_reset_postdata(); ?>
			</ul>
		</div>
	</section>
	<?php } ?>
</main>

<?php
get_footer();
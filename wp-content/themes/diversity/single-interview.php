<?php
/**
 * The template for displaying Interview Detail
 */
get_header();

?>

<main class="l-single">
	<div class="l-cover l-cover--detail">
		<?php $featured_image = get_field('cover'); ?>
		<div class="l-cover-bg u-bg-fill" style="background-image: url(<?php echo $featured_image; ?>);">
	</div>
	<div class="l-single__eyecatch u-flex">
		<div class="l-single__eyecatch-left">
			<p class="l-single__eyecatch-tagline"><?php the_field('tagline'); ?></p>
			<p class="l-single__eyecatch-history"><?php the_field('history'); ?></p>
		</div>
		<div class="l-single__eyecatch-right">
			<h1>
				<span class="l-single__title-ja"><?php the_title(); ?></span>
				<span class="l-single__title-en"><?php the_field('en_name'); ?></span>
			</h1>
			<p class="l-single__eyecatch-company"><?php the_field('company'); ?></p>
			<p class="l-single__eyecatch-department"><?php the_field('department'); ?></p>
			<p class="l-single__eyecatch-position"><?php the_field('position'); ?></p>
			<h2>＜ 利用制度 ＞</h2>
			<?php 
				$tags = get_the_terms( get_the_ID(), 'interview_tag'); 
				usort($tags, 'sort_terms_by_id');
				?>
			<ul class="l-single__eyecatch-tags u-flex">
				<?php foreach($tags as $tag) { ?>
				<li><?php echo $tag->name; ?></li>
				<?php } ?>
			</ul>
			<p class="l-single__eyecatch-note">※ライフイベントに合わせた福利厚生制度は<a href="<?php echo HOME_URL; ?>work-life-balance/#life-event-welfare">こちら</a></p>
		</div>
	</div>
	<div class="l-single__block u-flex">
		<img src="<?php the_field('left_block_image'); ?>">
		<div class="l-single__block-content">
			<h3><?php the_field('left_block_heading'); ?></h3>
			<p><?php the_field('left_block_description'); ?></p>
		</div>
	</div>
	<div class="l-single__block l-single__block--alternate u-flex">
		<img src="<?php the_field('right_block_image'); ?>">
		<div class="l-single__block-content">
			<h3><?php the_field('right_block_heading'); ?></h3>
			<p><?php the_field('right_block_description'); ?></p>
		</div>
	</div>
	<div class="l-single__block l-single__block--wide">
		<div class="l-container u-flex">
			<img src="<?php the_field('wide_block_image'); ?>">
			<div class="l-single__block-content">
				<h3><?php the_field('wide_block_heading'); ?></h3>
				<p><?php the_field('wide_block_description'); ?></p>
			</div>
		</div>
	</div>
	<?php
      	$article_args = array(
			'post_type'      => 'interview',
	    	'posts_per_page' => 3,
	    	'order'          => 'DESC',
	    	'post_status'    => 'publish',
	    	'post__not_in' => array(get_the_ID()) // exclude self
		);
		$articles = new WP_Query($article_args);
		if ($articles->have_posts()) {
    ?>
	<section class="l-single__related">
		<div class="l-container">
			<h2>インタビュー一覧</h2>
			<ul class="l-interview__items u-flex">
				<?php 
					while ($articles->have_posts()): $articles->the_post(); 
						$featured_image = get_field('cover');
				?>
				<li class="interview-block">
					<a href="<?php echo the_permalink(); ?>">
						<div class="interview-block__image">
							<img src="<?php echo $featured_image; ?>" alt="">
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
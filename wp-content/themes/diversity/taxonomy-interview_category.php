<?php
/**
 * The template for displaying Interview Archive
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
	<?php
	    $category = get_the_terms( $post->ID, 'interview_category' );

      	$article_args = array(
			'post_type'      => 'interview',
			'interview_category' => $category[0]->slug,
	    	'posts_per_page' => -1,
	    	'order'          => 'DESC',
	    	'post_status'    => 'publish'
		);
		$articles = new WP_Query($article_args);
		if ($articles->have_posts()) {
    ?>
	<section class="l-interview__content">
		<div class="l-container">
			<h2>インタビュー一覧</h2>
			<?php $categories = get_the_terms( get_the_ID(), 'interview_category' ); ?>
			<ul class="l-interview__categories u-flex">
				<?php foreach($categories as $cat) { ?>
				<li>
					<a href="<?php echo get_category_link( $cat->term_id ) ?>" class="u-flex u-flex--center"><?php echo $cat->name; ?></a>
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
							<img src="<?php echo $featured_image; ?>" alt="">
						</div>
						<p class="interview-block__tagline"><?php the_field('tagline'); ?></p>
						<p class="interview-block__company"><?php the_field('company'); ?></p>
						<p class="interview-block__department"><?php the_field('department'); ?></p>
						<p class="interview-block__position"><?php the_field('position'); ?></p>
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
<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since 1.0.0
 */
?>
		<?php include( locate_template( 'template-parts/footer.php', false, false ) ); ?>

		<?php wp_footer(); ?>

		<script src="<?php echo get_template_directory_uri(); ?>/assets/app.js" async></script>
	
		<!-- ************************************************************
		//
		//  script
		//
		// ************************************************************ -->
		<script src='<?php echo get_template_directory_uri(); ?>/assets/js/common.js'></script>
		<!-- <script src='<?php echo get_template_directory_uri(); ?>/assets/js/bundle.js'></script> -->
	  	<script src='<?php echo get_template_directory_uri(); ?>/assets/js/page.js'></script>

	  	<?php if(is_front_page()) { ?>
	  	<script src='<?php echo get_template_directory_uri(); ?>/assets/js/top.js'></script>
	  	<?php } ?>
		<?php if(is_page('Work Life Balance')) { ?>
	  		<script src='<?php echo get_template_directory_uri(); ?>/assets/js/work-life-balance.js'></script>
		<?php } ?>
	  	
		<script src='<?php echo get_template_directory_uri(); ?>/assets/js/tween/CustomEase.js'></script>
		<script src='<?php echo get_template_directory_uri(); ?>/assets/js/tween/DrawSVGPlugin.min.js'></script>
		<script src='<?php echo get_template_directory_uri(); ?>/assets/js/tween/TweenMax.min.js'></script>
	</body>
</html>

<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since 1.0.0
 */

get_header();
?>

<!-- ************************************************************
//  mv
// ************************************************************ -->
<div class="mv" id="topMv">
  <div class="mv-inner">

    <!-- slider -->
    <ul class="slider">
      <li class="slider-item active"></li>
      <li class="slider-item"></li>
      <li class="slider-item"></li>
      <li class="slider-item"></li>
    </ul><!-- /slider -->

    <!-- indicator -->
    <div class="indicator">
      <span class="indicator-item active"></span>
      <span class="indicator-item"></span>
      <span class="indicator-item"></span>
      <span class="indicator-item"></span>
    </div><!-- /indicator -->

    <!-- scrollIcon -->
    <div class="scrollIcon">
      <p class="scrollIcon-txt"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_mv02.svg" width="34.44" height="7.44" alt="Scroll"></p>
      <p class="scrollIcon-img"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" width="76.64" height="9.24" alt="scrolLのアイコン"></p>
    </div>

    <!-- txtArea -->
    <div class="txtArea">
      <h1 class="txtArea-tit">
        <p class="txtArea-tit_en">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_mv01.svg" alt="LOVE COLORS">
        </p>
        <br>
        <span class="txtArea-tit_ja">みんなの個性を、会社の力に。</span>
      </h1>
    </div><!-- /txtArea -->

  </div>
</div>

<!-- ************************************************************
//  main
// ************************************************************ -->
<div class="main">
  <div class="main-inner">

  <!--mainItem-->
  <a class="mainItem mainItem_diversity" href="diversity-management">
    <h2 class="mainItem-tit">
      <span class="mainItem-tit_en">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_main01.svg" alt="Diversity">
      </span>
      <span class="mainItem-tit_ja">ダイバーシティ経営</span>
    </h2>
    <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
  </a><!--/mainItem-->

  <!-- mainItem-flxWrapper -->
  <div class="mainItem-flxWrapper">
    <a class="mainItem mainItem_womenomics" href="womenomics">
      <h2 class="mainItem-tit">
        <span class="mainItem-tit_en">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_main02.svg" alt="Womenomics">
        </span>
        <span class="mainItem-tit_ja">女性の活躍推進</span>
      </h2>
      <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
    </a>
    <a class="mainItem mainItem_inclusion" href="inclusion">
      <div class="mainItem_inclusion-wrapper">
        <h2 class="mainItem-tit">
          <span class="mainItem-tit_en">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_main03.svg" alt="Inclusion">
          </span>
          <span class="mainItem-tit_ja">多様な人材の活躍</span>
        </h2>
        <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
      </div>
    </a>
  </div>

  <!-- mainItem-flxWrapper -->
  <div class="mainItem-flxWrapper">
    <a class="mainItem mainItem_workstylereform" href="work-style-reform">
      <h2 class="mainItem-tit">
        <span class="mainItem-tit_en">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_main04.svg" alt="Work Style Reform">
        </span>
        <span class="mainItem-tit_ja">働き方改革</span>
      </h2>
      <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
    </a>
    <a class="mainItem mainItem_worklifebalance" href="work-life-balance">
      <h2 class="mainItem-tit">
        <span class="mainItem-tit_en">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_main05.svg" alt="Work Life Balance">
        </span>
        <span class="mainItem-tit_ja">ワークライフバランス</span>
      </h2>
      <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
    </a>
  </div>

  <!--mainItem-->
  <a class="mainItem mainItem_interview" href="interview">
    <h2 class="mainItem-tit">
      <span class="mainItem-tit_en">
        <img src="<?php echo IMAGE_URL ?>interview/title.png" alt="Interview">
      </span>
      <span class="mainItem-tit_ja">社員インタビュー</span>
    </h2>
    <p class="mainItem-imgWrapper"><img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/common/arrow_76.svg" alt="矢印アイコン"></p>
  </a><!--/mainItem-->

  </div>
</div>
  <!-- ************************************************************
//  topics
// ************************************************************ -->
<div class="topics">
  <div class="topics-inner">
    <h2 class="topics-tit">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/resource/img/top/letter_topics01.svg" alt="Topics">
    </h2>

    <!-- card -->
    <div class="card">

      <!-- card-btn -->
      <div class="card-btn card-btn_prev disabled onlyPC" id="card-btn_prev"></div>
      <div class="card-btn card-btn_next onlyPC" id="card-btn_next"></div>
      <div class="card-btn card-btn_bottom onlySP" id="card-btn_bottom"></div>

      <!-- card-btn_prev_dummy ベタ -->
      <div class="card-btn_dummy card-btn_dummy_prev onlyPC"></div>
      <div class="card-btn_dummy card-btn_dummy_next onlyPC"></div>

      <div class="card-inner" id="card-inner">
        <!-- card-list -->
        <?php
            $article_args = array(
            'post_type'      => 'featured',
            'posts_per_page' => -1,
            'order'          => 'ASC',
            'post_status'    => 'publish'
        );
        $articles = new WP_Query($article_args);
        if ($articles->have_posts()) {
        ?>
        <ul class="card-list" id="card-list">
          <?php 
            while ($articles->have_posts()): $articles->the_post(); 
              $featured_image = get_the_post_thumbnail_url(get_the_ID(),'full'); 
          ?>
          <li class="card-item">
            <a class="card-link" href="<?php the_field('url'); ?>" <?php echo get_field('external') == true ? 'target="_blank" rel="noopener noreferrer"' : ''; ?>>
              <p class="card-txt onlyPC"><?php echo get_the_date('Y.m.d'); ?></p>
              <div class="card-img">
                <img 
                  src="<?php echo $featured_image; ?>"
                  class="upto1200" 
                  alt="<?php the_title(); ?>"
                >
                <img 
                  src="<?php echo $featured_image; ?>"
                  srcset="<?php echo $featured_image; ?> 1x, 
                          <?php echo $featured_image; ?> 2x"
                  class="from1201"
                  alt="<?php the_title(); ?>"
                >
              </div>
              <div class="txtArea">
                <p class="txtArea-txt onlySP"><?php echo get_the_date('Y.m.d'); ?></p>
                <p class="txtArea-tit"><?php echo the_title(); ?></p>
              </div>
            </a>
          </li>
          <?php endwhile; wp_reset_postdata(); ?>
        </ul><!-- /card-list -->
        <?php } ?>
      </div>
    </div><!-- /card -->
  </div>
</div>

<?php
get_footer();
<?php

/*
Define directory variables.
*/
require get_template_directory() . '/inc/define.php';

/*
Disable Guttenberg
*/
add_filter( 'use_block_editor_for_post', '__return_false' );

/*
Register Interview Post Type
*/
register_taxonomy('interview_category', 'interview', array(
    'hierarchical' => true,
    'labels' => array(
        'name' => __('Category'),
        'singular_name' => __('interview_category'),
        'search_items' => __('Search Category'),
        'popular_items' => __('Popular Categories'),
        'all_items' => __('All Categories'),
        'parent_item' => __('Parent Categories'),
        'parent_item_colon' => __('Parent Categories:'),
        'edit_item' => __('Edit Category'),
        'update_item' => __('Update Category'),
        'add_new_item' => __('Add New Category'),
        'new_item_name' => __('New Category Name'),
        'separate_items_with_commas' => __('Separate categories with commas'),
        'add_or_remove_items' => __('Add or remove Categories'),
        'choose_from_most_used' => __('Choose from the most used Categories'),
        'menu_name' => __('Interview Categories'),
    ),
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'interview-category'),
));
register_taxonomy('interview_tag', 'interview', array(
    'hierarchical' => false,
    'labels' => array(
        'name' => __('Tag'),
        'singular_name' => __('interview_tag'),
        'search_items' => __('Search Tag'),
        'popular_items' => __('Popular Tags'),
        'all_items' => __('All Tags'),
        'parent_item' => __('Parent Tags'),
        'parent_item_colon' => __('Parent Tags:'),
        'edit_item' => __('Edit Tag'),
        'update_item' => __('Update Tag'),
        'add_new_item' => __('Add New Tag'),
        'new_item_name' => __('New Tag Name'),
        'separate_items_with_commas' => __('Separate tags with commas'),
        'add_or_remove_items' => __('Add or remove Tags'),
        'choose_from_most_used' => __('Choose from the most used Tags'),
        'menu_name' => __('Interview Tags'),
    ),
    'show_ui' => true,
    'query_var' => true,
    'rewrite' => array('slug' => 'interview-tag'),
));

$interview_args = array(
    'labels' => array(
        'name'               => 'Interviews',
        'singular_name'      => 'Interview',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New',
        'edit_item'          => 'Edit Interview',
        'new_item'           => 'New Interview',
        'view_item'          => 'View Interview',
        'search_items'       => 'Search Interviews',
        'not_found'          => 'No Interviews Found',
        'not_found_in_trash' => 'No Interviews In The Trash'
    ),
    'description' => 'Interview with Staff',
    'public' => true,
    'has_archive' => true,
    'show_ui' => true,
    'hierarchical' => true,
    'supports' => array( 'title', 'editor', 'thumbnail'),
    'rewrite' => array('slug' => 'interview', 'with_front' => false),
    'menu_position' => 8,
);
register_post_type( 'interview', $interview_args );
<?php
define("WP_FLATSOME_ASSET_VERSION", time());
require_once 'func/fetch_posts_by_urls.php';

// home-2-bang-gia.122
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'c-home-2-bang-gia.122-style-css', get_stylesheet_directory_uri() . '/assets/home-2-bang-gia.122/c-style.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-home-2-bang-gia.122-responsive-css', get_stylesheet_directory_uri() . '/assets/home-2-bang-gia.122/c-responsive.css', [], WP_FLATSOME_ASSET_VERSION );
}, 999);
add_action( 'wp_footer', function () {
    wp_enqueue_script( 'c-home-2-bang-gia.122-script-js', get_stylesheet_directory_uri() . '/assets/home-2-bang-gia.122/c-script.js', [], WP_FLATSOME_ASSET_VERSION );
});


// home-8-lien-he.140
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'c-home-8-lien-he.140-style-css', get_stylesheet_directory_uri() . '/assets/home-8-lien-he.140/c-style.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-home-8-lien-he.140-responsive-css', get_stylesheet_directory_uri() . '/assets/home-8-lien-he.140/c-responsive.css', [], WP_FLATSOME_ASSET_VERSION );
}, 999);
add_action( 'wp_footer', function () {
    wp_enqueue_script( 'c-home-8-lien-he.140-script-js', get_stylesheet_directory_uri() . '/assets/home-8-lien-he.140/c-script.js', [], WP_FLATSOME_ASSET_VERSION );
});

// home-10-qa.146
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'c-home-10-qa.146-style-css', get_stylesheet_directory_uri() . '/assets/home-10-qa.146/c-style.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-home-10-qa.146-responsive-css', get_stylesheet_directory_uri() . '/assets/home-10-qa.146/c-responsive.css', [], WP_FLATSOME_ASSET_VERSION );
}, 999);
add_action( 'wp_footer', function () {
    wp_enqueue_script( 'c-home-10-qa.146-script-js', get_stylesheet_directory_uri() . '/assets/home-10-qa.146/c-script.js', [], WP_FLATSOME_ASSET_VERSION );
});


add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style('inter-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', array(), null);
    wp_enqueue_style( 'c-tweb-css', get_stylesheet_directory_uri() . '/assets/css/c-tweb.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-global-css', get_stylesheet_directory_uri() . '/assets/css/c-global.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-home-css', get_stylesheet_directory_uri() . '/assets/css/c-home.css', [], WP_FLATSOME_ASSET_VERSION );
    
    
    wp_enqueue_style( 'c-tweb-media-css', get_stylesheet_directory_uri() . '/assets/css/c-tweb-media.css', [], WP_FLATSOME_ASSET_VERSION );
    wp_enqueue_style( 'c-media-queries-css', get_stylesheet_directory_uri() . '/assets/css/c-media-queries.css', [], WP_FLATSOME_ASSET_VERSION );
}, 999);

add_action( 'wp_footer', function () {
     wp_enqueue_script( 'c-home-js', get_stylesheet_directory_uri() . '/assets/js/c-home.js', [], WP_FLATSOME_ASSET_VERSION );
});


// Disable Comments on ALL post types
add_action('admin_init', function () {
    $types = get_post_types();
    foreach ($types as $type) {
        if(post_type_supports($type, 'comments')) {
            remove_post_type_support($type, 'comments');
            remove_post_type_support($type, 'trackbacks');
        }
    }
});

function disable_comments_status() {
    return false;
}
add_filter('comments_open', 'disable_comments_status', 20, 2);
add_filter('pings_open', 'disable_comments_status', 20, 2);

function enqueue_jquery() {
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'enqueue_jquery');
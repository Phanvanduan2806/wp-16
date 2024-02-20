<?php

// Add the AJAX action hook for the callback
add_action('wp_ajax_fetch_posts_by_urls', 'fetch_posts_by_urls_callback');
add_action('wp_ajax_nopriv_fetch_posts_by_urls', 'fetch_posts_by_urls_callback');

// Define the AJAX callback function
function fetch_posts_by_urls_callback() {
    $urls = $_POST['urls'];
    $results = array();
    foreach ($urls as $url) {
        $post_id = url_to_postid($url);
        $post = get_post($post_id);
        if ($post) {
            $post_excerpt = wp_trim_words($post->post_content, 150); 
            $date = get_the_date('d/m', $post_id);
            $dateFull = get_the_date('d/m/Y', $post_id);

            $results[] = array(
                'url' => $url,
                'excerpt' => $post_excerpt,
                'date'=> $date,
                'dateFull'=> $dateFull,
            );
        }
    }
    wp_send_json($results);
}


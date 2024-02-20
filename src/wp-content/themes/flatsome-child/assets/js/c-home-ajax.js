async function fetchToAdmin(data) {
    try {
      if (!data.urls.length) return [];
      const ajaxUrl = "/wp-admin/admin-ajax.php";
      const response = await jQuery.ajax({
        type: "POST",
        url: ajaxUrl,
        data,
      });
      return response;
    } catch (error) {
      return [];
      console.error(error);
      throw error;
    }
  }
  function getUniqueUrls(selector) {
    const urls = Array.from(jQuery(selector + " .col.post-item a")).map(
      (link) => link.href
    );
    const uniqueUrls = [...new Set(urls)];
    return uniqueUrls;
  }
  
  // .c-experience
  jQuery(document).ready(async function ($) {
    const urls = getUniqueUrls(".c-experience .cb-experience");
    const blogPosts = await fetchToAdmin({
      urls,
      action: "fetch_posts_by_urls",
    });
    blogPosts.forEach((post) => {
      const elementsWithHref = $('.c-experience .cb-experience [href="' + post.url + '"]');
      console.log('elementsWithHref', elementsWithHref);
      elementsWithHref.each(function () {
        const tag = $(this).closest(".col").find(".from_the_blog_excerpt");
        tag.html(post.excerpt);
        const tag1 = $(this).closest(".col").find('.plain')
        const tempHTML1 = `<div class="box has-hover has-hover box-vertical box-text-bottom">
        <div class="box-image" style="border-radius: 100%; width: 12%;">
            <div class="image-cover" style="padding-top: 100%;">
                <img
                    src="/wp-content/uploads/2023/11/job1-1.jpg"
                    class="attachment- size-"
                    sizes="(max-width: 400px) 100vw, 400px"
                />
            </div>
        </div>
    
        <div class="box-text text-left">
            <div class="box-text-inner">
                <h4>Head of Acquisition Marketing</h4>
                <p>Real Vision</p>
                <p>June 2021 – Feb 2022</p>
            </div>
        </div>
    </div>
    `
        tag1.prepend(tempHTML1)
      });
    });
  });
  
  
  // .c-recom
  jQuery(document).ready(async function ($) {
    const urls = getUniqueUrls(".c-recom .cb-experience");
    const blogPosts = await fetchToAdmin({
      urls,
      action: "fetch_posts_by_urls",
    });
    blogPosts.forEach((post) => {
      const elementsWithHref = $('.c-recom .cb-experience [href="' + post.url + '"]');
      console.log('elementsWithHref', elementsWithHref);
      elementsWithHref.each(function () {
        const tag = $(this).closest(".col").find(".from_the_blog_excerpt");
        tag.html(post.excerpt);
        const tag1 = $(this).closest(".col").find('.plain')
        const tempHTML1 = `<div class="box has-hover has-hover box-default box-text-bottom">
        <div class="box-image" style="border-radius: 100%; width: 12%;">
            <div class="image-cover" style="padding-top: 100%;">
                <img width="250" height="250" src="/wp-content/uploads/2023/11/testimonial-avatar-female-2-ux-builder-element.jpg" class="attachment- size-" />
            </div>
        </div>
        <div class="box-text text-center">
            <div class="box-text-inner">
                <h4>Eric Pastuer</h4>
                <p>Software Engineer at Facebook</p>
            </div>
        </div>
    </div>
    
    `
        tag1.prepend(tempHTML1)
      });
    });
  });
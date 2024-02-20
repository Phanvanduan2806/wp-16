function handleLoadMore(elementPath, buttonSelector, visibleItems) {
    const $items = jQuery(elementPath);
    const $loadMoreButton = jQuery(buttonSelector);
    $items.hide();

    function showItems() {
        $items.slice(visibleItems, visibleItems + visibleItems).fadeIn();
        visibleItems += visibleItems;
        if (visibleItems >= $items.length) {
            $loadMoreButton.hide();
        }
    }

    $loadMoreButton.on("click", showItems);
    $items.slice(0, visibleItems).show();
}

// home: Du an
handleLoadMore(
    ".c-du-an .post-item",
    ".c-du-an .c-pagination-btn",
    8
);


// Append content in .c-dn-noigi
jQuery(document).ready(function ($) {
    var contentToAppend = `<div class="icon-box featured-box icon-box-right text-left">
    <div class="icon-box-img" style="width: 80px;">
        <div class="icon">
            <div class="icon-inner">
                <img src="/wp-content/uploads/2023/12/mr-duong-min.webp" />
            </div>
        </div>
    </div>
    <div class="icon-box-text last-reset">
        <div id="text-1199484421" class="text">
            <h3 class="uppercase" style="color:#fff">Hoàng Đại Dương</h3>
            <p class="uppercase">Phó Giám đốc Công ty TNHH Sở hữu trí tuệ M.I.T</p>
        </div>
    </div>
</div>
`

    $('.c-dn-noigi .box-text-inner ').append(contentToAppend);
});

// Append star icon in .c-dn-noigi

jQuery(document).ready(function ($) {
    var starToAppend = `
    <div id="text-2199799118" class="text c-star">
    <div class="icon_element_outer_alignleft alignleft"><div class="icon_element_inner icon_lib_fa"><span class="icon_element_icon_size_nm icon_element_icon fa fa fa-star" style="color:#ffac08 !important;"></span></div></div>
    <div class="icon_element_outer_alignleft alignleft"><div class="icon_element_inner icon_lib_fa"><span class="icon_element_icon_size_nm icon_element_icon fa fa fa-star" style="color:#ffac08 !important;"></span></div></div>
    <div class="icon_element_outer_alignleft alignleft"><div class="icon_element_inner icon_lib_fa"><span class="icon_element_icon_size_nm icon_element_icon fa fa fa-star" style="color:#ffac08 !important;"></span></div></div>
    <div class="icon_element_outer_alignleft alignleft"><div class="icon_element_inner icon_lib_fa"><span class="icon_element_icon_size_nm icon_element_icon fa fa fa-star" style="color:#ffac08 !important;"></span></div></div>
    <div class="icon_element_outer_alignleft alignleft"><div class="icon_element_inner icon_lib_fa"><span class="icon_element_icon_size_nm icon_element_icon fa fa fa-star" style="color:#ffac08 !important;"></span></div></div>
    </div>
`

    $('.c-dn-noigi .box-text-inner ').append(starToAppend);
});


jQuery(document).ready(function ($) {
    $('.c-kh-duocgi .ckh-box-1').on('click', function () {
        if ($(this).hasClass('ckh-box-1')) {
            $('.ckh-content-2').css('display', 'none');
            $('.ckh-content-3').css('display', 'none');
            $('.ckh-content-4').css('display', 'none');
            $('.ckh-content-5').css('display', 'none');
            $('.ckh-content-6').css('display', 'none');

            $('.ckh-content-1').css('display', 'block');
        }
    });
    $('.c-kh-duocgi .ckh-box-2').on('click', function () {
        if ($(this).hasClass('ckh-box-2')) {
            $('.ckh-content-1').css('display', 'none');
            $('.ckh-content-3').css('display', 'none');
            $('.ckh-content-4').css('display', 'none');
            $('.ckh-content-5').css('display', 'none');
            $('.ckh-content-6').css('display', 'none');

            $('.ckh-content-2').css('display', 'block');
        }
    });
    $('.c-kh-duocgi .ckh-box-3').on('click', function () {
        if ($(this).hasClass('ckh-box-3')) {
            $('.ckh-content-1').css('display', 'none');
            $('.ckh-content-2').css('display', 'none');
            $('.ckh-content-4').css('display', 'none');
            $('.ckh-content-5').css('display', 'none');
            $('.ckh-content-6').css('display', 'none');

            $('.ckh-content-3').css('display', 'block');
        }
    });
    $('.c-kh-duocgi .ckh-box-4').on('click', function () {
        if ($(this).hasClass('ckh-box-4')) {
            $('.ckh-content-1').css('display', 'none');
            $('.ckh-content-2').css('display', 'none');
            $('.ckh-content-3').css('display', 'none');
            $('.ckh-content-5').css('display', 'none');
            $('.ckh-content-6').css('display', 'none');

            $('.ckh-content-4').css('display', 'block');
        }
    });
    $('.c-kh-duocgi .ckh-box-5').on('click', function () {
        if ($(this).hasClass('ckh-box-5')) {
            $('.ckh-content-1').css('display', 'none');
            $('.ckh-content-2').css('display', 'none');
            $('.ckh-content-3').css('display', 'none');
            $('.ckh-content-4').css('display', 'none');
            $('.ckh-content-6').css('display', 'none');

            $('.ckh-content-5').css('display', 'block');
        }
    });
    $('.c-kh-duocgi .ckh-box-6').on('click', function () {
        if ($(this).hasClass('ckh-box-6')) {
            $('.ckh-content-1').css('display', 'none');
            $('.ckh-content-2').css('display', 'none');
            $('.ckh-content-3').css('display', 'none');
            $('.ckh-content-4').css('display', 'none');
            $('.ckh-content-5').css('display', 'none');

            $('.ckh-content-6').css('display', 'block');
        }
    });
});
        jQuery(document).ready(function($) {
        function sticky()
        {
            var window_top=$(window).scrollTop();
            var top_position=$('body').offset().top;
            var element_to_stick=$('#header_bottom');
            
            if (window_top > top_position) {
                element_to_stick.addClass('sticky');
            } else {
                element_to_stick.removeClass('sticky');
            }
        }
        $(window).scroll(sticky);
        sticky();
        });
$(document)
    .ready(function() {

        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;

        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;

        $('.special.cards .image')
            .dimmer({
                on: 'hover'
            })
        ;

        $('.menu .item')
          .tab()
        ;

        // make sortable tables sortable
        $('.sortable')
            .stupidtable();
        ;

        $('a[href*="#"]:not([href="#"])')
            .on('click', function(event) {
                var target = $(this.getAttribute('href'));
                if( target.length ) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top
                    }, 1000);
                }
            })
        ;

    })
;
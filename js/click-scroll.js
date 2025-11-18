//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 90;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 90;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});


            // Transform the partners carousel into a smooth continuous marquee.
            // Robust version: duplicate blocks until wide enough, compute loop width in pixels,
            // inject dynamic @keyframes that translate by the pixel width of one block,
            // and recompute on resize.
            document.addEventListener('DOMContentLoaded', function () {
                var carousel = document.getElementById('partnersCarousel');
                if (!carousel) return;
                var imgs = carousel.querySelectorAll('.partner-logo');
                if (imgs.length === 0) return;

                // Build marquee structure
                var marquee = document.createElement('div');
                marquee.className = 'partner-marquee';

                var track = document.createElement('div');
                track.className = 'partner-marquee-track';

                marquee.appendChild(track);
                carousel.parentNode.insertBefore(marquee, carousel);
                carousel.style.display = 'none';

                var originals = Array.prototype.slice.call(imgs);
                var blocks = 0;
                var maxBlocks = 12;

                function appendBlock() {
                    originals.forEach(function (img) {
                        var clone = img.cloneNode(true);
                        clone.classList.add('marquee-item');
                        track.appendChild(clone);
                    });
                    blocks++;
                }

                function buildTrackForWidth() {
                    // Clear existing
                    while (track.firstChild) track.removeChild(track.firstChild);
                    blocks = 0;

                    // Always add at least two blocks to allow looping
                    appendBlock();
                    appendBlock();

                    // Append more blocks until track is at least twice the marquee width
                    // (so one block can scroll out while the next fills the viewport).
                    var attempts = 0;
                    while (track.scrollWidth < marquee.clientWidth * 2 && blocks < maxBlocks && attempts < 20) {
                        appendBlock();
                        attempts++;
                    }
                }

                function setupAnimation() {
                    if (blocks === 0) return;
                    var loopWidth = track.scrollWidth / blocks; // width of one block in px
                    var speed = 80; // px per second, tuneable
                    var duration = Math.max(6, Math.round(loopWidth / speed));

                    // Remove previous keyframes if present
                    var styleId = 'partner-marquee-keyframes';
                    var prevStyle = document.getElementById(styleId);
                    if (prevStyle) prevStyle.parentNode.removeChild(prevStyle);

                    // Inject dynamic keyframes that move exactly one block width in px
                    var styleEl = document.createElement('style');
                    styleEl.id = styleId;
                    styleEl.textContent = "@keyframes partnerMarqueeAnim { from { transform: translateX(0); } to { transform: translateX(-" + loopWidth + "px); } }";
                    document.head.appendChild(styleEl);

                    track.style.animation = 'none';
                    // Force reflow
                    void track.offsetWidth;
                    track.style.animation = 'partnerMarqueeAnim ' + duration + 's linear infinite';
                }

                // Initial build and animate
                buildTrackForWidth();
                setupAnimation();

                // Rebuild on resize to adapt to new widths
                var resizeTimer;
                window.addEventListener('resize', function () {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(function () {
                        buildTrackForWidth();
                        setupAnimation();
                    }, 150);
                });
            });

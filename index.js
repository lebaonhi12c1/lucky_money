$(document).ready(function () {
    const data = [
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-14.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-12.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-06.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-16.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-18.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-04.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-02.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-08.jpg',
        'https://www.sbv.gov.vn/webcenter/cs/groups/phongweb/documents/noidungtinh/c2j2/mzqz/~edisp/~export/SBV343183~2/413134-10.jpg',
    ]
    $('.btn_open').click(function (e) { 
        e.preventDefault();
        var index = Math.floor(Math.random()*data.length)
        $('#img_content').attr('src', data[index]);
        $('.left').css({
            'transform': 'translateY(-100px)',
            'transition': 'all ease-in-out 0.5s'
        });
        $('.right').css({
            'transform': 'translateY(100px)',
            'transition': 'all ease-in-out 0.5s'
        });
        $('#img_content').css({
            // 'transform-style': 'preserve-3d',
            // 'transform-origin': 'center',
            // 'transform': 'rotateY(60) translateZ(500px)',
            'animation': 'animate linear 10s infinite'
        });
        $('.heading').css({'display':'none'});
        $(this).css({'display':'none'});
        $('.box').css({
            'background-image': 'url("https://hinhanhdephd.com/wp-content/uploads/2019/02/hinh-nen-phao-hoa-dong-gif-1.gif")'
        });
        $('#girf_container').removeClass('girf_container');
    });
});
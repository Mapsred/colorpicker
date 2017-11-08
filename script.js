var ColorGenerator = {
    init: function () {
        ColorGenerator.refresh();

        $('#new').click(function () {
            var origin = $('#content .large').first();
            origin.clone().appendTo("#content");
            ColorGenerator.refresh();
        });
    },

    refresh: function () {
        $('.color-picker').colorpicker({color: '#FFFFFF', format: 'rgb'});

        $('.color-picker').on('changeColor', function (e) {
            var target = $(e.currentTarget).parent().parent();
            var text = target.find(".text");
            var text2 = target.find(".text2");
            var color = e.color.toRGB();
            text2.html(color.r+","+color.g+","+color.b);
            text.html(e.color.toHex());
            target.attr("style", "background-color: "+e.color.toHex()+";");
        });
    }
};

$(document).ready(function () {
    ColorGenerator.init();
});



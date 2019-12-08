scroll(function (top) {
    view(".nav", {
        start: 0,
        end: ($(window).height()) - 10,
        begin: "(60)",
        finish: "(0)",
        attr: "transform:rotateY",
        top: top,
        sulv: 1
    })

    view(".text", {
        start: 0,
        end: ($(window).height()) - 10,
        begin: "(60)",
        finish: "(0)",
        attr: "transform:rotateY",
        top: top,
        sulv: 1
    })

})
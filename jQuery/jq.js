$("document").ready(function () {
    let button = $("<button>Nice</button>") //Step 1
    $("body").append(button);


    let rgbPara = $("<p></p>");
    rgbPara.text('This is a paragraph. Click me and color will be random [Step 4]');
    $("body").append(rgbPara);

    
    let btnSpan = $("<button>Span</button>")
    let divSpan = $("<div></div>")
    $("body").append(btnSpan);


    let friends = [
        'Josh',
        'Garett',
        'Haylee',
        'Kait',
        'Pepper',
        'Harry',
        'Ron',
        'Hermione',
        'Tom Riddle',
        'Geralt of Rivia'
    ]
    let newUl = $("<ul></ul>");
    
    
    $(button).on('click', function () {
        alert("Nice stuff")
    })
    
    $('#btnSubmit').on('click', function () {
        const inputVal = $("input[type='text']").val();
        alert(inputVal)
    })
    
    $('#hoverDiv').on('mouseenter', function () {
        $('#hoverDiv').css("background", "blue");
    })
    
    $('#hoverDiv').on('mouseleave', function () {
        $('#hoverDiv').css("background", "white");
    })
    
    $(rgbPara).on('click', function () {
        $(rgbPara).css({
            "color": rgb(),
            "user-select": "none"
        });
    })
    
    function rgb() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return (`rgb(${r}, ${g}, ${b})`)
    }
    
    $(btnSpan).on('click', function () {
        let newSpan = $('<span>Dan the Mann </span>');
        $(divSpan).append(newSpan);
        $("body").append(divSpan);
    })
    
    $("#btnList").on('click', function () {
        for (let i = 0; i < friends.length; i++) {
            let newLi = $("<li></li>");
            let friendLi = friends[i];
            $(newLi).text(friendLi);
            $(newUl).append(newLi);
            $("body").append(newUl);
        }
    })
    
})
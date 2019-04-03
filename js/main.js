const START_MONEY = 1000.0;
const GAME_FPS = 10;


var current_money = START_MONEY;
var expense_per_second = 0.0;

class Item {
    constructor(name, cost, inc_per_click, inc_per_sec) {
        this.name = name;
        this.cost = cost;
        this.inc_per_click = inc_per_click;
        this.inc_per_sec = inc_per_sec;
    }
}

var items = [
    new Item("Mine Coal", 0, 10, 0),
    new Item("Fetch Water", 0, 100, 0),
    new Item("Dig hole", 0, 10, 0),
    new Item("Cut Stone", 0, 100, 0)
]



function initialize() {

    var updateLabels = setInterval(function() {
        $('#money_label').html(current_money);
    }, 1000 / GAME_FPS );

    var seconds_timer = setInterval(function() {
        current_money -= expense_per_second;
    }, 1000 );

    items.foreach(item => {
        var htmlcard = '<div id="' + item.name + '" class="card">' +
        '<div class="content">' +
        '    <div class="header"' + item.name + '</div>' +
        '    <div class="description">' +
        '        Item description' +
        '    </div>' +
        '</div>' +
        '<button class="ui bottom attached button" value="' + item.inc_per_click + '">' +
        '    <i class="tencent weibo icon"></i>' +
        '    <span>' + item.name + '</span>' +
        '</button>' +
        '</div>"';
        
        $('#cards').append(htmlcard);
    });
    
    <div id="item01" class="card">
                    <div class="content">
                        <div class="header">Mine</div>
                        <div class="description">
                            Item description
                        </div>
                    </div>
                    <button class="ui bottom attached button" value="1">
                        <i class="tencent weibo icon"></i>
                        <span>Work in mine</span>
                    </button>
                </div>

    $( 'button' ).on('click', function() {
        var $button = $(this);
        add_money(parseInt($button.attr("value")));
    })
}


function add_money(amount) {
    current_money += amount;    
}
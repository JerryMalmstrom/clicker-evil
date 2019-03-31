const START_MONEY = 1000.0;
const GAME_FPS = 10;


var current_money = START_MONEY;
var expense_per_second = 7.0;

class Item {
    constructor(name, cost, inc_per_click, inc_per_sec) {
        this.name = name;
        this.cost = cost;
        this.inc_per_click = inc_per_click;
        this.inc_per_sec = inc_per_sec;
    }
}

var items = [new Item("Fix Computer", 0, 10, 0), new Item("Set up backup-system", 0, 100, 0)]



function initialize() {

    var updateLabels = setInterval(function() {
        $('#money_label').html(current_money);
    }, 1000 / GAME_FPS );

    var seconds_timer = setInterval(function() {
        current_money -= expense_per_second;
    }, 1000 );



    $( 'button' ).on('click', function() {
        var $button = $(this);
        add_money(parseInt($button.attr("value")));
    })
}


function add_money(amount) {
    current_money += amount;    
}
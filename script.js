var NumberQuizt = 0;
$(".button1").click(function() {
    var rateFriends = Number($(".ques1").val());
    var chooseAbilities = $(".ques2").val();
    if (rateFriends <= 3) {
        if (chooseAbilities === "Immortality") {
            $(".ban").show();
            $(".ban").append("<p>" + "You try not to make friends as often as you like but enjoy to live a fun life" + "</p>");
            $(".page1").hide();
        } else if (chooseAbilities === "immortality") {
            $(".ban").show();
            $(".ban").append("<p>" + "You try not to make friends as often as you like but enjoy to live a fun life" + "</p>");
            $(".page1").hide();
        }
    }
    if (rateFriends <= 7) {
        if (chooseAbilities === "Magic") {
            $(".king").show();
            $(".king").append("<p>" + "You keep your friends close and always try to beat yourself up for your past" + "</p>");
            $(".page1").hide();
        } else if (chooseAbilities === "magic") {
            $(".king").show();
            $(".king").append("<p>" + "You keep your friends close and always try to beat yourself up for your past" + "</p>");
            $(".page1").hide();
        }
    }
    if (rateFriends <= 8) {
        if (chooseAbilities === "Super Strength") {
            $(".diane").show();
            $(".page1").hide();
            $(".diane").append("<p>" + "You love making friends and are so kind to them" + "</p>");
        } else if (chooseAbilities === "super strength") {
            $(".diane").show();
            $(".page1").hide();
            $(".diane").append("<p>" + "You love making friends and are so kind to them " + "</p>");
        }
    }
    if (rateFriends <= 10) {
        if (chooseAbilities === "Counter Everything") {
            $(".meliodas").show();
            $(".page1").hide();
            $(".meliodas").append("<p>" + "You love making friends and find yourself living life to the fullest" + "</p>");
        } else if (chooseAbilities === "counter everything") {
            $(".meliodas").show();
            $(".page1").hide();
            $(".meliodas").append("<p>" + "You love making friends and find yourself living life to the fullest" + "</p>");
        }
    }
});

$(".button2").click(function() {
    $(".finalPage").show();
    $(".page1").hide();
    $(".king").hide();
    $(".ban").hide();
    $(".diane").hide();
    $(".meliodas").hide();
    NumberQuizt += 1;
    $(".counter").text(NumberQuizt);

});

$(".lastButton").click(function() {
    $(".page1").show();
    $(".finalPage").hide();
});
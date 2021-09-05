
var fly = false
var showDoc = false
$('#doc').css("display", "none")

const handleDoc = () => {
    if (!showDoc) {
        window.location.href = "#docbut"
        $('#doc').css("display", "")
        showDoc = true
        $('#docbut').html("Lukk")
        console.log(showDoc)
    } else {
        window.location.href = "#docbut"
        $('#doc').css("display", "none")
        showDoc = false
        $('#docbut').html("Dokumentasjon")
        console.log(showDoc)
    }
}

$('#pipe').click(function(){
    for (let i = 0; i<10; i++) {
            $('#smoke').animate({'cy':-50}, 3000);
            $('#smoke').animate({'cy':120}, 0);   
             
    }
    console.log(fly)    
});

$('#wall').click(function(){
    const time = 11000
    fly = true
    var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animation.setAttribute("id","anim");
    animation.setAttribute("attributeName","points");
    animation.setAttribute("dur","11s");
    animation.setAttribute("fill","freeze");
    animation.setAttribute("to","250 -600, 0 -500, 470 -500");
    document.getElementById("roof").appendChild(animation);
    $('#door').animate({'y':-395}, time, 'linear');
    $('#pipe').animate({'y':-620}, time, 'linear');
    $('#wall').animate({'y':-500}, time, 'linear');
    $('#straight').animate({'y':-600}, time, 'linear');
    $('#blue').animate({'cy':-700}, time, 'linear');
    $('#red').animate({'cy':-670}, time, 'linear');
    $('#green').animate({'cy':-670}, time, 'linear');
    animation.beginElement()
    document.getElementById("smoke").style.display = "none"  
});

const ids = ["#wall", "#door"]

ids.map((id) => {
    $(id).hover(function (){
        $("#wall").css("fill","beige")
        $("#door").css("fill","navy")
        $("#roof").css("fill","black")
        $("#pipe").css("fill","grey")    
    })
}
)

ids.map((id) => {
    $(id).mouseout(function (){
        $("#wall").css("fill","navy")
        $("#door").css("fill","beige")
        $("#roof").css("fill","grey")
        $("#pipe").css("fill","black")    
    })
}
)



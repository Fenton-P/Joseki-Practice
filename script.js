canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")

class joseki {
    constructor(name, moveset) {
        this.name = name
        this.moveset = moveset
    }
}

$("#sliderbg").hide()
$("#library").click(function() {
    slider()
})

function slider() {
    $("#sliderbg").toggle()
    $("#sliderbg").click(function() {
        leftPos = mouseX
        if(leftPos>=560) {
            leftPos = 560
        }
        $("#slider").animate({left: leftPos+"px"}, "slow")
        clearBoard2()
        if(leftPos<570/2) {
            pickJoseki([true, Math.floor(leftPos/(570/2)*josekis.length)])
        } else {
            pickJoseki([false, Math.floor((leftPos-570/2)/(570/2)*ldp.length)])
        }
    })
}

boardColor = "#ebd31c"
$("canvas").css("background-color","#f7de20")
lineThickness = 1
DotThickness = 4

rows = 19
cols = 19
size = 570
adder = 1

$(".invis").hide()
bs = document.getElementById("blackStone")
ws = document.getElementById("whiteStone")

mouseOffset = $(window).width()/3+($(window).width()/6-570/2)-(3*(rows/size))-10

if($(window).width()/3<570) {
    mouseOffset = $(window).width()/3
}

switcher = document.getElementById("switcher")
switcherText = document.getElementById("switchers")

switcherTexts = ["Both Life And Death And Joseki", "Just Life And Death", "Just Joseki"]

switchIndex = 0

function switchType() {
    if(switchIndex<2) {
        switchIndex += 1
    } else {
        switchIndex = 0
    }
    switcherText.innerHTML = switcherTexts[switchIndex]
    if(switchIndex<2) {
        switcher.innerHTML = switcherTexts[switchIndex+1]
    } else {
        switcher.innerHTML = switcherTexts[0]
    }
}


colored = true

josekis = [
    new joseki("4-4 kick", 
    [[], [3, 15], [5, 16], [4, 16], [5, 15], [3, 13], [9, 15]]), 
new joseki("Beginner Joseki", 
[[], [3,15],[5,16],[2,13],[3,17],[2,16],[8,16]]), 
new joseki("3-4 High Approach", 
[[], [2,15],[4,15],[4,16],[5,16],[3,16],[5,15],[2,13],[9,15]]),
new joseki("4-4 Pincer", 
[[], [3,15],[5,16],[7,16],[2,16],[3,16],[2,15],[3,14],[3,17],[4,17],[2,17],[4,16],[2,13]]),
new joseki("3-3 Crawl",
[[], [3,15],[2,16],[2,15],[3,16],[4,16],[4,17],[5,16],[5,17],[6,16],[6,17],[7,16]]),
new joseki("3-3 flower invasion", 
[[], [3,15],[2,16],[2,15],[3,16],[4,16],[4,17],[5,17],[5,16],[4,15],[6,17],[3,17],[5,18],[2,17]]),
new joseki("3-3 invasion",
[[], [3,15],[2,16],[2,15],[3,16],[4,16],[4,17],[5,16],[5,17],[6,16],[1,15],[1,14],[1,16],[2,13]]),
new joseki("4-4 Pincer Box",
[[], [3,15],[5,16],[7,16],[2,16],[2,15],[3,16],[4,15],[5,17],[6,14]]),
new joseki("New 4-4 Approach",
[[], [3,15],[5,16],[2,13],[3,16],[2,16],[2,17],[4,16],[3,17],[4,15],[4,17],[5,15],[6,16]]),
new joseki("4-4 Slide Tenuki",
[[], [3,15],[5,16],[2,13],[3,17],[3,3],[2,16]]),
new joseki("4-4 Approach Attach",
[[], [3,15],[5,16],[5,15],[6,15],[5,14],[4,16],[3,16],[7,16],[3,12]]),
new joseki("4-4 Slide And Jump",
[[], [3,15],[5,16],[2,13],[3,17],[2,16],[5,14]]),
new joseki("3-4 Kick", 
[[], [2,15],[4,15],[3,16],[4,16],[3,14],[4,14],[3,13]]),
new joseki("3-3 basic start",
[[], [2,16],[3,15],[3,16],[4,15],[1,14],[3,12]]),
new joseki("4-4 double pincer retreat", 
[[], [3,15],[5,16],[7,16],[9,16],[2,13]]),
new joseki("5-4 ladder works",
[[],[3,14],[3,16],[4,16],[4,17],[4,15],[5,16],[3,17],[2,17],[5,17],[3,18],[6,16],[2,14],[3,15],[2,15]]),
new joseki("3-3 on small night", 
[[[3,15,true],[5,16,true]],[2,16],[2,15],[1,15],[1,14],[1,17],[0,15],[0,16]]),
new joseki("3-3 defense", 
[[[3,15,false],[5,16,true],[4,16,false],[5,15,true],[3,13,false],[9,15,true],[2,9,false],[2,16,true]],[4,17],[2,14],[3,14],[1,13],[2,13],[1,14],[2,11],[1,17]]),
new joseki("3-3 defense crawl",
[[[3,15,false],[5,16,true],[4,16,false],[5,15,true],[3,13,false],[9,15,true],[2,9,false],[2,16,true]],[4,17],[2,14],[3,14],[2,13],[2,12],[1,12],[1,11],[1,13],[3,12],[1,17]]),
new joseki("3-3 defense slide", 
[[[3,15,false],[5,16,true],[4,16,false],[5,15,true],[3,13,false],[9,15,true],[2,9,false],[2,16,true]],[4,17],[1,14],[2,14],[1,15],[1,13],[1,17],[5,13]]),
new joseki("3-4 mirror defense",
[[],[2,15],[4,15],[2,13],[2,16],[1,16],[3,16],[1,17],[8,16]])
]

ldp = [
    new joseki("Black To Live", 
    [[[1,17,false],[0,16,true],[1,16,false],[1,15,true],[2,17,false],[1,14,true],[3,17,false],[2,16,true],[4,17,false],[3,16,true],[5,17,false],[4,16,true],[6,17,false],[5,16,true],[6,16,true],[7,17,true],[7,16,true],[6,18,true]],[0,17],[5,18],[4,18]]),
    new joseki("Black To Live",
    [[[2,16,false],[3,15,true],[2,17,false],[2,15,true],[1,17,false],[1,16,true],[0,17,false],[1,15,true],[4,17,false],[4,16,true],[5,17,true],[6,16,true]],[4,18],[3,16],[3,17]]),
    new joseki("Black To Live",
    [[[3,17,false],[3,16,true],[2,17,false],[2,16,true],[1,16,false],[1,15,true],[0,16,false],[2,14,true],[4,16,true],[4,17,true],[6,17,true]],[1,18],[3,18],[0,17]]),
    new joseki("Black To Live",
    [[[4,16,false],[5,13,true],[5,16,false],[5,15,true],[5,17,false],[6,16,true],[5,18,false],[6,17,true],[2,15,false],[6,18,true],[2,16,false],[6,15,true],[2,17,false],[3,14,true],[2,18,false],[2,14,true],[1,14,true],[1,15,true],[1,16,true],[1,17,true]],[3,17],[3,15],[4,18]]),
    new joseki("Black To Live",
    [[[1,17,false],[0,17,true],[1,18,false],[1,16,true],[2,18,false],[1,15,true],[2,16,false],[2,15,true],[3,16,false],[3,15,true],[4,16,false],[4,15,true],[3,17,false],[5,16,true],[5,17,false],[6,16,true],[6,17,false],[7,17,true],[7,16,true],[6,18,true],[5,18,true]],[4,18],[4,17],[5,17]]),
    new joseki("Black To Live",
    [[[1,18,false],[0,15,true],[0,16,false],[1,15,true],[1,17,false],[0,13,true],[2,17,false],[1,13,true],[3,17,false],[2,13,true],[3,16,false],[3,13,true],[4,18,false],[4,17,true],[2,15,false],[5,17,true],[2,14,false],[3,14,true],[3,15,true],[2,16,true],[6,16,true],[5,15,true]],[3,18],[1,16],[0,17]]),
    new joseki("Black To Live",
    [[[4,18,false],[5,18,true],[4,17,false],[5,17,true],[3,17,false],[4,16,true],[3,16,false],[4,15,true],[3,15,false],[3,14,true],[2,15,false],[2,14,true],[1,15,false],[1,14,true],[1,16,false],[0,15,true],[0,16,true],[0,17,true],[6,16,true],[4,14,true]],[2,18],[1,17],[2,17]]),
    new joseki("Black To Live",
    [[[2,18,false],[1,17,true],[2,17,false],[1,16,true],[2,16,false],[1,15,true],[2,15,false],[1,14,true],[2,14,false],[2,13,true],[3,14,false],[3,12,true],[4,13,false],[4,12,true],[5,13,false],[5,12,true],[5,14,false],[6,13,true],[5,15,false],[6,14,true],[5,16,false],[6,15,true],[4,17,false],[4,16,true],[3,17,true],[3,18,true],[5,17,true],[6,16,true],[6,17,true],[1,13,true]],[3,16],[4,18],[4,15]]),
    new joseki("Black To Live",
    [[[4,18,false],[2,17,true],[3,17,false],[2,16,true],[3,15,false],[2,15,true],[3,14,false],[2,14,true],[3,13,false],[2,13,true],[4,13,false],[3,12,true],[5,13,false],[4,12,true],[4,16,false],[5,12,true],[5,16,false],[6,13,true],[5,17,false],[6,14,true],[6,15,true],[6,16,true],[6,17,true],[8,17,true]],[5,14],[5,15],[4,15]]),
    new joseki("Black To Live",
    [[[0,17,false],[1,18,true],[1,17,false],[0,16,true],[3,18,false],[1,16,true],[2,16,false],[1,15,true],[3,16,false],[2,15,true],[4,16,false],[4,15,true],[3,15,true],[5,15,true],[5,16,true],[5,17,true]],[2,18],[4,17],[3,17]]),
    new joseki("Black To Live",
    [[[2,18,false],[1,17,true],[2,17,false],[1,16,true],[2,16,false],[1,15,true],[2,15,false],[2,14,true],[3,14,false],[3,13,true],[4,14,false],[4,15,true],[4,16,false],[4,13,true],[5,16,false],[5,13,true],[4,17,false],[6,14,true],[3,17,false],[6,15,true],[6,16,true],[6,17,true],[5,17,true],[1,14,true]],[3,15],[5,15],[4,18]]),
    new joseki("Black To Live",
    [[[2,18,false],[1,18,true],[1,17,false],[1,15,true],[1,16,false],[2,15,true],[0,15,false],[3,15,true],[2,16,false],[1,13,true],[3,16,false],[4,16,true],[4,17,false],[5,17,true],[3,18,false],[3,17,true],[5,18,true],[5,16,true]],[0,18],[4,18],[0,16]]),
    new joseki("Black To Live",
    [[[2,17,false],[1,18,true],[1,16,false],[1,14,true],[1,15,false],[0,14,true],[0,15,false],[2,14,true],[2,15,false],[3,14,true],[3,15,false],[4,15,true],[3,16,false],[4,16,true],[4,14,true],[3,17,true],[3,18,true],[5,17,true]],[1,17],[2,18],[0,17]]),
    new joseki("Black To Live",
    [[[1,18,false],[0,17,true],[0,16,false],[0,15,true],[1,16,false],[1,15,true],[2,16,false],[2,15,true],[3,17,false],[3,16,true],[4,16,true],[4,17,true]],[3,18],[1,17],[2,17]]),
    new joseki("Black To Live",
    [[[1,18,false],[1,17,false],[2,16,false],[3,16,false],[4,16,false],[5,17,false],[5,18,false],[0,17,true],[1,16,true],[1,15,true],[2,15,true],[3,15,true],[4,15,true],[5,15,true],[5,16,true],[6,17,true],[6,16,true],[3,17,true]],[3,18],[4,17],[2,17]]),
    new joseki("Black To Live",
    [[[1,18,false],[1,17,false],[2,16,false],[3,16,false],[4,16,false],[5,17,false],[5,18,false],[3,18,true],[0,17,true],[1,16,true],[1,15,true],[2,15,true],[3,15,true],[4,15,true],[5,16,true],[6,16,true],[6,17,true]],[3,17],[6,18],[2,18]]),
    new joseki("Black To Live",
    [[[3,17,false],[2,17,false],[2,16,false],[1,15,false],[0,16,false],[1,17,true],[4,17,true],[4,16,true],[3,16,true],[2,15,true],[2,14,true],[1,14,true]],[1,18],[0,17],[3,18]]),
    new joseki("Black To Live",
    [[[2,18,false],[3,17,false],[4,17,false],[2,16,false],[1,16,false],[0,16,false],[1,17,true],[0,15,true],[1,15,true],[2,15,true],[3,16,true],[4,16,true],[5,16,true],[5,17,true],[5,18,true]],[0,17],[1,18],[4,18]]),
    new joseki("Black To Live",
    [[[0,17,false],[1,17,false],[1,18,false],[1,16,false],[2,16,false],[3,16,false],[4,16,false],[2,17,true],[3,17,true],[4,17,true],[5,16,false],[5,17,false],[6,16,false],[0,16,true],[0,15,true],[1,15,true],[2,15,true],[3,15,true],[4,15,true],[5,15,true],[7,15,true],[7,16,true],[7,17,true],[6,17,true],[5,18,true]],[4,18],[3,18],[2,18],[4,18],[6,18]]),
    new joseki("Black To Live",
    [[[1,17,false],[2,17,false],[2,16,false],[3,15,false],[4,17,false],[5,17,false],[5,18,false],[5,16,false],[5,15,false],[4,16,true],[4,15,true],[3,14,true],[2,14,true],[1,15,true],[1,16,true],[0,17,true],[4,13,true],[5,14,true],[6,14,true],[6,15,true],[6,16,true],[6,17,true],[6,18,true]],[3,18],[3,16],[1,18]]),
    new joseki("Black To Live",
    [[[0,16,false],[1,16,false],[2,16,false],[2,17,false],[3,17,false],[4,17,false],[1,17,true],[0,17,true],[0,15,true],[1,15,true],[2,15,true],[3,16,true],[4,16,true],[5,16,true],[5,17,true],[7,17,true]],[4,18],[2,18],[1,18],[0,18]]),
    new joseki("Black To Live",
    [[[0,16,false],[1,17,false],[2,16,false],[2,15,false],[3,17,false],[4,17,false],[5,17,false],[3,16,true],[3,15,true],[2,14,true],[1,14,true],[1,15,true],[1,16,true],[5,16,true],[5,14,true],[6,16,true],[6,17,true],[8,17,true]],[2,18],[2,17],[2,16]]),
    new joseki("Black To Live",
    [[[0,16,false],[1,16,false],[2,16,false],[3,16,false],[4,16,false],[4,17,false],[3,17,true],[4,18,true],[5,17,true],[6,17,true],[5,15,true],[6,15,true],[4,15,true],[3,15,true],[2,15,true],[1,15,true],[0,15,true],[1,18,false],[0,17,true]],[3,18],[2,18],[2,17],[5,18],[3,18]]),
    new joseki("Black To Live", [[[3,16,false],[4,16,false],[5,16,false],[2,17,false],[5,17,false],[1,18,false],[2,18,false],[6,18,false],[1,17,true],[1,16,true],[2,15,true],[3,18,true],[3,15,true],[4,17,true],[4,15,true],[5,15,true],[6,17,true],[6,16,true],[6,15,true],[8,17,true]],[4,18],[5,18],[3,17],[7,18],[4,18]])
]

photos = [[[3,16,false],[4,16,false],[5,16,false],[2,17,false],[5,17,false],[1,18,false],[2,18,false],[6,18,false],[1,17,true],[1,16,true],[2,15,true],[3,18,true],[3,15,true],[4,17,true],[4,15,true],[5,15,true],[6,17,true],[6,16,true],[6,15,true],[8,17,true]]]

function moveSwitch() {
    startingMoves = false
    colors = false
    color()
    document.getElementById("startingMovesDone").innerHTML = "Do Starting Moves"
}

grids = []
points = [[3, 3], [9, 3], [3, 9], [9, 9], [15, 9], [15, 15], [3, 15], [9, 15], [15,3]]

document.body.addEventListener("keyup", (event) => {
  if (event.keyCode === 16) {
      color()
  }
});

function any(ar1, ar2) {
    for(k = 0;k<ar2.length;k++) {
        if(ar1[0]==ar2[k][0]&&ar1[1]==ar2[k][1]) {
            return true
        }
    }
    return false
}

function grid(row, col, size) {
    grids = []
    grids.push([])
    gridx = grids[grids.length-1]
    for(i=0;i<row;i++){
        gridx.push([])
        ctx.lineWidth = lineThickness
        ctx.beginPath();
        ctx.moveTo(0, i/(row-1)*570); 
        ctx.lineTo(570, i/(row-1)*570); 
        ctx.stroke(); 
        for(j=0;j<col;j++){
            ctx.lineWidth = lineThickness
            gridx[i].push(0)
            ctx.beginPath();
            ctx.moveTo(j/(col-1)*size, 0); 
            ctx.lineTo(j/(col-1)*size, size); 
            ctx.stroke();
            if(any([i, j],points)){
                ctx.fillStyle = "black"
                ctx.beginPath();
                ctx.arc(j/(col-1)*size, i/(row-1)*size, DotThickness, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

hoverstone = document.getElementById("hoverstone")

imageMode = false
imageIndex = 0
function changeMode() {
    imageMode = !imageMode
    loadJoseki()
}

header = document.getElementById("text")
header.innerHTML = "test"
let jo;
let checked;
function loadJoseki() {
    if(!imageMode) {
        if(Math.random()<0.5&&switchIndex == 0||switchIndex==2) {
            jo = josekis[Math.floor(Math.random()*(josekis.length-0.001))]
        } else {
            jo = ldp[Math.floor(Math.random()*(ldp.length-0.001))]
        }
        header.innerHTML = jo.name
        loadStones()
        checked = jo.moveset.length
    } else {
        clearBoard2()
        loadStones()
        addJoseki()
    }
}

function pickJoseki(index) {
    if(index[0]) {
        jo = josekis[index[1]]
    } else {
        jo = ldp[index[1]]
    }
    header.innerHTML = jo.name
    loadStones()
    checked = jo.moveset.length
}

mouseX = 0
mouseY = 0

xinit = hoverstone.getBoundingClientRect().x;
yinit = hoverstone.getBoundingClientRect().y;
stoneWidth = hoverstone.getBoundingClientRect().width;
stoneHeight = hoverstone.getBoundingClientRect().height;

canvas.addEventListener("mousemove", function(event) {
    mouseX = event.clientX - canvas.getBoundingClientRect().x+(size/(cols-1)/2);
    mouseY = event.clientY - canvas.getBoundingClientRect().y+(size/(rows-1)/2);
    hoverStone(mouseX, mouseY)
})

function hoverStone(x, y) {
    a = size/(cols-1)
    b = size/(rows-1)
    c = Math.floor((x)/a)*a
    d = Math.floor((y)/b)*b
    yoffset = canvas.getBoundingClientRect().y;
    xoffset = canvas.getBoundingClientRect().x;
    offsetx = xoffset-xinit;
    offsety = yoffset-yinit;
    hoverstone.style.marginLeft = c+offsetx-stoneWidth/2 + 2 + "px";
    hoverstone.style.marginTop = d+offsety-stoneHeight/2 + 2 + "px";
    // if($(window).width()/3>570) {
    //     c = (Math.floor((x-a/2)/a)+4)*a-3
    //     if(d+15/4+15-90<size&&90<d+15/4+15+20&&c+15/4+15>$(window).width()/6-570/2-a&&c+15/4+15<$(window).width()/6+570/2) {
    //         hoverstone.style.marginLeft = c + "px"
    //         hoverstone.style.marginTop = d + "px"
    //     }
    // } else {
    //     if(d+15/4+15-90<size&&90<d+15/4+15+20&&c+15/4+15>-30&&c+15/4+15<580) {
    //         hoverstone.style.marginLeft = c + "px"
    //         hoverstone.style.marginTop = d +"px"
    //     }
    // }
}

colors = true

function color() {
    colors = !colors
    if(colors) {
        ctx.fillStyle = "white"
        hoverstone.children[0].src="blackStone.png"
        colored = false
        adder = -1
    } else {
        ctx.fillStyle = "black"
        hoverstone.children[0].src="whiteStone.png"
        adder = 1
        colored = true
    }
}

function equal(ar1, ar2) {
    if(ar1[0]==ar2[0]&&ar1[1]==ar2[1]) {
        return true
    }
    return false
}

move = 1
checks = 1

function loadStones() {
    if(!imageMode) {
        z = jo.moveset[0]
    } else {
        z = photos[imageIndex]
    }
    for(y = 0;y<z.length;y++) {
        colors = !z[y][2]
        color()
        a = size/(cols-1)
        b = size/(rows-1)
        c = z[y][0]
        d = z[y][1]
        if(!colors) {
            ctx.drawImage(bs, c*a-15, d*b-15, 30, 30)
        } else {
            ctx.drawImage(ws, c*a-15, d*b-15, 30, 30)
        }
        capture(c, d, grids)
    }
}

function addStone(x, y){
    a = size/(cols-1)
    b = size/(rows-1)
    c = Math.floor((x)/a)
    d = Math.floor((y)/b)
    //if(y<570&&100<d*b+b*4&&c>=0&&c<=18){
    if(c>=0&&c<=18&&d>=0&&d<=18){
        color()
        if(!colors) {
            ctx.drawImage(bs, c*a-15, d*b-15, 30, 30)
        } else {
            ctx.drawImage(ws, c*a-15, d*b-15, 30, 30)
        }
        capture(c, d, grids)
        if(!adding) {
            if(equal([c, d], jo.moveset[checks])) {
                checks+=1
                header.innerHTML = jo.name + " " + (checks-1)
            } else {
                header.innerHTML = "Wrong!"
                setTimeout(clearBoard, 1000)
            }
            if(checked==checks) {
                header.innerHTML = jo.name + " Correct!"
                setTimeout(loadJoseki, 1000)
                setTimeout(clearBoard, 1000)
            }
        } else {
            if(newSet.length==0) {
                newSet.push([])
            }
            if(imageMode) {
                moveSwitch()
            }
            if(newSet.length!=1) {
                newSet.push([c, d])
            } else {
                if(startingMoves) {
                    newSet[0].push([c, d, colors])
                } else {
                    newSet.push([c, d])
                }
            }
        }
    }
    if(!colors&&jo.moveset[0].length>0) {
        answer()
    }
}

hoverstone.addEventListener("click", function(){
    addStone(mouseX, mouseY)
})

grid(rows, cols, size)
loadJoseki()

function clearBoard() {
    ctx.fillStyle = boardColor
    ctx.fillRect(0, 0, size, size)
    colors = true
    ctx.fillStyle = "black"
    checks = 1
    header.innerHTML = jo.name
    grid(rows, cols, size)
    colors = false
    color()
    loadStones()
    colors = false
    color()
}

function clearBoard2() {
    ctx.fillStyle = boardColor
    ctx.fillRect(0, 0, size, size)
    grid(rows, cols, size)
}

function answer() {
    if(checks<checked) {
        color()
        a = size/(cols-1)
        b = size/(rows-1)
        c = jo.moveset[checks][0]
        d = jo.moveset[checks][1]
        if(!colors) {
            ctx.drawImage(bs, c*a-15, d*b-15, 30, 30)
        } else {
            ctx.drawImage(ws, c*a-15, d*b-15, 30, 30)
        }
        checks+=1
        capture(c, d, grids)
        header.innerHTML = jo.name + " " + checks
    } else {
        header.innerHTML = jo.name + " Done!"
    }
}

function next() {
    loadJoseki()
    clearBoard()
}

addjoseki = document.getElementById("addjoseki")
adding = false
newSet = []
startingMoves = true

function addJoseki() {
    adding = !adding
    addjoseki.innerHTML = "Done"
    header.innerHTML = "Do your Joseki"
    if(!imageMode) {
        clearBoard2()
    }
    if(!adding) {
        addjoseki.innerHTML = "Add Joseki"
        startingMoves = true
        document.getElementById("startingMovesDone").innerHTML = "Starting Moves Done"
        string = "["
        if(imageMode) {
            newSet[0] = photos[imageIndex]
        }
        for(i=0;i<newSet.length;i++) {
            if(i==0) {
                string+="["
                for(j=0;j<newSet[0].length;j++) {
                    string+="["
                    string+=newSet[i][j][0]
                    string+=","
                    string+=newSet[i][j][1]
                    string+=","
                    string+=newSet[i][j][2]
                    string+="]"
                    if(j+1!=newSet[0].length) {
                        string+=","
                    }
                }
                string+="],"
            } else {
                string+="["
                string+=newSet[i][0]
                string+=","
                string+=newSet[i][1]
                string+="]"
                if(i+1!=newSet.length) {
                    string+=","
                }
            }
        }
        string+="]"
        header.innerHTML = string
        newSet = []
    }
}

function removes(array, board) {
    a = size/(cols-1)
    b = size/(rows-1)
    grids2 = grids
    clearBoard2()
    grids = grids2
    board = grids[0]
    for(m=0;m<board.length;m++) {
        for(n=0;n<board[m].length;n++) {
            if(!any([m, n], array)) {
                if(board[m][n]==1) {
                    ctx.drawImage(bs, m*a-15, n*b-15, 30, 30)
                } else if(board[m][n]==-1) {
                    ctx.drawImage(ws, m*a-15, n*b-15, 30, 30)
                }
            } else {
                board[m][n]=0
            }
        }
    }
}

function floodfill(x, y, board){
    q = [[x, y]]
    good = false
    for(i = 0;i<q.length;i++) {
        if(q[i][0]<board.length-1) {
            if(board[q[i][0]+1][q[i][1]]==board[q[0][0]][q[0][1]]&&!any([q[i][0]+1,q[i][1]], q)) {
                q.push([q[i][0]+1, q[i][1]])
            } else if(board[q[i][0]+1][q[i][1]]==0||board[q[i][0]+1][q[i][1]]==2&&board[q[0][0]][q[0][1]]==1||board[q[i][0]+1][q[i][1]]==-2&&board[q[0][0]][q[0][1]]==-1) {
                good = true
            }
        }
        if(q[i][0]>0) {
            if(board[q[i][0]-1][q[i][1]]==board[q[0][0]][q[0][1]]&&!any([q[i][0]-1,q[i][1]], q)) {
                q.push([q[i][0]-1, q[i][1]])
            } else if(board[q[i][0]-1][q[i][1]]==0||board[q[i][0]-1][q[i][1]]==2&&board[q[0][0]][q[0][1]]==1||board[q[i][0]-1][q[i][1]]==-2&&board[q[0][0]][q[0][1]]==-1) {
                good = true
            }
        }
        if(q[i][1]<board[0].length-1) {
            if(board[q[i][0]][q[i][1]+1]==board[q[0][0]][q[0][1]]&&!any([q[i][0],q[i][1]+1], q)) {
                q.push([q[i][0], q[i][1]+1])
            } else if(board[q[i][0]][q[i][1]+1]==0||board[q[i][0]][q[i][1]+1]==2&&board[q[0][0]][q[0][1]]==1||board[q[i][0]][q[i][1]+1]==-2&&board[q[0][0]][q[0][1]]==-1) {
                good = true
            }
        }
        if(q[i][1]>0) {
            if(board[q[i][0]][q[i][1]-1]==board[q[0][0]][q[0][1]]&&!any([q[i][0],q[i][1]-1], q)) {
                q.push([q[i][0], q[i][1]-1])
            } else if(board[q[i][0]][q[i][1]-1]==0||board[q[i][0]][q[i][1]-1]==2&&board[q[0][0]][q[0][1]]==1||board[q[i][0]][q[i][1]-1]==-2&&board[q[0][0]][q[0][1]]==-1) {
                good = true
            }
        }
    }
    if(good) {
        return [false]
    }
    return [true, q]
}

function capture(x, y, board) {
    realAdder = adder
    if(adder==1) {
        adder = 2
    } else {
        adder = -2
    }
  board[0][x][y] = adder
  adder = realAdder
  for(s = 0;s<board[0].length;s++) {
      for(t = 0;t<board[0][s].length;t++) {
          if(board[0][s][t]!=0) {
              remove = floodfill(s, t, board[0])
              if(remove[0]) {
                  removes(remove[1], board[0])
              }
              board[0][x][y] = adder
              remove = floodfill(s, t, board[0])
              if(remove[0]) {
                  removes(remove[1], board[0])
              }
          }
      }
  }
}

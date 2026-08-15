const MODE_INFO = [
    [1,"Easy","#81FF40"],
    [2,"Medium","#FFFF00"],
    [3,"Hard","#FF8000"],
    [4,"Difficult","#FF3233"],
    [5,"Challenging","#7F0019"],
    [6,"Intense","#1E3B56"],
    [7,"Remorseless","#DC00DB"],
    [8,"Insane","#0000FF"],
    [9,"Extreme","#1998FF"],
    [10,"Terrifying","#01FFFF"],
    [11,"Catastrophic","#FFFFFF"],
    [11.5,"Eccentric","#E3E2FF"],
    [12,"Horrific","#9692FE"],
    [13,"Unreal","#3D1384"],
    [13.5,"Anguish","#6D5039"],
    [14,"nil","#797A82"],
    [15,"eRRoR","#FFAEAE"],
    [15.5,"Nightmare","#E6E6E6"],
    [16,"Literal","#00FFCC"],
    [17,"WHY",undefined],
]

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

function modeColor(id){
    if(id == 19) return getRandomItem(["#000000","#FFFFFF"])
    return MODE_INFO[id][2]
}

function modeTitle(id){
    return "<font color=\"" + modeColor(id) + "\">[#" + MODE_INFO[id][0] + ": " + MODE_INFO[id][1] + " Mode]</font><br>"
}

function modeDesc(id){
    if(!id) return "每秒对冷牛排造成1点肉体伤害"
    if(id == 1) return "每秒对冷牛排造成2点肉体伤害<br>每秒对冷牛排造成1点精神伤害"
    if(id == 2) return "每秒对冷牛排造成3点肉体伤害，3点精神伤害，3点真实伤害，1点即死伤害<br>有50％触发暴击，触发暴击有25％触发2重暴击，触发二重暴击有12.5％触发3重暴击……"
    if(id == 3) return "每秒对冷牛排造成e<sup>(x+80)</sup>点真实伤害<br>（x每秒增加log<sub>10</sub>(log<sub>10</sub>(d+1)+1)）"
    if(id == 4) return "每秒对冷牛排造成1点真实伤害<br>冷牛排每秒受到的伤害*10<sup>min(d/10,10t)+1</sup><br>上一条效果<sup>min(d/1e100,10t)+1</sup>"
    if(id == 5) return "冷牛排受到的伤害每秒被执行一次x=x+e<sup>log<sub>2</sub>(x+1)+1</sup>"
    if(id == 6) return "冷牛排每秒受到x点伤害<br>x每秒进行x=x<sup>x</sup>"
    if(id == 7) return "冷牛排每秒受到e↑↑x点伤害<br>初始x=2，x每秒×2"
    if(id == 8) return "冷牛排每秒受到e↑↑x点伤害<br>初始x=2，x每秒^2"
    if(id == 9) return "冷牛排每秒受到e↑↑e↑↑x点伤害<br>初始x=0，x每秒+1"
    if(id == 10) return "冷牛排每秒受到x点伤害<br>x每帧执行一次x=x↑↑x<br>初始x=2"
    if(id == 11) return "冷牛排每秒受到x点伤害<br>x每帧执行一次x=x↑↑↑y<br>y每帧执行一次y=e<sup>y<sup><br>初始x=2，y=1"
    if(id == 12) return "冷牛排每秒受到x点伤害<br>x每帧执行一次x=x↑↑↑y<br>y每帧执行一次y=y↑↑↑ln(t)<br>初始x，y=2"
    if(id == 13) return "冷牛排每秒受到x点伤害<br>x每秒+e↑↑↑↑y<br>y每秒+1"
    if(id == 14) return "冷牛排每秒受到x点伤害<br>x每秒+e{√y}y<br>y每秒+1"
    if(id == 15) return "冷牛排每秒受到x点伤害<br>x每秒+e{ln(y)}y<br>y初始为e^(2e)，每秒^ln(y)"
    if(id == 16) return "冷牛排每秒受到{x,x+1,1,2}点伤害<br>x每秒+1"
    return "没做完。"
}

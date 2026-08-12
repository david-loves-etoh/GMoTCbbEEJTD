addLayer("m", {
    name: "mode", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "Modes", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolI18N: "模式", // Second name of symbol for internationalization (i18n) if internationalizationMod is enabled
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 0, // Row the layer is in on the tree (0 is the first row)
    startData() { return {
        unlocked: true,
    }},
    color: "#FFFFFF",
    requires: new Decimal(0), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    resourceI18N: "prestige points", // Second name of the resource for internationalization (i18n) if internationalizationMod is enabled
    baseResource: "points", // Name of resource prestige is based on
    baseResourceI18N: "points", // Second name of the baseResource for internationalization (i18n) if internationalizationMod is enabled
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    update(diff){
        /*if(player.modeTime.gte(60)) {console.log(deduceDamage());clickClickable("m",12)}*/
        player.modeTime = player.modeTime.add(diff)
        if(!player.modeID) player.points = player.points.add(diff)
        if(player.modeID == 1) player.points = player.points.add(diff * 3)
        if(player.modeID == 2){
            var mult = new Decimal(10), i = 0
            while(true){
                i++;
                if(rand1d100() < (100 / Math.pow(2,i))) mult = mult.mul(6)
                else break
            }
            player.points = player.points.add(mult.mul(diff))
        }
        if(player.modeID == 3){
            player.points = player.points.add(CONSTS.E.pow(player.x.add(80)).mul(diff))
            player.x = player.x.add(player.points.add(1).log10().add(1).log10().mul(diff))
        }
        if(player.modeID == 4){
            var mult = new Decimal(10).pow(player.points.div(10).min(player.modeTime.mul(10)).add(1))
            mult = mult.pow(player.points.div(1e100).min(player.modeTime.mul(10)).add(1))
            player.points = player.points.add(mult.mul(diff))
        }
        if(player.modeID == 5){
            player.points = player.points.add(CONSTS.E.pow(player.points.add(1).log2().add(1)).mul(diff))
        }
        if(player.modeID == 6){
            player.x = player.x.pow(player.x.pow(player.x.pow(diff)))
            player.points = player.points.add(player.x.mul(diff))
        }
        if(player.modeID == 7){
            player.xEN = player.xEN.mul(new ExpantaNum(2).pow(diff))
            player.damageEN = player.damageEN.add(CONSTS.E_EN.tetr(player.xEN))
        }
        if(player.modeID == 8){
            player.xEN = player.xEN.pow(new ExpantaNum(2).pow(diff))
            player.damageEN = player.damageEN.add(CONSTS.E_EN.tetr(player.xEN))
        }
        if(player.modeID == 9){
            player.xEN = player.xEN.add(diff)
            player.damageEN = player.damageEN.add(CONSTS.E_EN.tetr(CONSTS.E_EN.tetr(player.xEN)))
        }
        if(player.modeID == 10){
            player.xEN = player.xEN.tetr(player.xEN)
            player.damageEN = player.damageEN.add(player.xEN)
        }
        if(player.modeID == 11){
            player.yEN = CONSTS.E_EN.pow(player.yEN)
            player.xEN = player.xEN.pent(player.yEN)
            player.damageEN = player.damageEN.add(player.xEN)
        }
        if(player.modeID == 12){
            player.yEN = player.yEN.pent(player.modeTime.add(1).ln().add(1).toString())
            player.xEN = player.xEN.pent(player.yEN)
            player.damageEN = player.damageEN.add(player.xEN)
        }
    },
    clickables:{
        11:{
            display() {return "上一模式"},
            canClick() {return player.modeID},
            onClick(){
                player.modeID--
                player.modeTime = CONSTS.ZERO
                player.points = CONSTS.ZERO
                player.x = CONSTS.ZERO
                player.damageEN = new ExpantaNum(0)
                player.xEN = new ExpantaNum(0)
                if(player.modeID == 6) player.x = new Decimal(2)
                if(player.modeID == 7) player.xEN = new ExpantaNum(2)
                if(player.modeID == 8) player.xEN = new ExpantaNum(2)
                if(player.modeID == 10) player.xEN = new ExpantaNum(2)
                if(player.modeID == 11) player.xEN = new ExpantaNum(2);player.yEN = new ExpantaNum(1)
                if(player.modeID == 12) player.xEN = new ExpantaNum(2);player.yEN = new ExpantaNum(2)
            },
        },
        12:{
            display() {return "下一模式"},
            canClick() {return player.modeID < CONSTS.MODES_AMT},
            onClick(){
                player.modeID++
                player.modeTime = CONSTS.ZERO
                player.points = CONSTS.ZERO
                player.x = CONSTS.ZERO
                player.damageEN = new ExpantaNum(0)
                player.xEN = new ExpantaNum(0)
                if(player.modeID == 6) player.x = new Decimal(2)
                if(player.modeID == 7) player.xEN = new ExpantaNum(2)
                if(player.modeID == 8) player.xEN = new ExpantaNum(2)
                if(player.modeID == 10) player.xEN = new ExpantaNum(2)
                if(player.modeID == 11) player.xEN = new ExpantaNum(2);player.yEN = new ExpantaNum(1)
                if(player.modeID == 12) player.xEN = new ExpantaNum(2);player.yEN = new ExpantaNum(2)
            },
        }
    },
    infoboxes: {
        term: {
            title: "变量/函数列表",
            body(){
                return "d=冷牛排受到的总伤害<br>t=进入此模式总时间<br>"
            }
        },
        mode: {
            title: "当前模式信息",
            body(){
                return modeTitle(player.modeID) + modeDesc(player.modeID)
            }
        }
    },
    microtabs:{
        tab:{
            "term":{
                name(){return '变量/函数列表'}, // Name of tab button
                nameI18N(){return '变量/函数列表'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                content:[
                    ["infobox","term"]
                ],
            },
            "modes":{
                name(){return '模式'}, // Name of tab button
                nameI18N(){return '模式'}, // Second name for internationalization (i18n) if internationalizationMod is enabled
                content:[
                    ["infobox","mode"],
                    ["clickable",11],["clickable",12]
                ],
            }
        },
    },
    tabFormat: [
       ["display-text", function() { return getPointsDisplay() }],
       ["microtabs","tab"]
    ],
    layerShown(){return true},
})

// You can delete the second name from each option if internationalizationMod is not enabled.
// You can use function i18n(text, otherText) to return text in two different languages. Typically, text is English and otherText is Chinese. If changedDefaultLanguage is true, its reversed
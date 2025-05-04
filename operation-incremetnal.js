/*
break eternity functions:
abs, neg, round, floor, ceil, trunc, add, sub, mul, div, recip, mod, cmp, cmpabs, 
max, min, maxabs, minabs, log, log10, ln, pow, root, factorial, gamma, exp, sqrt, 
tetrate, iteratedexp, iteratedlog, layeradd10, layeradd, slog, ssqrt, lambertw, 
linear_sroot, pentate, penta_log, linear_penta_root
*/

x = new Decimal(123.4567);
y = new Decimal("123456.7e-3");
z = new Decimal(x);
x.equals(y) && y.equals(z) && x.equals(z); // true

// don't question my way of coding pls
let bgst = 0
let tgl = -1
let counter = new Decimal // what should I even name this other than "counter"?
let prestigecounter = new Decimal // same here
let powercounter = new Decimal // I have no ideas
let autoclicker = new Decimal // don't ask why it's called autoclicker lol
let cost1 = new Decimal(1) // first price of upgrade 1
let cost2 = new Decimal(10) // first price of upgrade 2
let cost3 = new Decimal(200) // first price of upgrade 3
let cost8 = new Decimal(1) // first price of upgrade 8
let tps = 20 // update rate. default is 20 (which is 50ms. I already added a slider but the problem is that setInterval only reads the interval once, which leads to inaccurate tick calcs. the slider won't work until I find a solution to this)
let upg2b = new Decimal(1) // upgrade 2 buff (add buff)
let upg8b = new Decimal(1.01) // upgrade 8 buff (multi buff)
let unlockedmulti = false // basically tells if multiplying is unlocked or not
let maxcounter = new Decimal(1e3) // 1000
let unlockedpower = false // same thing here
let infcount = new Decimal(0) // COUNT, not counter
let ach1s = false //
let ach2s = false //
let secretach1s = false //
let inf = new Decimal('1.8e308')
let array = [20, 30, 60, 120, 240] // this is supposed to be used for the update rate slider
let firstinfreached = false // 
let glowtoggle = false // glowing text
let unlockedptab = false // tells if prestige tab is unlocked or not
let unlockedcountergens = false // read above
let cgen1 = new Decimal // 1st counter generator
let cgen2 = new Decimal // 2nd
let cgen3 = new Decimal // 3rd
let cgen4 = new Decimal // 4th
let cgen5 = new Decimal // 5th
let cgen6 = new Decimal // 6th
let cgen7 = new Decimal // 7th
let cgen8 = new Decimal // 8th
let cgen9 = new Decimal // 9th
let cgen1cost = new Decimal(20) // 1st counter generator price
let cgen2cost = new Decimal(200) // 2nd
let cgen3cost = new Decimal(2e4) // 3rd
let cgen4cost = new Decimal(2e7) // 4th
let cgen5cost = new Decimal(2e14) // 5th
let cgen6cost = new Decimal(2e21) // 6th
let cgen7cost = new Decimal(2e31) // 7th
let cgen8cost = new Decimal(2e60) // 8th
let cgen9cost = new Decimal(2e120) // 9th
let cgen1multi = new Decimal(1) // 1st counter generator
let cgen2multi = new Decimal(1) // 2nd
let cgen3multi = new Decimal(1) // 3rd
let cgen4multi = new Decimal(1) // 4th
let cgen5multi = new Decimal(1) // 5th
let cgen6multi = new Decimal(1) // 6th
let cgen7multi = new Decimal(1) // 7th
let cgen8multi = new Decimal(1) // 8th
let cgen9multi = new Decimal(1) // 9th
let array2 = ["Something is preventing you from using power...", "You hear a voice...", "???: 'Why do you try this again when you DEEPLY know in your soul it won't work?'", "You: 'Who are you?? And why are you preventing me from using the power button in the first place??'", "???: 'Blame it to my brother, i.'", "You: 'Who is i?'", "???: 'Well... If you raise your counters to 1.001 with a calculator you'll probably figure out who they are.'", "You: 'There's no such thing as a calculator...'", "???: '...'", "???: 'Well, the superior being who's watching us knows what to do.'", "You: 'What?'"] //

// add button
function add() {
 ach1s = true
 document.getElementById("ach1").textContent = "First counter (nice you did it)" 
 counter = counter.add(upg2b)
 if (bgst == 9) {
 }
}

// multi button
function multi() {
 if (unlockedmulti == true) {
  counter = counter.mul(upg8b)
 }
}

// power button
function power() {
 if (unlockedpower == true) {
 if (counter.greaterThan(0)) {
  counter = counter.pow(1.001)
 }
 else {
 // that one conversation u have when u try power with negative counters
 tgl = tgl + 1
 if (tgl == 12) {
 tgl = 0
 }
 document.getElementById("imgn").textContent = array2[tgl]
  }
 }
}

// that one button that changes the background color
function bgcbtn() {
 let bgcv = Number(document.getElementById("bgcselect").options[document.getElementById("bgcselect").selectedIndex].value)
 let bg = document.getElementById("bg")
 let bgbtn = document.getElementById("bgbtn")
 if (bgcv == 14) {
 bgcv = 0
 } 
 if (bgcv == 13) {
 bg.style = "background: #ddd"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 12) {
 bg.style = "background: #000"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #ddd"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #ddd; color: #ddd" 
  }
 }
 if (bgcv == 11) {
 bg.style = "background: linear-gradient(#000058, #000027)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #ddd"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #ddd; color: #ddd"
  }
 }
 if (bgcv == 10) {
 bg.style = "background: linear-gradient(#ff6731, #aa2400)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 9) {
 bg.style = "background: linear-gradient(#12ffaa, #00aa58)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 8) {
 bg.style = "background: linear-gradient(#4ac2ff, #3265aa)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 7) {
 bg.style = "background: linear-gradient(#97ff00, #42aa00)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 6) {
 bg.style = "background: linear-gradient(#8903cc, #510086)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 5) {
 bg.style = "background: linear-gradient(#32ffff, #00aaaa)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 4) {
 bg.style = "background: linear-gradient(#ff7cf6, #aa00aa)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 3) {
 bg.style = "background: linear-gradient(#ddda6d, #aaaa00)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 2) {
 bg.style = "background: linear-gradient(#0032ff, #0000aa)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 1) {
 bg.style = "background: linear-gradient(#59d760, #00aa00)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
 if (bgcv == 0) {
 bg.style = "background: linear-gradient(#ff0000, #aa0000)"
 if (glowtoggle == false) {
 document.getElementsByName("a").style = "color: #000"
  }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000" 
  }
 }
}

// glowing text
function glow() {
if (glowtoggle == false) {
 glowtoggle = true
 document.getElementById("glow").textContent = "Text glow: on"
 if (bgst == 12 || bgst == 13) {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #ddd; color: #ddd"
 }
 else {
 document.getElementsByName("a").style = "text-shadow: 0 0 10px #656565; color: #000"
  }
 }
 else {
 document.getElementById("glow").textContent = "Text glow: off"
 glowtoggle = false
 if (bgst == 12 || bgst == 13) {
 document.getElementsByName("a").style = "color: #ddd"
 }
 else {
 document.getElementById("a").style = "color: #000"
  }
 }
}
// prestige
function prestige() {
 if (counter.equals(10) || counter.greaterThan(10)) {
  if (counter.lessThan(inf) || firstinfreached == true) {
  prestigecounter = prestigecounter.add(counter.divide(10))
  counter = counter.sub(counter)
  ach2s = true
  document.getElementById("ach2").textContent = "Every incremetnal has this (nice you did it)"
  if (unlockedptab == false) {
  unlockedptab = true
  document.getElementById("prestigetab").classList = "show"
   }
   }
  }
 }


// upgrades
function upgrade1() {
 if (prestigecounter.equals(cost1) || prestigecounter.greaterThan(cost1)) {
  prestigecounter = prestigecounter.sub(cost1)
  cost1 = cost1.mul(2)
  autoclicker = autoclicker.add(1)
  if (cost1.greaterThan('1e1000')) {
  document.getElementById("b").textContent = "+1 counter/s (costs "  + cost1.toStringWithDecimalPlaces(3) + " prestige counters"
  }
  else {
  document.getElementById("b").textContent = "+1 counter/s (costs "  + cost1.toStringWithDecimalPlaces(2) + " prestige counters"
  }
 }
}

function upgrade2() {
 if (prestigecounter.equals(cost2) || prestigecounter.greaterThan(cost2)) {
  prestigecounter = prestigecounter.sub(cost2)
  cost2 = cost2.mul(1.5)
  upg2b = upg2b.add(1)
  if (cost2.greaterThan('1e1000')) {
  document.getElementById("c").textContent = "Buff add button and counter/s by 1 (costs "  + cost2.toStringWithDecimalPlaces(3) + " prestige counters"
  }
  else {
  document.getElementById("c").textContent = "Buff add button and counter/s by 1 (costs "  + cost2.toStringWithDecimalPlaces(2) + " prestige counters"
  }
  document.getElementById("add").textContent = "+" + upg2b
 }
}

function upgrade3() {
 if (prestigecounter.equals(cost3) || prestigecounter.greaterThan(cost3)) {
  prestigecounter = prestigecounter.sub(cost3)
  cost3 = cost3.mul(1e3)
  maxcounter = maxcounter.mul(1e3)
  if (cost3.greaterThan('1e1000')) {
  document.getElementById("d").textContent = "Multiply counter limit by 1000 (costs "  + cost3.toStringWithDecimalPlaces(3) + " prestige counters"
  }
  else {
  document.getElementById("d").textContent = "Multiply counter limit by 1000 (costs "  + cost3.toStringWithDecimalPlaces(2) + " prestige counters"
  }
 }
}

function upgrade8() {
 if (powercounter >= 1) {
 upg8b *= 1.08
 if (cost8 <= 5)
 cost8 ++
 }
 else {
 cost8 *= 2
 }
 if (cost8.greaterThan('1e1000')) {
 document.getElementById("t").textContent = "+1 counter/s (costs "  + cost8.toStringWithDecimalPlaces(3) + " prestige counters"
 }
 else {
 document.getElementById("t").textContent = "+1 counter/s (costs "  + cost8.toStringWithDecimalPlaces(2) + " prestige counters"
 }
}

// upgrades end here

// unlocks (in order of first appearance)

// def not taken from antimatter dimensions (counter generators)
function unlockcountergens() {
 if (unlockedcountergens == false) {
 if (prestigecounter.greaterThan(100) || prestigecounter.equals(100)) {
  prestigecounter = prestigecounter.sub(100)
  unlockedcountergens = true
  document.getElementById("cgentab").classList = "show"
  document.getElementById("cgenunlockbtn").classList = "fullhide"
  document.getElementById("multitab").classList = "show"
  document.getElementById("ach3").textContent = "Definitely original feature and not taken from another game (nice you did it)"
  }
 }
}

// multiplying unlock
function unlockmulti() {
 if (unlockedmulti == false) {
 if (prestigecounter.greaterThan(5e10) || prestigecounter.equals(5e10)) {
 prestigecounter = prestigecounter.sub(5e10)
 unlockedmulti = true
 document.getElementById("a2").textContent = "Multiplying unlocked"
 document.getElementById("multi").classList = "show"
  }
 }
}

// unlocks end here

// counter generators
function gen1purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen1cost) || prestigecounter.greaterThan(cgen1cost)) {
   prestigecounter = prestigecounter.sub(cgen1cost);
   cgen1 = cgen1.add(1)
   cgen1cost = cgen1cost.mul(cgen1cost.log(9))
   cgen1multi = cgen1multi.mul(2)
   document.getElementById("gen1btn").textContent = "Add 1 first generator (costs " + cgen1cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen2purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen2cost) || prestigecounter.greaterThan(cgen2cost)) {
   prestigecounter = prestigecounter.sub(cgen2cost);
   cgen2 = cgen2.add(1)
   cgen2cost = cgen2cost.mul(cgen2cost.log(9))
   cgen2multi = cgen2multi.mul(2)
   document.getElementById("gen2btn").textContent = "Add 1 second generator (costs " + cgen2cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen3purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen3cost) || prestigecounter.greaterThan(cgen3cost)) {
   prestigecounter = prestigecounter.sub(cgen3cost);
   cgen3 = cgen3.add(1)
   cgen3cost = cgen3cost.mul(cgen3cost.log(9))
   cgen3multi = cgen3multi.mul(2)
   document.getElementById("gen3btn").textContent = "Add 1 third generator (costs " + cgen3cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen4purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen4cost) || prestigecounter.greaterThan(cgen4cost)) {
   prestigecounter = prestigecounter.sub(cgen4cost);
   cgen4 = cgen4.add(1)
   cgen4cost = cgen4cost.mul(cgen4cost.log(9))
   cgen4multi = cgen4multi.mul(2)
   document.getElementById("gen4btn").textContent = "Add 1 fourth generator (costs " + cgen4cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen5purchase() {
 if (prestigecounter.equals(cgen5cost) || prestigecounter.greaterThan(cgen5cost)) {
  prestigecounter = prestigecounter.sub(cgen5cost);
  cgen5 = cgen5.add(1)
  cgen5cost = cgen5cost.mul(cgen5cost.log(9))
  cgen5multi = cgen5multi.mul(2)
  document.getElementById("gen5btn").textContent = "Add 1 fifth generator (costs " + cgen5cost.toStringWithDecimalPlaces(2) + " prestige counters)"
 }
}

function gen6purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen6cost) || prestigecounter.greaterThan(cgen6cost)) {
   prestigecounter = prestigecounter.sub(cgen6cost);
   cgen6 = cgen6.add(1)
   cgen6cost = cgen6cost.mul(cgen6cost.log(9))
   cgen6multi = cgen6multi.mul(2)
   document.getElementById("gen6btn").textContent = "Add 1 sixth generator (costs " + cgen6cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen7purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen7cost) || prestigecounter.greaterThan(cgen7cost)) {
   prestigecounter = prestigecounter.sub(cgen7cost);
   cgen7 = cgen7.add(1)
   cgen7cost = cgen7cost.mul(cgen7cost.log(9))
   cgen7multi = cgen7multi.mul(2)
   document.getElementById("gen7btn").textContent = "Add 1 seventh generator (costs " + cgen7cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen8purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen8cost) || prestigecounter.greaterThan(cgen8cost)) {
   prestigecounter = prestigecounter.sub(cgen8cost);
   cgen8 = cgen8.add(1)
   cgen8cost = cgen8cost.mul(cgen8cost.log(9))
   cgen8multi = cgen8multi.mul(2)
   document.getElementById("gen8btn").textContent = "Add 1 eighth generator (costs " + cgen8cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

function gen9purchase() {
 if (unlockedcountergens == true) {
  if (prestigecounter.equals(cgen9cost) || prestigecounter.greaterThan(cgen9cost)) {
   prestigecounter = prestigecounter.sub(cgen9cost);
   cgen9 = cgen9.add(1)
   cgen9cost = cgen9cost.mul(cgen9cost.log(9))
   cgen9multi = cgen9multi.mul(2)
   document.getElementById("gen9btn").textContent = "Add 1 ninth generator (costs " + cgen9cost.toStringWithDecimalPlaces(2) + " prestige counters)"
  }
 }
}

// tick calculation
setInterval(function tick() {
  let c = document.getElementById("counter")
  let p = document.getElementById("prestigecounter")
  // counter/s
  counter = counter.add((autoclicker.divide(tps).mul(upg2b)).add(cgen1.divide(tps).mul(cgen1multi/2)))
  // max counter (might want to remove/rework this lol)
  if (counter.equals(maxcounter) || counter.greaterThan(maxcounter)) {
  counter = maxcounter
  if (counter < Infinity) {
  document.getElementById("maxmsg").textContent = "It seems like you can't hold any more counters. Maybe try buying that one upgrade? (it's in the prestige tab if you haven't seen it already)."
   }
  else
   {
  document.getElementById("maxmsg").textContent = "It seems like you can't hold any more counters. Maybe try buying that one up- wait you're telling me that upgrade doesn't work anymore?"
   }
  } 
  else {
  document.getElementById("maxmsg").textContent = null
  }
  if (counter < 0) {
  document.getElementById("achi").textContent = "Negative? (nice you did it)"
  }
  if (prestigecounter == 1) {
  p.textContent = prestigecounter + ".00 prestige counter"
  }
  else {
  if (prestigecounter.greaterThan('1e1000')) {
  p.textContent = prestigecounter.toStringWithDecimalPlaces(3) + " prestige counters"
   }
  else {
  p.textContent = prestigecounter.toStringWithDecimalPlaces(2) + " prestige counters"
   }
  }
  if (counter.equals(1)) {
  c.textContent = counter + ".00 counter"
  }
  else {
  if (counter.greaterThan('1e1000')) {
  c.textContent = counter.toStringWithDecimalPlaces(3) + " counters"
  }
  else {
  c.textContent = counter.toStringWithDecimalPlaces(2) + " counters"
   }
  }
  if (counter.equals(maxcounter) || counter.greaterThan(maxcounter)) {
  c.textContent = counter + " counters (capped)"
  }
  // inf% calc
  // current endgame is 1.79e308 (still need to add a lot of stuff)
  if (counter == 0) {
  document.getElementById("inf%").textContent = 0 + "%"
  }
  else {
   if (counter.lessThan(inf)) {
   if (counter < 0) {
   document.getElementById("inf%").textContent = "???%" // "-" + ((((counter.abs()).log(10)).divide(inf.log(10))).mul(100)).toStringWithDecimalPlaces(2) + "%"
   document.getElementById("inf%2").textContent = "% to infinity:" // "???"
   }
   else {
   document.getElementById("inf%").textContent = (((counter.log(10)).divide(inf.log(10))).mul(100)).toStringWithDecimalPlaces(2) + "%"
   document.getElementById("inf%2").textContent = "% to infinity:"
    if (firstinfreached == false) {
    document.getElementById("powerprestige").textContent = "Requires infinite counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
    }
    else {
    document.getElementById("powerprestige").textContent = "Requires 1.8e308 counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
    }
   }
   document.getElementById("end").textContent = null
   }
   else {
    if (firstinfreached == false) {
    document.getElementById("inf%").textContent = 100 + "%"
    c.textContent = "Infinite counters"
    counter = inf.sub(1)
    document.getElementById("end").textContent = "You did it! (yes infinity is the current endgame)"
    document.getElementById("powerprestige").textContent = "Reset ALL progress to add 1 POWER counter (coming soon! or never)"
    document.getElementById("powerprestige").style = "border-color: #fffaad; background: linear-gradient(to right bottom, #fffa6d, #bfbd52)"
    document.getElementById("ach9").textContent= "Honestly idk what to name this achievement (nice you did it)"
    }
    else {
    document.getElementById("inf%").textContent = ((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2)
    document.getElementById("inf%2").textContent = "Infinities gained on power prestige:"
    document.getElementById("end").textContent = null
    if (counter.greaterThan(inf)) {
    document.getElementById("powerprestige").textContent = "Reset all progress to gain " + ((counter.log(10)).divide(inf.log(10))).toStringWithDecimalPlaces(2) + " infinities and x power counter(s)"
    document.getElementById("powerprestige").style = "border-color: #fffaad; background: linear-gradient(to right bottom, #fffa6d, #bfbd52)" 
     }
    else {
    document.getElementById("powerprestige").textContent = "Requires 1.8e308 counters"
    document.getElementById("powerprestige").style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
    }
   }
  }
 }
 // updates prestige button on tick
 let a = document.getElementById("a")
 if (counter.equals(10)) {
  a.textContent = "Reset counter to add 1 prestige counter"
  a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
  }
 else {
  if (counter.lessThan(10)) {
  a.textContent = "Requires 10 counters"
  a.style = "background: linear-gradient(to right bottom, #aaaaaa, #767676);"
  }
  else {
   if (counter.greaterThan('1.79e308') && firstinfreached == false) {
   a.textContent = "You have too many counters to prestige (yes I'm that uncreative)"
   a.style = "background: linear-gradient(to right bottom, #aaaaaa, #767676)"
   }
   else {
    if (counter.greaterThan('1e1000')) {
    a.textContent = "Reset counter to add "  + counter.divide(10).toStringWithDecimalPlaces(3) +  " prestige counters"
    a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
     }
    else {
     a.textContent = "Reset counter to add "  + counter.divide(10).toStringWithDecimalPlaces(2) +  " prestige counters"
     a.style = "background: linear-gradient(to right bottom, #28ffff, #1ebfbf); border-color: #69ffff"
   }
    }
  }
 }

 // counter gens
 cgen1 = cgen1.add((cgen2.divide(tps).divide(20)).mul(cgen2multi))
 cgen2 = cgen2.add(cgen3.divide(tps).divide(20).mul(cgen3multi))
 cgen3 = cgen3.add(cgen4.divide(tps).divide(20).mul(cgen4multi))
 cgen4 = cgen4.add(cgen5.divide(tps).divide(20).mul(cgen5multi))
 cgen5 = cgen5.add(cgen6.divide(tps).divide(20).mul(cgen6multi))
 cgen6 = cgen6.add(cgen7.divide(tps).divide(20).mul(cgen7multi))
 cgen7 = cgen7.add(cgen8.divide(tps).divide(20).mul(cgen8multi))
 cgen8 = cgen8.add(cgen9.divide(tps).divide(20).mul(cgen9multi))
 document.getElementById("gen1t").textContent = cgen1.toStringWithDecimalPlaces(2) + " first generators (×" + cgen1multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen2t").textContent = cgen2.toStringWithDecimalPlaces(2) + " second generators (×" + cgen2multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen3t").textContent = cgen3.toStringWithDecimalPlaces(2) + " third generators (×" + cgen3multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen4t").textContent = cgen4.toStringWithDecimalPlaces(2) + " fourth generators (×" + cgen4multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen5t").textContent = cgen5.toStringWithDecimalPlaces(2) + " fifth generators (×" + cgen5multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen6t").textContent = cgen6.toStringWithDecimalPlaces(2) + " sixth generators (×" + cgen6multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen7t").textContent = cgen7.toStringWithDecimalPlaces(2) + " seventh generators (×" + cgen7multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen8t").textContent = cgen8.toStringWithDecimalPlaces(2) + " eighth generators (×" + cgen8multi.toStringWithDecimalPlaces(2) + ")"
 document.getElementById("gen9t").textContent = cgen9.toStringWithDecimalPlaces(2) + " ninth generators (×" + cgen9multi.toStringWithDecimalPlaces(2) + ")"

 // hides the js disabled msg
 document.getElementById("jsdisabled").textContent = null
 
 // that one conversation u have when u try power with negative counters
 if (counter.greaterThan(0)) {
 tgl = -1
 document.getElementById("imgn").textContent = ""
 }
}, 1e3/tps)

function secretach1() {
secretach1s = true
document.getElementById("sach1").textContent = "But it's so choppy... (nice you did it)"
}

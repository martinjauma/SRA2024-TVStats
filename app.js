let loc = "PRL"
let vis = "OLP" 

//SCORES 
let scoreLoc = 0
let scoreVis = 0

// ARRIBA  CONTADOR CHEQUEO 
let count01Name01 = "TRY"
let count01Name02 = "TURNOVER"  

// BAR03 - TRY - ROW COUNT w/Quali
const title03 = "TRY"
const bar03Name01 = "TRY"   
// const bar03TeamLoc = loc
// const bar03TeamVis = vis

// BAR04 - SCRUM - LOCAL
const title04 = "SCRUM GAN / PERD"
const bar04Name01 = "SCRUM"
const bar04Team = loc

// BAR05 - LINEOUT - LOCAL
const title05 = "LINEOUT GAN / PERD"
const bar05Name01 = "LINEOUT"
// const bar05Team = loc

// BAR06 - SCRUM - VISITA
const title06 = "SCRUM GAN / PERD"
const bar06Name01 = "SCRUM"
// const bar06Team = vis

// BAR07 - LINEOUT - VISITA 
const title07 = "LINEOUT GAN / PERD"
const bar07Name01 = "LINEOUT"
// const bar07Team = vis

// BAR08 - CLEAN BREAK 
const title08 = "CLEAN BREAKS"
const bar08Name01 = "CLEAN BREAKS"
// const bar08TeamLoc = loc
// const bar08TeamVis = vis

// BAR09 - TURNOVERS
const title09 = "TURNOVERS"
const bar09Name01 = "TURNOVER"
// const bar09TeamLoc = loc
// const bar09TeamVis = vis

// BAR10 - OFFLOADS
const title10 = "OFFLOADS"
const bar10Name01 = "OFFLOAD"
// const bar10TeamLoc = loc
// const bar10TeamVis = vis

// BAR11 - PENALES CONCEDIDOS
const title11 = "PENALES CONCEDIDOS"
const bar11Name01 = "PENALTY CONCEEDED"
// const bar11TeamLoc = loc
// const bar11TeamVis = vis

// BAR12 - ENTRADAS A 22 MT
const title12 = "ENTRADAS A 22 MT"
const bar12Name01 = "INTRO 22"
// const bar12TeamLoc = loc
// const bar12TeamVis = vis

// BAR13 - ERRORES DE MANEJO
const title13 = "ERRORES DE MANEJO"
const bar13Name01 = "LOST"
// const bar13TeamLoc = loc
// const bar13TeamVis = vis

// BAR14 - PENALTY KICK
const title14 = "PENALTY KICK"
const bar14Name01 = "PENALTY  KICK"
// const bar14TeamLoc = loc
// const bar14TeamVis = vis

// DROP GOAL
const title15 = "DROP"
const bar15Name01 = "DROP"
// const bar15TeamLoc = loc
// const bar15TeamVis = vis

// GOAL
const title16 = "GOAL"
const bar16Name01 = "GOAL"
// const bar16TeamLoc = loc
// const bar16TeamVis = vis


let goalLoc = goalVis = penLoc = penVis = 0
let efectGoalLoc = efectGoalVis = 0
let efectPenLoc = efectPenVis = 0


const teams = [
    {name:'American Raptors',shortname:'RAP','nameFull': "01-RAP", bg:'#ff9800',tcol:'#212121'},
    {name:'Cobras Brasil XV',shortname:'CBS','nameFull':"02-CBS", bg:'#4287f5',tcol:'#faf5f5'},
    {name:'Pampas',shortname:'PMS','nameFull':'03-PMS', bg:'#f54242',tcol:'#faf5f5'},
    {name:'Dogos XV',shortname:'DGS','nameFull':'04-DGS', bg:'#B77162',tcol:'#04831F'},
    {name:'Peñarol Rugby',shortname:'PNL','nameFull':'05-PNL', bg:'#F00B0B',tcol:'#faf5f5'},
    {name:'Selknam',shortname:'SKN','nameFull':'06-SKN', bg:'#F00B0B',tcol:'#F0DA0B'},
    {name:'Yacare XV',shortname:'YCR','nameFull':'07-YCR', bg:'#F00B0B',tcol:'#F0DA0B'}
    ];

// -----
let adv = document.querySelector("#adv")
let logoTeam = document.querySelector("#logoTeam")

//-----
// -------------------------


let data = d3.json("data/live.json").then(function(dataIn) {
        return dataIn.rows ;
            })


let dataTeam = d3.json("data/live.json").then(function(dataIn) {
        return dataIn.description ;
            })
   

function update() {
    data = d3.json("data/live.json").then(function(dataIn) {
        return dataIn.rows ;
            })  
        }

update();
        
//Actualizo cada 1 segundos
d3.interval(() =>{
      update();
      // GOLES
      bar01();
      updBar03();
      updBar04();
      updBar05();
      updBar06();
      updBar07();
      updBar08();
      updBar09();
      updBar10();
      updBar11();
      updBar12();
      updBar13();
      updBar14();
      updBar15();
      updBar16();
},1000);





//dim
var width = 426,
          scaleFactor = 4,
          barHeight = 35,
          color = ["#1C6229","#D31910"],
          color2 = ["#006400","#A52A2A"],
          colorText = ["white","white"];
          textSize = "30px";


// BUSCA el nombre de los equipos desde Description y busca los logos
let bar01Count001 = 0;
let bar01Count002 = 0;

bar01();

function bar01(){

let teamName = dataTeam.then(d=> d)



dataTeam.then(function(data,i){
  let teamsData = data

console.log('teamName:',teamName)
// teamName ejemplo = P01-DGS@YCR sale del description

let teamLoc = teamsData.slice(4,7)
console.log('teamLoc',teamLoc)
let teamVis = teamsData.slice(8,11)
console.log('teamVis',teamVis)

console.log(teams)

teams.forEach(function(data,i){
    if(teamLoc == teams[i].shortname){
      loc = teams[i].nameFull
      console.log('loc:', loc)
      color[0] = teams[i].bg;
      colorText[0]=teams[i].tcol;
      document.querySelector("#localLogo").src = "logos/" + teamLoc + ".png"
      document.querySelector("#localName").innerText = teamLoc
    } 
    if(teamVis == teams[i].shortname){
      color[1] = teams[i].bg;
      colorText[1]=teams[i].tcol;
      vis = teams[i].nameFull
      console.log('vis:', vis)
      document.querySelector("#visLogo").src = "logos/" + teamVis + ".png"
      document.querySelector("#visName").innerText = teamVis
    } 
  }) 

  
 })

}; 

//------------------------------------------------------------
//BAR 03 - TRY
//------------------------------------------------------------
let data03=[0,0,0,0,0,0,0,0,0,0,0,0,0];
let data03Perc = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let data03Tot = 0;

updBar03();

function updBar03(){

let bar03NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "TRY") } )
      }
     }); 

let bar03NaC004 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "TRY PENAL") } )
      }
     }); 

let bar03NaC005 = data.then((value) => {
if(value != 'undefined'){
      return value.filter((d) => {return (d["row_name"] === "GOAL") } )
    }
  });      

let bar03NaC006 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "DROP") } )
      }
      }); 

let bar03NaC007 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "PENALTY KICK") } )
      }
      }); 

// TRY LOC  
bar03NaC003.then(function(data){ 

if(data.length < 1) {
      data03[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data03[0]=0;
    }else {
      data03[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data03[0].length > 0){
       data03[0] = data03[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//TRY Vis
bar03NaC003.then(function(data){  
if(data.length < 1) {
      data03[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data03[1]=0;
    }else {
      data03[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data03[1].length > 0){
       data03[1] = data03[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
});

// TRY PENAL LOC  
bar03NaC004.then(function(data){ 

  if(data.length < 1) {
        data03[2]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[2]=0;
      }else {
        data03[2]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
  
      }
      if(data03[2].length > 0){
         data03[2] = data03[2].filter((d,i) => {
           return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
              }).length
        } 
  
  });
  
  //TRY PENAL Vis
  bar03NaC004.then(function(data){  
  if(data.length < 1) {
        data03[3]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[3]=0;
      }else {
        data03[3]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
  
      }
      if(data03[3].length > 0){
         data03[3] = data03[3].filter((d,i) => {
           return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
              }).length
        }
        // bar03(data03);
  });
//----------------- 
//GOAL 
//-----------------
bar03NaC005.then(function(data){      
  if(data.length < 1) {
        data03[4]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[4]=0;
      }else {
        data03[4]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data03[4].length > 0){
        data03[4] = data03[4].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar03NaC005.then(function(data){      
    if(data.length < 1) {
          data03[5]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data03[5]=0;
        }else {
          data03[5]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data03[5].length > 0){
          data03[5] = data03[5].filter((d,i) => {
            return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
         
    });

// -----------------
// DROP
// ----------------
bar03NaC006.then(function(data){      
  if(data.length < 1) {
        data03[6]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[6]=0;
      }else {
        data03[6]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data03[6].length > 0){
        data03[6] = data03[6].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar03NaC006.then(function(data){      
    if(data.length < 1) {
          data03[7]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data03[7]=0;
        }else {
          data03[7]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data03[7].length > 0){
          data03[7] = data03[7].filter((d,i) => {
            return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
    
    });

// -----------------
// PENALTY KICK
// ----------------
bar03NaC007.then(function(data){      
  if(data.length < 1) {
        data03[8]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[8]=0;
      }else {
        data03[8]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data03[8].length > 0){
        data03[8] = data03[8].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }
  });

  bar03NaC007.then(function(data){      
    if(data.length < 1) {
          data03[9]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data03[9]=0;
        }else {
          data03[9]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data03[9].length > 0){
          data03[9] = data03[9].filter((d,i) => {
            return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
         bar03(data03);
    });    

// ------------------
// GOAL ERRADO
// -------------loc-----
bar03NaC005.then(function(data){      
  if(data.length < 1) {
        data03[10]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[10]=0;
      }else {
        data03[10]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data03[10].length > 0){
        data03[10] = data03[10].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar03NaC005.then(function(data){      
    if(data.length < 1) {
          data03[11]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data03[11]=0;
        }else {
          data03[11]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data03[11].length > 0){
           data03[11] = data03[11].filter((d,i) => {
            return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
  
    });

//-------------------- 
//PENALTY KICK ERRADO 
//--------------loc---
bar03NaC007.then(function(data){      
  if(data.length < 1) {
        data03[12]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data03[12]=0;
      }else {
        data03[12]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data03[12].length > 0){
        data03[12] = data03[12].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }
  });
// ---------------vis---
  bar03NaC007.then(function(data){      
    if(data.length < 1) {
          data03[13]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data03[13]=0;
        }else {
          data03[13]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data03[13].length > 0){
          data03[13] = data03[13].filter((d,i) => {
            return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
    });

} 

function bar03(data03) {          
      document.querySelector('#tryLoc').innerText=data03[0]+data03[2];
      document.querySelector('#tryVis').innerText=data03[1]+data03[3];

      document.querySelector('#scoreLoc').innerText = data03[0]*5+data03[2]*7+data03[4]*2+data03[6]*3+data03[8]*3
      document.querySelector('#scoreVis').innerText = data03[1]*5+data03[3]*7+data03[5]*2+data03[7]*3+data03[9]*3

      goalLoc = data03[4]
      totGoalLoc = data03[4]+ data03[10]
      penLoc = data03[8]
      totPenLoc = data03[8] + data03[12]
      goalVis =  data03[5]
      totGoalVis = data03[5]+data03[11]
      penVis = data03[9]
      totPenVis = data03[9] + data03[13]
     
      efectGoalLoc = Math.round(goalLoc/totGoalLoc*100,0) 
      efectGoalVis = Math.round(goalVis/totGoalVis*100,0)
      

      efectPenLoc = Math.round(penLoc/totPenLoc*100,0) 
      efectPenVis = Math.round(penVis/totPenVis*100,0)
      
      if (totGoalLoc != 0){
        document.querySelector('#goalLoc').innerText = `${goalLoc}/${totGoalLoc} ${efectGoalLoc}%`
      } else {
        document.querySelector('#goalLoc').innerText = 0
      }
       
      if (totGoalVis != 0){
        document.querySelector('#goalVis').innerText = `${goalVis}/${totGoalVis} ${efectGoalVis}%`
      }else {
        document.querySelector('#goalVis').innerText = 0
      }
       
      if (totPenLoc != 0){
        document.querySelector('#penLoc').innerText = `${penLoc}/${totPenLoc} ${efectPenLoc}%` 
      }else{
        document.querySelector('#penLoc').innerText = 0
      }
      
      if (totPenVis != 0){
        document.querySelector('#penVis').innerText = `${penVis}/${totPenVis} ${efectPenVis}%`
      }else{
        document.querySelector('#penVis').innerText = 0
      }

// console.log("GAOL ERR LOC", data03[10]   data03[04])
// console.log("GAOL ERR VIS", data03[11])  data03[05]
// console.log("PENALTY ERR KICK LOC", data03[12])
// console.log("PENALTY ERR KICK VIS", data03[13])
// console.log("TRYPENAL LOC", data03[2])
// console.log(data03[9],"GOAL", data03[4])
// console.log("DROP LOC", data03[6])
// console.log(data03[6],"PENALTY", data03[7])
    };

// ------------------------------------------------------------
//SCRUM BAR 04 
//------------------------------------------------------------
let data04=[];
let data04Perc = [];
let data04Tot = 0;

updBar04();


function updBar04(){

let bar04NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar04Name01) } )
      }
     }); //Function add value + canvas01     


bar04NaC003.then(function(data){ 
if(data.length < 1) {
      data04[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data04[0]=0;
    }else {
      data04[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data04[0].length > 0){
      data04[0] = data04[0].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "GANADO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
           }).length))
           }).length;
     }
});

bar04NaC003.then(function(data){  
if(data.length < 1) {
      data04[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data04[1]=0;
    }else {
      data04[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data04[1].length > 0){
      data04[1] = data04[1].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "PERDIDO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
           }).length))
           }).length;
     }
     bar04(data04); 
});

} 

  const svg4 = d3.select('#canvas04')
              .append('svg')
              .attr('viewBox',"0 -10 426 80")
              .attr('preserveAspectRatio','none')
              .style("background","grey darken-4")

  var title4 = svg4.append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 15)
                .attr('fill', 'white')
                .attr("font-size",textSize)
                .attr('x', width/2)
                .text(title04)
  
svg4.append('g')
svg4.append('g')

svg4.selectAll('g') 
     .append('rect')
          .attr('y', 20)
          .attr('x', 15)
          .attr('stroke',"white")
          .attr('stroke-width', "1")
          .attr("fill", function(d,i){
              return color[i];
              })
          .attr('height', barHeight)

svg4.selectAll('g')
     .append('text')
        .attr("y", barHeight / 2 + 20)
        .attr("dy", ".35em") 
        .attr("font-size",textSize) 
        .attr("fill", function(d,i){
              return colorText[i]
              });

function bar04(data04) {         
      
data04Tot = d3.sum(data04)
  if(data04Tot >= 1 ){
    data04Perc[0]=data04[0]/data04Tot*100;
    data04Perc[1]=data04[1]/data04Tot*100;
  }else{
    data04Perc[0]=0;
    data04Perc[1]=0;
  }

     var bar4 = svg4.selectAll("g")
                      .data(data04Perc);

                bar4.transition().duration(500)
                   .attr("transform", function(d, i) {
                        if(i%2){
                            return "translate(" + (data04Perc[0]*scaleFactor) + ",5)";
                        }else{
                            return "translate(0,5)"
                        }
                      });

                bar4.select("rect")
                      .transition().duration(500)
                      .attr("width", function(d,i) {
                              return d * scaleFactor;
                                })                   

                svg4.selectAll('g')
                     .select("text")
                     .attr('text-anchor',function (d,i){
                      if(i%2){
                        return 'middle';
                      }else{
                        return 'start';
                      }
                     })
                     .attr("transform", function(d, i) {
                              if(i%2){
                                  return "translate(" + (data04Perc[1]*scaleFactor) + ",0)";
                                    }
                                   else{
                                   return "translate(20,0)";
                                   }
                        })
                    .text(function(d,i) { return data04[i] });
  };

// ---------------------
//BAR 05
//------------------------------------------------------------
let data05=[];
let data05Perc = [];
let data05Tot = 0;

updBar05();

function updBar05(){

let bar05NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar05Name01) } )
      }
     });  

bar05NaC003.then(function(data){ 
if(data.length < 1) {
      data05[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data05[0]=0;
    }else {
      data05[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data05[0].length > 0){
      data05[0] = data05[0].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "GANADO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
           }).length))
           }).length;
     }
 
});

bar05NaC003.then(function(data){  
if(data.length < 1) {
      data05[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data05[1]=0;
    }else {
      data05[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data05[1].length > 0){
      data05[1] = data05[1].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "PERDIDO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
           }).length))
           }).length;
     }
     bar05(data05); 
});

} 

  const svg5 = d3.select('#canvas05')
              .append('svg')
              .attr('viewBox',"0 -10 426 80")
              .attr('preserveAspectRatio','none')
              .style("background","grey darken-4")

  var title5 = svg5.append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 15)
                .attr('fill', 'white')
                .attr("font-size",textSize)
                .attr('x', width/2)
                .text(title05)
  
svg5.append('g')
svg5.append('g')

svg5.selectAll('g') 
     .append('rect')
          .attr('y', 20)
          .attr('x', 15)
          .attr('stroke',"white")
          .attr('stroke-width', "1")
          .attr("fill", function(d,i){
              return color[i];
              })
          .attr('height', barHeight)

svg5.selectAll('g')
     .append('text')
        .attr("y", barHeight / 2 + 20)
        .attr("dy", ".35em")
        .attr("font-size",textSize) 
        .attr("fill", function(d,i){
              return colorText[i]
              });

function bar05(data05) {         
      
data05Tot = d3.sum(data05)
  if(data05Tot >= 1 ){
    data05Perc[0]=data05[0]/data05Tot*100;
    data05Perc[1]=data05[1]/data05Tot*100;
  }else{
    data05Perc[0]=0;
    data05Perc[1]=0;
  }

     var bar5 = svg5.selectAll("g")
                      .data(data05Perc);

                bar5.transition().duration(500)
                   .attr("transform", function(d, i) {
                        if(i%2){
                            return "translate(" + (data05Perc[0]*scaleFactor) + ",5)";
                        }else{
                            return "translate(0,5)"
                        }
                      });

                bar5.select("rect")
                      .transition().duration(500)
                      .attr("width", function(d,i) {
                              return d * scaleFactor;
                                })   

                svg5.selectAll('g')
                     .select("text")
                     .attr('text-anchor',function (d,i){
                      if(i%2){
                        return 'middle';
                      }else{
                        return 'start';
                      }
                     })
                     .attr("transform", function(d, i) {
                              if(i%2){
                                  return "translate(" + (data05Perc[1]*scaleFactor) + ",0)";
                                    }
                                   else{
                                   return "translate(20,0)";
                                   }
                        })
                    .text(function(d,i) { return data05[i] });
  };

// --------------------
// ---------------------
//BAR 06 - SCRUM VISITA
//------------------------------------------------------------
let data06=[];
let data06Perc = [];
let data06Tot = 0;

updBar06();

function updBar06(){

let bar06NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar06Name01) } )
      }
     });     

bar06NaC003.then(function(data){ 
if(data.length < 1) {
      data06[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data06[0]=0;
    }else {
      data06[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data06[0].length > 0){
      data06[0] = data06[0].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "GANADO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
           }).length))
           }).length;
     }
 
});

bar06NaC003.then(function(data){  
if(data.length < 1) {
      data06[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data06[1]=0;
    }else {
      data06[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
    }
    if(data06[1].length > 0){
      data06[1] = data06[1].filter((d,i) => {
        return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "PERDIDO")
           }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
           }).length))
           }).length;
     }
     bar06(data06); 
});

} 

  const svg6 = d3.select('#canvas06')
              .append('svg')
              .attr('viewBox',"0 -10 426 80")
              .attr('preserveAspectRatio','none')
              .style("background","grey darken-4")

  var title6 = svg6.append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 15)
                .attr('fill', 'white')
                .attr("font-size",textSize)
                .attr('x', width/2)
                .text(title06)
  
svg6.append('g')
svg6.append('g')

svg6.selectAll('g') 
     .append('rect')
          .attr('y', 20)
          .attr('x', 15)
          .attr('stroke',"white")
          .attr('stroke-width', "1")
          .attr("fill", function(d,i){
              return color[i];
              })
          .attr('height', barHeight)

svg6.selectAll('g')
     .append('text')
        .attr("y", barHeight / 2 + 20)
        .attr("dy", ".35em")
        .attr("font-size",textSize)  
        .attr("fill", function(d,i){
              return colorText[i]
              });

function bar06(data06) {         
      
data06Tot = d3.sum(data06)
  if(data06Tot >= 1 ){
    data06Perc[0]=data06[0]/data06Tot*100;
    data06Perc[1]=data06[1]/data06Tot*100;
  }else{
    data06Perc[0]=0;
    data06Perc[1]=0;
  }

     var bar6 = svg6.selectAll("g")
                      .data(data06Perc);

                bar6.transition().duration(500)
                   .attr("transform", function(d, i) {
                        if(i%2){
                            return "translate(" + (data06Perc[0]*scaleFactor) + ",5)";
                        }else{
                            return "translate(0,5)"
                        }
                      });

                bar6.select("rect")
                      .transition().duration(500)
                      .attr("width", function(d,i) {
                              return d * scaleFactor;
                                })    

                svg6.selectAll('g')
                     .select("text")
                     .attr('text-anchor',function (d,i){
                      if(i%2){
                        return 'middle';
                      }else{
                        return 'start';
                      }
                     })
                     .attr("transform", function(d, i) {
                              if(i%2){
                                  return "translate(" + (data06Perc[1]*scaleFactor) + ",0)";
                                    }
                                   else{
                                   return "translate(20,0)";
                                   }
                        })
                    .text(function(d,i) { return data06[i] });
  };

// --------------------

  //BAR 07
//------------------------------------------------------------
let data07=[];
let data07Perc = [];
let data07Tot = 0;

updBar07();


function updBar07(){

let bar07NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar07Name01) } )
      }
     }); //Function add value + canvas01     


     bar07NaC003.then(function(data){  
      if(data.length < 1) {
            data07[0]=0;
          }else if(typeof(data[0].clips) === 'undefined'){
            data07[0]=0;
          }else {
            data07[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
          }
          if(data07[0].length > 0){
            data07[0] = data07[0].filter((d,i) => {
              return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "GANADO")
                 }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
                 }).length))
                 }).length;
           }
 
});

bar07NaC003.then(function(data){  
  if(data.length < 1) {
        data07[1]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data07[1]=0;
      }else {
        data07[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data07[1].length > 0){
        data07[1] = data07[1].filter((d,i) => {
          return ((d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "PERDIDO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
             }).length))
             }).length;
       }
     bar07(data07); 
});

} 

  const svg7 = d3.select('#canvas07')
              .append('svg')
              .attr('viewBox',"0 -10 426 80")
              .attr('preserveAspectRatio','none')
              .style("background","grey darken-4")

  var title7 = svg7.append('text')
                .attr('text-anchor', 'middle')
                .attr('y', 15)
                .attr('fill', 'white')
                .attr("font-size",textSize)
                .attr('x', width/2)
                .text(title07)
  
svg7.append('g')
svg7.append('g')

svg7.selectAll('g') 
     .append('rect')
          .attr('y', 20)
          .attr('x', 15)
          .attr('stroke',"white")
          .attr('stroke-width', "1")
          .attr("fill", function(d,i){
              return color[i];
              })
          .attr('height', barHeight)

svg7.selectAll('g')
     .append('text')
        .attr("y", barHeight / 2 + 20)
        .attr("dy", ".35em")  
        .attr("font-size",textSize)
        .attr("fill", function(d,i){
              return colorText[i]
              });

function bar07(data07) {         
      
data07Tot = d3.sum(data07)
  if(data07Tot >= 1 ){
    data07Perc[0]=data07[0]/data07Tot*100;
    data07Perc[1]=data07[1]/data07Tot*100;
  }else{
    data07Perc[0]=0;
    data07Perc[1]=0;
  }

     var bar7 = svg7.selectAll("g")
                      .data(data07Perc);

                bar7.transition().duration(500)
                   .attr("transform", function(d, i) {
                        if(i%2){
                            return "translate(" + (data07Perc[0]*scaleFactor) + ",5)";
                        }else{
                            return "translate(0,5)"
                        }
                      });

                bar7.select("rect")
                      .transition().duration(500)
                      .attr("width", function(d,i) {
                              return d * scaleFactor;
                                })   

                svg7.selectAll('g')
                     .select("text")
                     .attr('text-anchor',function (d,i){
                      if(i%2){
                        return 'middle';
                      }else{
                        return 'start';
                      }
                     })
                     .attr("transform", function(d, i) {
                              if(i%2){
                                  return "translate(" + (data07Perc[1]*scaleFactor) + ",0)";
                                    }
                                   else{
                                   return "translate(20,0)";
                                   }
                        })
                    .text(function(d,i) { return data07[i] });
  };


//------------------------------------------------------------
//BAR 08 - CLEAN BREAKS
//------------------------------------------------------------
let data08=[];
let data08Perc = [];
let data08Tot = 0;

updBar08();

function updBar08(){

let bar08NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar08Name01) } )
      }
     }); //Function add value + canvas01     

// CLEAN BREAKS LOC  
bar08NaC003.then(function(data){ 

if(data.length < 1) {
      data08[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data08[0]=0;
    }else {
      data08[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data08[0].length > 0){
       data08[0] = data08[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//CLEAN BREAKS Vis
bar08NaC003.then(function(data){  
if(data.length < 1) {
      data08[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data08Perc[1]=0;
    }else {
      data08[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data08[1].length > 0){
       data08[1] = data08[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar08(data08);
});

} 

function bar08(data08) {          
      document.querySelector('#cleanBreakLoc').innerText=data08[0];
      document.querySelector('#cleanBreakVis').innerText=data08[1];
};

//------------------------------------------------------------
//BAR 09 - TURNOVERS
//------------------------------------------------------------
let data09=[];
let data09Perc = [];
let data09Tot = 0;

updBar09();

function updBar09(){

let bar09NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar09Name01) } )
      }
     }); //Function add value + canvas01     

// TURNOVERS LOC  
bar09NaC003.then(function(data){ 

if(data.length < 1) {
      data09[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data09[0]=0;
    }else {
      data09[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data09[0].length > 0){
       data09[0] = data09[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//TURNOVERS Vis
bar09NaC003.then(function(data){  
if(data.length < 1) {
      data09[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data09[1]=0;
    }else {
      data09[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data09[1].length > 0){
       data09[1] = data09[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar09(data09);
});

} 

function bar09(data09) {          
      document.querySelector('#turnoverLoc').innerText=data09[0];
      document.querySelector('#turnoverVis').innerText=data09[1];
};

//------------------------------------------------------------
//BAR 10 - OFFLOADS
//------------------------------------------------------------
let data10=[];
let data10Perc = [];
let data10Tot = 0;

updBar10();

function updBar10(){

let bar10NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar10Name01) } )
      }
     });      

// OFFLOADS LOC  
bar10NaC003.then(function(data){ 

if(data.length < 1) {
      data10[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data10[0]=0;
    }else {
      data10[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data10[0].length > 0){
       data10[0] = data10[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//OFFLOADS Vis
bar10NaC003.then(function(data){  
if(data.length < 1) {
      data10[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data10[1]=0;
    }else {
      data10[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data10[1].length > 0){
       data10[1] = data10[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar10(data10);
});

} 

function bar10(data10) {          
      document.querySelector('#offloadLoc').innerText=data10[0];
      document.querySelector('#offloadVis').innerText=data10[1];
};

//------------------------------------------------------------
//BAR 11 - PENLATY CONCEEDED
//------------------------------------------------------------
let data11=[];
let data11Perc = [];
let data11Tot = 0;

updBar11();

function updBar11(){

let bar11NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar11Name01) } )
      }
     });      

// PENLATY CONCEEDED LOC  
bar11NaC003.then(function(data){ 

if(data.length < 1) {
      data11[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data11[0]=0;
    }else {
      data11[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data11[0].length > 0){
       data11[0] = data11[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//PENLATY CONCEEDED Vis
bar11NaC003.then(function(data){  
if(data.length < 1) {
      data11[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data11[1]=0;
    }else {
      data11[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data11[1].length > 0){
       data11[1] = data11[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar11(data11);
});

} 

function bar11(data11) {          
      document.querySelector('#penaltyConceededLoc').innerText=data11[0];
      document.querySelector('#penaltyConceededVis').innerText=data11[1];
};

//------------------------------------------------------------
//BAR 12 - ENTRADA 22
//------------------------------------------------------------
let data12=[];
let data12Perc = [];
let data12Tot = 0;

updBar12();

function updBar12(){

let bar12NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === bar12Name01 ) } )
      }
     });      

// ENTRADA 22 LOC  
bar12NaC003.then(function(data){ 

if(data.length < 1) {
      data12[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data12[0]=0;
    }else {
      data12[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data12[0].length > 0){
       data12[0] = data12[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//ENTRADA 22 Vis
bar12NaC003.then(function(data){  
if(data.length < 1) {
      data12[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data12[1]=0;
    }else {
      data12[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data12[1].length > 0){
       data12[1] = data12[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar12(data12);
     
});

} 

function bar12(data12) {          
      document.querySelector('#entrada22Loc').innerText=data12[0];
      document.querySelector('#entrada22Vis').innerText=data12[1];
};

//------------------------------------------------------------
//BAR 13 - LOST
//------------------------------------------------------------
let data13=[];
let data13Perc = [];
let data13Tot = 0;

updBar13();

function updBar13(){

let bar13NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "LOST") } )
      }
     });      

// LOST LOC  
bar13NaC003.then(function(data){ 

if(data.length < 1) {
      data13[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data13[0]=0;
    }else {
      data13[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data13[0].length > 0){
       data13[0] = data13[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//LOST Vis
bar13NaC003.then(function(data){  
if(data.length < 1) {
      data13[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data13[1]=0;
    }else {
      data13[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data13[1].length > 0){
       data13[1] = data13[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar13(data13);
     
});

} 

function bar13(data13) {          
      document.querySelector('#lostLoc').innerText=data13[0];
      document.querySelector('#lostVis').innerText=data13[1];
};


// -----------------------------------

//------------------------------------------------------------
//BAR 14 - YELLOW
//------------------------------------------------------------
let data14=[];
let data14Perc = [];
let data14Tot = 0;

updBar14();

function updBar14(){

let bar14NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "YELLOW CARD") } )
      }
     });      

// YELLOW LOC  
bar14NaC003.then(function(data){ 

if(data.length < 1) {
      data14[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data14[0]=0;
    }else {
      data14[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data14[0].length > 0){
       data14[0] = data14[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//YELLOW Vis
bar14NaC003.then(function(data){  
if(data.length < 1) {
      data14[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data14[1]=0;
    }else {
      data14[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data14[1].length > 0){
       data14[1] = data14[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar14(data14);
     
});

} 

function bar14(data14) {          
      document.querySelector('#amaLoc').innerText=data14[0];
      document.querySelector('#amaVis').innerText=data14[1];
};

// -----------------------------------

//------------------------------------------------------------
//BAR 15 - ROJO
//------------------------------------------------------------
let data15=[];
let data15Perc = [];
let data15Tot = 0;

updBar15();

function updBar15(){

let bar15NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "RED CARD") } )
      }
     });      

// ROJO LOC  
bar15NaC003.then(function(data){ 

if(data.length < 1) {
      data15[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data15[0]=0;
    }else {
      data15[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data15[0].length > 0){
       data15[0] = data15[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//ROJO Vis
bar15NaC003.then(function(data){  
if(data.length < 1) {
      data15[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data15[1]=0;
    }else {
      data15[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data15[1].length > 0){
       data15[1] = data15[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar15(data15);
     
});

} 

function bar15(data15) {          
      document.querySelector('#rojLoc').innerText=data15[0];
      document.querySelector('#rojVis').innerText=data15[1];
};

// -----------------------------------


//------------------------------------------------------------
//BAR 16 - Tackles
//------------------------------------------------------------
let data16=[];
let data16Perc = [];
let data16Tot = 0;

updBar16();

function updBar16(){

let bar16NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "TACKLE MADE") } )
      }
     });      

// TACKLES LOC  
bar16NaC003.then(function(data){ 

if(data.length < 1) {
      data16[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data16[0]=0;
    }else {
      data16[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data16[0].length > 0){
       data16[0] = data16[0].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

});

//TACKLES Vis
bar16NaC003.then(function(data){  
if(data.length < 1) {
      data16[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data16[1]=0;
    }else {
      data16[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data16[1].length > 0){
       data16[1] = data16[1].filter((d,i) => {
         return (d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      bar16(data16);
     
});

} 

function bar16(data16) {          
      document.querySelector('#TackLoc').innerText=data16[0];
      document.querySelector('#TackVis').innerText=data16[1];
};

// -------


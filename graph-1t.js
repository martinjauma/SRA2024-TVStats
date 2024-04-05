//------------------------------------------------------------
//BAR 03 - TRY
//------------------------------------------------------------
 let data113=[];
 let data113Perc = [];
 let data113Tot = 0;

updBar113();

function updBar113(){

let bar113NaC003 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "TRY") } )
      }
     }); 

    

let bar113NaC004 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "TRY PENAL") } )
      }
     }); 

let bar113NaC005 = data.then((value) => {
if(value != 'undefined'){
      return value.filter((d) => {return (d["row_name"] === "GOAL") } )
    }
  });      

let bar113NaC006 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "DROP") } )
      }
      }); 

let bar113NaC007 = data.then((value) => {
  if(value != 'undefined'){
        return value.filter((d) => {return (d["row_name"] === "PENALTY KICK") } )
      }
      }); 

// TRY LOC  
bar113NaC003.then(function(data){ 

if(data.length < 1) {
      data113[0]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data113[0]=0;
    }else {
      data113[0]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data113[0].length > 0){
       data113[0] = data113[0].filter((d,i) => {
         return (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
            }).length
      } 

      console.log("Data Loc 1T", data113[0])

});

//TRY Vis
bar113NaC003.then(function(data){  
if(data.length < 1) {
      data113[1]=0;
    }else if(typeof(data[0].clips) === 'undefined'){
      data113[1]=0;
    }else {
      data113[1]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))

    }
    if(data113[1].length > 0){
       data113[1] = data113[1].filter((d,i) => {
         return (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
            }).length
      }
      console.log("Data Vis 1T", data113[1])
});

// TRY PENAL LOC  
bar113NaC004.then(function(data){ 

  if(data.length < 1) {
        data113[2]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[2]=0;
      }else {
        data113[2]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
  
      }
      if(data113[2].length > 0){
         data113[2] = data113[2].filter((d,i) => {
           return (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === loc)}).length)
              }).length
        } 
  
  });
  
  //TRY PENAL Vis
  bar113NaC004.then(function(data){  
  if(data.length < 1) {
        data113[3]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[3]=0;
      }else {
        data113[3]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
  
      }
      if(data113[3].length > 0){
         data113[3] = data113[3].filter((d,i) => {
           return (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => { return (d.name === vis)}).length)
              }).length
        }
        // bar03(data03);
  });
//----------------- 
//GOAL 
//-----------------
bar113NaC005.then(function(data){      
  if(data.length < 1) {
        data113[4]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[4]=0;
      }else {
        data113[4]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data113[4].length > 0){
        data113[4] = data113[4].filter((d,i) => {
          return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar113NaC005.then(function(data){      
    if(data.length < 1) {
          data113[5]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data113[5]=0;
        }else {
          data113[5]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data113[5].length > 0){
          data113[5] = data113[5].filter((d,i) => {
            return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
         
    });

// -----------------
// DROP
// ----------------
bar113NaC006.then(function(data){      
  if(data.length < 1) {
        data113[6]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[6]=0;
      }else {
        data113[6]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data113[6].length > 0){
        data113[6] = data113[6].filter((d,i) => {
          return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar113NaC006.then(function(data){      
    if(data.length < 1) {
          data113[7]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data113[7]=0;
        }else {
          data113[7]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data113[7].length > 0){
          data113[7] = data113[7].filter((d,i) => {
            return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
    
    });

// -----------------
// PENALTY KICK
// ----------------
bar113NaC007.then(function(data){      
  if(data.length < 1) {
        data113[8]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[8]=0;
      }else {
        data113[8]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data113[8].length > 0){
        data113[8] = data113[8].filter((d,i) => {
          return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
             }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }
  });

  bar113NaC007.then(function(data){      
    if(data.length < 1) {
          data113[9]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data113[9]=0;
        }else {
          data113[9]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data113[9].length > 0){
          data113[9] = data113[9].filter((d,i) => {
            return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "CONVERTIDO")
               }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
         bar113(data113);
    });    

// ------------------
// GOAL ERRADO
// -------------loc-----
bar113NaC005.then(function(data){      
  if(data.length < 1) {
        data113[10]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[10]=0;
      }else {
        data113[10]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data113[10].length > 0){
        data113[10] = data113[10].filter((d,i) => {
          return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
             }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }

  });

  bar113NaC005.then(function(data){      
    if(data.length < 1) {
          data113[11]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data113[11]=0;
        }else {
          data113[11]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data113[11].length > 0){
           data113[11] = data113[11].filter((d,i) => {
            return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
               }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
  
    });

//-------------------- 
//PENALTY KICK ERRADO 
//--------------loc---
bar113NaC007.then(function(data){      
  if(data.length < 1) {
        data113[12]=0;
      }else if(typeof(data[0].clips) === 'undefined'){
        data113[12]=0;
      }else {
        data113[12]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
      }
      if(data113[12].length > 0){
        data113[12] = data113[12].filter((d,i) => {
          return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
             }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === loc)
             }).length))
             }).length;
       }
  });
// ---------------vis---
  bar113NaC007.then(function(data){      
    if(data.length < 1) {
          data113[13]=0;
        }else if(typeof(data[0].clips) === 'undefined'){
          data113[13]=0;
        }else {
          data113[13]=data[0].clips.filter(d => (typeof(d.qualifiers) != 'undefined'))
        }
        if(data113[13].length > 0){
          data113[13] = data113[13].filter((d,i) => {
            return ((d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === "ERRADO")
               }).length) && (d.time_start < 3120 && d.qualifiers["qualifiers_array"].filter((d,i) => {return (d.name === vis)
               }).length))
               }).length;
         }
    });

} 

function bar113(data) {          
      // document.querySelector('#try1TLoc').innerText=data113[0]+data113[2];
      // document.querySelector('#try1TVis').innerText=data113[1]+data113[3];

      document.querySelector('#scoreLoc').innerText = data113[0]*5+data113[2]*7+data113[4]*2+data113[6]*3+data113[8]*3
      document.querySelector('#scoreVis').innerText = data113[1]*5+data113[3]*7+data113[5]*2+data113[7]*3+data113[9]*3

      goalLoc = data113[4]
      totGoalLoc = data113[4]+ data113[10]
      penLoc = data113[8]
      totPenLoc = data113[8] + data113[12]
      goalVis =  data113[5]
      totGoalVis = data113[5]+data113[11]
      penVis = data113[9]
      totPenVis = data113[9] + data113[13]
     
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

    };


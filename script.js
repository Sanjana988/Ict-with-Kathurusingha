let marks=[]
let hours=[]

let progressChart
let hoursChart

function addHours(){

let h=document.getElementById("hoursinput").value

hours.push(h)

updateHoursChart()

document.getElementById("hoursinput").value=""

}

function updateHoursChart(){

let ctx=document.getElementById("hoursChart")

if(hoursChart){
hoursChart.destroy()
}

hoursChart=new Chart(ctx,{

type:'bar',

data:{

labels:hours.map((_,i)=>"Day "+(i+1)),

datasets:[{

label:'Study Hours',

data:hours,

backgroundColor:'#ff7b00'

}]

}

})

}

function chatbot(){

let msg=document.getElementById("chatinput").value.toLowerCase()

let reply="Please contact 0779361706 for assistance."

if(msg.includes("papers")){
reply="Model and Past papers are available in the Model & Past Papers page."
}

else if(msg.includes("recording")){
reply="Upload your class payment receipt to unlock recordings."
}

else if(msg.includes("class")){
reply="ICT With Kathurusingha provides concept based ICT education for A/L students."
}

else if(msg.includes("contact")){
reply="You can contact Sir Jude Kathurusingha at 0779361706."
}

document.getElementById("chatreply").innerText=reply

}
// ===== STUDENT HOURS =====
let hours=[]; // store daily study hours
let hoursChart

function addHours(){
    let h = Number(document.getElementById("hoursinput").value)
    if(!h || h<0){ alert("Enter a valid number"); return; }
    hours.push(h)
    document.getElementById("hoursinput").value=""
    drawHoursChart()
}

function drawHoursChart(){
    let ctx = document.getElementById("hoursChart").getContext("2d")
    if(hoursChart){ hoursChart.destroy() }
    hoursChart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:hours.map((_,i)=>"Day "+(i+1)),
            datasets:[{
                label:'Daily Study Hours',
                data:hours,
                backgroundColor:'#ff7b00'
            }]
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}}
        }
    })
}

// ===== PERSONAL PROGRESS =====
let marks=[] // store marks
let progressChart

function addMark(){
    let m = Number(document.getElementById("markinput").value)
    if(!m || m<0 || m>100){ alert("Enter a valid mark (0-100)"); return; }
    marks.push(m)
    document.getElementById("markinput").value=""
    drawProgressChart()
}

function drawProgressChart(){
    let ctx = document.getElementById("progressChart").getContext("2d")
    if(progressChart){ progressChart.destroy() }

    // Split marks into groups of 3 (like sets of papers)
    let labels=[]
    let datasets=[]
    let groupCount = Math.ceil(marks.length/3)
    for(let g=0; g<groupCount; g++){
        let groupMarks = marks.slice(g*3, g*3+3)
        let groupLabels = groupMarks.map((_,i)=>"Paper "+(g*3 + i +1))
        labels = labels.concat(groupLabels)
        datasets.push({
            label:'Marks Batch '+(g+1),
            data:groupMarks,
            fill:false,
            borderColor:`hsl(${g*60},70%,50%)`,
            tension:0.4
        })
    }

    progressChart = new Chart(ctx,{
        type:'line',
        data:{
            labels:labels,
            datasets:datasets
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}},
            scales:{
                y:{beginAtZero:true, max:100}
            }
        }
    })
}
// ===== STUDENT HOURS =====
let hours=[]
let hoursChart

function addHours(){
    let h = Number(document.getElementById("hoursinput").value)
    if(!h || h<0){ alert("Enter a valid number"); return; }
    hours.push(h)
    document.getElementById("hoursinput").value=""
    drawHoursChart()
}

function drawHoursChart(){
    let ctx = document.getElementById("hoursChart").getContext("2d")
    if(hoursChart){ hoursChart.destroy() }
    hoursChart = new Chart(ctx,{
        type:'bar',
        data:{
            labels:hours.map((_,i)=>"Day "+(i+1)),
            datasets:[{
                label:'Daily Study Hours',
                data:hours,
                backgroundColor:'#ff7b00'
            }]
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}}
        }
    })
}
// ===== PERSONAL PROGRESS =====
let marks=[] // store marks
let progressChart

function addMark(){
    let m = Number(document.getElementById("markinput").value)
    if(!m || m<0 || m>100){ alert("Enter a valid mark (0-100)"); return; }
    marks.push(m)
    document.getElementById("markinput").value=""
    drawProgressChart()
}

function drawProgressChart(){
    let ctx = document.getElementById("progressChart").getContext("2d")
    if(progressChart){ progressChart.destroy() }

    // Split marks into batches of 3 (like sets of papers)
    let labels=[]
    let datasets=[]
    let groupCount = Math.ceil(marks.length/3)
    for(let g=0; g<groupCount; g++){
        let groupMarks = marks.slice(g*3, g*3+3)
        let groupLabels = groupMarks.map((_,i)=>"Paper "+(g*3 + i +1))
        labels = labels.concat(groupLabels)
        datasets.push({
            label:'Marks Batch '+(g+1),
            data:groupMarks,
            fill:false,
            borderColor:`hsl(${g*60},70%,50%)`,
            tension:0.4
        })
    }

    progressChart = new Chart(ctx,{
        type:'line',
        data:{
            labels:labels,
            datasets:datasets
        },
        options:{
            responsive:true,
            plugins:{legend:{display:true}},
            scales:{y:{beginAtZero:true, max:100}}
        }
    })
}
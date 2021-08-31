
let step = 0
let ids = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth", "nine"]

function destroy() {
    ids.map((id) => {
        console.log(document.getElementById(id))
        document.getElementById(id).style.display = "none"
        document.getElementById("destroy").style.display= "none"
        document.getElementById("build").style.display= ""
    })
}

function getClass() {
    console.log(document.getElementsByClassName("container")[0])
}

function build() {
    let id = ids[step]
    console.log(id)
    console.log(document.getElementById(id).style.display)
    document.getElementById(id).style.display = ""    
    if (step < 8) {
        step = step+1
    } else {
        step=0
        document.getElementById("build").style.display= "none"
        document.getElementById("destroy").style.display= ""
    }
}
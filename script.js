async function getNumVistors() {
    try {
        // use MY api... we've come so far...
        const response = await fetch("https://r9ndendegf.execute-api.us-east-1.amazonaws.com/increment");
        const data = await response.json();
        
        // update the text!!
        document.getElementById("count").innerHTML = data.count;

        var rand = Math.floor(Math.random() * 100);

        if (rand == 99) {
            await bobProcess();
        }
        else if (rand < 10) {
            await ghostyProcess();
        }


    } catch (error) {
        console.error("What? Vistor count no worky...", error);
        document.getElementById("count").innerHTML = "NaN";
    }
}

async function ghostyProcess() {
    try {
        // your pal ghosty is back at it again...
        const response = await fetch("https://r9ndendegf.execute-api.us-east-1.amazonaws.com/incrementGhosty");
        const data = await response.json();
        
        // update the text!!
        document.getElementById("special").innerHTML = "It's me, your pal Ghosty! You're one of " + data.count + " lucky ducks that rolled the 10% chance to see me!";
        document.getElementById("pic").src = "Ghosty2.gif";
        document.body.style.backgroundColor = "#e1e2e0";

    } catch (error) {
        console.error("What? Vistor count no worky...", error);
        document.getElementById("count").innerHTML = "NaN";
    }
}

async function bobProcess() {
    try {
        // there's nothing to it...
        const response = await fetch("https://r9ndendegf.execute-api.us-east-1.amazonaws.com/incrementBob");
        const data = await response.json();
        
        // update the text!!
        document.getElementById("special").innerHTML = "Oh, hey! You're person number " + data.count + " to see me. Lucky you! 1% sure is rare...";
        document.getElementById("pic").src = "bobby.png";
        document.body.style.backgroundColor = "#c6e8ff";

    } catch (error) {
        console.error("What? Vistor count no worky...", error);
        document.getElementById("count").innerHTML = "NaN";
    }
}

// get the num of vistors upon page LOAD. get it? LOAD?
window.onload = getNumVistors;

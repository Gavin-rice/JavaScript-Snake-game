let lastRenderTime = 0


function main(currentTime){
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000 // convert to time in seconds
    window.requestAnimationFrame(main) //requesting the time so that the window can render the game
    lastRenderTime = currentTime
    console.log(secondsSinceLastRender)

}

window.requestAnimationFrame(main)
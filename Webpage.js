var cp="X"
var np="O"
var n=0
var temp=cp
let wins=[[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]]
let cells = document.querySelectorAll(".cell")
var win = false
var state = document.getElementById('status')
var scoreX = document.getElementById("scoreX")
var scoreO = document.getElementById("scoreO")
var match=document.getElementById("Match")
function Disablecell() {
  // 1. Immediately disable all cells so no one can click
  cells.forEach(cell => {
    cell.disabled = true;
  })}
function checkwin()
    {
        wins.forEach(function(sts)
        {
            let k=cells[sts[0]]
            let l=cells[sts[1]]
            let m=cells[sts[2]]
            if(win!==true && k.textContent !=="" && k.textContent===l.textContent && k.textContent===m.textContent)
            {
                k.classList.add("winner")
                l.classList.add("winner")
                m.classList.add("winner")
                state.textContent="Player "+k.textContent+" Won"
                
                if(cp==="X")
                {
                    
                    
                    scoreX.textContent=Number(scoreX.textContent)+1
                    match.textContent=Number(match.textContent)+1
                }
                else{
                    
                    scoreO.textContent=Number(scoreO.textContent)+1
                    match.textContent=Number(match.textContent)+1
                }
                win=true
                Disablecell()
                setTimeout(restartGame,1500)
                

            }

        

        })
    }
function restartGame() {
    cells.forEach(function(cell) {
        cell.textContent = "";
        cell.disabled = false;
        cell.classList.remove("winner")
    });

    cp = "X";
    np = "O";
    temp = cp;
    n = 0;
    win = false;

    state.textContent = "Player X's Turn";
}
cells.forEach(function(cell){
    cell.addEventListener("click",function(){
        cell.textContent=cp
        n=n+1
        cell.disabled=true
        checkwin()
        
        if(win!==true)
            {
            
            if(win!==true && n===9)
            {
                state.textContent="Match Drawn"
                match.textContent=Number(match.textContent)+1
                setTimeout(restartGame,1000)
                
            }
            else{
                cp=np
                np=temp
                temp=cp
                state.textContent="Player "+cp+"'s Turn"
                
        
            }
            }

            

        
        
        
        
         
    

    })
    

})
function resetScore()
{
    restartGame()
    scoreO.textContent=0
    scoreX.textContent=0
    match.textContent=0
}


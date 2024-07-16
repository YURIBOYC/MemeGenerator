import React from "react"

export default function Meme(){
    
        const [memeContent,setMemeContent] = React.useState({
        toptext:"",
        bottomtext:"",
        imgUrl:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    },[])

    function getMemeImage(){
        const randomNum = Math.floor(Math.random()*allMemes.length)
        const url = allMemes[randomNum].url
        setMemeContent(prevMeme=>({
            ...prevMeme,
            imgUrl:url
        }))
    }

    function memeChange(event){
        const {name,value} = event.target
        setMemeContent(prevMemeContent=>({
            ...prevMemeContent,
            [name]:value
        }))
    }
    
    function saveMeme(){
        window.print()
    }

    return (
        <div>
        <div className="meme-div">
            <button
                className="meme-buttons"  
                onClick={getMemeImage}  
            >
                Get New Meme
            </button>
            <input 
                className="meme-inp"
                type="text"
                placeholder="Top Text"
                name="toptext"    
                onChange={memeChange}   
                value={memeContent.toptext}         
            />
            <input 
                className="meme-inp"
                type="text"
                placeholder="Bottom Text"
                name="bottomtext"  
                onChange={memeChange} 
                value={memeContent.bottomtext}                  
            />
            <button
                className="meme-buttons save-btn"    
                onClick={saveMeme}
            >
                Save Meme
            </button>
        </div>
        <div className="memeDiv">
            <img src={memeContent.imgUrl} className="memePic"/>
            <h2 className="meme-toptext meme-text">{memeContent.toptext}</h2>
            <h2 className="meme-bottomtext meme-text">{memeContent.bottomtext}</h2>
        </div>
    </div>
    )
}
const getNewQoute=async()=>{
    
    let btn = document.getElementById("get-quote")
    btn.innerText="Quote Loading"
    btn.classList.add("loading")

    const req = await fetch("http://api.quotable.io/random")
    const res =await req.json()

    btn = document.getElementById("get-quote")
    btn.innerText="New Quote"
    btn.classList.remove("loading")

    setQuote(res)
}
setQuote=(quote)=>{
    document.getElementById("pTag").innerText =quote.content
    document.getElementById("author").innerText =quote.author
}
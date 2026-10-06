function Search_bar({setcity,getCurrentLocation}) {

  return (
    <>
    <h1 className="app-title">Weather App</h1>
    <div className="search-bar"> 
    <input className="search-input" placeholder="Enter City name..." type="text" onKeyDown={(e)=>{
      if(e.key==="Enter"){
        setcity(e.target.value.trim());
      }
    }}/>
    <button className="search-button" onClick={()=>{
      setcity(document.querySelector('.search-input').value);
    }}>Search</button>
    <button className='search-button' onClick={()=>{getCurrentLocation()}}>Current Location</button>
    </div>
    </>
  )
}

export default Search_bar
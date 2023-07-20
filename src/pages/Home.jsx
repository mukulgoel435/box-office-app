import { useState }  from 'react';
import {searchForShows} from './../api/tvmaze';
const Home = () => {

const [searchStr, setSearchStr] =  useState("");
const [apiData, setApiData] = useState(null);

const onSearchInputChange = (ev) => {

setSearchStr(ev.target.value);
};

const onSearch = async (ev) => {
  ev.preventDefault();

  const result = await searchForShows(searchStr);
setApiData(result);
};

const renderApiData = () => {
   if(apiData) {
      return apiData.map((data) => ( 
         <div key={data.show.id}>
            {data.show.name}
         </div>
      ));
}
return null;
};

 return ( 
 <div>
<form onSubmit={onSearch}>
<input type="text" value={searchStr} onChange={onSearchInputChange} />
   <button type="Submit">Search</button>

</form>
<div> { renderApiData() }</div>
    </div>
 );
};

export default Home;
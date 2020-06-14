import React from 'react'
export const Search = () => {
    return(
        <div id = "search">
            <div class = "search">
                <h2>What</h2>
                <h4>job title,company or keywords</h4>
                <span class="fa fa-search"></span>
                <input type="text" name="search" autocomplete = "off" placeholder="job title,company or keywords"></input>
            </div>
            <div class = "search">
                <h2>Where</h2>
                <h4>city or province</h4>
                <span class="fa fa-map-marker"></span>
                <input type="text" name="search" autocomplete = "off" placeholder="city or province"></input>
            </div>

            <button type="button">Find Jobs</button>
        </div>
        
       
    );
}

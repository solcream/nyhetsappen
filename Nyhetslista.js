import React, { Component } from 'react'; 
import Nyhetsartikel from'./Nyhetsartikel';

Function Nyhetslista (props) {
    return (<section>
    {props.minaArtiklar.map(function (item, index) {
        function (item, index)
            return <Nyhetsartikel
minArtikel={item} 
key={`artikel${index }`}
/>
    })}
</section>);

}

export default Nyhetslista;
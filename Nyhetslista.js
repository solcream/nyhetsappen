import React from 'react'; 
import Nyhetsartikel from  './Nyhetsartikel';

function Nyhetslista (props) {
    return ( <section>
    {props.minaArtiklar.map (
        function (item, index) {
            return <Nyhetsartikel
minArtikel = {item}
key = {`artikel${index}`} 
/>
    })}
</section>)
}

export default Nyhetslista;
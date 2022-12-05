import styled from "@emotion/styled"


const Resultados = styled.div`
 color: #ffff;
 font-family: 'Lato', sans-serif;
 display: flex;
 align-items: start;
 gap: 1rem;
 margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 16px;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 25px;
    span{
        font-weight: 700;
    }
`



const Resultado = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
  return (
    <Resultados>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} />

        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>Variacion en las ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultima Actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
        
       
    </Resultados>
  )
}

export default Resultado
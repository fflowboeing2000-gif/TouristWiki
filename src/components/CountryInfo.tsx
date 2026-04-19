// @ts-nocheck
export default function CountryInfo(props) {
  return (<>
    <div className="my-2 w-full text-center">
      <p className="text-green-800 font-medium" >{props.country.region}</p>
      <h2 className="text-xl">{props.country.name.common}</h2>
      <h3 className="text-gray-500">{props.country.name.official}</h3>
      <div className="mx-15 text-center grid grid-cols-2 mt-4 mb-4">
        <h3>Currency</h3>
        <p><span className="text-gray-400">{props.usd? "$1 = " + props.usd.toFixed(2): ""}</span>{Object.values(props.country.currencies)[0].symbol}</p>
        <h3>Capital</h3>
        <p>{props.country.capital[0]}</p>
        <h3>Language</h3>
        <p>{Object.values(props.country.languages)[0]}</p>
        
      </div>
    </div>
  </>)
}
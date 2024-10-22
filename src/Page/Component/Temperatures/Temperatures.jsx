import Variable from "../Variable/Variable";
import './Temperatures.css'
import { useEffect, useState } from "react";
function Temperatures({name, initCelsius, initFahrenheit, initKelvin}) {
    const [celsius, setCelsius] = useState(initCelsius || 0)
    const [fahrenheit, setFahrenheit] = useState(initFahrenheit || 32)
    const [kelvin, setKelvin] = useState(initKelvin || 273.15)

    useEffect(() => {
        if (initCelsius !== undefined) {
            setCelsius(initCelsius);
            setFahrenheit(cToF(initCelsius));
            setKelvin(cToK(initCelsius));
        } else if (initFahrenheit !== undefined) {
            setCelsius(fToC(initFahrenheit));
            setFahrenheit(initFahrenheit);
            setKelvin(fToK(initFahrenheit));
        } else if (initKelvin !== undefined) {
            setCelsius(kToC(initKelvin));
            setFahrenheit(kToF(initKelvin));
            setKelvin(initKelvin);
        }
    }, [initCelsius, initFahrenheit, initKelvin]);

    useEffect(() => {
        setFahrenheit(cToF(celsius));
        setKelvin(cToK(celsius));
    }, [celsius]);

    useEffect(() => {
        setCelsius(fToC(fahrenheit));
        setKelvin(fToK(fahrenheit));
    }, [fahrenheit]);

    useEffect(() => {
        setCelsius(kToC(kelvin));
        setFahrenheit(kToF(kelvin));
    }, [kelvin]);


    //functions convert between celsius, fahrenheit and kelvin
    const cToK = (c) => c + 273.15
    const cToF = (c) => c*(9/5) + 32
    const fToC = (f) => (f - 32)*(5/9)
    const fToK = (f) => cToK(fToC(f))
    const kToC = (k) => k - 273.15
    const kToF = (k) => cToF(kToC(k))

    return (
        <div className="temperatures-container">
            <h2 className="temperatures-title">{name || "Temperature"}</h2>
            <h3>
                <span className="bt" >{celsius.toFixed(2)} &deg;C</span>
                <span className="bt">{fahrenheit.toFixed(2)} &deg;F</span>
                <span className="bt">{kelvin.toFixed(2)} &deg;K</span>
            </h3>
            <div className="temperatures-variables">
                <Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
                <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
                <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
            </div>
        </div>

    )
}
export default Temperatures
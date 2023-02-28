import React, { useState } from "react";
import moment from 'moment';

function Form() {
    const [value, setValue] = useState(moment().format('DD-MM-YYYY'));


    const onChangeDate = e => {
        const newDate = moment(new Date(e.target.value)).format('DD-MM-YYYY');
        setValue(newDate);
        console.log(newDate); //value picked from date picker
    };


    const checkLabel = [1, 2, 3, 4, 5, 6];
    const [permissions, setPermissions] = useState([]);

    const handleCheck = (event) => {
        var permissions_array = [...permissions];
        if (event.target.checked) {
            permissions_array = [...permissions, event.target.value];
        } else {
            permissions_array.splice(permissions.indexOf(event.target.value), 1);
        }
        setPermissions(permissions_array);

    };



    const [selected, setSelected] = useState("Naira");
    const [selectedcryptos, setSelectedCryptos] = useState("BTC");
    const [selectedusdtnetwork, setSelectedUsdtNetwork] = useState("TRC20");


    const [amount, setAmount] = useState("");


    function handleChange(event) {
        const amountValue = event.target.value;

        setAmount(amountValue);

    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(amount);
        console.log(selected === "Crypto" ? selectedcryptos : "Naira");
        console.log(selectedcryptos === "USDT" ? selectedusdtnetwork : null);

    }

    return (
        <>
            <h1>{selected}</h1>

            <input onChange={handleChange} placeholder="Amount" autoComplete="off" type="number" value={amount} />
            <br />
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option>Naira</option>
                <option>Crypto</option>
            </select>
            <br />
            {selected === "Crypto" ? <select value={selectedcryptos} onChange={e => setSelectedCryptos(e.target.value)}>
                <option>BTC</option>
                <option>USDT</option>
                <option>Ethereum</option>
            </select> : null}


            {selectedcryptos === "USDT" ? <select value={selectedusdtnetwork} onChange={e => setSelectedUsdtNetwork(e.target.value)}>
                <option>TRC20</option>
                <option>ERC20</option>
            </select> : null}

            <br />
            <input type="submit" value="Deposit" onClick={handleSubmit} />

            <br />

            {checkLabel.map(checNumb =>
                <>
                    <input
                        type='checkbox'
                        name="permission"
                        id='permission'

                        value={checNumb}
                        onChange={handleCheck}

                    />
                    <span>{checNumb}</span>
                    <br />
                </>)}

            <br />

            {permissions.map(checValue =>
                <h1>{checValue}</h1>)}

            <br />

            <h1>{value}</h1>
            {/* <h3>{new Date()}</h3> */}
            {/* {moment(value).format('DD-MM-YYYY')} */}
            <input
                type="date"
                value={value}
                placeholder="dd-mm-yyyy"
                onChange={onChangeDate}
                min="01-01-2015"
            />

        </>
    );
}

export default Form;
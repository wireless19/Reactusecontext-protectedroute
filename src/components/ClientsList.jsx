import { useContext, useEffect, useState } from "react";
import { ClientsContext } from "./ClientsContext";
import { Link } from 'react-router-dom';

const taxesList = [
    {
        taxId: 1,
        taxName: "Withholding tax",
        taxCode: "WHT001",
        taxDescription: "Incoming tax on Savings int...",
        tax: "%",
        taxState: "Approved",
        taxUpdatedOn: new Date()
    },

    {
        taxId: 2,
        taxName: "Value Added Tax",
        taxCode: "VAT001",
        taxDescription: "Description",
        tax: "4 NGN",
        taxState: "Active",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 3,
        taxName: "Amortization Tax",
        taxCode: "AMF001",
        taxDescription: "Description",
        tax: "2 %",
        taxState: "Approved",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 4,
        taxName: "Int. Tax",
        taxCode: "INT001",
        taxDescription: "Description",
        tax: "Smallest of: 100 NGN and..",
        taxState: "Inactive",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 5,
        taxName: "Tax 5",
        taxCode: "CODE",
        taxDescription: "Description",
        tax: "tax",
        taxState: "Active",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 6,
        taxName: "Tax 6",
        taxCode: "CODE",
        taxDescription: "Description",
        tax: "tax",
        taxState: "Inactive",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 7,
        taxName: "Tax 7",
        taxCode: "CODE",
        taxDescription: "Description",
        tax: "tax",
        taxState: "Active",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 8,
        taxName: "Tax 8",
        taxCode: "CODE",
        taxDescription: "Description",
        tax: "tax",
        taxState: "Inactive",
        taxUpdatedOn: new Date()
    },
    {
        taxId: 9,
        taxName: "Tax 9",
        taxCode: "CODE 9",
        taxDescription: "Description",
        tax: "tax",
        taxState: "Approved",
        taxUpdatedOn: new Date()
    }
];

const state = ["Active", "Inactive", "Approved"];


function ClientsList() {

    const [clients] = useContext(ClientsContext);

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [showFilter, setShowFilter] = useState(false);


    // filtering with api calls
    const [active, setActive] = useState("")
    const [inactive, setInactive] = useState("")
    const [approved, setApproved] = useState("")


    const filteredState = taxesList.filter((reqs) => {
        return isCheck.length > 0
            ? isCheck.some((filterTag) => reqs.taxState.includes(filterTag))
            : taxesList;
    });

    const handleClick = (e) => {
        // if (e.target.checked) {
        //   setIsCheck([...isCheck, e.target.name]);
        // } else {
        //   setIsCheck(isCheck.filter((filterTag) => filterTag !== e.target.name));
        // }

        const { name, checked } = e.target;
        setIsCheck([...isCheck, name]);
        if (isCheck.length > 1) {
            setIsCheckAll(true);
        }

        if (!checked) {
            setIsCheckAll(false);
            setActive("");
            setInactive("");
            setApproved("");
            setIsCheck(isCheck.filter((item) => item !== name));
        }

        // const { name, checked } = e.target;
        // setIsCheck([...isCheck, name]);
        // if (!checked) {
        //   setIsCheck(isCheck.filter((item) => item !== name));
        // }
    };

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setActive("");
        setInactive("");
        setApproved("");
        setIsCheck(state.map((li) => li));
        if (isCheckAll) {
            setIsCheck([]);
        }

    };

    function showCheckBox() {
        setShowFilter(!showFilter);
    }

    useEffect(() => {

        isCheck.map((state) => {
            if (state === "Active") {
                setActive(state);
            }
            if (state === "Inactive") {
                setInactive(state);
            }
            if (state === "Approved") {
                setApproved(state);
            }
            return state;
        });

    }, [isCheck, active, inactive, approved]);

    useEffect(() => {
        console.log(active, inactive, approved);
    }, [active, inactive, approved]);

    return (
        <>
            <div className="container">

                <h1>Lists of Clients</h1>
                {clients.map(eachClient => {
                    return (
                        <Link key={eachClient.name} to="/client">
                            <div>
                                <h2>{eachClient.name}</h2>
                            </div>
                        </Link>
                    )
                })}

            </div>

            <div className="App">
                <button type="button" onClick={showCheckBox}>
                    Show filter
                </button>
                {showFilter && (
                    <div>
                        <input
                            type="checkbox"
                            name="selectAll"
                            // id="selectAll"
                            onChange={handleSelectAll}
                            checked={isCheckAll}
                        />
                        Select all
                    </div>
                )}

                {showFilter &&
                    state.map((state) => {
                        return (
                            <div key={state}>
                                <input
                                    // id={state.id}
                                    name={state}
                                    type="checkbox"
                                    onChange={handleClick}
                                    checked={isCheck.includes(state)}
                                />
                                {state}
                            </div>
                        );
                    })}

                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* filteredState */}
                        {taxesList.map((tax) => {
                            return (
                                <tr key={tax.taxId}>
                                    <td>{tax.taxName}</td>
                                    <td>{tax.taxCode}</td>
                                    <td>{tax.taxState}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );

}

export default ClientsList;
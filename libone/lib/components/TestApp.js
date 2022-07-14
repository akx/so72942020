import {useEffect, useState} from 'react';

 const  TestApp = () => {
   

    const [dropdown, setDropdown] = useState([]);
    let dropdown_data = ['Item 1', 'Item 2', 'Item 3'];
    useEffect(() => {
        console.log("data from plugin")
        loadData();
    },[]);

    
    

   const loadData = () => {
        console.log("Data from load data from plugin")
        setDropdown(dropdown_data);
    }
    return (
        <div className="dropdown">
            <select> {
                dropdown.map((item, index) => (
                    <option key={index}>
                        {item}</option>
                ))
            } </select>
        </div>
    )
}

export {TestApp};

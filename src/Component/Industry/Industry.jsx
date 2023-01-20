import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';

function Industry(prop) {
    const [industryModel, setIndustryModel] = useState({});
    useEffect(() => {
        const industryList = async () => {
            try {
                const res = await axiosClient.get("GetAllIndustry")
                setIndustryModel({ data: res })
            } catch (error) {
                console.log(error)
            }
        }
        industryList(); 

    }, []);


    return (<select className='input-form mb-2' onChange={(e) => prop.onChangeIndustry(e.target.value)}  >
        <option value={0} key={0}>Select Industry</option>
        {industryModel && industryModel.data && (
            industryModel.data.map(item => (
                <option value={item.id} key={item.id} >
                    {item.name} 
                </option> )
            )
        )
        }
    </select>);
}


export default Industry;
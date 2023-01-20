import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function IndustryListView() {

    const navigate = useNavigate();
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

    const gotToInventory = (id) => {

        navigate('/Inventory', { state: { industryId: id } });
    }
    return (<ul className='cateList' >
        {industryModel && industryModel.data && (
            industryModel.data.map(item => (
                <li key={item.id}  >
                    <a onClick={() => { gotToInventory(item.id) }}  >
                        {item.name} ({item.itemCount})</a>
                </li>
            )
            )
        )
        }

    </ul>);
}


export default IndustryListView;
import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';

function Type(prop) {

    const [typesModel, setTypesModel] = useState({});


    useEffect(() => {
        const categoryList = async () => {
            try {
                const res = await axiosClient.get("GetAllType")
                setTypesModel({ data: res })

            } catch (error) {
                console.log(error)
            }
        }

        categoryList();

    }, []);


    return (<select className='input-form mb-2' onChange={ (e)=> prop.onChangeType(e.target.value) } >

<option value={0} key={0}>Select Type</option>

        { typesModel && typesModel.data && (
            typesModel.data.map(item => (
                <option value={item.id}  key={item.id} >
                    {item.name}

                </option>
            )
            )
            )
        }

    </select>);
}


export default Type;
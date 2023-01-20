import * as appConstants from '../../constants'
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axiosClient from '../../axiosClient';


function Category(prop) {

    const [categoryModel, setcategoryModel] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const categoryList = async () => {
            try {
                const res = await axiosClient.get("GetAllCategory")
                setcategoryModel({ data: res })

            } catch (error) {
                console.log(error)
            }
        }

        categoryList();

    }, []);

    return (
        <div>
            {(
                  () => {
                        return (
                        <select className='input-form mb-2'  onChange={ (e)=> prop.onChangeCategory(e.target.value) } >
                                  <option value={0} key={0}>Select Category</option>

                            {categoryModel && categoryModel.data && (
                                categoryModel.data.map(item => (
                                    <option value={item.id}  key={item.id} >
                                        {item.name}
                                    </option>
                                )) )
                            }
                        </select>
                        );
                    }
            )()}
       
</div>
    );

   
}




export default Category;
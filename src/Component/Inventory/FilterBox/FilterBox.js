import './FilterBox.css';
import React,{useRef} from 'react';
import { Accordion, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { setCategory,setPriceRange,setItemLocation,setItemCondition } from "../../Slices/FilterSlice";
import { useDispatch,useSelector } from "react-redux";
import _ from 'lodash';

function FilterBox(props) {

    const dispatch = useDispatch();
    const filterState = useSelector((state) => state.filter);
    const formPriceRange = useRef(null)
    const clickCategory = (item) => {
        dispatch(setCategory(item));

    }

   const handlePriceRange = () => {
    const form = formPriceRange.current;
    var min = form['min'].value;
    var max = form['max'].value;
    var priceRange={
        minPrice:Number(min),
        maxPrice:Number(max)
    }

    if(priceRange.minPrice > -1 && priceRange.maxPrice > priceRange.minPrice)
    dispatch(setPriceRange(priceRange));
   }

  const handleLocationChange = (val) =>{
     dispatch(setItemLocation(val));
       
  }

  const handleLocationToggle = (val) =>{

    var index = _.findIndex(filterState.locations, function (o) { return o == val; });
    if (index  > -1) {
        return true;
    }
       
    else {
        return false;
    }
     
}
    const handleConditionChange = (val) =>{
        dispatch(setItemCondition(val));
          
     }
   
     const handleConditionToggle = (val) =>{
   
       var index = _.findIndex(filterState.setItemCondition, function (o) { return o == val; });
       if (index  > -1) {
           return true;
       }
          
       else {
           return false;
       }
    
    }

 
    return (
        <>
            <Accordion defaultActiveKey="0" className='filter-accordion'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>All Categories</Accordion.Header>
                    <Accordion.Body>
                        <ul className='categories-list'>
                            {props.filtersResult && props.filtersResult.categoryList &&
                                (props.filtersResult.categoryList.map(item => (
                                    <li >
                                        <a onClick={() => { clickCategory(item) }}  >
                                            {item.name}
                                            <span>({item.itemCount})</span></a></li>
                                )))

                            }

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Price</Accordion.Header>
                    <Accordion.Body>
                        <form ref={formPriceRange}>
                        <div className='price-list'>
                            <div className='price-list-wrap'>
                                <input placeholder='$ Min' name={'min'} />
                                <span>To</span>
                                <input placeholder='$ Max' name={'max'} />
                                <a onClick={handlePriceRange} style={{color:'white'}} ><Icon icon="material-symbols:arrow-right-alt" /></a>
                            </div>
                        </div>
                        </form>
                       
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="2">
                    <Accordion.Header>Machine Type</Accordion.Header>
                    <Accordion.Body>
                        <ul className='filter-list-item'>
                            <li>
                                <label htmlFor="machine" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="machine" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Machine Type</p>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="machine-01" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="machine-01" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Machine Type 02</p>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="machine-02" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="machine-02" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Machine Type 03</p>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="machine-03" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="machine-03" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Machine Type 04</p>
                                </label>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item> */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body>
                        <ul className='filter-list-item'>

                            {props.filtersResult && props.filtersResult.brandNameList &&
                                (props.filtersResult.brandNameList.map(item => (

                                    <li>
                                        <label htmlFor="brand" className="black-custom-checkbox">
                                            <input type="checkbox" name={item} value={item} id={item}  />
                                            <span>
                                                <Icon icon="charm:tick" />
                                            </span>
                                            <p>{item}</p>
                                        </label>
                                    </li>

                                )))

                            }

                            {/* <li>
                                <label htmlFor="brand-01" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="brand-01" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Brand 02</p>
                                </label>
                            </li> */}

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Condition</Accordion.Header>
                    <Accordion.Body>
                        <ul className='filter-list-item'>

                            {props.filtersResult && props.filtersResult.conditionList &&
                                (props.filtersResult.conditionList.map(condition => (
                                    <li>

                                        <label htmlFor="Condition" className="black-custom-checkbox">
                                        <input type="checkbox" 
                                               name={condition} 
                                               value={condition} 
                                               id={condition} 
                                               checked={handleConditionToggle(condition)}
                                               onClick={() => handleConditionChange(condition)}  />
                                            <span>
                                                <Icon icon="charm:tick" />
                                            </span>
                                            <p>{condition}</p>
                                        </label>
                                    </li>

                                )))

                            }


                            {/* <li>
                                <label htmlFor="Condition-01" className="black-custom-checkbox">
                                    <input type="checkbox" name="" value="" id="Condition-01" />
                                    <span>
                                        <Icon icon="charm:tick" />
                                    </span>
                                    <p>Condition 02</p>
                                </label>
                            </li> */}

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Item Location</Accordion.Header>
                    <Accordion.Body>
                        <ul className='filter-list-item'>

                            {props.filtersResult && props.filtersResult.locations &&
                                (props.filtersResult.locations.map(item => (


                                    <li>
                                        <label htmlFor="location" className="black-custom-checkbox">
                                            <input type="checkbox" 
                                               name={item} 
                                               value={item} 
                                               id={item} 
                                               checked={handleLocationToggle(item)}
                                               onClick={() => handleLocationChange(item)}  />
                                            <span>
                                                <Icon icon="charm:tick" />
                                            </span>
                                            <p>{item}</p>
                                        </label>
                                    </li>

                                )))

                            }

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    );
}

export default FilterBox;

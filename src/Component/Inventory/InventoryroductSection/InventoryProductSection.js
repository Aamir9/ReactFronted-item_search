import { Icon } from "@iconify/react";
import { Col, Container, Row } from "react-bootstrap";
import { Link,useLocation } from "react-router-dom";
import "./InventoryroductSection.css";
import React, { useCallback, useEffect, useState, useRef } from "react";
import Category from "../../Category/Category";
import Industry from "../../Industry/Industry";
import Type from "../../Type/Type";
import axiosClient from "../../../axiosClient";
import ItemPagenation from "../../../Pagination/ItemPagination";
import FilterBox from "../FilterBox/FilterBox"
import "./InventoryroductSection.css"
import InventoryProduct from "../InventoryProduct/InventoryProduct";
import uuid from 'react-uuid';
import { categoryRemove, clearFilters, removeEndPrice, removeStartPrice, setItemLocation, setItemCondition } from "../../Slices/FilterSlice";
import { useDispatch, useSelector } from "react-redux";

function InventoryPoductSection(props) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const form1 = useRef(null)
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const location = useLocation();


  var payload = {
    PageNumber: 1,
    pageSize: 10,
    IsGlobelSearch: false,
    isleftFilterSearch: false
  }

  useEffect(() => {
    listViewProps();
    HomePageSearchProps();
    fetchData(page);


  }, []);
  function HomePageSearchProps() {
    if (props.payload && props.payload.IsGlobelSearch) {
      payload = props.payload;
    }
  }
  function listViewProps() {

   
    if (location.state && location.state.industryId &&  location.state.industryId > 0) {
      payload.IndustryId = Number(location.state.industryId);
      payload.IsGlobelSearch = true;
    }
  }
  const handleChangePage = useCallback((page) => {
    setPage(page);
    fetchData(page);
  }, []);

  const handleChangeIndustry = (id) => {
    if (Number(id) > 0) {
      payload.IndustryId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }

  const handleChangeCategory = (id) => {
    if (Number(id) > 0) {
      payload.CategoryId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }

  useEffect(() => {

 
    console.log("filters", filterState)
    if (filterState.category.id > 0) {
      payload.isleftFilterSearch = true;
      payload.IsGlobelSearch = false;
      payload.CategoryId = Number(filterState.category.id);
    }

    if (filterState.priceStartRange > -1) {
      payload.isleftFilterSearch = true;
      payload.IsGlobelSearch = false;
      payload.priceStartRange = filterState.priceStartRange;
    }

    if (filterState.priceEndRange > filterState.priceStartRange) {

      payload.isleftFilterSearch = true;
      payload.IsGlobelSearch = false;
      payload.priceEndRange = filterState.priceEndRange;

    }

    if (filterState.locations.length > 0) {

      payload.isleftFilterSearch = true;
      payload.IsGlobelSearch = false;
      payload.locations = filterState.locations;

    }

    if (filterState.conditionList.length > 0) {

      payload.isleftFilterSearch = true;
      payload.IsGlobelSearch = false;
      payload.conditionList = filterState.conditionList;

    }
    if (payload.isleftFilterSearch = true) {
         GetPagedItems();
    }



  }, [useDispatch, filterState]);


  const handleChangeType = (id) => {
    if (Number(id) > 0) {
      payload.TypeId = Number(id);
      payload.IsGlobelSearch = true;
    }
  }


  const fetchData = async (p) => {

    const form = form1.current;
    var queryText = form['searchBox'].value;
    if (queryText != "" && queryText != null) {
      payload.TextSearch = queryText;
      payload.IsGlobelSearch = true;
    }
    payload.PageNumber = p;

    await GetPagedItems();
  };

  const handleSearchClickEvent = () => {
    if (payload.IsGlobelSearch || payload.isleftFilterSearch == false) {
    //  dispatch(clearFilters())
    }
    setPage(1);
    fetchData(page);
  }

  const handelRemoveLocation = (val) => {

    dispatch(setItemLocation(val));
  }

  const handelRemoveCondition = (val) => {

    dispatch(setItemCondition(val));
  }

  return (
    <div className="HomeProductSection">
      <Container>
        <Row className="HomeBanner-row">
          <Col lg={7}>
            <Row>
              <Col lg={4}>

                <Industry key={uuid() + "ind"} onChangeIndustry={handleChangeIndustry} ></Industry>
              </Col>
              <Col lg={4}>
                <Category key={uuid() + "cat"} onChangeCategory={handleChangeCategory}></Category>
              </Col>
              <Col lg={4}>
                <Type key={uuid() + "type"} onChangeType={handleChangeType}></Type>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <form ref={form1}>
              <div className="searchbar mb-2">
                <input placeholder="Search equipment and solutions" name={'searchBox'} />
                <span><Icon icon="uil:search" /></span>
                <button className="btn btn-blue" type="button" onClick={handleSearchClickEvent} >
                  Search
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <div className="product-wrap ProductWrap">
          <div className="product-sidebar product-sidebar-height inventoryPageSidebar">
            <h5>Search Result Filters</h5>
            {data && data.filtersResult && (
              <FilterBox filtersResult={data.filtersResult} />

            )}
          </div>
          <div className='product-header-wrap'>
            <h2>Search Result Filters</h2>
            {/* <Link to="#" onClick={() => this.doToggleSidebar()}><Icon icon="material-symbols:filter-list-rounded" /></Link> */}
            <Link to="#" ><Icon icon="material-symbols:filter-list-rounded" /></Link>
          </div>
          <div className="product-main-list">
            <ul className="filter-tags">
              {filterState && filterState.category.id > 0 && (
                <li><span>{filterState.category.name} </span><a ><Icon icon="mdi:close" onClick={() => { dispatch(categoryRemove()) }} /></a></li>

              )}

              {filterState.priceStartRange > -1 && (
                <li><span> Min Price {filterState.priceStartRange} </span><a ><Icon icon="mdi:close" onClick={() => { dispatch(removeStartPrice()) }} /></a></li>

              )}

              {filterState.priceEndRange > -1 && (
                <li><span>Max Price {filterState.priceEndRange} </span><a ><Icon icon="mdi:close" onClick={() => { dispatch(removeEndPrice()) }} /></a></li>

              )}

              {filterState.locations && filterState.locations.map((loc) => {

                return <li><span>  {loc} </span><a ><Icon icon="mdi:close" onClick={() => { dispatch(handelRemoveLocation(loc)) }} /></a></li>
              }
              )}


              {filterState.conditionList && filterState.conditionList.map((con) => {

              return <li><span>  {con} </span><a ><Icon icon="mdi:close" onClick={() => { dispatch(handelRemoveCondition(con)) }} /></a></li>
              }
              )}


            </ul>
            <div>
              {(() => {
                if (data && data.items && data.items.length > 0) {
                  return data.items.map((product) => (
                    <div className="my-3">
                      <InventoryProduct key={product.id} productDetail={product} />
                    </div>

                  ))
                }
                else {
                  return <b>Record Not Found... ! </b>
                }

              })()}

            </div>

            {data.totalPages && data.totalPages > 1 && (
              <ItemPagenation
                key={uuid() + "item"}
                total={data.totalPages}
                current={page}
                onChangePage={handleChangePage}
              >
              </ItemPagenation>
            )}

            {/* <Pagination>
              <Pagination.Item>
                <Icon icon="akar-icons:chevron-left" />
              </Pagination.Item>
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>
                <Icon icon="akar-icons:chevron-right" />
              </Pagination.Item>
            </Pagination> */}
          </div>
        </div>
      </Container>
    </div>
  );

  async function GetPagedItems() {
    try {
      const res = await axiosClient.post("GetPagedItems", payload
      );

      console.log("items Response data ===>>>>>", res);
      setData({ items: res.data, totalPages: res.totalPages, filtersResult: res.filtersResultDto });

    } catch (error) {
      console.log(error);
    }
  }
}

export default InventoryPoductSection;

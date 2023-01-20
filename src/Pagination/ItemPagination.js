import { Pagination } from "react-bootstrap";
import './ItemPagination.css';
import { Icon } from '@iconify/react';


function ItemPagenation(prop) {

    debugger;
    let limit = 3;
    let pageRange = limit;
    if (prop.pageLimitIndex > 1) {
        pageRange = limit * Number(prop.pageLimitIndex);
    }

    let items = [];
    if (prop.current > 0) {

        items.push(<Pagination.Item key={0} onClick={() => prop.onChangePage(prop.current - 1)} >
            <Icon key="pLeft" icon="akar-icons:chevron-left" />
        </Pagination.Item>)
    }
    if (prop.current > pageRange) {

        let i = prop.pageLimitIndex + 1;
        prop.onPageLimitIndex(i);
        pageRange = limit * i;
    }

    let initial = 1;
    if (pageRange != limit) {
        initial = pageRange - limit;
    }

    if (prop.current < initial && prop.current > 0) {

        let i = prop.pageLimitIndex - 1;
        prop.onPageLimitIndex(i);
        pageRange = limit * i;
    }

    for (let page = 1; page <= prop.total; page++) {

        if (page >= initial && page <= pageRange) {
            items.push(
                <Pagination.Item key={page} data-page={page} active={page === prop.current}
                    onClick={() => prop.onChangePage(page)}>
                    {page}
                </Pagination.Item>
            )
        }
    }

    items.push(
        <Pagination.Ellipsis key={prop.total} />
    )


    if (prop.current < prop.total) {

        items.push(
            <Pagination.Item key={prop.current + 'item'} onClick={() => prop.onChangePage(prop.current + 1)} >
                <Icon key="pRight" icon="akar-icons:chevron-right" /></Pagination.Item>)
    }
    return (<Pagination key="inventorypaged">{items}</Pagination>);
}

export default ItemPagenation;
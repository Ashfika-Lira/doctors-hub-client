import React from 'react';
import {render} from '@testing-library/react'
import { Pagination } from 'react-bootstrap';
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div className='text-center'>

    <Pagination>{items}</Pagination>
    
  </div>
);

render(paginationBasic);

export default Pagination;
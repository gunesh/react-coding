import React from 'react';
import './style.css';
import { split } from 'shlex';
import Input from './Components/Autosuggest/Input';
import Autocomplete from './Components/Autosuggest/Test';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1> */}
      <p>Start editing to see some magic happen :)</p>
      {/*   {console.log(split('ls -al / "dsfsfsf fgfddgg"'))} */}
      {/* <Input placeholder="Enter Value" /> */}
      <Autocomplete
        options={[
          {
            id: 9,
            label: 'Ad Type',
            type: 'string',
            value: 'upper(print_ad_type_n)',
          },
          {
            id: 10,
            label: 'Category',
            type: 'string',
            value: 'category_name',
          },
          {
            id: 11,
            label: 'Creative ID',
            type: 'string',
            value: 'kantar_creative_id',
          },
          {
            id: 12,
            label: 'Headline',
            type: 'string',
            value: 'upper(headline_n)',
          },
          {
            id: 13,
            label: 'Keyword',
            type: 'string',
            value: 'upper(_UNNEST__BSTART_keywords_BCLOSE__SPACE_keyword)',
          },
          {
            id: 14,
            label: 'Market',
            type: 'string',
            value: 'upper(market)',
          },
          {
            id: 15,
            label: 'Parent',
            type: 'string',
            value: 'parent_product_name',
          },
          {
            id: 16,
            label: 'Product',
            type: 'string',
            value: 'primary_product_name',
          },
          {
            id: 17,
            label: 'Product ID',
            type: 'string',
            value: 'primary_product_id',
          },
          {
            id: 18,
            label: 'Publication Name',
            type: 'string',
            value: 'upper(publication_name)',
          },
        ]}
      />
    </div>
  );
}

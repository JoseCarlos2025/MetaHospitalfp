import React from 'react';
import './basiclist.css';

const BasicList = ({ items, renderRow }) => {
  return (
    <table className='table-component'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>{renderRow(item)}</tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No hay elementos para mostrar</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default BasicList;

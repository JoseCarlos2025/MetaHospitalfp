import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './basiclist.css';

const BasicList = ({ items, renderRow, Headlines, onDelete, onEdit }) => {
  return (
    <div className='table-component'>
      <table>
        <thead>
          <tr>
            {Headlines.map((headline, index) => (
              <th key={index}>{headline}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                {renderRow(item)}
                <td>
                  {onEdit && <EditOutlined style={{ marginRight: 8 }} onClick={() => onEdit(item.id)} />}
                  <DeleteOutlined onClick={() => onDelete(item.id)} /> 
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={Headlines.length + 1}>No hay elementos para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BasicList;



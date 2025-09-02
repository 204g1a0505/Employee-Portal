import React from 'react';

const Pagination = ({employeesPerPage, totalEmployees, paginate, currentPage}) => {
    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalEmployees / employeesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map((number) => (
                <button key={number} onClick={()=>paginate(number)}
                    className={currentPage === number ? 'active' : ''}
                >{number}</button>
            ))}
        </div>
    )

}

export default Pagination;
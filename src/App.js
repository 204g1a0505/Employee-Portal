import React from 'react';
import EmployeeCard from './EmployeeCard';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import useEmployeeLogic from './useEmployeeLogic';
import "./App.css"

const App = () => {
  const {currentEmployees,filteredEmployees,employeesPerPage,handleSearch,paginate,currentPage} = useEmployeeLogic();

  return (
    <div className="container">
      <h1>Employee Portal Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="card-grid">
        {currentEmployees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
      <Pagination 
      employeesPerPage={employeesPerPage}
      totalEmployees={filteredEmployees.length}
      paginate={paginate}
      currentPage={currentPage}/>
    </div>
  )
};
export default App;
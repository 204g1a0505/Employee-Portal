import React, {useState, useEffect} from 'react';
import employeesData from './employees.json';

const useEmployeeLogic = () => {
    const [employees,setEmployees] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");
    const [currentPage,setCurrentPage] = useState(1);
    const employeesPerPage = 6;

    useEffect(() => {
        setEmployees(employeesData);
    },[]);

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
        setCurrentPage(1);
    };

    const filteredEmployees = employees.filter((emp) => 
        emp.name.toLowerCase().includes(searchTerm)
    );

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee,indexOfLastEmployee)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return {
        currentEmployees,
        filteredEmployees,
        employeesPerPage,
        handleSearch,
        paginate,
        currentPage,
    }
}

export default useEmployeeLogic;
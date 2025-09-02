import React from 'react';

const EmployeeCard = ({employee}) => {
    return (
        <div className="card">
            <h3>{employee.name}</h3>
            <p><strong>Email : </strong>{employee.email}</p>
            <p><strong>DOB : </strong>{employee.dob}</p>
            <p><strong>Primary Skill : </strong>{employee.primarySkill}</p>
        </div>
    );
}

export default EmployeeCard;
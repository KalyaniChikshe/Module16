import React from "react"
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function EmployeeFilter () {
    const navigate = useNavigate()
    const [ searchParams ] = useSearchParams()
    return (
        <div>
            Currently Employed: 
            {' '}
            <select 
                value={searchParams.get('employed') || ''}
                onChange={(e) => navigate(
                e.target.value ? `/employees?employed=${e.target.value}` : `/employees`
                )}>
                <option value="">All</option>
                <option value="true">Employed</option>
                <option value="false">Not Employed</option>
            </select>
            {/* <Link to={{pathname: '/employees'}}>All Employees</Link>
            <Separator />
            <Link to={{pathname: '/employees', search: '?employed=true'}}>Employed</Link>
            <Separator />
            <Link to={{pathname: '/employees', search: '?employed=false'}}>Not Employed</Link> */}
        </div>
    )
}
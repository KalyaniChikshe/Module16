import React from "react"
import { useParams } from 'react-router-dom'

export default class EmployeeEdit extends React.Component{
    constructor(){
        super()
        this.state = { employee: [] }   
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.loadData()
    }

    loadData(){
        const id = window.location.pathname.split('/')[2]
        fetch(`/api/employees/${id}`)
        .then(response => response.json())
        .then(data => {
            data.employee.dateHired = new Date(data.employee.dateHired)
            this.setState({employee: data.employee})
        })
        .catch(err => {console.error(err)})
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('You submitted')
    }

    render() {
        return(
            <form name="employeeUpdate" onSubmit={this.handleSubmit}>
                <h1>Edit {this.state.employee.name}</h1>
                ID:<br/>
                <input type="text" name="id" readOnly="readOnly" defaultValue={this.state.employee._id}/><br/>
                Name:<br/>
                <input type="text" name="name" defaultValue={this.state.employee.name}/><br/>
                Extension:<br/>
                <input type="text" name="extension" defaultValue={this.state.employee.extension}/><br/>
                Email:<br/>
                <input type="text" name="email" defaultValue={this.state.employee.email}/><br/>
                Title:<br/>
                <input type="text" name="title" defaultValue={this.state.employee.title}/><br/>
                Date Hired:<br/>
                <input type="text" name="dateHired" readOnly="readOnly" defaultValue={this.state.employee.dateHired}/><br/>
                Currently Employed?:<br/>
                <input type="checkbox" name="currentlyEmployed" defaultChecked={this.state.employee.currentlyEmployed}/><br/>
                <br/><br/>
                <input type="submit" value="Update" />
                
            </form>
        )
    }
}

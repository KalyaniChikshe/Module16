import Employee from "../Models/Employee.js"

const getAllEmployees = async(req, res) => {
    try {
        const employees = await Employee.find({})
        res.status(200 ).json({employees , count:employees.length})
        //res.status(200 ).json({employees})
        //res.send('Get all employees')
    } catch (err){
    res.status(500).json({msg:err})
    }
}
const getEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ msg: 'Employee not found' });
      }
      res.status(200).json({ employee });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server error' });
    }
}
const createEmployee = async(req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({employee})
        // res.send('Create a new employee')
        } catch (error) {
            res.status(500).json({msg:err})
        }
}
const updateEmployee = (req, res) => {
    res.send('Update an existing employee')
}
const deleteEmployee = async (req, res) => {
    // res.send('Delete an employee')
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id)
        if (!employee) {
          return res.status(404).json({ msg: 'Employee not found' })
        }
        res.status(200).json({ msg: 'Employee deleted successfully' })
      } catch (err) {
        console.error(err)
        res.status(500).json({ msg: 'Server error' })
      }
}
export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
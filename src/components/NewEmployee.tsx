import { ChangeEvent, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmployee } from "../interface/IEMployee";
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
// import service
import { CreateEmployee } from "../services/Employee.service";

const initialEmp = {
  nombre: "",
  correo: "",
  sueldo: 0,
};

export function NewEmployee() {
  const [employee, setEmployee] = useState<IEmployee>(initialEmp);
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setEmployee({
      ...employee,
      [inputName]: inputValue,
    });
  };

  const save = async () => {
    try {
      await CreateEmployee(employee);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while creating the employee",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const goBack = async () => {
    navigate("/");
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="bg-primary text-white">
        <h3 className="mb-0">User Information</h3>
      </CardHeader>
      <CardBody>
        <Row className="g-3">
          <Col md={6}>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="correo"
                placeholder="Enter email"
                type="email"
                onChange={onChange}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup floating>
              <Input
                id="exampleName"
                name="nombre"
                placeholder="Enter name"
                type="text"
                onChange={onChange}
              />
              <Label for="exampleName">Name</Label>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup floating>
              <Input
                id="salary"
                name="sueldo"
                placeholder="Enter salary"
                type="number"
                onChange={onChange}
              />
              <Label for="salary">Salary</Label>
            </FormGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
          <Button color="secondary" onClick={goBack} className="me-2">
            Go back
          </Button>
          <Button color="primary" onClick={save}>
            Save
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

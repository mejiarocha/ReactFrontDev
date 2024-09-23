// import axios
import axios from "axios";
import { appsettings } from "../settings/appsettings";

const base = appsettings.apiBaseUrl;

export const CreateEmployee = async (e: any) => {
  try {
    console.log("e", e);
    const response = await axios.post(`${base}/Empleado/Create`, e);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const EditEmploye = async (e: any) => {
  try {
    console.log("e", e.idEmpleado);
    const response = await axios.put(
      `${base}/Empleado/Edit/${e.idEmpleado}`,
      e
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteById = async (id: any) => {
  try {
    const response = await axios.delete(`${base}/Empleado/Delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllEmployees = async () => {
  try {
    const response = await axios.get(`${base}/Empleado/list`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id: string) => {
  try {
    const response = await axios.get(`${base}/Empleado/Get/${id}`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

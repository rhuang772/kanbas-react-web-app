import React, { useState, useEffect } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaAngleDoubleRight } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule, setModules } from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client"
function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        client.findModulesForCourse(courseId)
          .then((modules) =>
            dispatch(setModules(modules))
        );
      }, [courseId]);    
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    const handleAddModule = () => {
        client.createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };
    
      const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
          dispatch(deleteModule(moduleId));
        });
      };
    
      const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    
    
    return (
        <div className="col-md-8">
            <div className="text-end">
                <button type="button">Collapse All</button>&nbsp;
                <button type="button">View Progress</button>&nbsp;
                <select>
                    <option value="PUBLISH ALL">Publish All</option>
                </select>&nbsp;
                <button className="btn btn-danger" type="button"><FaPlus />&nbsp;
                    Module</button>
            </div>
            <li className="list-group-item">
                <input style={{ width: '20%' }} value={module.name}
                   onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                  }
                />&nbsp;
                <button className="btn btn-success" onClick={handleAddModule}>Add</button>&nbsp;
                <button className="btn btn-primary" onClick={handleUpdateModule}>Update</button>
            </li>
            <textarea style={{ width: '36%' }} value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    }/>
            <ul className="list-group wd-modules">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item"
                            onClick={() => setSelectedModule(module)}>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaAngleDoubleRight className="me-2" />
                                {module.description}
                                <span className="float-end">
                                    <button className="btn btn-danger"
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>&nbsp;
                                    <button className="btn btn-success"
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>&nbsp;
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            {selectedModule?._id === module._id && (
                                <ul className="list-group">
                                    {module.lessons?.map((lesson: any, index: number) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;


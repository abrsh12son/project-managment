/* eslint-disable react/prop-types */
import NoProject from '../assets/noProject.jpg'
import Button from './Button';
const NoProjectSelected = ({onAddProject}) => {
    return (
        <div className="flex flex-col w-2/3 items-center gap-6 mt-24">
            <img src={NoProject} alt="project Not selected"
            className='object-contain w-24 text-center'/>
            <h2 className='text-2xl p-2 font-black'>No project Selected</h2>
            <p className='text-xl'>Please select Project or Add a new one</p>
            <Button onClick={onAddProject}
            >Create New Project</Button>
        </div>
    );
}

export default NoProjectSelected;

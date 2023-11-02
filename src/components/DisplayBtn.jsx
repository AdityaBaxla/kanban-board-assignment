import {LuSettings2} from  'react-icons/lu'
import {BiChevronDown} from 'react-icons/bi'
import '../css/DisplayBtn.css'

const DisplayBtn = () => {
    return (
        < div className="display-btn">
            <button><LuSettings2/> Display <BiChevronDown/></button></div>
    )
}

export default DisplayBtn;
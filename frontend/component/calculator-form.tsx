import OperationTypeDropDown from "./operation-dropdown"

interface CurrentUserProps {
    currentUser?: { email: string }
}

const CalculatorForm: React.FC<CurrentUserProps> = ({ currentUser }) => {

    const onChange = () => {
        
    }


    return (
            <div className="flex-col py-20 ">
                <div className="mt-10">
                    <label  className="block text-sm font-medium leading-6 text-gray-900 ">First Value</label>
                    <div className="relative mt-15 rounded-md shadow-sm">
                        <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" />
                    </div>
                </div>
                
            <div className="mt-10">
                    <label  className="block text-sm font-medium leading-6 text-gray-900 ">Second Value</label>
                    <div className="relative mt-15 rounded-md shadow-sm">
                        <input type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" />
                    </div>
                </div>
                <OperationTypeDropDown onChange={onChange}/>
            </div>
            )
}

export default CalculatorForm

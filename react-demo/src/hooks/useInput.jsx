import {useState} from 'react'

const useInput = (initialValue) => {
const [ name, setValue] = useState(initialValue)

const reset = () =>{
    setValue(initialValue)
}
const bind = {
    value:name,
    onChange: e =>{
        setValue(e.target.value)
    }
}

return [name,bind,reset]
}

export default useInput
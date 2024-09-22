import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { selectErrorMessage , clearError} from '../../redux/slices/errorSlice';

const Error = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() =>{
    if(errorMessage){
        toast.info(errorMessage)
        dispatch(clearError())
    }
  }, [errorMessage,dispatch])
  return (
    <ToastContainer position="top-left" autoClose={2000}/>
  )
}

export default Error
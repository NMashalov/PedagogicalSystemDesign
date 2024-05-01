
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// initializing the axios instance with custom configs


// defining a custom error handler for all APIs
export const errorHandler = (error: AxiosError) => {
    const statusCode = error.response?.status
  
    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        toast.error(`${error.response?.data ?? ''}`, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            });
    }
  
    return Promise.reject(error)
}
  
  // registering the custom error handler to the

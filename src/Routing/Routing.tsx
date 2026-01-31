import { createBrowserRouter } from "react-router-dom";
import QuizContainer from "../Components/QuizContainer";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<QuizContainer/>
    },
    
    
    
])

export default Routes;
import { useSelector, useDispatch } from "react-redux";

export const Status = () => {
    const dispatch = useDispatch()
    const status = useSelector((state) => state.user.email)
    //pensar la logica del return para que puedas setear el status despues
}
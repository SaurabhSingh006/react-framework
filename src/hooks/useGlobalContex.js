import GlobalContext from "../context/GlobalContext";
import { useContext } from "react";

function useGlobalContext() {
    return useContext(GlobalContext);
}

export default useGlobalContext;
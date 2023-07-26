import { useEffect, useState } from "react";
import userService, { user } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers=()=>{
    const [users, setusers] = useState<user[]>([]);
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);
    useEffect(() => {
      setloading(true);
     const {response,cancel}=userService.getall<user>();
     response.then((res) => {
          setusers(res.data);
          setloading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          seterror(err.message);
          setloading(false);
        });
      return () => cancel();
    }, []);
    return {setusers,seterror,users,error,loading}
}
export default useUsers
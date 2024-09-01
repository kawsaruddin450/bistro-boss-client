import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { data: admin, refetch, isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:8000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            const data = response.json()
            return data;
        }
    })

    return [admin, refetch, isLoading];
}

export default useAdmin;
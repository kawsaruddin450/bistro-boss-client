import { useQuery } from "@tanstack/react-query";


const AdminHome = () => {
    const token = localStorage.getItem('access-token')

    const {data: stats} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:8000/admin-stats`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <h2>Admin er basha..</h2>
        </div>
    );
};

export default AdminHome;
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-base-100 px-8 flex-1">
                <h2 className="text-3xl my-4">Admin Layout</h2>
                <div className="bg-base-100 space-y-4 p-4 rounded-lg">
                    <Link to={'addProduct'} className="btn btn-neutral hover:btn-primary w-full">Add Product</Link>
                    <Link to={'addProduct'} className="btn btn-accent hover:btn-secondary w-full">Add Product</Link>
                </div>
            </div>
            <div className="bg-rose-200 px-8 flex-[3]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayout;
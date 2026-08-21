import {useAuth0} from "@auth0/auth0-react";
import {Navigate} from "react-router-dom";


export default function Login() {


    // const handlSubmit = async (e:SubmitEvent<HTMLFormElement>)=>{
    //     e.preventDefault();
    //     const formData=new FormData(e.target);
    //     const username=formData.get('email');
    //     const password=formData.get('password');
    //
    //     const result =await axios.post('http://localhost:3000/login', {username: username, password: password},{
    //         headers:{
    //             'Content-Type':'application/json',
    //         }
    //     })
    //
    //     console.log(result)

    const {loginWithRedirect, isAuthenticated, isLoading} = useAuth0();

    if (!isLoading && isAuthenticated) {
        return <Navigate to="/dashboard" replace/>;
    }


    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className={"flex flex-col w-full "}>
                    <button onClick={() => loginWithRedirect({appState: {returnTo: "/dashboard"}})} className="flex w-max m-auto  justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-3 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
            </div>
        </>
    )
}

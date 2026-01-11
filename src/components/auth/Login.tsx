import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/login.svg'
import { Button } from "../ui/button";

interface loginFormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { login } = useAuthStore((state) => state);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormValues>();

    const onSubmit = (data: loginFormValues) => {
        console.log("data", data);
        login(data);
        navigate('/');
    }

    return (
        <div className="bg-[#f0f2f5] h-screen w-full flex items-center justify-center">
            <div className="max-w-[800px] w-full flex items-center justify-around p-[24px] bg-white shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] rounded-[6px]">
                <div>
                    <img src={logo} alt="#login" className="max-w-[330px] w-full h-auto" />
                </div>
                <div>
                    <div className="text-[30px] text-center w-full mb-4">Shreeji Enterprise</div>
                    <div >
                        <form className="flex flex-col justify-between items-center gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
                            <input type="email" style={{ border: "1px solid #e6eaef" }} placeholder="enter email"  {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })} />
                            {errors.email && <p>{errors.email.message}</p>}
                            <input type="password" style={{ border: "1px solid #e6eaef" }} placeholder="enter password" {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })} />
                            {errors.password && <p>{errors.password.message}</p>}
                            <Button className="w-full" style={{ backgroundColor: "#0d6efd", color: "white", borderRadius: "6px", fontSize: "16px" }} type="submit">Login</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
        
      <div className="bg-[#E7D9EA] md:p-10 md:w-1/2 rounded-xl mx-auto md:mt-14">
      <h1 className="text-center font-bold text-3xl">Log In to Radiant Lab</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              Email
              <input
                className="input input-bordered  w-full"
                {...register("email",{ required: true })}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                className="input input-bordered  w-full"
                {...register("password",{ required: true })}
              />
            </label>
          </div>

         <button className="btn btn-block bg-[#19456B] text-white mt-4">Log In</button>
         <p className="text-center mt-3">Do not have an account? <Link to='/register' ><span className="font-bold">Register</span></Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

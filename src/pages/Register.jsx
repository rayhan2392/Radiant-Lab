import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const Register = () => {
    const [districts,setDistricts] =useState([]);
    const [upazillas,setUpazillas] = useState([]);
    const {createUser} = useAuth();

    useEffect(()=>{
        fetch('/public/District.json')
        .then(res=>res.json())
        .then(data=>setDistricts(data))
    },[]);
    useEffect(()=>{
        fetch('/public/Upazilla.json')
        .then(res=>res.json())
        .then(data=>setUpazillas(data))
    },[])

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
        console.log(result.user)
    })
  };
  return (
    <div>
      <div className="bg-[#E7D9EA] md:p-10 md:w-3/4 mx-auto rounded-xl">
        <h1 className="text-center font-bold text-3xl">
          Sign Up to Radiant Lab
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>
                Name* <br />
                <input
                  type="text"
                  {...register("name",{required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <label>
                Email* <br />
                <input
                  type="email"
                  {...register("email",{required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div>
              <label>
                Photo <br />
                <input
                  type="file"
                  {...register("image")}
                  placeholder="Type here"
                  className="file-input w-full "
                />
              </label>
            </div>
            <div>
              <select  {...register("blood-group",{required:true})} className="select w-full ">
                
                <option disabled selected >
                  Blood Group*
                </option>
                <option value='A+'>A+</option>
                <option value='A-'>A-</option>
                <option value='B+'>B+</option>
                <option value='B-'>B-</option>
                <option value='AB+'>AB+</option>
                <option value='AB-'>AB-</option>
                <option value='O+'>O+</option>
                <option value='O-'>O-</option>
              </select>
            </div>
            <div>
            <select {...register('district')} className="select w-full" >
                <option disabled selected>District*</option>
               {
                districts.map(district=>  <option key={district.id} value={district.name}>{district.name}</option>)
               }
            </select>
          </div>
          <div>
            <select {...register('upazilla')} className="select w-full"  >
                <option disabled selected>Upazilla*</option>
               {
                upazillas.map(upazilla=>  <option key={upazilla.id} value={upazilla.name}>{upazilla.name}</option>)
               }
            </select>
          </div>
          <div>
              <label>
                Password* <br />
                <input
                  type="password"
                  {...register("password",{required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          <div>
              <label>
               Confirm Password* <br />
                <input
                  type="password"
                  {...register("confirm-password",{required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          
          <br />
          <button  className="btn btn-block bg-[#19456B] text-white">Register</button>
          <p className="text-center mt-3">Already have an account? <Link to='/login' ><span className="font-bold">Log In</span></Link> </p>

        </form>
      </div>
    </div>
  );
};

export default Register;

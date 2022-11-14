import { useEffect, useRef, useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import FormInput from "./components/FormInput";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const display = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center gap-x-8 justify-center flex-wrap">
      <div className="w-[390px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-40px] sm:hidden lg:block">
        <div
          ref={ref}
          className="w-[250px] h-[538px] absolute top-[27px] right-[22px]"
        >
          <img
            src="/screenshot1.png"
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear"
            alt="screenshot1"
          />
          <img
            src="/screenshot2.png"
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear"
            alt="screenshot1"
          />
          <img
            src="/screenshot3.png"
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear"
            alt="screenshot1"
          />
          <img
            src="/screenshot4.png"
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear"
            alt="screenshot1"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-fit bg-white border px-[50px] pt-8 pb-5">
          <img className="h-[75px] w-full mb-7" src="logo.svg" alt="logo" />
          <div className="flex flex-col gap-2 w-full">
            <FormInput
              label="Phone number, username, or email"
              setValue={setUsername}
            />
            <FormInput
              label="Password"
              setValue={setPassword}
              value={password}
              type="password"
            />

            <button
              className="bg-brand w-[265px] p-1 text-white rounded-md font-semibold mt-2 disabled:opacity-50"
              disabled={!display}
            >
              Log in
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="border w-full" />
            <span className="opacity-50 font-bold text-xs">OR</span>
            <div className="border w-full" />
          </div>
          <div className="text-sm font-semibold text-facebook flex gap-2 justify-center mt-8">
            <AiFillFacebook size={20} /> Log in with Facebook
          </div>
          <div className="flex justify-center mt-5">
            <a href=" " className="text-xs text-facebook">
              Forgot password
            </a>
          </div>
        </div>
        <div className="bg-white px-16 py-5 border mb-2">
          <p className="text-sm text-center">
            Dont't have an account?{" "}
            <a href=" " className="text-brand font-semibold">
              Sign up
            </a>
          </p>
        </div>
        <div className="grid justify-center gap-2">
          <p className="text-center text-sm">Get the app.</p>
          <div className="flex">
            <img
              src="google-play-badge.png"
              alt="play"
              className="w-[150px] cursor-pointer"
            />
            <img
              src="microsoft.svg"
              alt="microsoft"
              className="w-[110px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

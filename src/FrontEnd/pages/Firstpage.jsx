import { Button } from "../components/button";
import { useNavigate } from "react-router-dom"


export function FirstPage() {
    const navigate = useNavigate();
  return (
   
    <div className=" px-3 h-screen w-full">
      <div className="ml-5">
        <div className="size-25 ml-16 py-6">
          <img src="./public/pic.jpg" alt="pic" />
        </div>

        <div className="ml-9">
          <h1 className="text-xl font-extrabold">SPLIT IT</h1>
        </div>
      </div>

      <div className="flex ml-13 mt-15 h-screen w-full">
        <span>
          <h1 className="font-extrabold text-4xl">
            DO YOU NEED SOMEONE TO EASE YOUR CALCULATION?
          </h1>
          <h3 className="mt-5">Lets split money!!</h3>
          <div className="mt-20 ml-0 md:ml-70 lg:ml-70 sm:ml-0">
            <Button label="CLICK HERE" onClick={() => navigate('../ButtonArray')} />
          </div>
          <div>
            <h4 className="py-35 text-xl">
              Calculations can now be as easy as a child play. <br />
              Let us help you to make it happen
            </h4>
          </div>
        </span>

        <span className="py-20 px-1  size-100 max-h-10">
          <img src="oic.jpeg" alt="pic" />
        </span>
        <span className="py-7 px-5 size-150 mr-30">
          <img src="p1.jpg" alt="pic" />
        </span>
      </div>
    </div>
  );
}

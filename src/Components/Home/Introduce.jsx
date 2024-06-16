import React from "react";
import "./home.css"
function Introduce() {

    return (
        <>
            <div>
                <div className="flex justify-center items-center flex-col h-screen">
                    <div className="bg-about w-full h-screen "></div>
                    <div className="flex justify-center items-center flex-col h-full w-full">
                        <div className="flex flex-row justify-center w-1/2" >
                            {
                                (
                                    <span className="w-fittransition-opacity duration-1000 opacity-100 uppercase text-white text-5xl font-medium font-about">
                                        Detect URL Malicious
                                    </span>
                                )
                            }
                        </div>
                        <div className="text-center text-white mt-4">
                            <span>Xử lí ngôn ngữ tự nhiên dành riêng cho tiếng Việt</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Introduce
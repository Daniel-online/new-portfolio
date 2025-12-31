import { DiJava } from "react-icons/di"
import { RiJavascriptLine, RiNodejsLine, RiReactjsLine } from "react-icons/ri"
import { SiLua, SiPython } from "react-icons/si"


const Languages = () => {
    return (
        <div className="border-neutral-900">
            <h2 className="mr-3 my-20 text-center text-4xl">
                Languages
            </h2>
            <div className="ml-3 flex flex-row flex-wrap items-center jusitfy-center gap-4">
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-5xl text-cyan-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-5xl text-lime-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <RiJavascriptLine className="text-5xl text-yellow-500" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <DiJava className="text-5xl text-red-600" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-5xl text-white" />
                </div>
                <div className=" flex-row rounded-2xl border-4 border-neutral-800 p-4">
                    <SiLua className="text-5xl text-blue-600" />
                </div>

            </div>
        </div>
    )
}

export default Languages

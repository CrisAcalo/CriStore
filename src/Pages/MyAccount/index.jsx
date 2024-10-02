import React from "react";
import { ChevronRightIcon, TrashIcon } from "@heroicons/react/24/outline";

function MyAccount() {

    const [accordionStatus, setAccordionStatus] = React.useState(false);

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="border-2 border-indigo-500 rounded-lg p-4 shadow-lg shadow-indigo-400/50 w-72 md:w-96">
                <h1 className="text-4xl font-bold text-indigo-500 text-center">My Account</h1>
                <form className="flex flex-col gap-4 mt-4">
                    <label className="flex flex-col gap-1">
                        <span className="text-indigo-500 text-lg">Email</span>
                        <input
                            type="email"
                            className="border-2 border-indigo-500 rounded-lg p-2 focus:outline-0 shadow-md shadow-indigo-400/30"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="text-indigo-500 text-lg">Password</span>
                        <input
                            type="password"
                            className="border-2 border-indigo-500 rounded-lg p-2 focus:outline-0 shadow-md shadow-indigo-400/30"
                        />
                    </label>
                    <button className="bg-indigo-500 text-white rounded-lg p-2 font-bold">Save</button>
                </form>
            </div>
            {/* Delete Account */}
            <div className="w-72 md:w-96 mt-4">
                <div className={`
                    flex justify-between items-center border-2 border-indigo-500 bg-indigo-500 
                    text-white px-4 py-2 cursor-pointer ${accordionStatus ? 'rounded-t-lg' : 'rounded-lg'}`}
                    onClick={() => { setAccordionStatus(!accordionStatus) }}>
                    <p className="text-center">Advanced Options</p>
                    <ChevronRightIcon className={`w-6 h-6 ${accordionStatus ? 'rotate-90': null} ease-linear duration-75`} />
                </div>
                {accordionStatus &&
                    <div className="border-2 border-indigo-200 rounded-b-lg p-4">
                        <button className="bg-red-500 text-white rounded-lg p-2 flex justify-between gap-2">
                            <TrashIcon className="w-6 h-6" />
                            Delete Account
                        </button>
                        <p className="text-red-400 font-semibold mt-3">Caution! All information associated with the account will be deleted</p>
                    </div>
                }

            </div>
        </div>
    )
}

export default MyAccount

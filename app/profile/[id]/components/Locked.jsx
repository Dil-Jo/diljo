import Button from "../../../global-components/Button";

const Locked = () => {
    return (
        <div className="border border-gray-300 rounded relative">
            <div className="absolute top-1/2 left-1/2 w-max translate-y-1/2 -translate-x-1/2">
                <h2 className="text-5xl font-bold tracking-tight"> Please Login to continue</h2>
            </div>
            <div className="group grid place-items-center rounded-xl p-10 shadow-lg blur-sm ">
                <div className="w-full">
                    <h1 className="text m-8 mb-12 inline w-72 text-start text-3xl font-black tracking-tighter text-gray-800 lg:w-auto">
                        About
                    </h1>
                </div>
                <div className="h-full w-full grid gap-4">
                    <Field
                        name="Name"
                        detail="Ism-e-Garami"
                        field1="New Name"
                        field2="Enter Password"
                        placeholder="Full Name"
                    />
                    <Field
                        name="Password"
                        detail="•••••••••"
                        field1="New Password"
                        field2="Current Password"
                        placeholder="•••••••••"
                        type="password"
                    />
                    <Field
                        name="Email"
                        detail="Email Address"
                        field1="New Email"
                        field2="Enter Password"
                        placeholder="name@example.com"
                    />
                    <Field
                        name="Username"
                        detail="Takhallus"
                        field1="New Username"
                        field2="Enter Password"
                        placeholder="username"
                    />
                </div>
            </div>
        </div>
    )
}


function Field(props) {

    return (
        <div className="m-5 border-b-2">
            <div className="m-3 flex flex-col md:flex-row md:items-center">
                <div className="mb-4 md:mb-0 md:mr-4 md:flex-1">
                    <h1 className="text-xl font-black tracking-tighter text-gray-900">
                        {props.name}
                    </h1>
                    <h1 className="text-lg text-gray-500">{props.detail}</h1>
                </div>
                <div className="md:w-40 md:flex-none">
                    <Button
                        type="septenary"
                        text="Change"
                        className="w-full md:w-auto"
                    ></Button>
                </div>
            </div>
        </div>
    );
}

export default Locked
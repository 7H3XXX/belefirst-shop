import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Alert from "./components/Alert";

export default function Contact() {
    const {register, reset, handleSubmit} = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [onLoading, setOnLoading] = useState(false);
    const [configAlert, setConfigAlert] = useState({title: "", text: "", status: ""})
    const handleSubmitContactForm = async (data: any) => {
        setOnLoading(true);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const response = await fetch("/api/contact", options);
        const result = await response.json();
        const status = response.status
        if (status == 200) {
            reset();
            setConfigAlert({title: "Success", text: result.message, status: "success"})
        } else {
            setConfigAlert({title: "Erreur", text: result.message, status: status === 400 ? "warning" : "danger"})
        }
        setShowAlert(true);
        setOnLoading(false);
    }
    return (
        <>
            <div id="contact-us">
                <div className={"md:w-2/6 sm:w-2/2 w-full mx-auto"}>
                    <h1 className={"text-center text-6xl font-bold mb-4 text-gradient"}>Contact us</h1>
                    <form onSubmit={handleSubmit(handleSubmitContactForm)} method={"post"}>
                        <input type="text" className={"ring:border-red-500"} placeholder={"Name"} {...register("name", {
                            required: true
                        })}/>
                        <input type="email" placeholder={"Email"}  {...register("email", {
                            required: true
                        })}/>
                        <textarea cols={50} placeholder={"Message"}
                                  className={"resize-none"}  {...register("message", {
                            required: true
                        })}>
                            </textarea>
                        <div className={"w-full text-center mt-5"}>
                            {onLoading ? <span className="loader"></span> :
                                <button className={"mx-auto px-10 py-3 hover:bg-opacity-20 text-white"}>
                                    Send
                                </button>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <Alert type={configAlert.status} visible={showAlert} setVisible={setShowAlert} title={configAlert.title}
                   text={configAlert.text}/>
        </>
    );
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landing.module.css'
import logo from '../public/assets/images/belefirst_logo.svg'
import facebook from '../public/assets/images/facebook.svg'
import instagram from '../public/assets/images/instagram.svg'
import shirt_black from '../public/assets/images/tshirtblack.png'
import shirt_white from '../public/assets/images/tshirtwhite.png'
import light_svg from '../public/assets/images/light.svg'
import dark_svg from '../public/assets/images/dark.svg'
import {useState} from "react";


export default function Home() {
    const [theme, setTheme] = useState("light");
    const [theme_svg, setSvgTheme] = useState(light_svg);
    const [teeShirt, setTeeshirt] = useState(shirt_white);

    const handleChangeTheme = () => {
        if (theme == 'dark') {
            setTheme("light");
            setTeeshirt(shirt_white);
            setSvgTheme(light_svg);
            document.documentElement.classList.remove('dark')
        } else {
            setTheme("dark");
            setTeeshirt(shirt_black);
            setSvgTheme(dark_svg);
            document.documentElement.classList.add('dark')
        }
    }
    return (
        <div className={`${styles.wrapper} w-screen h-screen bg-cover bg-center overflow-x-hidden`}>
            <Head>
                <title>Coming Soon - Indomptable Shop</title>
                <meta name="description" content="Boutique en ligne des indomptables"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className='md:px-32 px-10 py-6 relative z-10'>
                <div className="grid justify-items-center mx-auto sm:flex">
                    <Image src={logo} alt="BeleFirst" className='mb-6'/>
                    <div className='flex w-full justify-center items-center'>
                        <a href="https://www.facebook.com/belefirst1" className='text-white ml-8'>Facebook</a>
                        <a href="https://www.instagram.com/belefirst1" className='text-white ml-8'>Instagram</a>
                    </div>
                </div>
                <div className='sm:flex justify-center items-center mt-8 sm:mt-0 mx-auto'>
                    <div className="md:grid flex justify-around md:w-40 md:justify-items-start rounded-full mr-5 mb-4">
                        <button className={`w-10 h-10 rounded-full flex justify-center items-center mb-2`}>
                            <div className={`bg-white rounded-full w-2 h-2`}></div>
                        </button>
                        <button className={`w-10 h-10 rounded-full flex justify-center items-center mb-2`}>
                            <div className={`bg-white rounded-full w-2 h-2`}></div>
                        </button>
                        <button onClick={handleChangeTheme}
                                className={`w-10 h-10 rounded-full flex justify-center items-center ${styles.item}`}>
                            <div className={`bg-white rounded-full w-2 h-2`}></div>
                        </button>
                        <button className={`w-10 h-10 rounded-full flex justify-center items-center mb-2`}>
                            <div className={`bg-white rounded-full w-2 h-2`}></div>
                        </button>
                        <button className={`w-10 h-10 rounded-full flex justify-center items-center mb-2`}>
                            <div className={`bg-white rounded-full w-2 h-2`}></div>
                        </button>
                    </div>
                    <Image src={teeShirt} alt="Indomptable t-shirt" className='w-96 sm:w-[26rem]'/>
                    <div className="my-auto text-white md:ml-20 ml-5  text-center md:text-left">
                        <h1 className='text-8xl font-futura font-bold text-white mb-4 md:text-9xl'>THE <br/> MBOA</h1>
                        <h2 className='text-1xl font-bold'>INDOMPTABLE THE WHITE TEE</h2>
                        <p>Wear proundly our colors, show your identity, <br/> show your worth, show your continetal
                            attitude</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

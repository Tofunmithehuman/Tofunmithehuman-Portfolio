import { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function useAos() {
    useEffect (() => {
        Aos.init({duration: 700})
    }, []);
}

export default useAos
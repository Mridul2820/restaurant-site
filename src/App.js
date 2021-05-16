import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './styles/app.scss'
import { css } from '@emotion/core'
import HashLoader from 'react-spinners/HashLoader'
import Header from './components/Header'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
    const [loading, setLoading] = useState(false)

    const override = css`
        display: block;
        border-color: red;
        margin: 20% auto 0 auto;
    `

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div className="app">
            {loading ? 
                <HashLoader 
                    color={"#3d2514"}
                    loading={loading} 
                    css={override} 
                    size={50}
                />
                :
                <>
                    <Navbar />
                    <Header />
                    <Products />
                    <About />
                    <Contact />
                    <Footer />
                </>
            }
        </div>
    )
}

export default App

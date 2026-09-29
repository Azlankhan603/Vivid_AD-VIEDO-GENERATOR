import { createRoot } from 'react-dom/client'
import './index.css'
import{BrowserRouter}from 'react-router-dom'
import App from './App'
import {ClerkProvider}from '@clerk/react'
 import {  shadesOfPurple } from '@clerk/ui/themes'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')! as HTMLElement).render(
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}
        appearance={{
                theme: shadesOfPurple,
                        variables: {
                        colorPrimary: '#4f39f6',
                        }
        }}>
        <BrowserRouter>
        <App />
        </BrowserRouter>

        </ClerkProvider>

)
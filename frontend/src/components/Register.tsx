import React, { useState } from 'react';
import { registerAPI } from '../features/registerAPI';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // Call your API function to register the user
            const response = await registerAPI({ username, password, email, firstName, lastName });

            // Check if the registration was successful
            if (response && (response.status === 200 || response.status === 201)) {
                // Reset form fields
                setUsername('');
                setPassword('');
                setEmail('');
                setFirstName('');
                setLastName('');
                toast.success('Registration successful!');
            }
        } catch (error) {
            console.error('Registration failed:', error);
            setUsername('');
            setPassword('');
            setEmail('');
            setFirstName('');
            setLastName('');
            // Handle registration failure
            toast.error('Registration failed. Please try again.');
        }
    };

    return (
        <>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required />
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required />
            <button type="submit">Register</button>
        </form>
        </>
    );
};

export default Register;

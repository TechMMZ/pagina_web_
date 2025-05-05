// RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes guardar los datos, enviar a una API, etc.
        console.log('Formulario enviado:', formData);

        // Redirige a la página principal después de enviar
        navigate('/');
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 999
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                width: '90%',
                maxWidth: '400px',
                boxShadow: '0 0 20px rgba(0,0,0,0.3)'
            }}>
                <h2 style={{ textAlign: 'center' }}>Regístrate</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Nombre:<br />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label>Email:<br />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </label>
                    </div>
                    <button type="submit" style={{ width: '100%' }}>Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;

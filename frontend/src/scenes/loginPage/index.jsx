// src/Login.js
import React from 'react';
import Form from './Form';

const LoginPage = () => {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLeft}>
        <h1 style={styles.heading}>Motile 'TisHere'</h1>
        <p style={styles.subtitle}>Unleash Your Academic Success with Motile TisHere's Platform</p>
        <div style={styles.loginImage}>
          <img src={`${process.env.PUBLIC_URL}/assets/Motile.png`} alt="Motile"/>
        </div>
      </div>
      <div style={styles.loginRight}>
        <h2 style={styles.title}>Motile Tech</h2>
        <Form>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username or email</label>
            <input type="text" id="username" name="username" placeholder="johnsmith007" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" name="password" placeholder="********" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <button type="submit" style={styles.btn}>Sign in</button>
          </div>
          <div style={styles.formGroup}>
            <a href="/forgot-password" style={styles.link}>Forgot password?</a>
          </div>
          <div style={styles.divider}>
            <span>or</span>
          </div>
          <div style={styles.formGroup}>
            <button type="button" style={{ ...styles.btn, ...styles.btnGoogle }}>
              Sign in with Google
            </button>
          </div>
          <div style={styles.formGroup}>
            <p>Are you new? <a href="/create-account" style={styles.link}>Create an Account</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9f5ee',
  },
  loginLeft: {
    flex: 1,
    padding: '2rem',
    maxWidth: '50%',
    backgroundColor: '#f1f9f4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  loginImage: {
    width: '100%',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  loginRight: {
    flex: 1,
    padding: '3rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  btn: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  btnGoogle: {
    backgroundColor: '#db4437',
  },
  link: {
    color: '#4CAF50',
    textDecoration: 'none',
  },
  divider: {
    textAlign: 'center',
    margin: '1.5rem 0',
  },
};

export default LoginPage;

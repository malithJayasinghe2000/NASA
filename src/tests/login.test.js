import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../components/Login';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword from the mocked module
import { getAuth } from 'firebase/auth'; // Import getAuth from the Firebase module

jest.mock('firebase/auth', () => ({
  ...jest.requireActual('firebase/auth'), // Import and mock all functions from actual firebase/auth module
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve('Mock sign in')), // Mock signInWithEmailAndPassword directly
}));

describe('Login', () => {
  it('calls the signInWithEmailAndPassword function when the form is submitted', async () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Enter email');
    const passwordInput = screen.getByPlaceholderText('Enter password');
    const loginButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    // Here, signInWithEmailAndPassword should be the mocked function
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object), // Check if it's called with Firebase auth object
      'test@example.com',
      'password'
    );
  });
});

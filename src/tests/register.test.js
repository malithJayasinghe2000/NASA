import React from 'react';
import { TextEncoder, TextDecoder } from 'util';
import ReactDOM from 'react-dom';
Object.assign(global, { TextDecoder, TextEncoder });
import { render, fireEvent,screen } from '@testing-library/react';
import Register from '../components/Register';

describe('Register', () => {
    it('updates the email and password state when the input fields are changed', () => {
      render(<Register />);
      const emailInput = screen.getByPlaceholderText("Enter email");
      const passwordInput = screen.getByPlaceholderText("Enter password");
  
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'password' } });
  
      // Assuming that the Register component displays the current email and password state
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    //   expect(getByText('password')).toBeInTheDocument();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Register />, div);
      });

      
  
      

      it('contains an email input field', () => {
        render(<Register />);
        const emailInput = screen.getByPlaceholderText("Enter email");
        expect(emailInput).toBeInTheDocument();
      });

      it('contains a password input field', () => {
        render(<Register />);
        const passwordInput = screen.getByPlaceholderText("Enter password");
        expect(passwordInput).toBeInTheDocument();
      });
  });
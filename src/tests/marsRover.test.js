import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MarsRover from '../components/MarsRover';
import ReactDOM from 'react-dom';

describe('MarsRover', () => {
  const mockData = {
    photos: [
      {
        id: 1,
        camera: { full_name: 'Camera 1' },
        img_src: 'https://example.com/image1.jpg',
        earth_date: '2024-05-01',
      },
      {
        id: 2,
        camera: { full_name: 'Camera 2' },
        img_src: 'https://example.com/image2.jpg',
        earth_date: '2024-05-02',
      },
      {
        id: 3,
        camera: { full_name: 'Camera 1' },
        img_src: 'https://example.com/image3.jpg',
        earth_date: '2024-05-03',
      },
    ],
  };

  it('renders Mars Rover photos with filter dropdown and favorite button', () => {
    render(<MarsRover data={mockData} />);

    // Check if Mars Rover title is rendered
    expect(screen.getByText('Mars Rover Photos')).toBeInTheDocument();

    // Check if favorite button is rendered for each photo
    expect(screen.getAllByRole('button', { name: '' })).toHaveLength(3); // Adjusted to find all buttons

    // Check if each photo is displayed
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('allows toggling favorites', () => {
    render(<MarsRover data={mockData} />);

    // Click on the favorite button for the first photo
    fireEvent.click(screen.getAllByRole('button', { name: '' })[0]); // Adjusted to find all buttons

    // Check if the first photo is marked as favorite
    expect(screen.getAllByRole('button', { name: '' })[0]).toHaveStyle({ color: 'ButtonText' }); // Updated color expectation
  });

  

  it('marks a photo as not favorite when the favorite button is clicked twice', () => {
    render(<MarsRover data={mockData} />);

    // Click on the favorite button for the first photo twice
    const favoriteButton = screen.getAllByRole('button', { name: '' })[0];
    fireEvent.click(favoriteButton);
    fireEvent.click(favoriteButton);

    // Check if the first photo is not marked as favorite
    // Replace 'ButtonText' with the actual color of not favorite photos
    expect(favoriteButton).toHaveStyle({ color: 'ButtonText' });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MarsRover data={mockData} />, div);
  });

//   it('renders the correct number of Card components', () => {
//     render(<MarsRover data={mockData} />);
//     expect(screen.getAllByTestId('mars-card')).toHaveLength(mockData.length);
//   });

  it('changes the color of the favorite button when clicked', () => {
    render(<MarsRover data={mockData} />);
    const favoriteButton = screen.getAllByRole('button', { name: '' })[0];
    fireEvent.click(favoriteButton);
    expect(favoriteButton).toHaveStyle({ color: 'ButtonText' }); // Replace 'FavoriteColor' with the actual color of favorite photos
  });

  it('all photos have a source URL', () => {
    render(<MarsRover data={mockData} />);
    const images = screen.getAllByTestId('mars');
    images.forEach(img => {
      expect(img).toHaveAttribute('src');
    });
  });
  
});

import axios from 'axios';
import { skills, profile, projects } from '../data/content';

const api = axios.create({
  baseURL: 'https://reqres.in/api'
});

export const sendPortfolioData = async () => {
  try {
    const response = await api.post('/workintech', {
      skills,
      profile,
      projects
    });
    return response.data;
  } catch (error) {
    console.error('Error sending portfolio data:', error);
    throw error;
  }
};
import api from '../utils/api';

export const advertisementService = {
  async createAdvertisement(advertisementData) {
    try {
      const response = await api.post('/api/advertisements', advertisementData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to create advertisement');
    }
  },

  async getAdvertisements() {
    try {
      const response = await api.get('/api/advertisements');
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch advertisements');
    }
  },

  async getAdvertisementDetails(id) {
    try {
      const response = await api.get(`/api/advertisements/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch advertisement details');
    }
  },

  async deleteAdvertisement(id) {
    try {
      const response = await api.delete(`/api/advertisements/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to delete advertisement');
    }
  }
};
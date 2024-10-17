import axios from 'axios';

const API_URL = 'http://localhost:3000/category';

// FETCH CATEGORIES
const fetchCategories = async () => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.get(`${API_URL}/get_categories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// ADD CATEGORY
const addCategory = async (categoryData) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.post(`${API_URL}/add`, categoryData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
  }
};

// EDIT CATEGORY
const editCategory = async (categoryId, categoryData) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.patch(
      `${API_URL}/${categoryId}`,
      categoryData,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Error editing category:', error);
  }
};

// Frontend: Toggle Delete/Recover Function
const toggleCategoryStatus = async (categoryId) => {
  const token = localStorage.getItem('adminToken');
  try {
    const response = await axios.patch(
      `${API_URL}/toggle/${categoryId}`,
      {}, 
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    if (response.data) {
      alert(response.data.message); 
      return response.data; 
    }
  } catch (error) {
    console.error('Error toggling category status:', error);
    alert('Failed to update category status');
  }
};


export { fetchCategories, addCategory, editCategory, toggleCategoryStatus };

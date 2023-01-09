import { fetchAPI } from '../strapi/api';

export async function getProjects() {
  return await fetchAPI('/projects', { populate: 'image' });
}

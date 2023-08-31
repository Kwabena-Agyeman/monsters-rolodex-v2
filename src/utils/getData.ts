export const getUsers = async <T>(url: string): Promise<T> => {
  const users = await fetch(url);
  return await users.json();
};

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let result;
  try {
    result = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };
  } catch (e) {
    result = {
      photo: null,
      user: null,
    };
  }
  return result;
}

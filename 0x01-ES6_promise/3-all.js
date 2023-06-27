import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((result) => {
      const s = `${result[0].body} ${result[1].firstName} ${result[1].lastName}`;
      console.log(s);
    })
    .catch(new Error('Signup system offline'));
}

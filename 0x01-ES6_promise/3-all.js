import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      const [photoResponse, userResponse] = value;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

import { ls } from '@superstate/adapters';
import { superstate } from '@superstate/core';

export const PHOTOS = {
  state: superstate([]).use([ls("photos")]),

  readPhotos: async () => {
    console.log(PHOTOS.state.now())

    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => PHOTOS.state.set(data))

    console.log(PHOTOS.state.now())
  }
}
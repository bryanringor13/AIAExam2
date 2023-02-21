import {Model, Server} from 'miragejs';

export function makeServer({environment = 'development'} = {}) {
  let server = new Server({
    environment,
    models: {
      user: Model,
      article: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/articles', () => {
        return {
          articles: [
            {
              id: 'a1',
              userId: 'u1',
              title: 'Natural Human Behavior',
              publicationDate: '2023-01-03',
              thumbnailImage:
                'https://thebaffler.com/wp-content/uploads/2017/08/B36_Pein_opener.jpg',
              likes: [],
            },
            {
              id: 'a2',
              userId: 'u1',
              title: 'Changing Times',
              publicationDate: '2022-12-13',
              thumbnailImage:
                'https://media.newyorker.com/photos/590968266552fa0be682f30f/master/w_2240,c_limit/111024_r21386_g2048.jpg',
              likes: [],
            },
            {
              id: 'a3',
              userId: 'u2',
              title: 'Love Letters from the Battlefield',
              publicationDate: '2023-02-12',
              thumbnailImage:
                'https://walrus-assets.s3.amazonaws.com/img/Harley-LoveLetters-02-Medals.jpg',
              likes: [],
            },
            {
              id: 'a4',
              userId: 'u2',
              title: 'Brilliant, Troubled Dorothy Parker',
              publicationDate: '2023-02-07',
              thumbnailImage:
                'https://corpus.longform.org/key_images/groups/41058304/41064971/web_800x340.jpg',
              likes: [],
            },
            {
              id: 'a5',
              userId: 'u3',
              title: 'Mysterious American Cat',
              publicationDate: '2023-02-01',
              thumbnailImage:
                'https://d1tdv5xoeixo5.cloudfront.net/sites/vqr.virginia.edu/files/styles/medium/public/story-images/vqr_mountain_lion_final_-01.jpg?itok=AGhJKOl9',
              likes: [],
            },
            {
              id: 'a6',
              userId: 'u3',
              title: 'Big Tobacco Has Caught Startup Fever',
              publicationDate: '2022-11-23',
              thumbnailImage:
                'https://longform.org/uploads/post/key_image/10635/landscape_-1x-1.jpg',
              likes: [],
            },
          ],
        };
      });

      this.get('/user', () => {
        return {
          users: [
            {
              id: 'u1',
              name: 'Juan Dela Cruz',
              title: 'Pshycologist',
              avatar:
                'https://gravatar.com/avatar/c497f784ad52b7d00efd0f38c7f718b1?s=400&d=robohash&r=x',
            },
            {
              id: 'u2',
              name: 'Jose Luna',
              title: 'System Engineer',
              avatar:
                'https://robohash.org/c497f784ad52b7d00efd0f38c7f718b1?set=set4&bgset=&size=400x400',
            },
            {
              id: 'u3',
              name: 'Jessica Garcia',
              title: 'Architect',
              avatar:
                'https://robohash.org/3d0439a79c817224cd9e0b0a85798b1f?set=set4&bgset=&size=400x400',
            },
          ],
        };
      });
    },
  });

  return server;
}

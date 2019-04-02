export function fetchData(query) {
  return fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=9&page=1`,
    {
      headers: new Headers({
        Authorization:
          "563492ad6f91700001000001845b939d393843c869341924558835be"
      })
    }
  )
    .then(res => (res.ok ? res.json() : new Error("fetch photo error")))
    .then(data => {
      const images = data.photos.map(photo => ({
        id: photo.id,
        src: photo.src.medium,
        author: photo.photographer
      }));

      return images;
    })
    .catch(error => console.log(error));
}

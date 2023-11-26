import config from "@/config";

export async function getBiography(id) {
  const res = await fetch(`${config.address}/v1/biographyById`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: { id: id }
  })
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      return { messa: err };
    });
  return res;
}

export async function getBooks() {
  const res = await fetch(`${config.address}/v1/titles`)
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      return { messa: "nodata" };
    });
  return res;
}
export async function getBooksByCategory() {
  const res = await fetch(`${config.address}/v1/titles/categories`)
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      return { messa: "nodata" };
    });
  return res;

}
export async function getAuthors() {
  const res = await fetch(`${config.address}/v1/authors`)
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      message: "no response";
    });
  return res;
}

export async function getCategories() {
  const res = await fetch(`${config.address}/v1/titles/categories`)
    .then(async (data) => {
      return await data.json();
    })
    .catch((err) => {
      message: "no response";
    });
  return res;
}

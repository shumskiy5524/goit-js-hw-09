import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"}],t=document.querySelector(".gallery"),e=p.map(({preview:o,original:i,description:a})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img 
          class="gallery-image" 
          src="${o}" 
          alt="${a}" 
        />
      </a>
    </li>
  `).join("");t.innerHTML=e;new SimpleLightbox(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map

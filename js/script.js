
const photos = [
    "/images/c_formal_gray_shirt.png",
    "/images/c_pant_girl.png" ,
    "/images/c_polo-shirt.png" ,
    "/images/c_shirt-girl.png",
    "/images/c_t-shirt_men.png",
    "/images/c_tunic-shirt_girl.png",
    "/images/c_undershirt.png",
    "/images/c_western-shirt.png"
];

let collectionNode = photos.map((photo, i) =>(
`
<div class="col-sm-6 col-lg-4 col-xl-3 p-2 gx-0 ">
<div class="collection-img position-relative">
  <img src=${photo} alt="gray shirt"
  class="w-100">
  <span class="rounded-circle bg-primary position-absolute 
  text-white d-flex align-items-center justify-content-center">sale</span>
</div>
<div class=" text-center">
  <div class="rating text-primary mt-3">
    <i class="bi bi-star-fill"></i>                  
    <i class="bi bi-star-fill"></i>                  
    <i class="bi bi-star-fill"></i>                  
    <i class="bi bi-star-half"></i>
    <i class="bi bi-star"></i>
  </div>
  <p class="text-capitalize my-1">gray shirt</p>
  <span class="fw-bold">$20.50</span>
</div>
</div>
`
))
document.querySelector(".collection-list").innerHTML= collectionNode.join('')

// special section
const specialPhotos = [
    '/images/special_product_1.jpg',
    '/images/special_product_2.jpg',
    '/images/special_product_3.jpg',
    '/images/special_product_4.jpg',
]
let specialNode = specialPhotos.map((photo,i)=>(
    `
    <div class="col-sm-6 col-lg-4 col-xl-3 p-2 gx-0 ">
    <div class="collection-img position-relative overflow-hidden">
      <img src=${photo} alt="gray shirt"
      class="w-100">
      <span class="rounded-circle position-absolute 
      text-primary d-flex align-items-center justify-content-center">
        <i class="bi bi-heart-fill" style=" font-size: 32px;"></i>
      </span>
    </div>
    <div class="mt-2 text-center">
      <p class="text-capitalize my-2">gray shirt</p>
      <p class="fw-bold">$20.50</p>
      <a href="#" class="btn btn-outline-primary rounded-pill px-3 my-1 ">
        Add to Cart
        </a>
    </div>
    </div>
    `
))

document.querySelector(".special-list").innerHTML = specialNode.join('');


// blogs
const blogData = [
    {
        img: "/images/blog_1.jpg",
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
        link: "#"
    },
    {
        img: "/images/blog_2.jpg",
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
        link: "#"
    },
    {
        img: "/images/blog_3.jpg",
        title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.",
        link: "#"
    },
]

let blogDom = blogData.map((blog, i) =>(
    `
    <div class="col-md-6 col-lg-4">
        <div class="card " >
        <img src="/images/blog_1.jpg" class="card-img-top w-100" alt="...">
        <div class="card-body">
            <h5 class="card-title fw-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing
            </h5>
            <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.
            </p>
            <p><strong>Author: </strong> John Doe</p>
            <a href="#" class="btn btn-outline-primary rounded-pill px-3">Read more</a>
        </div>
        </div>
    </div>
    `
))
document.querySelector(".blog-list").innerHTML = blogDom.join('')
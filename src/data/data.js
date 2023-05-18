import logo from "./../assets/logo.png";
import img1 from "./../assets/img_section1.png";


let data = {
  header: {
    links: [
      {link: "https://www.youtube.com/", name: "YouTube"},
      {link: "https://www.youtube.com/", name: "1"},
      {link: "https://www.youtube.com/", name: "asdasd"},
    ],
    logo: logo,
  },
  section1:{
    img: img1,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, numquam rem officiis sit exercitationem voluptate autem tempore laborum quisquam deserunt unde illum soluta possimus quibusdam, ad officia repellendus. Deleniti, possimus.",
  },
  section2:{
    cards:[
      {id: 1, img: logo, title: "ODBM 1", description: "lorme ipsum"},
      {id: 2, img: logo, title: "ODBM 2", description: "lorme ipsum"},
      {id: 3, img: logo, title: "ODBM 3", description: "lorme ipsum"},
      {id: 4, img: logo, title: "ODBM 4", description: "lorme ipsum"},
      {id: 5, img: logo, title: "ODBM 5", description: "lorme ipsum"},
      {id: 6, img: logo, title: "ODBM 6", description: "lorme ipsum"},
    ]
  }
}

export default data;
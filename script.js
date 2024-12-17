// Sample product data
const products = [
     {
          name: "Song 1: Kesariya",
          description: "A romantic song from the movie 'Brahmāstra', filled with emotions and soulful lyrics that capture the essence of love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/FC94AC3454E2E5C8C1E5B67827A41A9A45BCF2BE9A3A102436E3ECFB93BEB5F6",
        },
        {
          name: "Song 2: Lehra Do",
          description: "An anthem of hope and inspiration, this song from '83' brings out the spirit of cricket with a powerful composition.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/F2D5FFFEFB1346C49E8775715C42C3E38E34DFAACBB8886D2E4A9A4D7A191556",
        },
        {
          name: "Song 3: Tum Tum",
          description: "A foot-tapping song from the movie 'Enemy', known for its catchy beats and vibrant energy that will make you want to dance.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/599145EE9C28726BDE2B2DC6F6E0D95D3D42B4568E6872D5D62FB1C9CBA4A84D",
        },
        {
          name: "Song 4: Param Sundari",
          description: "A dance number from the movie 'Mimi', this track features bold beats and powerful vocals that make you want to groove.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/0D543D38C7B94C4748D7B18F4093A6D7BE4579B8556D1397E672436A7F8A6189",
        },
        {
          name: "Song 5: Raataan Lambiyan",
          description: "A soulful romantic track from 'Shershaah', this song beautifully captures the essence of love with soothing music and heartfelt lyrics.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/251C5012B3788DA340E7DC0750B66E990A93B1844B7734FAD12C2BB2F3A62335",
        },
        {
          name: "Song 6: Aaj Se Teri",
          description: "A melody-filled romantic song from 'Padman', filled with soft vocals and emotional lyrics.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/DAB0845B227B5A43129A0B55A207B4F91A3D9D63E1B4F3C508F44AAEBF9A4F8C",
        },
        {
          name: "Song 7: Dil Diyan Gallan",
          description: "A soft romantic song from 'Tiger Zinda Hai', offering a heartwarming vibe with beautiful music and soulful vocals.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/9A1A30113E2B4C4F88A41D08A4062639E3BFC53782014F8CB277F91D3DC697AB",
        },
        {
          name: "Song 8: Shaitan Ka Saala",
          description: "A fun, quirky track from 'Housefull 4', this song will make you laugh with its hilarious lyrics and catchy beats.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/BCF101877CE44A8794FF28D4F6A23835CBE7E14B9F61B502B241795FF5929925",
        },
        {
          name: "Song 9: Ghungroo",
          description: "A peppy and energetic song from 'War', this track is perfect for party lovers with its infectious beats and rhythm.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/EC24BFEAB4F94F9A97A08A49898DBD4D68739F6DB263A1733D6B546F6224E0E2",
        },
        {
          name: "Song 10: Tujhe Kitna Chahne Lage",
          description: "An emotional romantic ballad from 'Kabir Singh', this song is full of passion and longing.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/301F77F6C9A347849BF86E5597E6A9037F7D268BC12E7B9CBAD8B5CC5C3B3B73",
        },
        {
          name: "Song 11: Genda Phool",
          description: "A fusion of traditional Indian beats and modern music, this track from 'Delhi-6' brings a lively and festive energy that’s perfect for celebrations.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/1F2B9A41F53EBA932B53A5CC97A07E3B6B719BA6A4F5B81506D8313C808A37D8",
        },
        {
          name: "Song 12: Besharam Rang",
          description: "From the movie 'Pathaan', this song features a seductive and vibrant melody, blending dance and passion in a visual feast.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/D63D99B1E90C8F4C8B83B18DB6582450031A0B622B2998C2F5F876B0AEE19A2D",
        },
        {
          name: "Song 13: Chaka Chak",
          description: "A lively and energetic song from 'Atrangi Re', this track is sure to get you grooving with its playful lyrics and catchy beats.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/F1400F9C587549AEF7DE7F53D2B0F4A9B21D529E5EFC3B8335700D8F1B41FE68",
        },
        {
          name: "Song 14: Tum Hi Aana",
          description: "A heartfelt song from 'Marjaavaan', filled with emotions, deep lyrics, and a soulful melody that touches the heart.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/E865C7EDC8E944B7B15562C891D77C7C730DDF47B34B4F7A74DB5F4B1A7A4D75",
        },
        {
          name: "Song 15: Dil Bechara",
          description: "A title track from the movie 'Dil Bechara', this song is filled with emotional depth and a bittersweet melody.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/F6E0B88A334949D5BD174145B36A7E5AEE034DB5E0DB80A4D4963C0547BC3788",
        },
        {
          name: "Song 16: Aasman Ban Gaya",
          description: "A romantic song from 'Sui Dhaaga', featuring soulful music and heartfelt lyrics that capture the essence of love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/760FCD2E028B4DA0AA59161600A41F9ABAA16D5D2B79E7DC18A1E5D99FDC6D97",
        },
        {
          name: "Song 17: Naach Meri Rani",
          description: "A peppy and energetic track from the movie 'Bunty Aur Babli 2', this song is perfect for the dance floor with its upbeat rhythm and catchy melody.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/9A23D4D3DC8F4112A6DAEC5D3E6185A3F1E7414A505F033E7D59B0F6C2D0F84F",
        },
        {
          name: "Song 18: Dholida",
          description: "A celebratory track from 'Gangubai Kathiawadi', this song brings together powerful vocals and a festive mood that’s perfect for a celebration.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/B2AB6BE9D1E64DFF92EEA6A6A13E1B0A26D1F3C7B12566F2B6DBE40E0E32B9E1",
        },
        {
          name: "Song 19: Dil Chahte Ho",
          description: "A soulful and romantic track from 'Dil Chahte Ho', this song is perfect for those who enjoy slow, heartfelt melodies.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/A9AA99E5D92646B0851BB8E9D6C0D27A82E5A0F10B726F81C52BE5C19D38D944",
        },
        {
          name: "Song 20: Paniyon Sa",
          description: "A romantic song from 'Satyam', this melody offers a serene and peaceful vibe, perfect for those in love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/501D819D803F48A7A94F95C46CA1E4B6D0B42ED90D256D01520284FE30B053DA",
        },
        {
          name: "Song 21: Raaz Aankhein Teri",
          description: "A soulful track from 'Raaz Reboot', filled with emotions and a captivating melody that resonates deeply with listeners.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/A2255E0CB0F34F6FB2593F6594F88C81D1BE607007CFCBB98F5D22172A1F30D9",
        },
        {
          name: "Song 22: Main Tera Boyfriend",
          description: "A fun, peppy number from 'Raabta', this track brings high-energy vibes to the dance floor.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/0AB23DDF1C9144F3B688EF1D8355A4A8F61D7509E6A158C0F74A6747EC591E8",
        },
        {
          name: "Song 23: Hasi",
          description: "A heart-wrenching, emotional song from 'Hamari Adhuri Kahani', this track touches hearts with its melody and lyrics.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/D9A78C1DA87A40E1A69AA7C5999E0C758B9A97A8A02D1677F67604F1A61B004F",
        },
        {
          name: "Song 24: Sun Saathiya",
          description: "A romantic and soulful track from 'ABCD 2', this song features soothing vocals and a melodious tune that captures the beauty of love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/C3F1FDF4A74F47F4B2995D1D07C00D157F8E648A5617D5CCB8AC1A4A9078BC8B",
        },
        {
          name: "Song 25: Zindagi Ki Toh",
          description: "A soulful, deep number from 'Dil Se', this song inspires and reflects on life’s emotions.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/9E1561C6A54947B480F22D169FE4695561C21207F9B0F03A84A2BE85FB6554A4",
        },
        {
          name: "Song 26: Tera Ban Jaunga",
          description: "A romantic track from 'Kabir Singh', this song expresses the intense and passionate feeling of being in love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/D4B24E1FEBD2F6439CA9D3B053CF1F6F19A0F218F4100AE39E6C14F5C3257FF4",
        },
        {
          name: "Song 27: Voh Dekhnay Mein",
          description: "A soulful and captivating melody from 'Bajirao Mastani', with a perfect blend of classical and contemporary music.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/36E90608D59942E4A72017E72E1D364F9E9C81EBC2E825865FF8D4AB1B0939A9",
        },
        {
          name: "Song 28: Sun Raha Hai",
          description: "A melancholic yet beautiful song from 'Aashiqui 2', this track expresses pain, longing, and deep emotions.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/A9F02D5E26A14C6A9A5C2CCCD9D01D1229A87E1D290842F28F77AB70830BB9F1",
        },
        {
          name: "Song 29: Tera Yaar Hoon Mai",
          description: "A nostalgic and heartwarming track from 'Sonu Ke Titu Ki Sweety', this song celebrates friendship and love.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/B90AC8F699A64A9FB31BC6B98B0319E4DCD4B5E1D9F1A6F8FE0FF9E1F0DC9AC2",
        },
        {
          name: "Song 30: Raataan Lambiyan",
          description: "A soulful romantic track from 'Shershaah', this song beautifully captures the essence of love with soothing music and heartfelt lyrics.",
          price: "$0.99",
          imgSrc: "https://www.jiosaavn.com/_i/97D8F37867F44F55ABF4379D9A278AB3DB28F1DB5FCFF7D12F7222C8FF4AD6F5",
        },      
    {
        name: "Song 31: Genda Phool",
        description: "A fusion of traditional Indian beats and modern music, this track from 'Delhi-6' brings a lively and festive energy that’s perfect for celebrations.",
        price: "$0.99",
        imgSrc: "https://www.jiosaavn.com/_i/1F2B9A41F53EBA932B53A5CC97A07E3B6B719BA6A4F5B81506D8313C808A37D8",
      },
      {
        name: "Song 32: Besharam Rang",
        description: "From the movie 'Pathaan', this song features a seductive and vibrant melody, blending dance and passion in a visual feast.",
        price: "$0.99",
        imgSrc: "https://www.jiosaavn.com/_i/D63D99B1E90C8F4C8B83B18DB6582450031A0B622B2998C2F5F876B0AEE19A2D",
      },
    
    
  ];
  
  
  // Function to display products
  function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
  
    products.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img class="product-img" src="${product.imgSrc}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">${product.price}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(index) {
    const product = products[index];
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  
    alert(`${product.name} has been added to your cart!`);
  }
  
  // Function to update the greeting message based on the time of day
  function updateGreeting() {
    const greetingMessage = document.getElementById("greeting-message");
    const currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      greetingMessage.textContent = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greetingMessage.textContent = "Good Afternoon";
    } else {
      greetingMessage.textContent = "Good Evening";
    }
  }
  
  // Display products and update the greeting when the page loads
  window.onload = function() {
    displayProducts();
    updateGreeting();
  };
  

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  featured: boolean;
  category: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "เสื้อยืดพื้นขาว Premium",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
    category: "เสื้อยืด",
    description: "เสื้อยืดคุณภาพสูง ผ้าคอตตอน 100%",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["ขาว", "ดำ", "เทา"],
  },

  {
    id: 3,
    name: "เสื้อโปโลสีน้ำเงิน",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true,
    category: "เสื้อโปโล",
    description: "เสื้อโปโลคุณภาพ เหมาะสำหรับงานและใส่เที่ยว",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["น้ำเงิน", "ขาว", "ดำ", "เทา"],
  },
  {
    id: 4,
    name: "เสื้อฮู้ดสีเทา Comfort",
    price: 599,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true,
    category: "เสื้อฮู้ด",
    description: "เสื้อฮู้ดนุ่มสบาย เหมาะสำหรับหน้าหนาว",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["เทา", "ดำ", "กรม", "น้ำตาล"],
  },
  {
    id: 5,
    name: "เสื้อยืดลายทาง",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
    category: "เสื้อยืด",
    description: "เสื้อยืดลายทางสไตล์เกาหลี",
    sizes: ["S", "M", "L", "XL"],
    colors: ["ขาว-ดำ", "ขาว-กรม", "ขาว-แดง"],
  },
  {
    id: 6,
    name: "เสื้อโปโลสีขาว",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
    category: "เสื้อโปโล",
    description: "เสื้อโปโลสีขาวสะอาด เรียบร้อย",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["ขาว", "ครีม", "เบจ"],
  },
  {
    id: 7,
    name: "เสื้อฮู้ดสีดำ Street",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
    category: "เสื้อฮู้ด",
    description: "เสื้อฮู้ดสีดำสไตล์สตรีท",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["ดำ", "เทาเข้ม", "กรม"],
  },
  {
    id: 8,
    name: "เสื้อยืดคอวี",
    price: 319,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true,
    category: "เสื้อยืด",
    description: "เสื้อยืดคอวีแฟชั่น ใส่แล้วดูดี",
    sizes: ["S", "M", "L", "XL"],
    colors: ["ขาว", "ดำ", "เทา", "กรม"],
  },
  {
    id: 9,
    name: "เสื้อยืดคอวี Test",
    price: 319,
    image: "/images/test.png",
    featured: true,
    category: "เสื้อยืด",
    description: "เสื้อยืดคอวีแฟชั่น ใส่แล้วดูดี",
    sizes: ["S", "M", "L", "XL"],
    colors: ["ขาว", "ดำ", "เทา", "กรม"],
  },
];

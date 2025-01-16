export interface ProductsType {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  subCategory?: string;
}

const products: ProductsType[] = [
  {
    id: 1,
    name: "ASUS TUF A15 FA507NU-LP081W 15.6″ FHD 144Hz IPS | Ryzen 7 7735HS | RTX 4050 6GB | 16GB DDR5 RAM | 512GB SSD | Windows 11 Home",
    brand: "ASUS",
    price: 72999,
    image:
      "/assets/images/products/Laptops/ASUS TUF A15 FA507NU-LP081W 15.6″ FHD 144Hz IPS  Ryzen 7 7735HS  RTX 4050 6GB  16GB DDR5 RAM  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 2,
    name: "MSI Thin A15 B7VE-043PH 15.6″ FHD 144Hz IPS | Ryzen 5 7535HS | RTX 4050 6GB | 8GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "MSI",
    price: 52999,
    image:
      "/assets/images/products/Laptops/MSI Thin A15 B7VE-043PH 15.6″ FHD 144Hz IPS  Ryzen 5 7535HS  RTX 4050 6GB  8GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 3,
    name: "ASUS TUF Gaming A15 FA506NF-HN005W 15.6″ FHD 144Hz IPS | Ryzen 5 7535HS | RTX 2050 4GB | 8GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "ASUS",
    price: 44999,
    image:
      "/assets/images/products/Laptops/ASUS TUF Gaming A15 FA506NF-HN005W 15.6″ FHD 144Hz IPS  Ryzen 5 7535HS  RTX 2050 4GB  8GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 4,
    name: "HP 14S-DQ3041TU Natural Silver 14″ HD | Intel N6000 | Intel UHD Graphics | 8GB DDR4 | 256GB SSD | Windows 11 Home",
    brand: "HP",
    price: 22999,
    image:
      "/assets/images/products/Laptops/HP 14S-DQ3041TU Natural Silver 14″ HD  Intel N6000  Intel UHD Graphics  8GB DDR4  256GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 5,
    name: "HP Pavilion X360 14-EK1062TU Space Blue 14″ FHD Touchscreen | i7-1355U | Intel Iris Xe | 16GB DDR4 | 512GB SSD | Windows 11 Home",
    brand: "HP",
    price: 57999,
    image:
      "/assets/images/products/Laptops/HP Pavilion X360 14-EK1062TU Space Blue 14″ FHD Touchscreen  i7-1355U  Intel Iris Xe  16GB DDR4  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 6,
    name: "ACER ANV16-41-R3RP 16″ WUXGA IPS 165Hz | Ryzen 7-8845HS | RTX 4050 6GB | 8GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "ACER",
    price: 67999,
    image:
      "/assets/images/products/Laptops/ANV16-41-R3RP 16″ WUXGA IPS 165Hz  Ryzen 7-8845HS  RTX 4050 6GB  8GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 7,
    name: "MSI A12VF-811PH 15.6″ FHD 144Hz IPS | i7-12650H | RTX 4060 8GB | 16GB (8×2) DDR5 | 512GB Gen 4 SSD | Windows 11 Home",
    brand: "MSI",
    price: 64999,
    image:
      "/assets/images/products/Laptops/MSI A12VF-811PH 15.6″ FHD 144Hz IPS  i7-12650H  RTX 4060 8GB  16GB (8×2) DDR5  512GB Gen 4 SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 8,
    name: "MSI Cyborg 15 A12UC-812PH 15.6″ FHD 144Hz IPS | i5-12450H | RTX 3050 4GB | 8GB DDR5 RAM | 512GB Gen 4 SSD | Windows 11 Home",
    brand: "MSI",
    price: 44499,
    image:
      "/assets/images/products/Laptops/MSI Cyborg 15 A12UC-812PH 15.6″ FHD 144Hz IPS  i5-12450H  RTX 3050 4GB  8GB DDR5 RAM  512GB Gen 4 SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 9,
    name: "LENOVO LOQ 83FQ000BPH 15.6″ FHD 144Hz IPS | i5-12450HX | Intel Arc A530M 4GB | 8GB DDR5 RAM | 512GB Gen 4 SSD | Windows 11 Home",
    brand: "LENOVO",
    price: 41999,
    image:
      "/assets/images/products/Laptops/Lenovo LOQ 83FQ000BPH 15.6″ FHD 144Hz IPS  i5-12450HX  Intel Arc A530M 4GB  8GB DDR5 RAM  512GB Gen 4 SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 10,
    name: "LENOVO Ideapad Slim 3 83EQ0043PH 14″ FHD IPS | i5-12450H | Intel UHD | 16GB DDR5 RAM | 512GB Gen 4 SSD | Windows 11 Home",
    brand: "LENOVO",
    price: 37999,
    image:
      "/assets/images/products/Laptops/Lenovo Ideapad Slim 3 83EQ0043PH 14″ FHD IPS  i5-12450H  Intel UHD  16GB DDR5 RAM  512GB Gen 4 SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 11,
    name: "LENOVO Ideapad Slim 3 83EM000EPH 15.6″ FHD IPS | i5-13420H | Intel UHD | 16GB DDR5 RAM | 512GB Gen 4 SSD | Windows 11 Home",
    brand: "LENOVO",
    price: 38999,
    image:
      "/assets/images/products/Laptops/Lenovo Ideapad Slim 3 83EM000EPH 15.6″ FHD IPS  i5-13420H  Intel UHD  16GB DDR5 RAM  512GB Gen 4 SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 12,
    name: "LENOVO Ideapad 3 82RK0122PH 15.6″ FHD IPS | i7-1255U | Intel Iris Xe | 16GB (8×2) DDR4 RAM | 512GB SSD | Windows 11 Home",
    brand: "LENOVO",
    price: 43999,
    image:
      "/assets/images/products/Laptops/Lenovo Ideapad 3 82RK0122PH 15.6″ FHD IPS  i7-1255U  Intel Iris Xe  16GB (8×2) DDR4 RAM  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 13,
    name: "MSI Katana 15 B13VFK-2011PH 15.6″ FHD 144Hz IPS | i7-13620H | RTX 4060 8GB | 16GB (8×2) DDR5 | 1TB SSD | Windows 11 Home",
    brand: "MSI",
    price: 71999,
    image:
      "/assets/images/products/Laptops/MSI Katana 15 B13VFK-2011PH 15.6″ FHD 144Hz IPS  i7-13620H  RTX 4060 8GB  16GB (8×2) DDR5  1TB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 14,
    name: "MSI Katana A15 AI B8VF-404PH 15.6″ FHD 144Hz IPS | Ryzen 7-8845HS | RTX 4060 8GB | 16GB (8×2) DDR5 | 512GB SSD | Windows 11 Home",
    brand: "MSI",
    price: 68999,
    image:
      "/assets/images/products/Laptops/MSI Katana A15 AI B8VF-404PH 15.6″ FHD 144Hz IPS  Ryzen 7-8845HS  RTX 4060 8GB  16GB (8×2) DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 15,
    name: "PREDATOR Helios PHN16-72-99K9 16″ WQXGA 165Hz IPS | i9-14900HX | RTX 4060 8GB | 16GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "PREDATOR",
    price: 104999,
    image:
      "/assets/images/products/Laptops/Predator Helios PHN16-72-99K9 16″ WQXGA 165Hz IPS  i9-14900HX  RTX 4060 8GB  16GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 16,
    name: "PREDATOR Helios PH16-72-96H6 Pro 16″ WQXGA IPS 240Hz | i9-14900HX | RTX 4070 8GB | 16GB DDR5 | 512GB SSD | Windows 11 Pro",
    brand: "PREDATOR",
    price: 127999,
    image:
      "/assets/images/products/Laptops/Predator Helios PH16-72-96H6 Pro 16″ WQXGA IPS 240Hz  i9-14900HX  RTX 4070 8GB  16GB DDR5  512GB SSD  Windows 11 Pro.png",
    category: "Laptop",
  },
  {
    id: 17,
    name: "PREDATOR Helios PHN16-72-52GV 16″ WUXGA 165Hz IPS | i5-14500HX | RTX 4060 8GB | 16GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "PREDATOR",
    price: 94999,
    image:
      "/assets/images/products/Laptops/Predator Helios PHN16-72-52GV 16″ WUXGA 165Hz IPS  i5-14500HX  RTX 4060 8GB  16GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 18,
    name: "PREDATOR Helios Neo 16 PHN16-72-52PC 16″ WUXGA 165Hz IPS | i5-14500HX | RTX 4050 6GB | 8GB DDR5 | 512GB SSD | Windows 11 Home",
    brand: "PREDATOR",
    price: 75999,
    image:
      "/assets/images/products/Laptops/Predator Helios Neo 16 PHN16-72-52PC 16″ WUXGA 165Hz IPS  i5-14500HX  RTX 4050 6GB  8GB DDR5  512GB SSD  Windows 11 Home.png",
    category: "Laptop",
  },
  {
    id: 19,
    name: "PREDATOR Helios PH16-72-97QM Pro 16″ WQXGA IPS 240Hz | i9-14900HX | RTX 4080 8GB | 32GB DDR5 (16GBx2) | 2TB SSD | Windows 11 Pro",
    brand: "PREDATOR",
    price: 155999,
    image:
      "/assets/images/products/Laptops/Predator Helios PH16-72-97QM Pro 16″ WQXGA IPS 240Hz  i9-14900HX  RTX 4080 8GB  32GB DDR5 (16GBx2)  2TB SSD  Windows 11 Pro.png",
    category: "Laptop",
  },
  {
    id: 20,
    name: "ACER 27 NITRO ED270 XBMIIPX Gaming Monitor",
    brand: "ACER",
    price: 10039,
    image:
      "/assets/images/products/Monitors/ACER 27 NITRO ED270 XBMIIPX Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 21,
    name: "ACER 23.8 KA242Y EBI IPS Monitor",
    brand: "ACER",
    price: 5300,
    image:
      "/assets/images/products/Monitors/ACER 23.8  KA242Y EBI IPS Monitor.png",
    category: "Monitor",
  },
  {
    id: 22,
    name: "ACER 27 Nitro VG271U M3BMIIPX IPS Monitor",
    brand: "ACER",
    price: 12319,
    image:
      "/assets/images/products/Monitors/ACER 27  Nitro VG271U M3BMIIPX IPS Monitor.png",
    category: "Monitor",
  },
  {
    id: 23,
    name: "ACER 21.5 EG220Q PBIPX Gaming Monitor",
    brand: "ACER",
    price: 5000,
    image:
      "/assets/images/products/Monitors/ACER 21.5 EG220Q PBIPX Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 24,
    name: "ACER 23.8 Nitro VG240Y M3BMIIPX Gaming Monitor",
    brand: "ACER",
    price: 7420,
    image:
      "/assets/images/products/Monitors/ACER 23.8 Nitro VG240Y M3BMIIPX Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 25,
    name: "ACER 32 Nitro ED320QR S3 Curved Gaming Monitor",
    brand: "ACER",
    price: 11150,
    image:
      "/assets/images/products/Monitors/ACER 32 Nitro ED320QR S3 Curved Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 26,
    name: "ACER 23.8 NITRO VG240Y SBMIIPX Gaming Monitor",
    brand: "ACER",
    price: 7650,
    image:
      "/assets/images/products/Monitors/ACER 23.8 NITRO VG240Y SBMIIPX Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 27,
    name: "AOC 27 27B1H2 100HZ Adaptive Sync Monitor (Black)",
    brand: "AOC",
    price: 6402,
    image:
      "/assets/images/products/Monitors/AOC 27 27B1H2 100HZ Adaptive Sync Monitor (Black).png",
    category: "Monitor",
  },
  {
    id: 28,
    name: "AOC 27 27G2SE 165HZ Gaming Monitor",
    brand: "AOC",
    price: 9250,
    image:
      "/assets/images/products/Monitors/AOC 27 27G2SE 165HZ Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 29,
    name: "AOC 24G2SE 23.8 Full HD 165Hz 1ms Adaptive Sync VA Gaming Monitor",
    brand: "AOC",
    price: 7129,
    image:
      "/assets/images/products/Monitors/AOC 24G2SE 23.8 Full HD 165Hz 1ms Adaptive Sync VA Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 30,
    name: "AOC 23.8 24G2SP IPS Gaming Monitor",
    brand: "AOC",
    price: 9996,
    image:
      "/assets/images/products/Monitors/AOC 23.8 24G2SP IPS Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 31,
    name: "AOC 21.5 22B3HM/71 FHD Black Monitor",
    brand: "AOC",
    price: 3950,
    image:
      "/assets/images/products/Monitors/AOC 21.5 22B3HM 71 FHD Black Monitor.png",
    category: "Monitor",
  },
  {
    id: 32,
    name: "AOC 27 27G2SP Adaptive Sync 165HZ Gaming Monitor",
    brand: "AOC",
    price: 12125,
    image:
      "/assets/images/products/Monitors/AOC 27 27G2SP Adaptive Sync 165HZ Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 33,
    name: "AOC M2470SWH 23.6 LED Monitor (Black)",
    brand: "AOC",
    price: 4200,
    image:
      "/assets/images/products/Monitors/AOC M2470SWH 23.6 LED Monitor (Black).png",
    category: "Monitor",
  },
  {
    id: 34,
    name: "AOC 23.8 24B1XH2/71 IPS Monitor",
    brand: "AOC",
    price: 5044,
    image:
      "/assets/images/products/Monitors/AOC 23.8 24B1XH2 71 IPS Monitor.png",
    category: "Monitor",
  },
  {
    id: 35,
    name: "AOC 22B2HM2 21.5 Full-HD 100Hz Black VA Monitor",
    brand: "AOC",
    price: 4025,
    image:
      "/assets/images/products/Monitors/AOC 22B2HM2 21.5 Full-HD 100Hz Black VA Monitor.png",
    category: "Monitor",
  },
  {
    id: 36,
    name: "ASUS TUF Gaming VG27AQ3A 27-inch 180Hz Gaming Monitor",
    brand: "ASUS",
    price: 15180,
    image:
      "/assets/images/products/Monitors/ASUS TUF Gaming VG27AQ3A 27-inch 180Hz Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 37,
    name: 'ASUS TUF Gaming VG249Q1A 23.8" Full HD 165Hz Monitor',
    brand: "ASUS",
    price: 8950,
    image:
      "/assets/images/products/Monitors/ASUS TUF Gaming VG249Q1A 23.8 Full HD 165Hz Monitor.png",
    category: "Monitor",
  },
  {
    id: 38,
    name: "ASUS 27 PA278QV ProArt Display IPS Monitor",
    brand: "ASUS",
    price: 24589,
    image:
      "/assets/images/products/Monitors/ASUS 27 PA278QV ProArt Display IPS Monitor.png",
    category: "Monitor",
  },
  {
    id: 39,
    name: "ASUS 24.1 PA248QV PROART Monitor",
    brand: "ASUS",
    price: 17557,
    image:
      "/assets/images/products/Monitors/ASUS 24.1 PA248QV PROART Monitor.png",
    category: "Monitor",
  },
  {
    id: 40,
    name: "ASUS 27 VG279Q3A IPS TUF Gaming Monitor",
    brand: "ASUS",
    price: 12658,
    image:
      "/assets/images/products/Monitors/ASUS 27 VG279Q3A IPS TUF Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 41,
    name: "ASUS ZenScreen 15.6 MB166C Portable USB Monitor",
    brand: "ASUS",
    price: 10550,
    image:
      "/assets/images/products/Monitors/ASUS ZenScreen 15.6 MB166C Portable USB Monitor.png",
    category: "Monitor",
  },
  {
    id: 42,
    name: "ASUS 23.8 VG249Q3A TUF Gaming Monitor",
    brand: "ASUS",
    price: 9506,
    image:
      "/assets/images/products/Monitors/ASUS 23.8  VG249Q3A TUF Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 43,
    name: "ASUS 27 PA279CV ProArt Display Professional Monitor",
    brand: "ASUS",
    price: 28566,
    image:
      "/assets/images/products/Monitors/ASUS 27 PA279CV ProArt Display Professional Monitor.png",
    category: "Monitor",
  },
  {
    id: 44,
    name: "ASUS TUF GAMING VG247Q1A Gaming Monitor",
    brand: "ASUS",
    price: 8950,
    image:
      "/assets/images/products/Monitors/ASUS TUF GAMING VG247Q1A Gaming Monitor.png",
    category: "Monitor",
  },
  {
    id: 45,
    name: "AMD Ryzen™ 7 5700X Desktop Processors (Up to 4.6GHz)",
    brand: "AMD",
    price: 10379.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 5700X Desktop Processors (Up to 4.6GHz).png",
    category: "Processor",
  },
  {
    id: 46,
    name: "AMD Ryzen™ 7 5700G Desktop Processors with Radeon™ Graphics (Up to 4.6GHz)",
    brand: "AMD",
    price: 10233.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 5700G Desktop Processors with Radeon™ Graphics (Up to 4.6GHz).png",
    category: "Processor",
  },
  {
    id: 47,
    name: "AMD Ryzen™ 7 5800X Desktop Processors (Up to 4.7GHz)",
    brand: "AMD",
    price: 15132.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 5800X Desktop Processors (Up to 4.7GHz).png",
    category: "Processor",
  },
  {
    id: 48,
    name: "AMD Ryzen™ 7 8700G Desktop Processor (4.2 up to 5.1GHz)",
    brand: "AMD",
    price: 20855.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 8700G Desktop Processor (4.2 up to 5.1GHz).png",
    category: "Processor",
  },
  {
    id: 49,
    name: "AMD Ryzen™ 7 7700 Desktop Processor (Up to 3.8GHz)",
    brand: "AMD",
    price: 20661.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 7700 Desktop Processor (Up to 3.8GHz).png",
    category: "Processor",
  },
  {
    id: 50,
    name: "AMD Ryzen™ 9 5900X Desktop Processor (Up to 3.7GHz)",
    brand: "AMD",
    price: 23250.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 9 5900X Desktop Processor (Up to 3.7GHz).png",
    category: "Processor",
  },
  {
    id: 51,
    name: "AMD Ryzen™ 9 7900X Desktop Processor (4.7GHz)",
    brand: "AMD",
    price: 26700.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 9 7900X Desktop Processor (4.7GHz).png",
    category: "Processor",
  },
  {
    id: 52,
    name: "AMD Ryzen™ 7 7700X Desktop Processor (4.5GHz)",
    brand: "AMD",
    price: 21437.0,
    image:
      "/assets/images/products/Processors/AMD Ryzen™ 7 7700X Desktop Processor (4.5GHz).png",
    category: "Processor",
  },
  {
    id: 53,
    name: "Intel® Core™ i7-11700 Processor (16M Cache, up to 4.90 GHz)",
    brand: "INTEL",
    price: 16500.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-11700 Processor (16M Cache, up to 4.90 GHz).png",
    category: "Processor",
  },
  {
    id: 54,
    name: "Intel® Core™ i7-12700 Processor (25M Cache, up to 4.90 GHz)",
    brand: "INTEL",
    price: 17300.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-12700 Processor (25M Cache, up to 4.90 GHz).png",
    category: "Processor",
  },
  {
    id: 55,
    name: "Intel® Core™ i7-12700K Processor (25M Cache, up to 5.00 GHz)",
    brand: "INTEL",
    price: 20350.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-12700K Processor (25M Cache, up to 5.00 GHz).png",
    category: "Processor",
  },
  {
    id: 56,
    name: "Intel® Core™ i7-13700 Processor (30M Cache, up to 5.20 GHz)",
    brand: "INTEL",
    price: 24444.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-13700 Processor (30M Cache, up to 5.20 GHz).png",
    category: "Processor",
  },
  {
    id: 57,
    name: "Intel® Core™ i7-13700K Processor (30M Cache, up to 5.40 GHz)",
    brand: "INTEL",
    price: 26600.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-13700K Processor (30M Cache, up to 5.40 GHz).png",
    category: "Processor",
  },
  {
    id: 58,
    name: "Intel® Core™ i7-14700 Processor (33M Cache, up to 5.40 GHz)",
    brand: "INTEL",
    price: 24783.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-14700 Processor 33M Cache, up to 5.40 GHz.png",
    category: "Processor",
  },
  {
    id: 59,
    name: "Intel® Core™ i7-14700K Processor (33M Cache, up to 5.60 GHz)",
    brand: "INTEL",
    price: 27050.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i7-14700K Processor (33M Cache, up to 5.60 GHz).png",
    category: "Processor",
  },
  {
    id: 60,
    name: "Intel® Core™ i9-12900K Processor (2.4GHZ UP TO 5.2GHZ)",
    brand: "INTEL",
    price: 29950.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i9-12900K Processor (2.4GHZ UP TO 5.2GHZ).png",
    category: "Processor",
  },
  {
    id: 61,
    name: "Intel® Core™ i9-14900K Processor (36M Cache, up to 6.00 GHz)",
    brand: "INTEL",
    price: 37200.0,
    image:
      "/assets/images/products/Processors/Intel® Core™ i9-14900K Processor (36M Cache, up to 6.00 GHz).png",
    category: "Processor",
  },
  {
    id: 62,
    name: "PRO H410M-B Motherboard",
    brand: "MSI",
    price: 3750,
    image: "/assets/images/products/Motherboards/PRO H410M-B Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 63,
    name: "PRO H510M-B mATX Motherboard",
    brand: "MSI",
    price: 4250,
    image:
      "/assets/images/products/Motherboards/PRO H510M-B mATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 64,
    name: "PRO H610M-E DDR4 Micro-ATX Motherboard",
    brand: "MSI",
    price: 4500,
    image:
      "/assets/images/products/Motherboards/PRO H610M-E DDR4 Micro-ATX Motheboard.png",
    category: "Motherboard",
  },
  {
    id: 65,
    name: "PRO Z790-P WIFI ATX Motherboard",
    brand: "MSI",
    price: 15250,
    image:
      "/assets/images/products/Motherboards/PRO Z790-P WIFI ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 66,
    name: "PRO X670-P WIFI ATX Motherboard",
    brand: "MSI",
    price: 19800,
    image:
      "/assets/images/products/Motherboards/PRO X670-P WIFI ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 67,
    name: "TUF GAMING B650M-PLUS WIFI mATX Motherboard",
    brand: "ASUS",
    price: 13850,
    image:
      "/assets/images/products/Motherboards/TUF GAMING B650M-PLUS WIFI mATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 68,
    name: "TUF Z690-PLUS GAMING WI-FI D4 ATX Motherboard",
    brand: "ASUS",
    price: 14150,
    image:
      "/assets/images/products/Motherboards/TUF Z690-PLUS GAMING WI-FI D4 ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 69,
    name: "TUF Z790-PLUS WIFI D4 ATX Motherboard",
    brand: "ASUS",
    price: 16900,
    image:
      "/assets/images/products/Motherboards/TUF Z790-PLUS WIFI D4 ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 70,
    name: "TUF GAMING X670E-PLUS WIFI ATX Motherboard",
    brand: "ASUS",
    price: 20661,
    image:
      "/assets/images/products/Motherboards/TUF GAMING X670E-PLUS WIFI ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 71,
    name: "TUF GAMING B660M-PLUS WIFI D4 Motherboard",
    brand: "ASUS",
    price: 9700,
    image:
      "/assets/images/products/Motherboards/TUF GAMING B660M-PLUS WIFI D4 Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 72,
    name: "B450M-K AM4 MATX Motherboard",
    brand: "GIGABYTE",
    price: 3100,
    image:
      "/assets/images/products/Motherboards/B450M-K AM4 MATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 73,
    name: "B450M DS3H V2 Motherboard",
    brand: "GIGABYTE",
    price: 3850,
    image: "/assets/images/products/Motherboards/B450M DS3H V2 Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 74,
    name: "B550M DS3H-AC AM4 MATX Motherboard",
    brand: "GIGABYTE",
    price: 6300,
    image:
      "/assets/images/products/Motherboards/B550M DS3H-AC AM4 MATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 75,
    name: "B560M-DS3H-AC Micro-ATX Motherboard",
    brand: "GIGABYTE",
    price: 6000,
    image:
      "/assets/images/products/Motherboards/B560M-DS3H-AC Micro-ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 76,
    name: "B660M GAMING AC DDR4 Motherboard",
    brand: "GIGABYTE",
    price: 6500,
    image:
      "/assets/images/products/Motherboards/B660M GAMING AC DDR4 Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 77,
    name: "B660M-DS3H-AX DDR4 Motherboard",
    brand: "GIGABYTE",
    price: 6950,
    image:
      "/assets/images/products/Motherboards/B660M-DS3H-AX DDR4 Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 78,
    name: "B650M GAMING X AX Motherboard",
    brand: "GIGABYTE",
    price: 11850,
    image:
      "/assets/images/products/Motherboards/B650M GAMING X AX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 79,
    name: "B760M-DS3H DDR4 Micro ATX Motherboard",
    brand: "GIGABYTE",
    price: 6700,
    image:
      "/assets/images/products/Motherboards/B760M-DS3H DDR4 Micro ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 80,
    name: "B760M-DS3H-AX DDR4 Micro ATX Motherboard",
    brand: "GIGABYTE",
    price: 7750,
    image:
      "/assets/images/products/Motherboards/B760M-DS3H-AX DDR4 Micro ATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 81,
    name: "H510M-H MATX Motherboard",
    brand: "GIGABYTE",
    price: 3650,
    image: "/assets/images/products/Motherboards/H510M-H MATX Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 82,
    name: "H610M-H DDR4 Motherboard",
    brand: "GIGABYTE",
    price: 4637,
    image: "/assets/images/products/Motherboards/H610M-H DDR4 Motherboard.png",
    category: "Motherboard",
  },
  {
    id: 83,
    name: "RAZER COBRA (RZ01-04650100-R3M1) Wired Gaming Mouse",
    brand: "RAZER",
    price: 2250,
    image:
      "/assets/images/products/Mouse/RAZER COBRA (RZ01-04650100-R3M1) Wired Gaming Mouse.png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 87,
    name: "ASUS TUF GAMING M3 GEN II (P309) RGB USB Wired Gaming Mouse",
    brand: "ASUS",
    price: 900,
    image:
      "/assets/images/products/Mouse/ASUS TUF GAMING M3 GEN II (P309) RGB USB Wired Gaming Mouse.png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 88,
    name: "ASUS ROG Keris Wireless AimPoint Gaming Mouse (White)",
    brand: "ASUS",
    price: 4200,
    image:
      "/assets/images/products/Mouse/ASUS ROG Keris Wireless AimPoint Gaming Mouse (White).png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 89,
    name: "ASUS ROG Keris Wireless AimPoint Gaming Mouse (Black)",
    brand: "ASUS",
    price: 4200,
    image:
      "/assets/images/products/Mouse/ASUS ROG Keris Wireless AimPoint Gaming Mouse (Black).png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 90,
    name: "ASUS TUF Gaming M4 Wireless Mouse",
    brand: "ASUS",
    price: 2232,
    image:
      "/assets/images/products/Mouse/ASUS TUF Gaming M4 Wireless Mouse.png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 91,
    name: "ASUS TUF Gaming M4 Air Mouse",
    brand: "ASUS",
    price: 1932,
    image: "/assets/images/products/Mouse/ASUS TUF Gaming M4 Air Mouse.png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 92,
    name: "ASUS ROG STRIX IMPACT III RGB Mouse (Black)",
    brand: "ASUS",
    price: 2400,
    image:
      "/assets/images/products/Mouse/ASUS ROG STRIX IMPACT III RGB Mouse (Black).png",
    category: "Peripherals",
    subCategory: "Mouse",
  },
  {
    id: 93,
    name: "ASUS ROG STRIX SCOPE MX Mechanical RGB Gaming Keyboard (Red)",
    brand: "ASUS",
    price: 2400,
    image:
      "/assets/images/products/Keyboards/ASUS ROG STRIX SCOPE MX Mechanical RGB Gaming Keyboard (Red).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 94,
    name: "ASUS ROG STRIX SCOPE TKL Deluxe MX/NX RGB Wired Mechanical Keyboard (Red)",
    brand: "ASUS",
    price: 5950,
    image:
      "/assets/images/products/Keyboards/ASUS ROG STRIX SCOPE TKL Deluxe MX NX RGB Wired Mechanical Keyboard (Red).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 95,
    name: "ASUS ROG STRIX SCOPE RX Tenkeyless Wireless Deluxe Switch Mechanical Keyboard (Red)",
    brand: "ASUS",
    price: 7150,
    image:
      "/assets/images/products/Keyboards/ASUS ROG STRIX SCOPE RX Tenkeyless Wireless Deluxe Switch Mechanical Keyboard (Red).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 96,
    name: "ASUS TUF Gaming K1 RGB Gaming Keyboard",
    brand: "ASUS",
    price: 1835,
    image:
      "/assets/images/products/Keyboards/ASUS TUF Gaming K1 RGB Gaming Keyboard.png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 97,
    name: "ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard (Black)",
    brand: "ASUS",
    price: 7207,
    image:
      "/assets/images/products/Keyboards/ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard (Black).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 98,
    name: "ASUS ROG Azoth Gaming Custom Hotswappable Mechanical Keyboard NX Storm",
    brand: "ASUS",
    price: 13450,
    image:
      "/assets/images/products/Keyboards/ASUS ROG Azoth Gaming Custom Hotswappable Mechanical Keyboard NX Storm.png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 99,
    name: "ASUS ROG AZOTH NX Mechanical Wireless Gaming Keyboard (Red)",
    brand: "ASUS",
    price: 12508,
    image:
      "/assets/images/products/Keyboards/ASUS ROG AZOTH NX Mechanical Wireless Gaming Keyboard (Red).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 100,
    name: "ASUS TUF Gaming K3 (Blue Switch) RGB Mechanical Gaming Keyboard (Gun Metal)",
    brand: "ASUS",
    price: 3348,
    image:
      "/assets/images/products/Keyboards/ASUS TUF Gaming K3 (Blue Switch) RGB Mechanical Gaming Keyboard (Gun Metal).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 101,
    name: "ASUS TUF Gaming K3 (Red Switch) RGB Mechanical Gaming Keyboard (Gun Metal)",
    brand: "ASUS",
    price: 3348,
    image:
      "/assets/images/products/Keyboards/ASUS TUF Gaming K3 (Red Switch) RGB Mechanical Gaming Keyboard (Gun Metal).png",
    category: "Peripherals",
    subCategory: "Keyboard",
  },
  {
    id: 107,
    name: "AXGON AXGH1V1 RGB (Virtual 7.1/3.5MM Jack/Microphone) Gaming Headset (Black)",
    brand: "AXGON",
    price: 1564,
    image:
      "/assets/images/products/Headset/AXGON AXGH1V1 RGB (Virtual 7.1 3.5MM Jack Microphone) Gaming Headset (Black).png",
    category: "Peripherals",
    subCategory: "Headset",
  },
  {
    id: 108,
    name: "JBL Quantum 300 Gaming Headset (Black)",
    brand: "JBL",
    price: 2700,
    image:
      "/assets/images/products/Headset/JBL Quantum 300 Gaming Headset (Black).png",
    category: "Peripherals",
    subCategory: "Headset",
  },
];

export default products;

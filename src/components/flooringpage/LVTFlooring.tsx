import { useEffect, useState, useRef } from "react";
import { Modal, Carousel, Spin } from "antd";
import Image from "next/image";
import {
  LeftOutlined,
  RightOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  description: string;
  imageurl: string;
  category: string;
  subcategory: string;
}

const companyDetails = {
  name: "Fixit Design",
  phone: "+971555243724",
  whatsapp: "+971555243724",
  address: "333 bin Thani plaza Naif Deira Dubai",
};

export const LVTFlooring: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const carouselRef = useRef<any>(null); // Ref for Carousel

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/product?subcategory=LVT-flooring");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (carouselRef.current && isModalVisible) {
      carouselRef.current.goTo(selectedImageIndex); // Programmatically set the slide
    }
  }, [isModalVisible, selectedImageIndex]);

  const showModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="w-screen justify-center text-center items-center px-5">
        <h1 className="text-center text-3xl font-bold text-black/90 py-5 underline">
          LVT Flooring
        </h1>

        <p className="text-justify font-normal text-sm text-black/90">
          Luxury Vinyl Tile (LVT) flooring is a modern and functional solution
          that combines the best aspects of vinyl with the aesthetic appeal of
          natural materials. LVT is designed to mimic the look of real wood or
          stone, providing a high-end appearance at a more affordable price
        </p>

        <ul className="text-justify text-sm font-normal text-black/90 list-disc list-inside mt-4">
          <li>
            <span className="text-sm font-bold">High-Definition Visuals:</span>
            LVT flooring uses advanced printing technology to replicate the
            appearance of natural materials with remarkable accuracy, offering
            an elegant look without the associated maintenance.
          </li>
          <li>
            <span className="text-sm font-bold">
              Durability and Resilience:
            </span>
            LVT is highly resistant to wear and tear, scratches, and dents. It’s
            perfect for high-traffic areas and environments where durability is
            key.
          </li>
          <li>
            <span className="text-sm font-bold"> Comfort and Insulation: </span>
            LVT provides a comfortable underfoot experience and has excellent
            insulation properties, which can help maintain a stable indoor
            temperature.
          </li>
          <li>
            <span className="text-sm font-bold">Simple Maintenance: </span>
            Easy to clean and maintain, LVT requires minimal effort to keep it
            looking its best. Regular sweeping and occasional mopping are
            usually sufficient
          </li>
        </ul>

        <p className="text-justify text-sm font-normal text-black/90 mt-4">
          Our range of LVT flooring options includes various styles, from sleek
          and modern to rustic and textured, catering to diverse design
          preferences. Whether you’re revamping a contemporary office or a cozy
          home, LVT flooring offers both style and practicality.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex justify-center py-8 px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={product._id}
                className="relative group cursor-pointer bg-gray-200/20 rounded-br-md rounded-bl-md"
                onClick={() => showModal(index)}
              >
                <div className="w-full flex justify-center">
                  <Image
                    src={product.imageurl}
                    alt={product.title}
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                    style={{ width: "300px", height: "200px" }}
                  />
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md"></div>
                <div className="mt-2 text-start px-1 py-1 ">
                  <h3 className="text-lg font-bold text-black/90 truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm font-normal text-black/90 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
            centered
            width="90vw"
            closeIcon={
              <span className="text-3xl text-white bg-black/80 hover:bg-black/50 pl-3 pr-3 pb-2 rounded-full">
                ×
              </span>
            }
          >
            <div className="flex flex-col md:flex-row ">
              <div className="flex-1 relative overflow-hidden">
                <Carousel
                  ref={carouselRef}
                  dots={true}
                  arrows={true}
                  afterChange={(current) => setSelectedImageIndex(current)}
                  prevArrow={
                    <span>
                      <LeftOutlined className="absolute left-0 text-4xl top-1/2 transform -translate-y-1/2" />
                    </span>
                  }
                  nextArrow={
                    <span>
                      <RightOutlined className="absolute right-0 text-4xl top-1/2 transform -translate-y-1/2" />
                    </span>
                  }
                >
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="relative w-full h-full flex justify-center items-center"
                    >
                      <Image
                        src={product.imageurl}
                        alt={product.title}
                        width={900}
                        height={600}
                        className=" w-full h-[40vw] object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="w-full md:w-1/3 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold mb-4 text-black/90">
                    {products[selectedImageIndex]?.title}
                  </h2>
                  <h2 className="text-sm font-normal mb-4 text-black/90">
                    {products[selectedImageIndex]?.description}
                  </h2>
                  <p className="text-lg mb-2 flex items-center text-black/90 font-medium">
                    <PhoneOutlined className="mr-2" />
                    {companyDetails.phone}
                  </p>
                  <Link
                    href={`https://wa.me/${companyDetails.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg mb-2 flex items-center text-green-600 hover:text-green-800 font-medium"
                  >
                    <WhatsAppOutlined className="mr-2" />
                    {companyDetails.whatsapp}
                  </Link>
                  <p className="text-md flex items-center text-black/90 font-medium">
                    <HomeOutlined className="mr-2 text-lg" />
                    {companyDetails.address}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

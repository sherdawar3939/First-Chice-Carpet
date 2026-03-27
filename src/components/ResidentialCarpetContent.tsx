import { GiH2O } from "react-icons/gi";
import CarpetContentSection from "./carpetpage/CarpetContentSection";
import { CarpetDiscount } from "./carpetpage/CarpetDiscount";
import ResidentialCarpet from "./carpetpage/ResidentialCarpet";

const ResidentialCarpetContent = () => {
  return (
    <>
      <CarpetContentSection
        title="Residential Carpets for a Stylish Look in Dubai"
        description="At First Choice Carpet, we provide flooring solutions designed for modern residential interiors across Dubai. A well-selected carpet enhances everyday comfort while improving the visual appeal of living spaces. Our range of residential carpet in Dubai is suitable for apartments, villas, and family homes where durability and design both matter."
      />

      <ResidentialCarpet />

      <div className="w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="w-full max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Residential Carpets Dubai
          </h2>

          <p className="text-gray-700 leading-relaxed">
            As an experienced residential carpet supplier, we offer a variety of
            carpet styles, textures, and colours that match different home décor
            preferences. These carpets are chosen to handle regular household
            activity while maintaining their appearance over time.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether used in bedrooms, living areas, or private lounges, our
            flooring solutions help create a more comfortable environment.
          </p>

          <h2 className="text-2xl font-semibold">
            Residential Flooring Options for Modern Interiors
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Selecting the best residential carpet involves balancing comfort,
            maintenance, and long-term performance. Our carpets are available in
            multiple finishes and materials that work well with contemporary and
            classic home interiors in Dubai.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Homeowners also choose residential carpet tiles for spaces that
            require flexible installation and easy replacement. Carpet tiles are
            suitable for playrooms, study areas, and multi-purpose living spaces
            where practicality is important.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As a reliable residential carpet supplier, we help clients choose
            flooring that suits the layout and function of each room. Our range
            of residential carpet in Dubai allows homeowners to select flooring
            that complements their interior design while offering comfort for
            daily living.
          </p>

          <h2 className="text-2xl font-semibold">
            Key Benefits of Residential Carpets
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">
                Comfortable Home Environment
              </h3>
              <p className="text-gray-700">
                The best residential carpet provides a soft walking surface that
                makes living areas more relaxing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Flexible Flooring Installation
              </h3>
              <p className="text-gray-700">
                Residential carpet tiles allow homeowners to update sections of
                flooring without replacing the entire carpet.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Quiet Indoor Spaces</h3>
              <p className="text-gray-700">
                Carpets help reduce footstep noise and improve acoustic comfort
                inside homes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Durable Everyday Flooring
              </h3>
              <p className="text-gray-700">
                Quality materials ensure carpets remain suitable for active
                households and regular use.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold">
            Explore Residential Carpet Options
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Discover flooring solutions designed for modern homes with First
            Choice Carpet. Contact our team today to explore residential carpet
            styles and installation options available across Dubai.
          </p>
        </div>
      </div>

      <CarpetDiscount />
    </>
  );
};

export default ResidentialCarpetContent;
